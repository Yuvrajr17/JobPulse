function DashboardPreview() {
  const jobs = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      type: "Remote",
      score: "94%",
      logo: "G",
      logoStyle: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
    },
    {
      company: "Microsoft",
      role: "Product Intern",
      location: "Hyderabad, India",
      type: "On-site",
      score: "89%",
      logo: "M",
      logoStyle:
        "bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-300",
    },
    {
      company: "Notion",
      role: "Software Engineering Intern",
      location: "Remote",
      type: "Remote",
      score: "87%",
      logo: "N",
      logoStyle:
        "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white",
    },
  ];

  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-[0_25px_70px_rgba(76,45,160,0.14)]
        transition-all
        duration-500

        hover:-translate-y-1
        hover:shadow-[0_35px_90px_rgba(76,45,160,0.2)]

        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]

        sm:rounded-3xl
      "
    >

      {/* =========================================
          TOP BAR
      ========================================= */}

      <div
        className="
          flex
          h-14
          items-center
          justify-between
          border-b
          border-slate-100
          bg-white
          px-4

          dark:border-slate-800
          dark:bg-slate-900

          sm:h-16
          sm:px-5
        "
      >

        {/* Product Logo */}
        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            font-bold
            text-slate-900
            dark:text-white
            sm:text-base
          "
        >
          <span
            className="
              text-xl
              font-bold
              text-violet-600
            "
          >
            〽
          </span>

          Job<span className="text-violet-600">Pulse</span>
        </div>


        {/* Search */}
        <div
          className="
            hidden
            h-8
            w-44
            items-center
            gap-2
            rounded-lg
            border
            border-slate-200
            bg-slate-50
            px-3
            text-[9px]
            text-slate-400

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-500

            sm:flex
            md:w-52
          "
        >
          <span>⌕</span>

          <span>
            Search jobs, companies...
          </span>
        </div>


        {/* Right Icons */}
        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <button
            className="
              hidden
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-sm
              text-slate-500
              transition
              hover:bg-slate-100

              dark:text-slate-400
              dark:hover:bg-slate-800

              sm:flex
            "
          >
            ♧
          </button>

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-violet-300
              to-purple-500
              text-[10px]
              font-bold
              text-white
            "
          >
            Y
          </div>

        </div>

      </div>


      {/* =========================================
          DASHBOARD BODY
      ========================================= */}

      <div className="flex">

        {/* =====================================
            SIDEBAR
        ===================================== */}

        <aside
          className="
            hidden
            w-40
            shrink-0
            border-r
            border-slate-100
            bg-slate-50/60
            p-3

            dark:border-slate-800
            dark:bg-slate-950/40

            md:block
          "
        >

          <div className="space-y-1">

            <SidebarItem
              icon="▣"
              label="Dashboard"
              active
            />

            <SidebarItem
              icon="♡"
              label="Matches"
            />

            <SidebarItem
              icon="☆"
              label="Saved Jobs"
            />

            <SidebarItem
              icon="▤"
              label="Applications"
            />

            <SidebarItem
              icon="♧"
              label="Alerts"
            />

            <SidebarItem
              icon="◯"
              label="Profile"
            />

          </div>


          <div className="mt-6 border-t border-slate-200 pt-3 dark:border-slate-800">

            <SidebarItem
              icon="⚙"
              label="Settings"
            />

          </div>

        </aside>


        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div className="min-w-0 flex-1 p-4 sm:p-5">

          {/* Greeting */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-3
              sm:items-center
            "
          >

            <div>

              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-violet-600
                  dark:text-violet-400
                "
              >
                Your workspace
              </p>

              <h2
                className="
                  mt-1
                  text-base
                  font-bold
                  tracking-tight
                  text-slate-900
                  dark:text-white

                  sm:text-lg
                "
              >
                Good morning, Yuvraj 👋
              </h2>

              <p
                className="
                  mt-1
                  text-[10px]
                  text-slate-500
                  dark:text-slate-400

                  sm:text-xs
                "
              >
                Here are your top job matches today.
              </p>

            </div>


            {/* Match badge */}
            <div
              className="
                hidden
                rounded-full
                border
                border-emerald-200
                bg-emerald-50
                px-3
                py-1.5
                text-[9px]
                font-semibold
                text-emerald-700

                dark:border-emerald-900
                dark:bg-emerald-950/40
                dark:text-emerald-400

                sm:block
              "
            >
              Profile ready
            </div>

          </div>


          {/* =================================
              STAT CARDS
          ================================= */}

          <div
            className="
              mt-4
              grid
              grid-cols-2
              gap-2

              lg:grid-cols-4
            "
          >

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


          {/* =================================
              JOB MATCHES HEADER
          ================================= */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >

            <div>

              <h3
                className="
                  text-xs
                  font-bold
                  text-slate-900
                  dark:text-white

                  sm:text-sm
                "
              >
                Top Job Matches
              </h3>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  text-slate-400
                "
              >
                Based on your profile
              </p>

            </div>


            <button
              className="
                text-[9px]
                font-semibold
                text-violet-600
                transition
                hover:text-violet-800

                dark:text-violet-400
              "
            >
              View all →
            </button>

          </div>


          {/* =================================
              JOB CARDS
          ================================= */}

          <div className="mt-2 space-y-2">

            {jobs.map((job) => (
              <JobCard
                key={job.company}
                {...job}
              />
            ))}

          </div>


          {/* =================================
              BOTTOM INSIGHT
          ================================= */}

          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-violet-100
              bg-violet-50/70
              px-3
              py-2.5

              dark:border-violet-900
              dark:bg-violet-950/30
            "
          >

            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-600
                  text-xs
                  text-white
                "
              >
                ✦
              </div>

              <div>

                <p
                  className="
                    text-[9px]
                    font-semibold
                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  Your matches are improving
                </p>

                <p
                  className="
                    text-[8px]
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Complete your profile for better results.
                </p>

              </div>

            </div>


            <span
              className="
                hidden
                text-[9px]
                font-semibold
                text-violet-600
                sm:block
                dark:text-violet-400
              "
            >
              82% complete
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =============================================
   SIDEBAR ITEM
============================================= */

function SidebarItem({
  icon,
  label,
  active = false,
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-2
        rounded-lg
        px-2.5
        py-2
        text-[9px]
        font-medium
        transition-colors

        ${
          active
            ? "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        }
      `}
    >
      <span className="w-4 text-center">
        {icon}
      </span>

      {label}
    </div>
  );
}


/* =============================================
   STAT CARD
============================================= */

function StatCard({
  label,
  value,
  description,
  highlight = false,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-100
        bg-white
        p-3
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md

        dark:border-slate-800
        dark:bg-slate-900
      "
    >

      <p
        className="
          text-[8px]
          font-medium
          text-slate-400

          sm:text-[9px]
        "
      >
        {label}
      </p>

      <p
        className={`
          mt-1
          text-lg
          font-bold
          tracking-tight

          sm:text-xl

          ${
            highlight
              ? "text-emerald-500"
              : "text-slate-900 dark:text-white"
          }
        `}
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          text-[8px]
          text-slate-400
        "
      >
        {description}
      </p>

    </div>
  );
}


/* =============================================
   JOB CARD
============================================= */

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
    <div
      className="
        group/job
        grid
        grid-cols-[34px_1fr_auto]
        items-center
        gap-2.5
        rounded-xl
        border
        border-slate-100
        bg-white
        p-2.5
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-violet-200
        hover:shadow-[0_8px_25px_rgba(76,45,160,0.08)]

        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-violet-800

        sm:grid-cols-[40px_1fr_auto]
        sm:gap-3
        sm:p-3
      "
    >

      {/* Company Logo */}
      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          text-sm
          font-bold

          sm:h-10
          sm:w-10

          ${logoStyle}
        `}
      >
        {logo}
      </div>


      {/* Job Information */}
      <div className="min-w-0">

        <h4
          className="
            truncate
            text-[10px]
            font-bold
            text-slate-800
            dark:text-slate-100

            sm:text-xs
          "
        >
          {role}
        </h4>

        <p
          className="
            mt-0.5
            truncate
            text-[8px]
            text-slate-400

            sm:text-[9px]
          "
        >
          {company} · {location}
        </p>


        {/* Tags */}
        <div className="mt-1.5 flex gap-1">

          <span
            className="
              rounded-full
              bg-violet-50
              px-1.5
              py-0.5
              text-[7px]
              font-medium
              text-violet-600

              dark:bg-violet-950/50
              dark:text-violet-300
            "
          >
            {type}
          </span>

          <span
            className="
              hidden
              rounded-full
              bg-slate-100
              px-1.5
              py-0.5
              text-[7px]
              font-medium
              text-slate-500

              dark:bg-slate-800
              dark:text-slate-400

              sm:block
            "
          >
            Internship
          </span>

        </div>

      </div>


      {/* Match Score */}
      <div className="text-right">

        <p
          className="
            text-base
            font-extrabold
            text-emerald-500

            sm:text-lg
          "
        >
          {score}
        </p>

        <p
          className="
            text-[7px]
            font-medium
            text-slate-400

            sm:text-[8px]
          "
        >
          Match
        </p>

      </div>

    </div>
  );
}

export default DashboardPreview;