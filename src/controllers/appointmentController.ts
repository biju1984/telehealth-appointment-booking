import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";
import { v4 as uuidv4 } from "uuid";

// In-memory database for demonstration
const appointments: Appointment[] = [];

export const bookAppointment = (req: Request, res: Response) => {
  const {
    patientId,
    providerId,
    date,
    time,
    status,
    consultationNotes,
    duration,
  } = req.body;
  const newAppointment = new Appointment(
    uuidv4(),
    patientId,
    providerId,
    new Date(date),
    time,
    status,
    consultationNotes,
    duration
  );
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
};

export const getAppointmentById = (req: Request, res: Response) => {
  const { id } = req.params;
  const appointment = appointments.find((a) => a.id === id);
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};

export const updateAppointment = (req: Request, res: Response) => {
  const { id } = req.params;
  const { patientId, providerId, date, time, status, consultationNotes } =
    req.body;
  const appointment = appointments.find((a) => a.id === id);
  if (appointment) {
    appointment.patientId = patientId;
    appointment.providerId = providerId;
    appointment.date = new Date(date);
    appointment.time = time;
    appointment.status = status;
    appointment.consultationNotes = consultationNotes;
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};

export const cancelAppointment = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = appointments.findIndex((a) => a.id === id);
  if (index !== -1) {
    appointments.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Appointment not found" });
  }
};
