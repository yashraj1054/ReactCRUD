// import { NavLink } from "react-router-dom"

// export default function Sidebar() {
//   const linkClass = ({ isActive }) =>
//     `block px-4 py-2 rounded transition
//      ${
//        isActive
//          ? "bg-blue-600 text-white shadow"
//          : "text-slate-300 hover:bg-slate-700 hover:text-white"
//      }`

//   return (
//     <aside className="hidden md:block w-64 bg-slate-800 text-slate-200 p-4">
//       <ul className="space-y-2">
//         <li>
//           <NavLink to="/dashboard" className={linkClass}>
//             Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/tasks" className={linkClass}>
//             My Tasks
//           </NavLink>
//         </li>
//       </ul>
//     </aside>
//   )
// }

import { NavLink } from "react-router-dom"

export default function Sidebar({ isOpen, onClose }) {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-slate-300 hover:bg-slate-700 hover:text-white"
     }`

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          top-0 left-0 h-full w-64
          bg-slate-800 text-slate-200 p-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="md:hidden mb-4 text-right w-full text-xl"
        >
          ✕
        </button>

        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={linkClass} onClick={onClose}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={linkClass} onClick={onClose}>
              My Tasks
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  )
}


