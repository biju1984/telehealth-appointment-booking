export class Consultation {
    id: string;
    appointmentId: string;
    notes: string;
  
    constructor(id: string, appointmentId: string, notes: string) {
      this.id = id;
      this.appointmentId = appointmentId;
      this.notes = notes;
    }
  }
  