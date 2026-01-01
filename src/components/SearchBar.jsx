export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 rounded w-full h-11
      bg-white dark:bg-gray-700
      text-black dark:text-white"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
