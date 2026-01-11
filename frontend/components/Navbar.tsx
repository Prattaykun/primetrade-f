"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const avatar = user?.name?.charAt(0).toUpperCase();

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Task<span className="text-indigo-600">Flow</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/login" className="px-3 py-2 rounded hover:bg-gray-100">
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/dashboard")}
                className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold"
                title="Go to Dashboard"
              >
                {avatar}
              </button>
              <button
                onClick={logout}
                className="px-3 py-2 rounded text-sm text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div className="absolute top-16 left-0 right-0 px-4">
          <div
            id="mobile-menu"
            className={`relative z-50 rounded-xl bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-black/10 p-3 space-y-2 transition-all duration-200 ease-out transform ${
              open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95"
            }`}
          >
            {!user ? (
              <>
                <Link href="/login" className="block py-2 px-2 rounded hover:bg-white/40">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block py-2 px-2 rounded bg-indigo-600/90 text-white hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => router.push("/dashboard")}
                  className="flex items-center gap-2 py-2 px-2 rounded hover:bg-white/40"
                >
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    {avatar}
                  </span>
                  Dashboard
                </button>
                <button
                  onClick={logout}
                  className="block py-2 px-2 rounded text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
