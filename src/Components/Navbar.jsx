import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;

      document.documentElement.classList.toggle("dark", nextMode);

      return nextMode;
    });
  };

  const navLinks = [
    ["#features", "Features"],
    ["#how-it-works", "How It Works"],
    ["#jobs", "Jobs"],
    ["#pricing", "Pricing"],
    ["about", "About"],
  ];

  return (
    <header className="relative z-50 w-full max-w-full overflow-visible bg-slate-50 px-3 py-3 transition-colors duration-300 dark:bg-[#0b1220] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1380px]">
        <div className="relative flex min-h-[64px] w-full max-w-full min-w-0 items-center justify-between rounded-xl border border-slate-200 bg-white px-3 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-[#111827] sm:min-h-[68px] sm:px-5 lg:px-6">
          
          <a
            href="/"
            className="flex min-w-0 shrink items-center gap-1.5"
            onClick={() => setMobileOpen(false)}
          >
             <img
    src="/favicon.svg"
    alt="JobPulse"
    className="h-9 w-9 rounded-lg sm:h-10 sm:w-10"
  />

            <span className="truncate text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
              Job<span className="text-blue-600">Pulse</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex lg:gap-7">
            {navLinks.map(([link, text]) => (
              <a
                key={text}
                href={link}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                {text}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-slate-700"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <a
              href="/login"
              className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              Log in
            </a>

            <a
              href="/signup"
              className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 md:hidden">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg text-slate-700 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-2 w-full max-w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-[#111827] md:hidden">
            <nav className="flex flex-col">
              {navLinks.map(([link, text]) => (
                <a
                  key={text}
                  href={link}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {text}
                </a>
              ))}

              <div className="my-2 border-t border-slate-100 dark:border-slate-800" />

              <a
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Log in
              </a>

              <a
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-lg bg-blue-600 px-3 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;