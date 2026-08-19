function CTA() {
  return (
    <section
      id="jobs"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-4
        py-16
        transition-colors
        duration-300

        dark:bg-slate-900

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-200/30
          blur-3xl

          dark:bg-violet-900/20
        "
      />

      {/* CTA Card */}
      <div
        className="
          relative
          mx-auto
          max-w-[1100px]
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-violet-600
          via-purple-600
          to-fuchsia-600
          px-6
          py-12
          text-center
          shadow-[0_25px_70px_rgba(109,40,217,0.25)]

          sm:px-10
          sm:py-14

          lg:px-16
          lg:py-16
        "
      >

        {/* Decorative circles */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-16
            h-56
            w-56
            rounded-full
            border
            border-white/10
          "
        />

        {/* Content */}
        <div className="relative mx-auto max-w-2xl">

          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white/15
              text-xl
              text-white
              backdrop-blur-sm
            "
          >
            ✦
          </div>

          <p
            className="
              mt-5
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-violet-100
            "
          >
            Your next opportunity starts here
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl

              lg:text-5xl
            "
          >
            Stop searching everywhere.
            <br />

            <span className="text-violet-200">
              Start finding what fits.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-violet-100

              sm:text-base
              sm:leading-7
            "
          >
            Bring your job search into one focused workspace
            and spend more time on opportunities that matter.
          </p>


          {/* Button */}
          <div className="mt-8">

            <a
              href="#top"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-white
                px-7
                py-3.5
                text-sm
                font-bold
                text-violet-700
                shadow-xl
                shadow-violet-900/20

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-violet-50
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