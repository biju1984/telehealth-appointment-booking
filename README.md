# Telehealth System API

## Overview

This project provides a RESTful API for a telehealth system that allows patients to book appointments with healthcare providers and consult them virtually.

## Features

- Patient Management
- Provider Management
- Appointment Management
- Consultation Records
- Availability Checker

## Technologies Used

- Node.js
- TypeScript
- Express
- SQLite (or any in-memory database)

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/telehealth-system-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd telehealth-system-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## API Endpoints

### Patient Management

- `POST /patients`: Register a new patient
- `GET /patients/:id`: Retrieve patient details
- `PUT /patients/:id`: Update patient details
- `DELETE /patients/:id`: Delete a patient

### Provider Management

- `POST /providers`: Add a new healthcare provider
- `GET /providers/:id`: Retrieve provider details
- `PUT /providers/:id`: Update provider details
- `DELETE /providers/:id`: Delete a provider

### Appointment Management

- `POST /appointments`: Book a new appointment
- `GET /appointments/:id`: Retrieve appointment details
- `PUT /appointments/:id`: Update appointment details
- `DELETE /appointments/:id`: Cancel an appointment

### Consultation Records

- `POST /consultations`: Create a new consultation record post-appointment
- `GET /consultations/:id`: Retrieve consultation details

### Availability Checker

- `GET /availability/:providerId/:date`: Check provider availability

## Testing

This project includes a Postman collection for testing all the available API endpoints. Import the `Telehealth-System-API.postman_collection.json` file into Postman to get started.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT
