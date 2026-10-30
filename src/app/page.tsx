export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-8 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold text-xl">
          F
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Finbase Frontend
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Aplikasi web Next.js untuk platform Finbase (Personal Finance & Property Management).
        </p>
        <div className="pt-4 flex items-center justify-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            ● Next.js Ready
          </span>
        </div>
      </div>
    </main>
  );
}

