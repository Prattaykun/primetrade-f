"use client";
import { Task } from "@/types";
import { format } from "date-fns";

export default function TaskCard({
  task,
  onToggle,
  onDelete,
}: {
  task: Task;
  onToggle: (id: string, next: "pending" | "completed") => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div>
        <p className={`font-medium ${task.status === "completed" ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </p>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">{task.status}</span>
          {task.dueAt && (
            <span className="text-xs text-gray-600">
              Due: {format(new Date(task.dueAt), "PPP p")}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task._id, task.status === "pending" ? "completed" : "pending")}
          className="px-3 py-1 text-sm rounded bg-indigo-100 text-indigo-700 cursor-pointer transition-transform duration-150 active:scale-95 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Toggle
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 text-sm rounded bg-red-100 text-red-700 cursor-pointer transition-transform duration-150 active:scale-95 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
