export class Patient {
    id: string;
    name: string;
    email: string;
    phone: string;
    DOB: Date;
    gender: 'Male' | 'Female' | 'Other';
    medicalHistory: string;
  
    constructor(id: string, name: string, email: string, phone: string, DOB: Date, gender: 'Male' | 'Female' | 'Other', medicalHistory: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.DOB = DOB;
      this.gender = gender;
      this.medicalHistory = medicalHistory;
    }
  }
  