import { Request, Response } from 'express';
import { Patient } from '../models/Patient';
import { v4 as uuidv4 } from 'uuid';

// In-memory database for demonstration
const patients: Patient[] = [];

export const registerPatient = (req: Request, res: Response) => {
    const { name, email, phone, DOB, gender, medicalHistory } = req.body;

    const newPatient = new Patient(uuidv4(), name, email, phone, new Date(DOB), gender, medicalHistory);
    
    patients.push(newPatient);
    res.status(201).json(newPatient);
  };

export const getPatientById = (req: Request, res: Response) => {
    const { id } = req.params;
    const patient = patients.find(p => p.id === id);
    if (patient) {
        console.log(patient);
      res.status(200).json(patient);  // This should return all details of the patient
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  };
  

export const updatePatient = (req: Request, res: Response)  => {
  const { id } = req.params;
  const { name, email, phone, DOB, gender, medicalHistory } = req.body;
  const patient = patients.find(p => p.id === id);
  if (patient) {
    patient.name = name;
    patient.email = email;
    patient.phone = phone;
    patient.DOB = new Date(DOB);
    patient.gender = gender;
    patient.medicalHistory = medicalHistory;
    res.status(200).json(patient);
  } else {
    res.status(404).json({ message: 'Patient not found' });
  }
};

export const deletePatient = (req: Request, res: Response)  => {
  const { id } = req.params;
  const index = patients.findIndex(p => p.id === id);
  if (index !== -1) {
    patients.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Patient not found' });
  }
};
