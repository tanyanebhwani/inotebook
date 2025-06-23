# 📝 iNotebook – Cloud-Based Note Management App

**iNotebook** is a full-stack, responsive web application that allows users to **securely create, read, update, and delete (CRUD)** personal notes from anywhere. It uses **token-based authentication** and stores notes on a **MongoDB cloud cluster**.

---

## 🌐 Live Demo (Optional)
*(Add link here if hosted)*

---

## 🚀 Features

- ✍️ Create, update, and delete your personal notes
- 🔒 Secure login and signup with JWT authentication
- 📁 Cloud storage of notes using MongoDB
- 🧠 Fully functional **Context API** for state management
- ✅ Authentication middleware to protect private routes
- 🔐 Passwords securely stored using **salting and hashing (BcryptJS)**
- 📱 Mobile-responsive UI built with clean HTML, CSS, and React

---

## ⚙️ Tech Stack

### 🔹 Frontend:
- HTML
- CSS
- JavaScript
- React JS
- Context API

### 🔹 Backend:
- Node.js
- Express.js
- MongoDB (Cloud Cluster)
- Mongoose
- JSON Web Token (JWT)
- BcryptJS

---

## 🧰 Functionality Overview

- 📌 **Authentication:**
  - Signup/Login with email & password
  - JWT token generated and stored in localStorage
  - Protected routes using middleware
  - Passwords hashed and salted with **bcryptjs**

- 🧾 **Notes Management:**
  - Add, edit, delete, and view your notes
  - Notes are private to each user
  - Notes are saved in a MongoDB Atlas cloud database

- 🖥️ **Architecture:**
  - MVC (Model-View-Controller) framework
  - RESTful APIs for CRUD operations
  - Context API used for state and global alerts

---

## 📦 Installation Instructions

### 🔧 Prerequisites
- Node.js and npm installed
- MongoDB Atlas connection string
- React (comes with Create React App)
- 

### 📁 Clone the Repository
```bash
git clone https://github.com/yourusername/inotebook.git
cd inotebook```
🔄 Backend Setup
```bash
cd backend
npm install```
# Add your MongoDB URI and JWT_SECRET in .env
```bash
npm run dev```
💻 Frontend Setup
```bash
cd frontend
npm install
npm start```

Frontend runs on http://localhost:3000
Backend runs on http://localhost:5000

🔐 API & Authentication Flow
Login / Signup:

POST /api/auth/login
POST /api/auth/createuser
POST /api/contact
POST /api/faq

Protected Routes (Token Required):

GET /api/auth/getUser
GET/POST/PUT/DELETE /api/notes

Token Format: Bearer token in request headers

🛣️ Future Enhancements
🗂️ Add categories/labels to notes

📌 Pinning/starred notes

🔍 Full-text search across notes

☁️ Optional file attachments

📄 License
MIT License (or your preferred license)

👩‍💻 Author
Tanya Nebhwani
GitHub

Would you like:
- A badge section (e.g. "Made with React", "MongoDB Atlas", etc.)?
- Screenshots section added?
- Deployment setup instructions (if you plan to host on Render, Vercel, Netlify, etc.)?

Just let me know — happy to tailor it further!








