import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="
        w-full px-4 py-4
        bg-white
        dark:bg-slate-950
        transition-colors duration-300
      "
    >
      <div
        className="
          mx-auto flex h-[72px] max-w-[1380px]
          items-center justify-between
          rounded-2xl
          border border-violet-100
          bg-white
          px-6
          shadow-[0_10px_35px_rgba(84,54,180,0.06)]
          transition-colors duration-300

          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)]
        "
      >

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <span className="text-3xl text-violet-600">
            〽
          </span>

          <span className="text-slate-900 dark:text-white">
            Job<span className="text-violet-600">Pulse</span>
          </span>
        </a>


        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {[
            ["#features", "Features"],
            ["#how-it-works", "How It Works"],
            ["#jobs", "Jobs"],
            ["#pricing", "Pricing"],
            ["#blog", "Blog"],
            ["#about", "About Us"],
          ].map(([link, text]) => (
            <a
              key={text}
              href={link}
              className="
                text-sm font-medium
                text-slate-600
                transition-colors
                hover:text-violet-600

                dark:text-slate-300
                dark:hover:text-violet-400
              "
            >
              {text}
            </a>
          ))}

        </nav>


        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-slate-200
              bg-slate-50
              text-lg

              transition-all duration-300

              hover:border-violet-300
              hover:bg-violet-50

              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:bg-slate-700
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>


          {/* Login */}
          <a
            href="/login"
            className="
              text-sm font-medium
              text-slate-700
              transition-colors
              hover:text-violet-600

              dark:text-slate-300
              dark:hover:text-violet-400
            "
          >
            Log in
          </a>


          {/* Get Started */}
          <a
            href="/signup"
            className="
              rounded-xl
              bg-violet-600
              px-5 py-3
              text-sm font-semibold text-white
              shadow-lg shadow-violet-200

              transition-all duration-300

              hover:-translate-y-0.5
              hover:bg-violet-700

              dark:shadow-violet-950/40
            "
          >
            Get Started
          </a>

        </div>


        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={toggleDarkMode}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-slate-200
              bg-slate-50

              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="
              rounded-lg p-2
              text-2xl text-slate-700

              dark:text-white
            "
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;