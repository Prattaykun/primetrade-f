"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { Task, User, UserData } from "@/types";
import TaskCard from "@/components/TaskCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [dueAt, setDueAt] = useState<Date | null>(null);

  const [editingProfile, setEditingProfile] = useState(false);
  const [profile, setProfile] = useState<UserData>({
    phone: user?.userData?.phone || "",
    role: user?.userData?.role || "",
    company: user?.userData?.company || "",
    bio: user?.userData?.bio || "",
  });

  const load = async () => {
    const res = await api.get<Task[]>("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  // Keep profile form in sync with user data when it becomes available
  useEffect(() => {
    if (user?.userData && !editingProfile) {
      setProfile({
        phone: user.userData.phone || "",
        role: user.userData.role || "",
        company: user.userData.company || "",
        bio: user.userData.bio || "",
      });
    }
  }, [user, editingProfile]);

  const create = async () => {
    if (!title.trim()) return;
    const payload = {
      title,
      dueAt: dueAt ? dueAt.toISOString() : undefined,
    };
    await api.post("/tasks", payload);
    setTitle("");
    setDueAt(null);
    load();
  };

  const toggleStatus = async (
    id: string,
    next: "pending" | "completed"
  ) => {
    await api.put(`/tasks/${id}`, { status: next });
    load();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    load();
  };

  const saveProfile = async () => {
    await api.put("/auth/profile", profile);
    setEditingProfile(false);
    location.reload();
  };

  const hasProfileData =
    user?.userData &&
    (user.userData.phone ||
      user.userData.role ||
      user.userData.company ||
      user.userData.bio);

  return (
    <ProtectedRoute>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="bg-white border-r p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-6">
            {user?.name || "User"}
          </h2>

          <div className="text-sm text-gray-600 space-y-1">
            <p>{user?.email}</p>
          </div>

          <div className="mt-auto">
            <button
              onClick={logout}
              className="w-full mt-6 py-2 rounded border text-sm text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="p-6 bg-gray-100 space-y-6">
          {/* Profile Section */}
          <section className="bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Profile</h3>
              {hasProfileData && !editingProfile && (
                <button
                  onClick={() => {
                    setProfile({
                      phone: user?.userData?.phone || "",
                      role: user?.userData?.role || "",
                      company: user?.userData?.company || "",
                      bio: user?.userData?.bio || "",
                    });
                    setEditingProfile(true);
                  }}
                  className="text-sm px-3 py-1 rounded border"
                >
                  Update Profile
                </button>
              )}
            </div>

            {!hasProfileData || editingProfile ? (
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Phone"
                  className="p-2 border rounded"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
                <input
                  placeholder="Role"
                  className="p-2 border rounded"
                  value={profile.role}
                  onChange={(e) =>
                    setProfile({ ...profile, role: e.target.value })
                  }
                />
                <input
                  placeholder="Company"
                  className="p-2 border rounded"
                  value={profile.company}
                  onChange={(e) =>
                    setProfile({ ...profile, company: e.target.value })
                  }
                />
                <textarea
                  placeholder="Bio"
                  className="p-2 border rounded md:col-span-2"
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                />

                <button
                  onClick={saveProfile}
                  className="md:col-span-2 bg-indigo-600 text-white py-2 rounded"
                >
                  Save Profile
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium">{user?.userData?.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Role</p>
                  <p className="font-medium">{user?.userData?.role}</p>
                </div>
                <div>
                  <p className="text-gray-500">Company</p>
                  <p className="font-medium">{user?.userData?.company}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500">Bio</p>
                  <p className="font-medium">{user?.userData?.bio}</p>
                </div>
              </div>
            )}
          </section>

          {/* Task Creator */}
          <section className="bg-white p-6 rounded shadow grid md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="text-sm text-gray-500">Task Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 p-2">Due Date & Time</label>
              <DatePicker
                selected={dueAt}
                onChange={(d: Date | null) => setDueAt(d)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              onClick={create}
              className="md:col-span-3 bg-emerald-600 text-white py-2 rounded"
            >
              Add Task
            </button>
          </section>

          {/* Tasks */}
          <section className="grid gap-3">
            {tasks.map((t) => (
              <TaskCard
                key={t._id}
                task={t}
                onToggle={toggleStatus}
                onDelete={deleteTask}
              />
            ))}
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}
