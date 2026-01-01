import { useState } from "react"

const getNow = () => {
  const now = new Date()
  return {
    date: now.toISOString().split("T")[0],
    time: now.toTimeString().slice(0, 5),
  }
}

export default function ItemFormModal({
  title,
  initialData,
  onSubmit,
  onClose,
}) {
  const now = getNow()

  const [form, setForm] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    status: initialData?.status || "active",
    dueDate: initialData?.dueDate || now.date,
    dueTime: initialData?.dueTime || now.time,
  })

  const submit = (e) => {
    e.preventDefault()
    if (!form.title.trim()) return
    onSubmit(form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">{title}</h2>

        <form onSubmit={submit} className="space-y-4">
          {/* TITLE */}
          <input
            className="w-full border p-2 rounded dark:text-gray-300 placeholder:text-gray-400 placeholder:dark:text-gray-300"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          {/* DESCRIPTION */}
          <textarea
            className="w-full border p-2 rounded dark:text-gray-300 placeholder:text-gray-400 placeholder:dark:text-gray-300"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          {/* STATUS */}
          <select
            className="w-full border p-2 rounded dark:text-gray-300"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          {/* DATE & TIME (AUTO-FILLED) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm dark:text-gray-300">Due Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded dark:text-gray-300"
                value={form.dueDate}
                onChange={(e) =>
                  setForm({ ...form, dueDate: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm dark:text-gray-300">Due Time</label>
              <input
                type="time"
                className="w-full border p-2 rounded dark:text-gray-300"
                value={form.dueTime}
                onChange={(e) =>
                  setForm({ ...form, dueTime: e.target.value })
                }
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-2 pt-4">
            <button className="dark:text-gray-300" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
