import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import Pagination from "./Pagination";
import { isOverdue, getRelativeTime } from "../App";

export default function TasksView({
  paginatedItems,
  search,
  setSearch,
  sortBy,
  setSortBy,
  statusFilter,
  setStatusFilter,
  setShowAddModal,
  setEditingItem,
  setDeleteItemId,
  page,
  totalPages,
  setPage,
}) {
  return (
    <>
      {/* <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row gap-3 ">
          {["all", "active", "pending", "completed"].map((s) => (
            <FilterButton
              key={s}
              label={s.charAt(0).toUpperCase() + s.slice(1)}
              active={statusFilter === s}
              onClick={() => setStatusFilter(s)}
            />
          ))}
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>
      </div> */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
  {/* FILTER BUTTONS */}
  <div className="flex flex-wrap gap-2">
    {["all", "active", "pending", "completed"].map((s) => (
      <FilterButton
        key={s}
        label={s.charAt(0).toUpperCase() + s.slice(1)}
        active={statusFilter === s}
        onClick={() => setStatusFilter(s)}
      />
    ))}
  </div>

  {/* ADD TASK */}
  <button
    onClick={() => setShowAddModal(true)}
    className="bg-blue-500 text-white px-4 py-2 rounded whitespace-nowrap"
  >
    + Add Task
  </button>
</div>


      <div className="flex items-center gap-4 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-11 px-3 border rounded"
        >
          <option value="date_desc">Newest</option>
          <option value="date_asc">Oldest</option>
          <option value="status">Status</option>
        </select>
      </div>

      <ul className="space-y-3">
        {paginatedItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 rounded border
    ${
      isOverdue(item)
        ? "bg-red-50 border-red-400"
        : item.status === "completed"
        ? "bg-green-50 border-green-400"
        : item.status === "pending"
        ? "bg-blue-50 border-blue-400"
        : "bg-white"
    }
  `}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>

            {item.dueDate && (
    <div className="mt-2 text-xs text-gray-500">
      ⏳ {getRelativeTime(item)}
    </div>
  )}

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => setEditingItem(item)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteItemId(item.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Pagination current={page} total={totalPages} onChange={setPage} />
    </>
  );
}
