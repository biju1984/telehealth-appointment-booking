import { Appointment } from "../models/Appointment";

type WorkingHours = { start: string; end: string };

export const calculateFreeSlots = (
  workingHours: WorkingHours,
  existingAppointments: Appointment[],
  consultationDuration: number,
  selectedDate: string
) => {
  let freeSlots: string[] = [];
  
  // Convert working hours to minutes
  const [startHour, startMinute] = workingHours.start.split(":").map(Number);
  const [endHour, endMinute] = workingHours.end.split(":").map(Number);
  let freeSlotStartTime = startHour * 60 + startMinute;
  const providerEndTime = endHour * 60 + endMinute;

  while (freeSlotStartTime + consultationDuration <= providerEndTime) {
    // Check if there's an existing appointment during this slot
    const isSlotOccupied = existingAppointments.some((appointment) => {
      const [appointmentHour, appointmentMinute] = appointment.time.split(":").map(Number);
      const appointmentStartTime = appointmentHour * 60 + appointmentMinute;
      const appointmentEndTime = appointmentStartTime + appointment.duration;

      return (
        appointment.date.getTime() === new Date(selectedDate).getTime()  &&
        ((freeSlotStartTime >= appointmentStartTime && freeSlotStartTime < appointmentEndTime) ||
         (freeSlotStartTime + consultationDuration > appointmentStartTime && freeSlotStartTime + consultationDuration <= appointmentEndTime))
      );
    });

    if (!isSlotOccupied) {
      const slotHour = Math.floor(freeSlotStartTime / 60);
      const slotMinute = freeSlotStartTime % 60;
      freeSlots.push(`${String(slotHour).padStart(2, "0")}:${String(slotMinute).padStart(2, "0")}`);
    }

    freeSlotStartTime += consultationDuration;
  }

  return freeSlots;
};