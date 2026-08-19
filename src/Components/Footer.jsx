function Footer() {
  const productLinks = [
    "Features",
    "How It Works",
    "Jobs",
    "Pricing",
  ];

  const companyLinks = [
    "About Us",
    "Blog",
    "Contact",
  ];

  const legalLinks = [
    "Privacy",
    "Terms",
  ];

  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-white
        px-4
        py-12
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-950

        sm:px-6

        lg:px-8
        lg:py-14
      "
    >
      <div className="mx-auto max-w-[1380px]">

        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2

            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
          "
        >

          {/* Brand */}
          <div>

            <a
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                text-xl
                font-bold
                text-slate-900

                dark:text-white
              "
            >
              <span className="text-2xl text-violet-600">
                〽
              </span>

              Job<span className="text-violet-600">
                Pulse
              </span>
            </a>


            <p
              className="
                mt-4
                max-w-xs
                text-sm
                leading-6
                text-slate-500

                dark:text-slate-400
              "
            >
              A focused workspace for discovering,
              organizing, and acting on better job
              opportunities.
            </p>


            {/* Socials */}
            <div className="mt-5 flex gap-2">

              <SocialButton label="in" />

              <SocialButton label="𝕏" />

              <SocialButton label="◎" />

              <SocialButton label="GH" />

            </div>

          </div>


          {/* Product */}
          <FooterColumn
            title="Product"
            links={productLinks}
          />


          {/* Company */}
          <FooterColumn
            title="Company"
            links={companyLinks}
          />


          {/* Legal */}
          <FooterColumn
            title="Legal"
            links={legalLinks}
          />

        </div>


        {/* Bottom */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-slate-200
            pt-6

            dark:border-slate-800

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              text-xs
              text-slate-400
            "
          >
            © 2026 JobPulse. Built as a product concept.
          </p>


          <p
            className="
              text-xs
              text-slate-400
            "
          >
            Designed for focused job discovery.
          </p>

        </div>

      </div>
    </footer>
  );
}


/* ============================================
   FOOTER COLUMN
============================================ */

function FooterColumn({
  title,
  links,
}) {
  return (
    <div>

      <h3
        className="
          text-sm
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        {title}
      </h3>


      <ul className="mt-4 space-y-3">

        {links.map((link) => (
          <li key={link}>

            <a
              href="#"
              className="
                text-sm
                text-slate-500
                transition-colors

                hover:text-violet-600

                dark:text-slate-400
                dark:hover:text-violet-400
              "
            >
              {link}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}


/* ============================================
   SOCIAL BUTTON
============================================ */

function SocialButton({ label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="
        flex
        h-9
        min-w-9
        items-center
        justify-center
        rounded-lg
        border
        border-slate-200
        bg-slate-50
        px-2
        text-xs
        font-semibold
        text-slate-500

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-violet-200
        hover:bg-violet-50
        hover:text-violet-600

        dark:border-slate-800
        dark:bg-slate-900
        dark:text-slate-400
        dark:hover:border-violet-800
        dark:hover:bg-violet-950/40
        dark:hover:text-violet-400
      "
    >
      {label}
    </a>
  );
}

export default Footer;