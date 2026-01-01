export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 rounded w-full h-11
      bg-white dark:bg-gray-700
      border-gray-600 dark:border-gray-300
      text-black dark:text-white
      placeholder-gray-400 dark:placeholder-gray-300"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
