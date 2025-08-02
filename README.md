# HealthCare+ - Online Appointment Booking App

HealthCare+ is a full-stack web application designed to make it easier for patients to book appointments with doctors online. The app allows users to browse doctors, view profiles, and book appointments seamlessly from the comfort of their homes.

## 🩺 Features

- ✅ Doctor listing with specialization and profile images
- ✅ Individual doctor profile view
- ✅ Book appointments online
- ✅ Responsive design for mobile & desktop
- ✅ Social media footer with icons
- ✅ Protected routes (React Router)
- ✅ Backend API for appointments (Node.js/Express)

---

# 🏥 HealthCare+ - Online Doctor Appointment Booking App

**HealthCare+** is a full-stack appointment booking platform that allows users to explore doctor profiles and schedule appointments online. Designed with a modern UI and seamless experience, it provides healthcare services at your fingertips.

---

## 🔗 Live Preview

> 🌐 Local: [http://localhost:3000](http://localhost:3000)  

---

## 📁 Project Structure

Health-appointment-app/
├── frontend/              # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/               # Node.js + Express API
│   ├── routes/            # API route definitions
│   ├── data/              # Static data or mock database
│   ├── server.js          # Express app entry point
│   └── package.json
├── README.md
└── .gitignore


---

## 🚀 Features

- 🧑‍⚕️ View all doctors with profile images & specializations
- 🗂 Filter doctors by department
- 📄 View detailed doctor profile
- 📅 Book online appointments
- 📱 Responsive layout for mobile & desktop
- ⚙️ Separate frontend and backend setup
- 🔐 Route navigation using React Router
- 🌐 Footer with Instagram, Facebook, Twitter icons

---

## 🛠️ Tech Stack

| Frontend       | Backend       | Styling         | Icons & Libraries     |
|----------------|----------------|------------------|------------------------|
| React          | Node.js        | styled-components| react-icons           |
| React Router   | Express        | CSS Modules      | react-slick carousel  |
| Axios          | CORS           |                  |                        |

---

## 📸 Screenshots

> Add your screenshots in a `screenshots/` folder

| Homepage               | Doctor Profile            | Appointment Form        |
|------------------------|---------------------------|--------------------------|
| ![](screenshots/home.png) | ![](screenshots/profile.png) | ![](screenshots/appointment.png) |

---

## ⚙️ Getting Started

### 📥 Clone the Repository

```bash
git clone https://github.com/EAGALA-Z/healthcare-app.git
cd healthcare-app

project: Health-appointment-app

frontend:
  setup:
    steps:
      - cd frontend
      - npm install
      - npm start
    runs_on: http://localhost:3000
  dependencies:
    - react
    - react-router-dom
    - react-slick
    - slick-carousel
    - styled-components
    - react-icons

backend:
  setup:
    steps:
      - cd backend
      - npm install
      - npm run dev
    runs_on: http://localhost:5000
  dependencies:
    - express
    - cors
  environment:
    .env:
      PORT: 5000
      MONGODB_URI: your_mongo_connection_string

