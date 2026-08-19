function CTA() {
  return (
    <section
      id="jobs"
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-14
        transition-colors
        duration-300

        dark:bg-[#0b1220]

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1100px]
          overflow-hidden
          rounded-2xl
          border
          border-blue-100
          bg-blue-600
          px-5
          py-10
          text-center
          shadow-[0_20px_55px_rgba(37,99,235,0.14)]

          dark:border-blue-900/60
          dark:bg-blue-700
          dark:shadow-[0_20px_55px_rgba(0,0,0,0.25)]

          sm:rounded-3xl
          sm:px-10
          sm:py-14

          lg:px-16
          lg:py-16
        "
      >
        {/* Decorative elements */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-36
            w-36
            rounded-full
            border
            border-white/10

            sm:-right-20
            sm:-top-20
            sm:h-48
            sm:w-48
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-12
            h-44
            w-44
            rounded-full
            border
            border-white/10

            sm:-bottom-24
            sm:-left-16
            sm:h-56
            sm:w-56
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-8
            top-8
            h-2
            w-2
            rounded-full
            bg-white/20

            sm:right-10
            sm:top-10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-8
            left-10
            h-3
            w-3
            rounded-full
            bg-white/10

            sm:bottom-12
            sm:left-16
          "
        />

        {/* Content */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-2xl
          "
        >
          {/* Icon */}
          <div
            className="
              mx-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-white/15
              text-lg
              text-white
              backdrop-blur-sm

              sm:h-12
              sm:w-12
              sm:rounded-2xl
              sm:text-xl
            "
          >
            ✦
          </div>

          {/* Eyebrow */}
          <p
            className="
              mt-5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-blue-100

              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            Your next opportunity starts here
          </p>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-3
              max-w-xl
              text-[28px]
              font-extrabold
              leading-[1.15]
              tracking-tight
              text-white

              sm:text-4xl

              lg:text-5xl
            "
          >
            Stop searching everywhere.
            <br className="hidden sm:block" />

            <span className="text-blue-100">
              Start finding what fits.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              w-full
              max-w-xl
              text-sm
              leading-6
              text-blue-100

              sm:text-base
              sm:leading-7
            "
          >
            Bring your job search into one focused workspace and spend more
            time on opportunities that matter.
          </p>

          {/* CTA */}
          <div className="mt-7 sm:mt-8">
            <a
              href="#top"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-blue-700
                shadow-lg
                shadow-blue-900/20
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-blue-50

                sm:w-auto
                sm:px-7
              "
            >
              Start Exploring

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;