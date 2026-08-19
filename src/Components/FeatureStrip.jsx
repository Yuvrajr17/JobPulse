function FeatureStrip() {
  const features = [
    {
      number: "01",
      icon: "◎",
      title: "Smart Matching",
      description:
        "Surface roles that align with your skills, experience, and preferences.",
    },
    {
      number: "02",
      icon: "ϟ",
      title: "Fresh Opportunities",
      description:
        "Bring new openings into one focused workspace instead of scattered tabs.",
    },
    {
      number: "03",
      icon: "▣",
      title: "Application Hub",
      description:
        "Keep your saved jobs and applications organized in one place.",
    },
    {
      number: "04",
      icon: "✦",
      title: "Personalized Discovery",
      description:
        "Build a focused job feed around the roles you actually want.",
    },
  ];

  return (
    <section
      id="features"
      className="
        relative
        border-y
        border-slate-100
        bg-slate-50
        px-4
        py-12
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-900/60

        sm:px-6
        sm:py-14

        lg:px-8
        lg:py-16
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-48
          w-96
          -translate-x-1/2
          rounded-full
          bg-violet-200/20
          blur-3xl

          dark:bg-violet-900/10
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
        "
      >

        {/* Section intro */}
        <div
          className="
            mb-8
            flex
            flex-col
            gap-3

            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div className="max-w-xl">

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
              One focused workspace
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                tracking-tight
                text-slate-950

                dark:text-white

                sm:text-3xl

                lg:text-4xl
              "
            >
              Everything you need to
              <span className="text-violet-600">
                {" "}job search smarter.
              </span>
            </h2>

          </div>


          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-slate-500

              dark:text-slate-400
            "
          >
            Less searching. Less switching between platforms.
            More time spent on opportunities that actually fit.
          </p>

        </div>


        {/* Feature Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-slate-200

            dark:border-slate-800
            dark:bg-slate-800

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >

          {features.map((feature) => (
            <FeatureCard
              key={feature.number}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}


/* ============================================
   FEATURE CARD
============================================ */

function FeatureCard({
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
        bg-white
        p-5
        transition-all
        duration-300

        hover:bg-violet-50/50

        dark:bg-slate-900
        dark:hover:bg-violet-950/20

        sm:p-6
      "
    >

      {/* Top row */}
      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        {/* Icon */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-violet-100
            text-lg
            font-semibold
            text-violet-600

            transition-transform
            duration-300

            group-hover:-translate-y-1
            group-hover:rotate-3

            dark:bg-violet-950/60
            dark:text-violet-400
          "
        >
          {icon}
        </div>


        {/* Number */}
        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.15em]
            text-slate-300

            dark:text-slate-700
          "
        >
          {number}
        </span>

      </div>


      {/* Content */}
      <div className="mt-7">

        <h3
          className="
            text-base
            font-bold
            text-slate-900

            dark:text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-xs
            leading-5
            text-slate-500

            dark:text-slate-400
          "
        >
          {description}
        </p>

      </div>


      {/* Hover arrow */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-1
          text-[10px]
          font-semibold
          text-violet-600

          opacity-0
          transition-all
          duration-300

          group-hover:translate-x-1
          group-hover:opacity-100

          dark:text-violet-400
        "
      >
        Explore
        <span>→</span>
      </div>

    </article>
  );
}

export default FeatureStrip;