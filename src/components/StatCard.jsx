export default function StatCard({ title, value, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        bg-white dark:bg-gray-800
        p-5 rounded-xl
        border border-gray-100
        shadow-sm hover:shadow-md
        transition
      "
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  )
}
