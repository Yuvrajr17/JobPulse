function DashboardPreview() {
  const jobs = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      type: "Remote",
      score: "94%",
      logo: "G",
      logoStyle:
        "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300",
    },
    {
      company: "Microsoft",
      role: "Product Intern",
      location: "Hyderabad, India",
      type: "On-site",
      score: "89%",
      logo: "M",
      logoStyle:
        "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-300",
    },
    {
      company: "Notion",
      role: "Software Engineering Intern",
      location: "Remote",
      type: "Remote",
      score: "87%",
      logo: "N",
      logoStyle:
        "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    },
  ];

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_55px_rgba(0,0,0,0.3)] sm:rounded-3xl">

      {/* Dashboard Header */}
      <div className="flex h-14 items-center justify-between border-b border-slate-100 px-3 dark:border-slate-800 sm:h-16 sm:px-5">

        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 text-xl font-bold text-blue-600">
            〽
          </span>

          <span className="truncate text-sm font-bold text-slate-900 dark:text-white sm:text-base">
            Job<span className="text-blue-600">Pulse</span>
          </span>
        </div>

        {/* Desktop Search */}
        <div className="mx-4 hidden h-8 w-44 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-[9px] text-slate-400 md:flex lg:w-52 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
          <span>⌕</span>
          <span className="truncate">
            Search jobs, companies...
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="hidden h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-500 hover:bg-slate-100 md:flex dark:text-slate-400 dark:hover:bg-slate-800"
          >
            ♧
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
            Y
          </div>
        </div>
      </div>

      {/* Desktop Dashboard */}
      <div className="hidden md:flex">

        <aside className="w-40 shrink-0 border-r border-slate-100 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-950/40">
          <div className="space-y-1">
            <SidebarItem icon="▣" label="Dashboard" active />
            <SidebarItem icon="♡" label="Matches" />
            <SidebarItem icon="☆" label="Saved Jobs" />
            <SidebarItem icon="▤" label="Applications" />
            <SidebarItem icon="♧" label="Alerts" />
            <SidebarItem icon="◯" label="Profile" />
          </div>

          <div className="mt-6 border-t border-slate-200 pt-3 dark:border-slate-800">
            <SidebarItem icon="⚙" label="Settings" />
          </div>
        </aside>

        <DashboardContent jobs={jobs} desktop />
      </div>

      {/* Mobile Dashboard */}
      <div className="block md:hidden">
        <DashboardContent jobs={jobs} />
      </div>
    </div>
  );
}

function DashboardContent({ jobs, desktop = false }) {
  return (
    <main
      className={
        desktop
          ? "min-w-0 flex-1 p-5"
          : "w-full min-w-0 p-4"
      }
    >
      {/* Greeting */}
      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0">
          <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 sm:text-[9px]">
            Your workspace
          </p>

          <h2 className="mt-1 text-sm font-bold tracking-tight text-slate-900 dark:text-white sm:text-lg">
            Good morning, Yuvraj 👋
          </h2>

          <p className="mt-1 text-[9px] text-slate-500 dark:text-slate-400 sm:text-xs">
            Here are your top job matches today.
          </p>
        </div>

        <div className="hidden shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[8px] font-semibold text-emerald-700 sm:block dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
          Profile ready
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
        <StatCard
          label="Top Match"
          value="94%"
          description="Great fit"
          highlight
        />

        <StatCard
          label="New Matches"
          value="23"
          description="Last 24 hours"
        />

        <StatCard
          label="Applications"
          value="8"
          description="In progress"
        />

        <StatCard
          label="Saved Jobs"
          value="14"
          description="Jobs saved"
        />
      </div>

      {/* Jobs */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
            Top Job Matches
          </h3>

          <p className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
            Based on your profile
          </p>
        </div>

        <button
          type="button"
          className="shrink-0 text-[8px] font-semibold text-blue-600 hover:text-blue-800 sm:text-[9px] dark:text-blue-400"
        >
          View all →
        </button>
      </div>

      <div className="mt-3 space-y-2.5">
        {jobs.map((job) => (
          <JobCard
            key={job.company}
            {...job}
          />
        ))}
      </div>

      {/* Insight */}
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 p-3 dark:border-blue-900/60 dark:bg-blue-950/30">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">
          ✦
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-semibold text-slate-800 dark:text-slate-200">
            Your matches are improving
          </p>

          <p className="mt-0.5 text-[8px] text-slate-500 dark:text-slate-400">
            Complete your profile for better results.
          </p>
        </div>

        <span className="ml-auto hidden shrink-0 text-[8px] font-semibold text-blue-600 sm:block dark:text-blue-400">
          82%
        </span>
      </div>
    </main>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[9px] font-medium transition-colors ${
        active
          ? "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
      }`}
    >
      <span className="w-4 shrink-0 text-center">
        {icon}
      </span>

      <span className="truncate">
        {label}
      </span>
    </div>
  );
}

function StatCard({
  label,
  value,
  description,
  highlight = false,
}) {
  return (
    <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
      <p className="truncate text-[8px] font-medium text-slate-400 sm:text-[9px]">
        {label}
      </p>

      <p
        className={`mt-1 text-lg font-bold tracking-tight sm:text-xl ${
          highlight
            ? "text-emerald-500"
            : "text-slate-900 dark:text-white"
        }`}
      >
        {value}
      </p>

      <p className="mt-0.5 truncate text-[7px] text-slate-400 sm:text-[8px]">
        {description}
      </p>
    </div>
  );
}

function JobCard({
  company,
  role,
  location,
  type,
  score,
  logo,
  logoStyle,
}) {
  return (
    <article className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 transition-all duration-200 hover:border-blue-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900">

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold sm:h-10 sm:w-10 ${logoStyle}`}
      >
        {logo}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[10px] font-bold text-slate-800 dark:text-slate-100 sm:text-xs">
          {role}
        </h4>

        <p className="mt-0.5 truncate text-[8px] text-slate-400 sm:text-[9px]">
          {company} · {location}
        </p>

        <div className="mt-1.5 flex items-center gap-1">
          <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[7px] font-medium text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
            {type}
          </span>

          <span className="hidden rounded-full bg-slate-100 px-1.5 py-0.5 text-[7px] font-medium text-slate-500 sm:block dark:bg-slate-800 dark:text-slate-400">
            Internship
          </span>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-base font-extrabold text-emerald-500 sm:text-lg">
          {score}
        </p>

        <p className="text-[7px] font-medium text-slate-400 sm:text-[8px]">
          Match
        </p>
      </div>

    </article>
  );
}

export default DashboardPreview;