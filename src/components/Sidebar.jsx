// export default function Sidebar({ active, onChange }) {
//   const itemClass = (key) =>
//     `cursor-pointer px-3 py-2 rounded
//      ${active === key
//        ? "bg-blue-500 text-white"
//        : "hover:bg-gray-700"}`

//   return (
//     <aside className="w-44 p-4 bg-gray-600 dark:bg-gray-950 text-white">
//       <ul className="space-y-2">
//         <li
//           className={itemClass("dashboard")}
//           onClick={() => onChange("dashboard")}
//         >
//           Dashboard
//         </li>
//         <li
//           className={itemClass("tasks")}
//           onClick={() => onChange("tasks")}
//         >
//           My Tasks
//         </li>
//       </ul>
//     </aside>
//   )
// }

import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition
     ${
       isActive
         ? "bg-blue-600 text-white shadow"
         : "text-slate-300 hover:bg-slate-700 hover:text-white"
     }`

  return (
    <aside className="w-64 bg-slate-800 text-slate-200 p-4">
      <ul className="space-y-2">
        <li>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className={linkClass}>
            My Tasks
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

