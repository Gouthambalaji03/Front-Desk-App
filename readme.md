# Front Desk App

A backend API for managing front desk operations including user authentication, service management, and booking appointments.

## Features

- User authentication (signup/login)
- Service management
- Booking appointments
- Email notifications

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT authentication
- Nodemailer

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## Usage

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `/api/auth` - Authentication routes
- `/api/service` - Service management routes
- `/api/booking` - Booking management routes

## License

ISC
