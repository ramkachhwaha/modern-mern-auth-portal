# Modern MERN Auth Portal 🦋

> A production-ready full-stack authentication system featuring a cinematic butterfly splash screen, robust JWT security, and a structured Monorepo architecture.

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-white?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)

---

## 🌟 Project Overview

This repository uses a **Monorepo** structure, housing both the Client (Frontend) and Server (Backend) in a single workflow. It implements the **MVC (Model-View-Controller)** pattern on the backend and a modular architecture on the frontend.

### ✨ Key Features

- **🎬 Cinematic Entry:** Custom "Butterfly" animated splash screen sequence.
- **🔐 Secure Authentication:**
  - JWT-based session management.
  - Custom Middleware for route protection.
  - Strong Input Validation using `express-validator`.
- **🖼️ Interactive UI:** Expanding Panels Dashboard with smooth Tailwind CSS animations.
- **⚡ Organized Codebase:**
  - **Frontend:** Centralized API handling (`webservices`), Redux for state, and Protected Routes.
  - **Backend:** Separated Configs, Controllers, Routes, and Response Patterns.

---

## 📂 Project Structure

Here is the detailed architecture of the application based on the codebase:

```bash
modern-mern-auth-portal/
├── client/                      # React Frontend (Vite)
│   ├── src/
│   │   ├── components/          # Reusable UI (AuthForms, Loaders)
│   │   ├── pages/               # Main Views (Auth.jsx, Home.jsx)
│   │   ├── redux/               # Global State (Store & Reducers)
│   │   ├── routes/              # Protected Route Wrappers
│   │   ├── webservices/         # API Gateway & Endpoint Constants
│   │   ├── App.jsx              # Main Component
│   │   └── main.jsx             # Entry Point
│   ├── .env                     # Frontend Env Variables
│   └── vite.config.js           # Vite Configuration
│
├── server/                      # Node.js Backend (Express)
│   ├── bin/                     # Server Entry Point (www)
│   ├── config/                  # Configuration (DB, CORS, JWT)
│   ├── controllers/             # Business Logic & Request Handling
│   ├── middleware/              # Auth Checks & Error Handling
│   ├── models/                  # Mongoose Database Schemas
│   ├── response/                # Standardized API Response Patterns
│   ├── routes/                  # API Endpoints Definition
│   ├── validations/             # Input Validation Logic
│   ├── app.js                   # Express App Setup
│   └── .env                     # Backend Env Variables
│
├── package.json                 # Root Config (Runs Client & Server together)
└── README.md                    # Documentation

`````
-----





---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Redux Toolkit, Tailwind CSS v4, Axios, React Hook Form |
| **Backend** | Node.js, Express.js, MongoDB (Mongoose), Express Validator |
| **Security** | BCryptJS (Hashing), JSON Web Token (JWT), CORS |
| **Architecture** | MVC Pattern (Backend), Monorepo (Root) |

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/ramkachhwaha/modern-mern-auth-portal.git
cd modern-mern-auth-portal
```

### 2. Install Dependencies
Run this in the **root folder**. It automates installation for both Client and Server.
```bash
npm install
```

### 3. Environment Setup 🔐
You will find `.env.simple` files in both folders. Create actual `.env` files based on them.

**Inside `server/.env`:**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRY=1d
```

**Inside `client/.env`:**
```env
VITE_API_BASE_URL=http://localhost:5000
```

### 4. Run the Project
Run the full stack application with a single command:
```bash
npm run dev
```
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:5000](http://localhost:5000)

---

## 📄 License

This project is licensed under the **MIT License**.  
Copyright © 2026 **ramkachhwaha**.

---

*Note: This project is created strictly for educational and portfolio purposes.*

---

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/NewFeature`).
3. Commit changes.
4. Push to the branch.
5. Open a Pull Request.

---

## 👤 Author

**Ram Kachhwaha**
- GitHub: [https://github.com/ramkachhwaha](https://github.com/ramkachhwaha)
- Linkedin: [https://www.linkedin.com/in/ram-kachhwaha-mac155/](https://www.linkedin.com/in/ram-kachhwaha-mac155/)
- Gmail: [ramkachhwaha062@gmail.com](mailto:ramkachhwaha062@gmail.com)

---

*Made with ❤️ using the MERN Stack*


