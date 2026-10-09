<div className="bg-background text-foreground w-full h-fit">
  <div className="flex flex-col min-h-[874px]">
    <main className="flex pt-6 pr-6 pb-6 pl-6 flex-col flex-1 gap-6">
      <header className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl tracking-tight">Insights</h1>
        <button
          type="button"
          className="rounded-xl bg-card text-foreground border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex justify-center items-center size-10"
        >
          <CalendarDays className="size-5" />
        </button>
      </header>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="rounded-full text-muted-foreground flex justify-center items-center size-9"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="font-medium text-sm">Oct 14 – Oct 20</span>
        <button
          type="button"
          className="rounded-full text-muted-foreground flex justify-center items-center size-9"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <section className="rounded-2xl bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4">
        <h2 className="font-semibold text-lg">This week</h2>
        <div className="grid gap-4 grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">78%</span>
            <span className="text-muted-foreground text-xs">Completion</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">6 days</span>
            <span className="text-muted-foreground text-xs">
              Current streak
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">12</span>
            <span className="text-muted-foreground text-xs">Habits done</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Daily completion</h2>
        <div className="rounded-2xl bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4">
          <div className="border-t-border border-r-border border-b border-b-border border-l-border flex relative pr-1 pb-7 pl-1 justify-between items-end h-40">
            <div className="border-t-border/60 border-r-border/60 border-b border-b-border/60 border-l-border/60 absolute right-1 bottom-7 left-1" />
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-primary w-5 h-4/5" />
              <span className="text-muted-foreground text-xs">M</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-primary w-5 h-3/5" />
              <span className="text-muted-foreground text-xs">T</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-chart-2 w-5 h-full" />
              <span className="text-muted-foreground text-xs">W</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-primary w-5 h-2/5" />
              <span className="text-muted-foreground text-xs">T</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-primary w-5 h-4/5" />
              <span className="text-muted-foreground text-xs">F</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-chart-2 w-5 h-full" />
              <span className="text-muted-foreground text-xs">S</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-primary w-5 h-3/5" />
              <span className="text-muted-foreground text-xs">S</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">Best day: Wednesday</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Habit streaks</h2>
        <div className="flex flex-col gap-2">
          <div className="rounded-2xl bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Drink water</span>
              <span className="text-muted-foreground text-sm">
                12 day streak
              </span>
            </div>
            <div className="text-chart-2 flex items-center gap-2">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold">12</span>
            </div>
          </div>
          <div className="rounded-2xl bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Morning stretch</span>
              <span className="text-muted-foreground text-sm">
                6 day streak
              </span>
            </div>
            <div className="text-chart-2 flex items-center gap-2">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold">6</span>
            </div>
          </div>
          <div className="rounded-2xl bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Read</span>
              <span className="text-muted-foreground text-sm">
                4 day streak
              </span>
            </div>
            <div className="text-chart-2 flex items-center gap-2">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold">4</span>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center text-muted-foreground text-xs mt-auto">
        Consistency beats intensity.
      </p>
    </main>
  </div>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-x-border border-t border-t-border border-b-border"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-4">
      <button
        type="button"
        className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
      >
        <CalendarDays className="size-5" />
        <span>Today</span>
      </button>
      <button
        type="button"
        className="font-medium text-primary text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
        aria-current="page"
      >
        <ChartNoAxesColumnIncreasing className="size-5" />
        <span>Insights</span>
      </button>
      <button
        type="button"
        className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
      >
        <PlusCircle className="size-5" />
        <span>Add</span>
      </button>
      <button
        type="button"
        className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
      >
        <UserRound className="size-5" />
        <span>Profile</span>
      </button>
    </div>
  </nav>
</div>;