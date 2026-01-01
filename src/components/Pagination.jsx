export default function Pagination({ current, total, onChange }) {
  if (total <= 1) return null

  return (
    <div className="flex gap-2 mt-6">
      {Array.from({ length: total }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`px-3 py-1 rounded border
            ${page === current
              ? "bg-blue-500 text-white"
              : "bg-white dark:bg-gray-700"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
