import express from 'express';
import * as patientController from './controllers/patientController';
import * as providerController from './controllers/providerController';
import * as appointmentController from './controllers/appointmentController';
import * as consultationController from './controllers/consultationController';

const app = express();
app.use(express.json());

// Patient routes
app.post('/patients', patientController.registerPatient);
app.get('/patients/:id', patientController.getPatientById);
app.put('/patients/:id', patientController.updatePatient);
app.delete('/patients/:id', patientController.deletePatient);

// Provider routes
app.post('/providers', providerController.addProvider);
app.get('/providers/:id', providerController.getProviderById);
app.put('/providers/:id', providerController.updateProvider);
app.delete('/providers/:id', providerController.deleteProvider);

// Appointment routes
app.post('/appointments', appointmentController.bookAppointment);
app.get('/appointments/:id', appointmentController.getAppointmentById);
app.put('/appointments/:id', appointmentController.updateAppointment);
app.delete('/appointments/:id', appointmentController.cancelAppointment);

// Consultation routes
app.post('/consultations', consultationController.createConsultation);
app.get('/consultations/:id', consultationController.getConsultationById);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
