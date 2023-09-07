export class Appointment {
  id: string;
  patientId: string;
  providerId: string;
  date: Date;
  time: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  consultationNotes: string;
  duration: number;

  constructor(
    id: string,
    patientId: string,
    providerId: string,
    date: Date,
    time: string,
    status: "Pending" | "Confirmed" | "Completed" | "Cancelled",
    consultationNotes: string,
    duration: number
  ) {
    this.id = id;
    this.patientId = patientId;
    this.providerId = providerId;
    this.date = date;
    this.time = time;
    this.status = status;
    this.consultationNotes = consultationNotes;
    this.duration = duration;
  }
}
