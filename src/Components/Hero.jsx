import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        pb-12
        pt-8
        transition-colors
        duration-300
        dark:bg-slate-950

        sm:px-6
        sm:pb-16
        sm:pt-12

        lg:px-8
        lg:pb-8
        lg:pt-4

        xl:pt-6
      "
    >
      {/* Background Glow - Left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-72
          w-72
          rounded-full
          bg-violet-200/25
          blur-3xl
          dark:bg-violet-900/15
        "
      />

      {/* Background Glow - Right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-80
          w-80
          rounded-full
          bg-purple-200/20
          blur-3xl
          dark:bg-purple-900/15
        "
      />

      {/* =====================================
          MAIN HERO CONTAINER
      ===================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1380px]
          items-start
          gap-8

          lg:grid-cols-[0.78fr_1.22fr]
          lg:gap-6

          xl:gap-10
        "
      >
        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div
          className="
            max-w-2xl

            lg:pt-16
            xl:pt-20
          "
        >
          {/* AI Badge */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-200
              bg-violet-50
              px-3
              py-1.5
              text-xs
              font-semibold
              text-violet-700

              dark:border-violet-800
              dark:bg-violet-950/40
              dark:text-violet-300

              sm:mb-5
              sm:px-4
              sm:py-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-violet-600
                shadow-[0_0_10px_rgba(124,58,237,0.7)]
              "
            />

            AI-Powered Job Discovery
          </div>

          {/* =================================
              MAIN HEADING
          ================================= */}

          <h1
            className="
              text-[40px]
              font-extrabold
              leading-[1.01]
              tracking-[-0.04em]
              text-slate-950

              dark:text-white

              sm:text-5xl

              lg:text-[50px]

              xl:text-[54px]
            "
          >
            Find the{" "}

            <span
              className="
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              right job
            </span>

            <br />

            before it gets lost

            <br />

            in the{" "}

            <span
              className="
                bg-gradient-to-r
                from-violet-600
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              noise.
            </span>
          </h1>

          {/* =================================
              DESCRIPTION
          ================================= */}

          <p
            className="
              mt-4
              max-w-lg
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400

              sm:mt-5
              sm:text-base
              sm:leading-7

              lg:mt-4
              lg:text-sm
              lg:leading-6

              xl:text-base
              xl:leading-7
            "
          >
            JobPulse brings relevant opportunities into one
            focused workspace — helping you discover, match,
            and organize your job search without the endless
            scrolling.
          </p>

          {/* =================================
              CTA BUTTONS
          ================================= */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3

              sm:flex-row

              lg:mt-5
            "
          >
            {/* Primary Button */}
            <a
              href="#jobs"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-violet-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-violet-200/50

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-violet-700
                hover:shadow-xl

                dark:shadow-violet-950/40

                sm:px-6
                sm:py-3.5
              "
            >
              Find My Jobs

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#how-it-works"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-slate-700

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-violet-300
                hover:text-violet-700

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-200
                dark:hover:border-violet-700
                dark:hover:text-violet-400

                sm:px-6
                sm:py-3.5
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-[10px]

                  dark:bg-slate-800
                "
              >
                ▶
              </span>

              See How It Works
            </a>
          </div>

          {/* =================================
              SUPPORTING INFO
          ================================= */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-3

              sm:mt-6

              lg:mt-5
            "
          >
            {/* Avatar Group */}
            <div className="flex -space-x-2">

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-violet-200
                  text-[10px]
                  font-bold
                  text-violet-700

                  dark:border-slate-950
                  dark:bg-violet-900
                  dark:text-violet-200
                "
              >
                Y
              </div>

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-purple-200
                  text-[10px]
                  font-bold
                  text-purple-700

                  dark:border-slate-950
                  dark:bg-purple-900
                  dark:text-purple-200
                "
              >
                A
              </div>

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-fuchsia-200
                  text-[10px]
                  font-bold
                  text-fuchsia-700

                  dark:border-slate-950
                  dark:bg-fuchsia-900
                  dark:text-fuchsia-200
                "
              >
                R
              </div>

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-indigo-200
                  text-[10px]
                  font-bold
                  text-indigo-700

                  dark:border-slate-950
                  dark:bg-indigo-900
                  dark:text-indigo-200
                "
              >
                S
              </div>

            </div>

            <p
              className="
                text-xs
                leading-4
                text-slate-500
                dark:text-slate-400
              "
            >
              Built for focused
              <br />
              job discovery.
            </p>
          </div>
        </div>

        {/* =====================================
            RIGHT — DASHBOARD PREVIEW
        ===================================== */}

        <div
          className="
            relative
            w-full
            min-w-0

            lg:flex
            lg:justify-center
          "
        >
          <div
            className="
              w-full

              lg:origin-center
              lg:scale-[0.91]

              xl:scale-[0.94]
            "
          >
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;