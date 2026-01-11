"use client";
import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    await api.post("/auth/register", form);
    setLoading(false);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-600">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input className="w-full mb-3 p-3 border rounded" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full mb-3 p-3 border rounded" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="w-full mb-4 p-3 border rounded" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button disabled={loading} onClick={submit}
          className="w-full bg-emerald-600 text-white py-3 rounded hover:bg-emerald-700">
          {loading ? "Creating..." : "Register"}
        </button>
      </div>
    </div>
  );
}
