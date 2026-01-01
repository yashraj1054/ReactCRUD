# 🗂️ Task Management Dashboard (React)

A modern **Task Management Dashboard** built with **React** that demonstrates real-world frontend development concepts such as routing, filtering, sorting, pagination, and reusable components.

This project is designed to simulate how real productivity applications work and was built to strengthen practical React and JavaScript skills.

---

## 🚀 Features

### 📊 Dashboard
- Total tasks count
- Completed, Pending, and Active task statistics
- Clickable stat cards to filter tasks
- Recent tasks list with quick edit access

### ✅ Tasks Management
- Add, edit, and delete tasks
- Multi-field task form (title, description, status, due date & time)
- Modal-based add/edit workflow
- Confirmation dialog before deletion

### 🔍 Filtering & Search
- Filter tasks by:
  - All
  - Active
  - Pending
  - Completed
- Search tasks **by title only**
- Auto-reset pagination on filter/search change

### 🔄 Sorting & Pagination
- Sort by:
  - Newest first
  - Oldest first
  - Status
- Pagination for large task lists

### ⏳ Task Intelligence
- Overdue task detection
- Automatic overdue tasks prioritized at the top
- Relative due time display (e.g., *Due in 2 days*, *Overdue by 1 day*)
- Visual status indicators:
  - 🔴 Overdue → Red background
  - 🟢 Completed → Green background
  - 🔵 Pending → Blue background
  - ⚪ Active → White background

### 🧭 Routing (React Router)
- `/dashboard` – Overview and analytics
- `/tasks` – Full task management
- URL-based navigation with active route highlighting

---

## 🛠️ Tech Stack

- **React** (Hooks, Functional Components)
- **React Router DOM**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **LocalStorage** (data persistence)
- **Vite** (development build tool)

---

## 📁 Project Structure
```
src/
├── components/
│   ├── DashboardView.jsx
│   ├── TasksView.jsx  
│   ├── Header.jsx  
│   ├── Sidebar.jsx 
│   ├── StatCard.jsx  
│   ├── FilterButton.jsx
│   ├── SearchBar.jsx
│   ├── Pagination.jsx
│   ├── ConfirmDialog.jsx
│   └── ItemFormModal.jsx
├── App.jsx
├── index.css
├── Main.jsx
└── package.json
```

---

## 🧠 What This Project Demonstrates

- Strong understanding of **React state management**
- Clean component separation and reusability
- Practical usage of **React Router**
- Real-world UI/UX patterns
- Debugging and refactoring skills
- JavaScript array manipulation (`map`, `filter`, `sort`)
- Professional frontend architecture

---

## ▶️ Getting Started

### 1️⃣ Install dependencies
```bash
npm install
```
### 2️⃣ Run the project
```bash
npm run dev
```
### 3️⃣ Open in browser
```bash
http://localhost:5173
```
---


## 👨‍💻 Author

Built by Yashraj Singh

---

## 📌 Note

This project was built as a learning and portfolio project to demonstrate practical frontend development skills and real-world application behavior.
