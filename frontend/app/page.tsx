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

          {/* Feature Panel */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 blur-xl opacity-40"></div>
            <div className="relative bg-slate-950/80 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Why teams choose TaskFlow</h3>
                <span className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-300">New</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="h-9 w-9 flex items-center justify-center rounded-md bg-indigo-500/20 text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M12 1.5a3.75 3.75 0 00-3.75 3.75v1.5H6.75A2.25 2.25 0 004.5 9v9.75A3.75 3.75 0 008.25 22.5h7.5a3.75 3.75 0 003.75-3.75V9a2.25 2.25 0 00-2.25-2.25H15.75V5.25A3.75 3.75 0 0012 1.5zm-2.25 3.75A2.25 2.25 0 0112 3a2.25 2.25 0 012.25 2.25v1.5h-4.5v-1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Secure auth</p>
                    <p className="text-sm text-white/60">JWT-based sessions, hashed passwords, and protected routes.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="h-9 w-9 flex items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
                      <path className="opacity-80" d="M7.5 15.75l3.75-4.5 3 3.75 2.25-3 0 3.75H7.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Real-time updates</p>
                    <p className="text-sm text-white/60">Stay in sync as tasks move across the board.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="h-9 w-9 flex items-center justify-center rounded-md bg-yellow-500/20 text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM9 12a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Granular roles</p>
                    <p className="text-sm text-white/60">Control who can create, edit, and complete tasks.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="h-9 w-9 flex items-center justify-center rounded-md bg-purple-500/20 text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5A2.25 2.25 0 0117.25 19.5H6.75A2.25 2.25 0 014.5 17.25V6.75z" />
                      <path className="opacity-80" d="M7.5 9h9v1.5h-9V9zm0 3h6v1.5h-6V12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Clean UI</p>
                    <p className="text-sm text-white/60">Accessible, responsive design that scales with your team.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/60">Total Tasks</p>
                  <p className="mt-1 text-2xl font-semibold">1,248</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/60">On Track</p>
                  <p className="mt-1 text-2xl font-semibold text-emerald-300">87%</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/60">Overdue</p>
                  <p className="mt-1 text-2xl font-semibold text-rose-300">13%</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="text-xs text-white/40">Trusted by teams</div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">Acme</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">Nova</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">Orbit</span>
                </div>
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
