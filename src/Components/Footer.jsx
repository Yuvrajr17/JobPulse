function Footer() {
  const productLinks = [
    ["#features", "Features"],
    ["#how-it-works", "How It Works"],
    ["#jobs", "Jobs"],
    ["#pricing", "Pricing"],
  ];

  const companyLinks = [
    ["#about", "About Us"],
    ["#blog", "Blog"],
    ["#contact", "Contact"],
  ];

  const legalLinks = [
    ["#privacy", "Privacy"],
    ["#terms", "Terms"],
  ];

  return (
    <footer
      className="
        w-full
        overflow-hidden
        border-t
        border-slate-200
        bg-white
        px-4
        py-10
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-[#0b1220]

        sm:px-6
        sm:py-12

        lg:px-8
        lg:py-14
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* Main Footer */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-9

            sm:grid-cols-2
            sm:gap-10

            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
            lg:gap-12
          "
        >
          {/* Brand */}
          <div className="w-full min-w-0">

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
              <img
  src="/favicon.svg"
  alt="JobPulse"
  className="h-9 w-9 rounded-lg"
/>

              Job
              <span className="text-blue-600">
                Pulse
              </span>
            </a>

            <p
              className="
                mt-4
                w-full
                max-w-sm
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
            <div className="mt-5 flex flex-wrap gap-2">

              <SocialButton
                label="in"
                href="https://www.linkedin.com/in/yuvraj-r17/"
              />

              <SocialButton
                label="𝕏"
                href="https://x.com/"
              />

              <SocialButton
                label="◎"
                href="https://www.instagram.com/"
              />

              <SocialButton
                label="GH"
                href="https://github.com/Yuvrajr17"
              />

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
            mt-9
            flex
            flex-col
            gap-2
            border-t
            border-slate-200
            pt-5

            dark:border-slate-800

            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
            sm:pt-6
          "
        >
          <p className="text-[11px] text-slate-400 sm:text-xs">
            © 2026 JobPulse. Built as a product concept.
          </p>

          <p className="text-[11px] text-slate-400 sm:text-xs">
            Designed for focused job discovery.
          </p>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="min-w-0">

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

      <ul className="mt-4 space-y-2.5">

        {links.map(([href, label]) => (
          <li key={label}>

            <a
              href={href}
              className="
                inline-block
                text-sm
                text-slate-500
                transition-colors
                hover:text-blue-600

                dark:text-slate-400
                dark:hover:text-blue-400
              "
            >
              {label}
            </a>

          </li>
        ))}

      </ul>
    </div>
  );
}

function SocialButton({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        duration-200

        hover:-translate-y-0.5
        hover:border-blue-200
        hover:bg-blue-50
        hover:text-blue-600

        dark:border-slate-800
        dark:bg-slate-900
        dark:text-slate-400
        dark:hover:border-blue-800
        dark:hover:bg-blue-950/40
        dark:hover:text-blue-400
      "
    >
      {label}
    </a>
  );
}

export default Footer;