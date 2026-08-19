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
        w-full
        overflow-hidden
        border-y
        border-slate-100
        bg-white
        px-4
        py-12
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-[#0f172a]

        sm:px-6
        sm:py-14

        lg:px-8
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* Section Header */}
        <div
          className="
            mb-8
            flex
            flex-col
            gap-4

            sm:mb-10

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="w-full max-w-2xl">

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
              One focused workspace
            </p>

            <h2
              className="
                mt-2
                max-w-2xl
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-950

                dark:text-white

                sm:text-3xl

                lg:text-4xl
              "
            >
              Everything you need to{" "}
              <span className="text-blue-600 dark:text-blue-400">
                job search smarter.
              </span>
            </h2>
          </div>
        </div>

        {/* Feature Grid */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-slate-200

            sm:grid-cols-2

            lg:grid-cols-4

            dark:border-slate-800
            dark:bg-slate-800
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
        flex
        min-h-[220px]
        min-w-0
        flex-col
        bg-white
        p-5
        transition-colors
        duration-300

        hover:bg-blue-50/50

        dark:bg-[#111827]
        dark:hover:bg-blue-950/20

        sm:min-h-[230px]
        sm:p-6
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between gap-3">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-lg
            font-semibold
            text-blue-600
            transition-all
            duration-300

            group-hover:-translate-y-1
            group-hover:bg-blue-100

            dark:bg-blue-950/50
            dark:text-blue-400
            dark:group-hover:bg-blue-900/50
          "
        >
          {icon}
        </div>

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
      <div className="mt-6 min-w-0">

        <h3
          className="
            text-base
            font-bold
            leading-6
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

      {/* Explore */}
      <div
        className="
          mt-auto
          flex
          items-center
          gap-1
          pt-6
          text-[10px]
          font-semibold
          text-blue-600
          transition-all
          duration-300

          group-hover:translate-x-1

          dark:text-blue-400
        "
      >
        Explore
        <span>→</span>
      </div>
    </article>
  );
}

export default FeatureStrip;