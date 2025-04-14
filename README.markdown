# Vial Form Builder Assignment

This project is a custom-built form builder and submission system, designed as part of a take-home technical assignment for Vial. It demonstrates a modular, React-based frontend with drag-and-drop field ordering, real-time data binding using React Query, and a simple backend API—all structured as a monorepo.

## 🌟 Features

- Custom form builder with drag-and-drop field ordering
- Real-time form editing with autosave (keystrokes saved to memory)
- React Query integration for efficient data loading & cache
- Submission viewer with timestamps and Q&A content
- Dockerized full-stack setup with backend and frontend services
- Deployable to EC2 or local environments
- Quick-start script for easy bootstrapping

## 📦 Project Structure

```
/
├── app/           # React frontend
├── backend/       # Node.js/Express backend
├── docker-compose.yaml
├── Dockerfile
├── init           # Quick-start script
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Docker & Docker Compose
- Git

---

### 1. Clone the Repo

```bash
git clone git@github.com:fanartie/vial.git
cd vial
```

### 2. Quick Start (Recommended)

Run the init script to start both frontend and backend in Docker:

```bash
./init
```

This will:

- Build Docker containers
- Start both services (`app` and `backend`)
- Expose the React frontend on http://localhost:3000

---

## 🛠 Known Issues

- Drag-and-drop field sorting does **not work on mobile devices** yet. An additional touch sensor layer is needed.
- UI is **not yet fully responsive** for smaller screens.
- `min`/`max` number input validation is not fully functional.

---

## 🔗 Live Demo

The project is deployed at:  
🌐 [http://vial.aobox.com](http://vial.aobox.com)

---

## 👋 Author

Arthur Fan  
[GitHub: @fanartie](https://github.com/fanartie)

---

Feel free to open an issue or contact me if you have any questions!
