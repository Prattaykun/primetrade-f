
# TaskFlow – Scalable Auth-Based Dashboard App

TaskFlow is a full-stack web application built as part of a Frontend Developer Intern assignment.  
It demonstrates how to design a modern, secure, and scalable dashboard system with:

- JWT-based authentication  
- Protected routes  
- User profile management  
- Task management with date & time  
- Clean, responsive UI  
- Modular frontend-backend architecture  

The frontend is built using **Next.js (TypeScript + TailwindCSS)** and the backend uses  
**Node.js + Express + MongoDB Atlas**.

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Axios
- React DatePicker

### Backend
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT Authentication
- bcrypt for password hashing

---

## 📁 Project Structure

```

taskflow/
├─ frontend/
│   ├─ src/
│   │   ├─ app/
│   │   ├─ components/
│   │   ├─ context/
│   │   ├─ lib/
│   │   └─ types.ts
│   └─ package.json
│
├─ backend/
│   ├─ src/
│   │   ├─ config/
│   │   ├─ controllers/
│   │   ├─ routes/
│   │   ├─ models/
│   │   └─ middleware/
│   ├─ server.js
│   └─ package.json
│
├─ postman/
│   └─ TaskFlow.postman_collection.json
│
└─ README.md

````

---

## 🔐 Features

- User Registration & Login (JWT-based)
- Token persistence using localStorage
- Protected Dashboard Routes
- User Profile (Create / View / Update)
- Task CRUD (Create, Read, Update, Delete)
- Task due date & time
- Search & filter UI
- Responsive dashboard layout

---

## ⚙️ Backend Setup

### 1. Navigate to backend

```bash
cd backend
npm install
````

### 2. Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

### 3. Run Backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 🌐 Frontend Setup

### 1. Navigate to frontend

```bash
cd frontend
npm install
```

### 2. Run Frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔁 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`
* `GET /api/auth/profile` (protected)
* `PUT /api/auth/profile` (protected)

### Tasks

* `POST /api/tasks` (protected)
* `GET /api/tasks` (protected)
* `PUT /api/tasks/:id` (protected)
* `DELETE /api/tasks/:id` (protected)

A full Postman collection is provided in:

```
/postman/TaskFlow.postman_collection.json
```

---

## 🧭 System Flow

```
User
  │
  ▼
Frontend (Next.js)
  │
  │  Login / Register
  ▼
Auth API (Node.js)
  │
  │  JWT Token Issued
  ▼
Browser (localStorage)
  │
  │  Token attached via Axios
  ▼
Protected Routes (Dashboard)
  │
  ├── Profile APIs ──► User Collection (MongoDB)
  │
  └── Task APIs ─────► Task Collection (MongoDB)
```

---

## 🏗 Architecture Diagram

```
┌────────────┐
│   Browser  │
│ (Next.js)  │
└─────┬──────┘
      │ Axios + JWT
      ▼
┌────────────┐
│  Express   │
│   API      │
└─────┬──────┘
      │ Mongoose
      ▼
┌────────────┐
│ MongoDB    │
│  Atlas     │
└────────────┘
```

---

## 🚀 Scaling Strategy for Production

### Frontend

* Centralized API layer (Axios instance)
* Context-based authentication
* Modular component architecture
* Easily extendable for:

  * Role-based access
  * SWR / React Query caching
  * Route middleware protection
* In production:

  * JWT can be stored in HttpOnly cookies
  * API proxied through Next.js route handlers
  * Lazy loading for performance

### Backend

* MVC structure (routes → controllers → models)
* Stateless JWT authentication for horizontal scaling
* MongoDB Atlas supports replicas & sharding
* Future enhancements:

  * Pagination for tasks
  * Rate limiting
  * Refresh tokens
  * Redis caching
  * Role-based permissions

---

## 📌 What This Project Demonstrates

* Clean UI/UX with responsive design
* Secure authentication flow
* Real frontend-backend integration
* Production-style folder structure
* Scalable architecture
* Proper documentation & testing support

This project is designed to reflect real-world engineering practices expected from a Frontend Developer Intern.
