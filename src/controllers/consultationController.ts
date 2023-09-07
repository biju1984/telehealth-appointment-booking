import { Request, Response } from 'express';
import { Consultation } from '../models/Consultation';
import { v4 as uuidv4 } from 'uuid';

// In-memory database for demonstration
const consultations: Consultation[] = [];

export const createConsultation = (req: Request, res: Response) => {
  const { appointmentId, notes } = req.body;
  const newConsultation = new Consultation(uuidv4(), appointmentId, notes);
  consultations.push(newConsultation);
  res.status(201).json(newConsultation);
};

export const getConsultationById = (req: Request, res: Response) => {
  const { id } = req.params;
  const consultation = consultations.find(c => c.id === id);
  if (consultation) {
    res.status(200).json(consultation);
  } else {
    res.status(404).json({ message: 'Consultation not found' });
  }
};
