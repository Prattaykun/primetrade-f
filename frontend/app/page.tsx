"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col min-h-screen">
        {/* Navbar */}
        {/* <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Task<span className="text-indigo-400">Flow</span>
          </h1>
          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded border border-white/30 hover:bg-white/10 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>
        </header> */}

        {/* Hero Section */}
        <section className="flex-1 grid md:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Manage Your Work <br />
              <span className="text-indigo-400">Smarter & Faster</span>
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-lg">
              TaskFlow is a modern productivity dashboard built for speed,
              clarity, and scale. Secure authentication, real-time task
              management, and a clean UI — everything you need in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-lg font-medium"
              >
                Create Free Account
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition text-lg"
              >
                I already have an account
              </Link>
            </div>

           
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 blur-xl opacity-40"></div>
            <div className="relative bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/60">Dashboard Preview</span>
                <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {["Design landing page", "Build auth flow", "Deploy API", "Write README"].map(
                  (t, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                    >
                      <span className="text-sm">{t}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          i % 2 === 0
                            ? "bg-indigo-500/20 text-indigo-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {i % 2 === 0 ? "Completed" : "Pending"}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-white/40">
          © {new Date().getFullYear()} TaskFlow. Built for the Frontend Intern Assignment.
        </footer>
      </div>
    </main>
  );
}
