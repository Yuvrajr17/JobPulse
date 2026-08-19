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
        w-full
        overflow-hidden
        bg-slate-50
        px-4
        py-14
        transition-colors
        duration-300

        dark:bg-[#0b1220]

        sm:px-6
        sm:py-18

        lg:px-8
        lg:py-24
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-16
          h-64
          w-64
          rounded-full
          bg-blue-100/50
          blur-3xl

          dark:bg-blue-950/20

          sm:-right-40
          sm:h-80
          sm:w-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-32
          h-64
          w-64
          rounded-full
          bg-slate-200/60
          blur-3xl

          dark:bg-slate-800/20

          sm:h-72
          sm:w-72
        "
      />

      {/* Container */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            w-full
            max-w-2xl
            text-center
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-600

              sm:text-xs

              dark:text-blue-400
            "
          >
            How it works
          </p>

          <h2
            className="
              mt-3
              text-[28px]
              font-extrabold
              leading-[1.15]
              tracking-tight
              text-slate-950

              dark:text-white

              sm:text-4xl

              lg:text-5xl
            "
          >
            From searching to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              focused action.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              w-full
              max-w-xl
              text-sm
              leading-6
              text-slate-500

              dark:text-slate-400

              sm:text-base
              sm:leading-7
            "
          >
            JobPulse turns a scattered job search into a simple workflow that
            helps you spend less time searching and more time applying.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            relative
            mt-12
            grid
            w-full
            grid-cols-1
            gap-10

            sm:mt-14
            sm:gap-12

            md:grid-cols-3
            md:gap-6

            lg:mt-16
            lg:gap-10
          "
        >
          {/* Desktop connecting line */}
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
              border-blue-200

              dark:border-blue-900

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

        {/* Bottom Message */}
        <div
          className="
            mx-auto
            mt-12
            flex
            w-full
            max-w-2xl
            flex-col
            items-center
            gap-3
            rounded-2xl
            border
            border-blue-100
            bg-blue-50/60
            px-4
            py-4
            text-center

            dark:border-blue-900/60
            dark:bg-blue-950/20

            sm:mt-14
            sm:flex-row
            sm:px-5
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
              bg-blue-600
              text-sm
              text-white
              shadow-lg
              shadow-blue-200/50

              dark:shadow-blue-950/40
            "
          >
            ✦
          </div>

          <p
            className="
              min-w-0
              text-xs
              leading-5
              text-slate-600

              dark:text-slate-300

              sm:text-sm
            "
          >
            The goal is simple: make your job search feel{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              focused, organized, and actionable.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

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
        w-full
        min-w-0
        text-center

        md:text-left
      "
    >
      {/* Icon */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          border
          border-blue-200
          bg-white
          text-lg
          font-semibold
          text-blue-600
          shadow-[0_8px_25px_rgba(37,99,235,0.08)]
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-blue-300
          group-hover:shadow-[0_12px_30px_rgba(37,99,235,0.14)]

          dark:border-blue-900
          dark:bg-slate-900
          dark:text-blue-400
          dark:shadow-none

          md:mx-0
        "
      >
        {icon}
      </div>

      {/* Step number */}
      <div
        className="
          mt-4
          text-[10px]
          font-bold
          tracking-[0.18em]
          text-blue-600

          dark:text-blue-400
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
          leading-6
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
          w-full
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
          bg-blue-600
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