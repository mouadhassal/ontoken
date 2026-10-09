<div className="bg-background text-foreground w-full h-fit">
  <div className="flex flex-col flex-1 min-h-[874px]">
    <main className="pt-8 pr-5 pb-6 pl-5 flex-1">
      <div className="flex flex-col gap-6">
        <header className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase text-muted-foreground text-[11px] tracking-[0.14em]">
              TUESDAY, OCTOBER 15
            </p>
            <h1 className="font-semibold text-3xl tracking-tight">
              Good morning, Maya
            </h1>
            <p className="text-muted-foreground text-sm">Small steps add up.</p>
          </div>
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full bg-card text-foreground border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex relative mt-1 justify-center items-center shrink-0 size-11"
          >
            <Bell className="size-5" />
            <span className="rounded-full bg-primary absolute top-2 right-2 size-2" />
          </button>
        </header>
        <Card className="shadow-none rounded-2xl bg-primary/10 border-border pt-4 pr-4 pb-4 pl-4 gap-4">
          <CardContent className="flex pt-0 pr-0 pb-0 pl-0 justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-muted-foreground text-sm">
                Today’s progress
              </p>
              <p className="font-semibold text-2xl tracking-tight">
                3 of 5 complete
              </p>
            </div>
            <div className="bg-[conic-gradient(oklch(0.52_0.12_150)_0deg_216deg,oklch(0.88_0.025_90)_216deg_360deg)] rounded-full flex relative justify-center items-center size-20">
              <div className="rounded-full bg-background flex justify-center items-center size-[60px]">
                <span className="font-semibold text-sm">60%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl tracking-tight">
              Your habits
            </h2>
            <button type="button" className="font-medium text-primary text-sm">
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-[14px]">
            <div className="rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-3 pr-3 pb-3 pl-3 items-center gap-3">
              <div className="rounded-lg bg-chart-3/15 text-chart-3 flex justify-center items-center shrink-0 size-11">
                <Droplets className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Drink water
                </p>
                <p className="text-muted-foreground text-xs">
                  8 glasses · Daily
                </p>
              </div>
              <button
                type="button"
                aria-label="Toggle Drink water"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
            <div className="rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-3 pr-3 pb-3 pl-3 items-center gap-3">
              <div className="rounded-lg bg-chart-4/15 text-chart-4 flex justify-center items-center shrink-0 size-11">
                <PersonStanding className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Morning stretch
                </p>
                <p className="text-muted-foreground text-xs">10 min · Daily</p>
              </div>
              <button
                type="button"
                aria-label="Toggle Morning stretch"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
            <div className="rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-3 pr-3 pb-3 pl-3 items-center gap-3">
              <div className="rounded-lg bg-chart-2/15 text-chart-2 flex justify-center items-center shrink-0 size-11">
                <BookOpen className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Read
                </p>
                <p className="text-muted-foreground text-xs">
                  20 pages · Daily
                </p>
              </div>
              <button
                type="button"
                aria-label="Toggle Read"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
            <div className="rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-3 pr-3 pb-3 pl-3 items-center gap-3">
              <div className="rounded-lg bg-chart-5/15 text-chart-5 flex justify-center items-center shrink-0 size-11">
                <Brain className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Meditate
                </p>
                <p className="text-muted-foreground text-xs">10 min · Daily</p>
              </div>
              <button
                type="button"
                aria-label="Toggle Meditate"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
            <div className="rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-3 pr-3 pb-3 pl-3 items-center gap-3">
              <div className="rounded-lg bg-chart-1/15 text-chart-1 flex justify-center items-center shrink-0 size-11">
                <FallbackComponent className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  No phone after 10 PM
                </p>
                <p className="text-muted-foreground text-xs">Every night</p>
              </div>
              <button
                type="button"
                aria-label="Toggle No phone after 10 PM"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
          </div>
        </section>
        <Card className="shadow-none rounded-2xl bg-secondary border-border pt-4 pr-4 pb-4 pl-4 gap-2">
          <CardContent className="flex pt-0 pr-0 pb-0 pl-0 items-center gap-3">
            <div className="rounded-full bg-chart-2/20 text-chart-2 flex justify-center items-center shrink-0 size-10">
              <Flame className="size-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Keep your streak alive</p>
              <p className="text-muted-foreground text-sm">
                You’re on a 6 day streak.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-x-border border-t border-t-border border-b-border"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-4">
      <button
        type="button"
        className="font-medium text-primary text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
        aria-current="page"
      >
        <CalendarDays className="size-5" />
        <span>Today</span>
      </button>
      <button
        type="button"
        className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
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