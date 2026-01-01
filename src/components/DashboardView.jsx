import StatCard from "./StatCard"
export default function DashboardView({
  items,
  recentTasks,
  setStatusFilter,
  setEditingItem,
}) {
  const totalTasks = items.length;
  const completedTasks = items.filter(i => i.status === "completed").length;
  const pendingTasks = items.filter(i => i.status === "pending").length;
  const activeTasks = items.filter(i => i.status === "active").length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Tasks" value={totalTasks} onClick={() => setStatusFilter("all")} />
        <StatCard title="Completed" value={completedTasks} onClick={() => setStatusFilter("completed")} />
        <StatCard title="Pending" value={pendingTasks} onClick={() => setStatusFilter("pending")} />
        <StatCard title="Active" value={activeTasks} onClick={() => setStatusFilter("active")} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded p-4">
        <h2 className="font-semibold mb-4">Recent Tasks</h2>

        <ul className="space-y-3">
          {recentTasks.map(task => (
            <li
              key={task.id}
              onClick={() => setEditingItem(task)}
              className="cursor-pointer p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <h3 className="font-medium">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
