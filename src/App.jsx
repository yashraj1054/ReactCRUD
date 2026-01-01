import { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardView from "./components/DashboardView"
import TasksView from "./components/TaskView"
import ConfirmDialog from "./components/ConfirmDialog"
import ItemFormModal from "./components/ItemFormModal"


const ITEMS_PER_PAGE = 5

/* ================= HELPERS ================= */

export const isOverdue = (task) => {
  if (!task.dueDate || task.status === "completed") return false
  const due = new Date(`${task.dueDate}T${task.dueTime || "23:59"}`)
  return due < new Date()
}

export const getRelativeTime = (task) => {
  if (!task.dueDate) return null
  const now = new Date()
  const due = new Date(`${task.dueDate}T${task.dueTime || "23:59"}`)
  const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Due today"
  if (diffDays > 0) return `Due in ${diffDays} day${diffDays > 1 ? "s" : ""}`
  return `Overdue by ${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? "s" : ""}`
}

export default function App() {

  /* ================= FILTER ================= */
  const [statusFilter, setStatusFilter] = useState("all")

  /* ================= DATA ================= */
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  )

  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("date_desc")
  const [page, setPage] = useState(1)

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [deleteItemId, setDeleteItemId] = useState(null)

  /* ================= PERSIST ================= */
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  /* ================= DASHBOARD DATA ================= */
  const recentTasks = [...items]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5)

  /* ================= FILTER + SEARCH ================= */
  const filteredItems = items.filter(item => {
    const matchesSearch = [
      item.title,
      item.description,
      item.status,
      // item.dueDate,
      // item.dueTime,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter

    return matchesSearch && matchesStatus
  })

  /* ================= SORT ================= */
  const sortedItems = [...filteredItems].sort((a, b) => {
    const aOverdue = isOverdue(a)
    const bOverdue = isOverdue(b)

    if (aOverdue && !bOverdue) return -1
    if (!aOverdue && bOverdue) return 1

    if (sortBy === "date_desc") return b.id - a.id
    if (sortBy === "date_asc") return a.id - b.id
    if (sortBy === "status") return a.status.localeCompare(b.status)

    return 0
  })

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE)

  const paginatedItems = sortedItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  useEffect(() => {
    setPage(1)
  }, [search, sortBy, statusFilter])

  /* ================= CRUD ================= */
  const addItem = (data) => {
    setItems([...items, { id: Date.now(), ...data }])
  }

  const updateItem = (id, data) => {
    setItems(items.map(i =>
      i.id === id ? { ...i, ...data } : i
    ))
    setEditingItem(null)
  }

  const deleteItem = () => {
    setItems(items.filter(i => i.id !== deleteItemId))
    setDeleteItemId(null)
  }

  /* ================= UI ================= */
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route
              path="/dashboard"
              element={
                <DashboardView
                  items={items}
                  recentTasks={recentTasks}
                  setStatusFilter={setStatusFilter}
                  setEditingItem={setEditingItem}
                />
              }
            />

            <Route
              path="/tasks"
              element={
                <TasksView
                  paginatedItems={paginatedItems}
                  search={search}
                  setSearch={setSearch}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                  setShowAddModal={setShowAddModal}
                  setEditingItem={setEditingItem}
                  setDeleteItemId={setDeleteItemId}
                  page={page}
                  totalPages={totalPages}
                  setPage={setPage}
                />
              }
            />
          </Routes>
        </main>
      </div>

      {/* ADD MODAL */}
      {showAddModal && (
        <ItemFormModal
          title="Add Task"
          initialData={null}
          onSubmit={addItem}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* EDIT MODAL */}
      {editingItem && (
        <ItemFormModal
          title="Edit Task"
          initialData={editingItem}
          onSubmit={(data) => updateItem(editingItem.id, data)}
          onClose={() => setEditingItem(null)}
        />
      )}

      {/* DELETE CONFIRM */}
      {deleteItemId && (
        <ConfirmDialog
          message="Delete this task?"
          onConfirm={deleteItem}
          onCancel={() => setDeleteItemId(null)}
        />
      )}
    </div>
  )
}
