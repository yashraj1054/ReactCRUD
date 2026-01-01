export default function Header({ onMenuClick }) {
  return (
    <header className="text-sm md:text-base px-4 md:px-6 flex justify-between items-center  py-4
      bg-blue-600 dark:bg-gray-900 text-white">
      <h1 className="text-xl font-semibold">Task Manager</h1>
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-2xl"
      >
        ☰
      </button>
    </header>
  )
}
