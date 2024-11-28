# Domain Lookup Application

This is a full-stack web application for looking up domain information using the [Whois API](https://whoisxmlapi.com/). The project includes both backend and frontend components, allowing users to input a domain name and fetch details such as registration and expiration dates, hostnames, and contact information.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
---

## Features

- Input a domain name to look up.
- Select data type: **Domain Information** or **Contact Information**.
- View results in a table format.
- Responsive UI styled with **Tailwind CSS**.
- Error handling for invalid domain names or API failures.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- Axios

---

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- NPM or Yarn

### Steps
1. Clone the repository:
   
bash
   git clone https://github.com/ivanjohn1209/fullstack-dev-assignment.git
   cd fullstack-dev-assignment

2. Set up the backend:

bash
    cd backend
    npm install

3. Set up the frontend:

bash
    cd ../frontend
    npm install

## Environment Variables
Create a .env file in the backend directory and add the following variables:

env
    PORT=5000
    WHOIS_API_KEY=your_api_key_here

## Run Backend

1. Navigate to the backend folder:

bash
    cd backend

2. Start the server:

bash
    npm start

The backend server will run at http://localhost:5000.


## Run Frontend

1. Navigate to the frontend folder:

bash
    cd frontend

2. Start the server:

bash
    npm start

The frontend server will run at http://localhost:3000.



