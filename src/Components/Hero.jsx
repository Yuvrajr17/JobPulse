import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section className="w-full max-w-full min-w-0 overflow-x-hidden bg-slate-50 px-4 py-8 transition-colors duration-300 dark:bg-[#0b1220] sm:px-6 sm:py-10 lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full max-w-[1380px] min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-8 xl:gap-12">
        
        <div className="w-full max-w-full min-w-0 lg:pt-12 xl:pt-16">
          
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            <span>Smart job discovery</span>
          </div>

          <h1 className="w-full max-w-full break-words text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-5xl md:text-[52px] lg:text-[48px] xl:text-[56px]">
            <span className="block">
              Your next
              <span className="text-blue-600"> opportunity,</span>
            </span>

            <span className="block">
              without the endless search.
            </span>
          </h1>

          <p className="mt-5 w-full max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
            JobPulse brings relevant opportunities into one focused
            workspace, helping you discover better roles and keep your
            applications organized.
          </p>

          <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:flex-row">
            <a
              href="#jobs"
              className="group inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 sm:w-auto"
            >
              Find My Jobs
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex w-full min-w-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-slate-800 dark:hover:text-blue-400 sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <div className="mt-7 flex min-w-0 items-center gap-3">
  <img
  src="/favicon.svg"
  alt="JobPulse"
  className="h-9 w-9 rounded-lg"
/>

  <div className="min-w-0">
    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
      Built for focused job searching
    </p>

    <p className="mt-0.5 text-[11px] text-slate-400">
      Discover · Save · Apply
    </p>
  </div>
</div>
        </div>

        <div className="w-full max-w-full min-w-0 overflow-hidden lg:pt-2">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;