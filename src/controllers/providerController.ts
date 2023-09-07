import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Provider } from '../models/Provider';
import { Appointment } from '../models/Appointment';
import { calculateFreeSlots } from '../utils/availabilityChecker';

// In-memory database for demonstration
const providers: Provider[] = [];
const appointments: Appointment[] = [];

export const addProvider = (req: Request, res: Response) => {
  const { name, specialization, email, phone, workingHours, consultationDuration } = req.body;
  const newProvider = new Provider(uuidv4(), name, specialization, email, phone, workingHours, consultationDuration);
  providers.push(newProvider);
  console.log(newProvider);
  console.log(providers);
  console.log("req.body: ", req.body);
  res.status(201).json(newProvider);
};

export const getProviderById = (req: Request, res: Response) => {
  const { id } = req.params;
  const provider = providers.find(p => p.id === id);
  if (provider) {
    res.status(200).json(provider);
  } else {
    res.status(404).json({ message: 'Provider not found' });
  }
};

export const updateProvider = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, specialization, email, phone, workingHours, consultationDuration } = req.body;
  const provider = providers.find(p => p.id === id);
  if (provider) {
    provider.name = name;
    provider.specialization = specialization;
    provider.email = email;
    provider.phone = phone;
    provider.workingHours = workingHours;
    provider.consultationDuration = consultationDuration;
    res.status(200).json(provider);
  } else {
    res.status(404).json({ message: 'Provider not found' });
  }
};

export const deleteProvider = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = providers.findIndex(p => p.id === id);
  if (index !== -1) {
    providers.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Provider not found' });
  }
};




export const checkAvailability = async (req: Request, res: Response) => {
  const { providerId, date } = req.params;
  
  // Fetch the provider's working hours and consultation duration from your database
  const workingHours = { start: "09:00", end: "17:00" };
  const consultationDuration = 30;

  // Fetch existing appointments for this provider and date from your in-memory database
  const existingAppointments = appointments.filter(appointment => 
    appointment.providerId === providerId && appointment.date.getTime() === new Date(date).getTime()
  );
  

  const freeSlots = calculateFreeSlots(workingHours, existingAppointments, consultationDuration, date);
  
  res.json({ freeSlots });
};
