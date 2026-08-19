function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "◎",
      title: "Set up your profile",
      description:
        "Tell JobPulse about your skills, experience, preferred roles, and work preferences.",
    },
    {
      number: "02",
      icon: "✦",
      title: "Discover your matches",
      description:
        "Explore opportunities organized around the roles and preferences that matter to you.",
    },
    {
      number: "03",
      icon: "→",
      title: "Track and apply",
      description:
        "Save interesting roles, keep applications organized, and move forward with confidence.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-16
        transition-colors
        duration-300

        dark:bg-slate-950

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-violet-200/20
          blur-3xl

          dark:bg-violet-900/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-purple-200/15
          blur-3xl

          dark:bg-purple-900/10
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          max-w-[1200px]
        "
      >

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-violet-600

              dark:text-violet-400
            "
          >
            How it works
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-950

              dark:text-white

              sm:text-4xl

              lg:text-5xl
            "
          >
            From searching to
            <span className="text-violet-600">
              {" "}focused action.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-slate-500

              dark:text-slate-400

              sm:text-base
              sm:leading-7
            "
          >
            JobPulse turns a scattered job search into a
            simple workflow that helps you spend less time
            searching and more time applying.
          </p>

        </div>


        {/* =====================================
            STEPS
        ===================================== */}

        <div
          className="
            relative
            mt-14

            grid
            grid-cols-1
            gap-10

            md:grid-cols-3
            md:gap-6

            lg:mt-16
            lg:gap-10
          "
        >

          {/* Connecting Line - Desktop */}
          <div
            className="
              pointer-events-none
              absolute
              left-[16.66%]
              right-[16.66%]
              top-7
              hidden
              border-t
              border-dashed
              border-violet-200

              dark:border-violet-900

              md:block
            "
          />

          {steps.map((step) => (
            <StepCard
              key={step.number}
              {...step}
            />
          ))}

        </div>


        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <div
          className="
            mx-auto
            mt-14
            flex
            max-w-2xl
            flex-col
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-violet-100
            bg-violet-50/60
            px-5
            py-4
            text-center

            dark:border-violet-900
            dark:bg-violet-950/20

            sm:flex-row
            sm:text-left
          "
        >

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-violet-600
              text-sm
              text-white
              shadow-lg
              shadow-violet-200/50

              dark:shadow-violet-950/40
            "
          >
            ✦
          </div>

          <p
            className="
              text-xs
              leading-5
              text-slate-600

              dark:text-slate-300

              sm:text-sm
            "
          >
            The goal is simple: make your job search feel
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              {" "}focused, organized, and actionable.
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}


/* =============================================
   STEP CARD
============================================= */

function StepCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <article
      className="
        group
        relative
        text-center

        md:text-left
      "
    >

      {/* Step Number / Icon */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-violet-200
          bg-white
          text-lg
          font-semibold
          text-violet-600
          shadow-[0_8px_25px_rgba(124,58,237,0.08)]

          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-violet-300
          group-hover:shadow-[0_12px_30px_rgba(124,58,237,0.16)]

          dark:border-violet-800
          dark:bg-slate-900
          dark:text-violet-400
          dark:shadow-none

          md:mx-0
        "
      >
        {icon}
      </div>


      {/* Number */}
      <div
        className="
          mt-4
          text-[10px]
          font-bold
          tracking-[0.18em]
          text-violet-500

          dark:text-violet-400
        "
      >
        STEP {number}
      </div>


      {/* Title */}
      <h3
        className="
          mt-2
          text-lg
          font-bold
          text-slate-900

          dark:text-white

          sm:text-xl
        "
      >
        {title}
      </h3>


      {/* Description */}
      <p
        className="
          mx-auto
          mt-2
          max-w-sm
          text-sm
          leading-6
          text-slate-500

          dark:text-slate-400

          md:mx-0
        "
      >
        {description}
      </p>


      {/* Hover indicator */}
      <div
        className="
          mx-auto
          mt-4
          h-1
          w-0
          rounded-full
          bg-violet-500

          transition-all
          duration-300

          group-hover:w-10

          md:mx-0
        "
      />

    </article>
  );
}

export default HowItWorks;