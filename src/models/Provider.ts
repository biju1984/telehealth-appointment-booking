export class Provider {
    id: string;
    name: string;
    specialization: string;
    email: string;
    phone: string;
    workingHours: string[];
    consultationDuration: number;
  
    constructor(id: string, name: string, specialization: string, email: string, phone: string, workingHours: string[], consultationDuration: number) {
      this.id = id;
      this.name = name;
      this.specialization = specialization;
      this.email = email;
      this.phone = phone;
      this.workingHours = workingHours;
      this.consultationDuration = consultationDuration;
    }
  }
  