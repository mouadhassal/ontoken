<div className="bg-background text-foreground w-full h-fit">
  <div className="bg-background text-foreground min-h-screen">
    <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-14">
      <span className="font-semibold text-xl">Fjord</span>
      <button
        type="button"
        aria-label="Open profile"
        className="font-medium rounded-full bg-primary text-primary-foreground text-xs flex justify-center items-center size-8"
      >
        JD
      </button>
    </header>
    <main className="flex pt-6 pr-4 pb-8 pl-4 flex-col gap-6">
      <h1 className="font-bold text-2xl leading-8">Spending insights</h1>
      <div className="flex justify-between items-center">
        <button
          type="button"
          aria-label="Previous month"
          className="rounded-full text-muted-foreground flex justify-center items-center size-8"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="font-medium text-base" />
        <button
          type="button"
          aria-label="Next month"
          className="rounded-full text-muted-foreground flex justify-center items-center size-8"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <section className="rounded-xl bg-muted flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-sm">Total spent</span>
          <span className="font-bold text-2xl leading-8">$4,286.40</span>
          <span className="text-success text-sm">$312.60 less than May</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex relative justify-center items-center size-32">
            <svg
              viewBox="0 0 120 120"
              className="-rotate-90 size-32"
              aria-label="85.7 percent of budget spent"
            >
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="oklch(0.945 0.019 190)"
                strokeWidth="12"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="oklch(0.472 0.09 194)"
                strokeWidth="12"
                strokeDasharray="258 302"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold text-xl absolute">85.7%</span>
          </div>
          <span className="text-muted-foreground text-sm">
            of $5,000 budget
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl leading-7">By category</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary size-3" />
                <span className="text-sm">Housing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">$1,850.00</span>
                <span className="text-muted-foreground text-xs">43.2%</span>
              </div>
            </div>
            <div className="rounded-full bg-muted h-2 overflow-hidden">
              <div className="rounded-full bg-primary w-[43.2%] h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent size-3" />
                <span className="text-sm">{`Food & dining`}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">$742.60</span>
                <span className="text-muted-foreground text-xs">17.3%</span>
              </div>
            </div>
            <div className="rounded-full bg-muted h-2 overflow-hidden">
              <div className="rounded-full bg-accent w-[17.3%] h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="bg-success rounded-full size-3" />
                <span className="text-sm">Transportation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">$398.20</span>
                <span className="text-muted-foreground text-xs">9.3%</span>
              </div>
            </div>
            <div className="rounded-full bg-muted h-2 overflow-hidden">
              <div className="bg-success rounded-full w-[9.3%] h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-destructive size-3" />
                <span className="text-sm">Shopping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">$286.40</span>
                <span className="text-muted-foreground text-xs">6.7%</span>
              </div>
            </div>
            <div className="rounded-full bg-muted h-2 overflow-hidden">
              <div className="rounded-full bg-destructive w-[6.7%] h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-secondary-foreground size-3" />
                <span className="text-sm">Utilities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">$214.80</span>
                <span className="text-muted-foreground text-xs">5.0%</span>
              </div>
            </div>
            <div className="rounded-full bg-muted h-2 overflow-hidden">
              <div className="rounded-full bg-secondary-foreground w-[5%] h-full" />
            </div>
          </div>
        </div>
      </section>
      <div className="rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 items-center gap-3">
        <CircleCheck className="text-success shrink-0 size-5" />
        <span className="text-sm">
          You’re on track to stay within your monthly budget.
        </span>
      </div>
    </main>
    <nav
      aria-label="Primary navigation"
      className="bg-background border-x-border border-t border-t-border border-b-border flex fixed right-0 bottom-0 left-0 pr-2 pl-2 justify-around items-center h-16"
    >
      <a
        href="#home"
        className="text-muted-foreground flex pr-2 pl-2 flex-col items-center gap-1"
      >
        <Home className="size-5" />
        <span className="font-medium text-xs">Home</span>
      </a>
      <a
        href="#transactions"
        className="text-muted-foreground flex pr-2 pl-2 flex-col items-center gap-1"
      >
        <ArrowLeftRight className="size-5" />
        <span className="font-medium text-xs">Transactions</span>
      </a>
      <a
        href="#insights"
        className="text-primary flex pr-2 pl-2 flex-col items-center gap-1"
        aria-current="page"
      >
        <ChartNoAxesCombined className="size-5" />
        <span className="font-medium text-xs">Insights</span>
      </a>
      <a
        href="#settings"
        className="text-muted-foreground flex pr-2 pl-2 flex-col items-center gap-1"
      >
        <Settings className="size-5" />
        <span className="font-medium text-xs">Settings</span>
      </a>
    </nav>
  </div>
</div>;