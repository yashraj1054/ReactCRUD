export default function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded text-sm border transition
        ${
          active
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }
      `}
    >
      {label}
    </button>
  )
}
