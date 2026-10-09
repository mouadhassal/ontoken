<div className="bg-background w-full h-fit text-[#1b261d]">
  <div className="flex flex-col flex-1 min-h-[874px]">
    <main className="pt-8 pb-6 flex-1 px-[24px]">
      <div className="flex flex-col gap-6">
        <header className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase tracking-[0.14em] text-[#5a6a5c] text-[12px]">
              TUESDAY, OCTOBER 15
            </p>
            <h1 className="font-semibold tracking-tight text-[32px]">
              Good morning, Maya
            </h1>
            <p className="text-sm text-[#5a6a5c]">Small steps add up.</p>
          </div>
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full bg-card border-t border-r border-b border-l flex relative mt-1 justify-center items-center shrink-0 size-11 text-[#1b261d] border-[#d5e1d1]"
          >
            <Bell className="size-5" />
            <span className="rounded-full absolute top-2 right-2 size-2 bg-[#2f6b3a]" />
          </button>
        </header>
        <Card className="shadow-none bg-primary/10 pt-4 pr-4 pb-4 pl-4 gap-4 text-[#1b261d] border-[#d5e1d1] rounded-[16px]">
          <CardContent className="flex pt-0 pr-0 pb-0 pl-0 justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-sm text-[#5a6a5c]">
                Today’s progress
              </p>
              <p className="font-semibold text-2xl tracking-tight">
                3 of 5 complete
              </p>
            </div>
            <div className="bg-[conic-gradient(oklch(0.52_0.12_150)_0deg_216deg,oklch(0.88_0.025_90)_216deg_360deg)] rounded-full flex relative justify-center items-center size-20 from-[#2f6b3a] to-[#d5e1d1] via-[#2f6b3a]">
              <div className="rounded-full bg-background flex justify-center items-center size-[60px]">
                <span className="font-semibold text-sm">60%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold tracking-tight text-[18px]">
              Your habits
            </h2>
            <button type="button" className="font-medium text-sm text-[#2f6b3a]">
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="bg-card border-t border-r border-b border-l flex items-center border-[#d5e1d1] gap-[16px] rounded-[16px] p-[16px]">
              <div className="rounded-lg bg-chart-3/15 flex justify-center items-center shrink-0 size-11 text-[#1b261d]">
                <Droplets className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Drink water
                </p>
                <p className="text-xs text-[#5a6a5c]">
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
            <div className="bg-card border-t border-r border-b border-l flex items-center border-[#d5e1d1] gap-[16px] rounded-[16px] p-[16px]">
              <div className="rounded-lg bg-chart-4/15 flex justify-center items-center shrink-0 size-11 text-[#1b261d]">
                <PersonStanding className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Morning stretch
                </p>
                <p className="text-xs text-[#5a6a5c]">10 min · Daily</p>
              </div>
              <button
                type="button"
                aria-label="Toggle Morning stretch"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
            <div className="bg-card border-t border-r border-b border-l flex items-center border-[#d5e1d1] gap-[16px] rounded-[16px] p-[16px]">
              <div className="rounded-lg bg-chart-2/15 flex justify-center items-center shrink-0 size-11 text-[#1b261d]">
                <BookOpen className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Read
                </p>
                <p className="text-xs text-[#5a6a5c]">
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
            <div className="bg-card border-t border-r border-b border-l flex items-center border-[#d5e1d1] gap-[16px] rounded-[16px] p-[16px]">
              <div className="rounded-lg bg-chart-5/15 flex justify-center items-center shrink-0 size-11 text-[#1b261d]">
                <Brain className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  Meditate
                </p>
                <p className="text-xs text-[#5a6a5c]">10 min · Daily</p>
              </div>
              <button
                type="button"
                aria-label="Toggle Meditate"
                className="rounded-full flex justify-center items-center shrink-0 size-7"
              >
                <Check className="size-4" />
              </button>
            </div>
            <div className="bg-card border-t border-r border-b border-l flex items-center border-[#d5e1d1] gap-[16px] rounded-[16px] p-[16px]">
              <div className="rounded-lg bg-chart-1/15 text-chart-1 flex justify-center items-center shrink-0 size-11">
                <FallbackComponent className="size-5" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
                  No phone after 10 PM
                </p>
                <p className="text-xs text-[#5a6a5c]">Every night</p>
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
        <Card className="shadow-none bg-secondary pt-4 pr-4 pb-4 pl-4 gap-2 text-[#1b261d] border-[#d5e1d1] rounded-[16px]">
          <CardContent className="flex pt-0 pr-0 pb-0 pl-0 items-center gap-[16px]">
            <div className="rounded-full bg-chart-2/20 flex justify-center items-center shrink-0 size-10 text-[#1b261d]">
              <Flame className="size-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">Keep your streak alive</p>
              <p className="text-sm text-[#5a6a5c]">
                You’re on a 6 day streak.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-t border-[#d5e1d1]"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-4">
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#2f6b3a] py-[16px]"
        aria-current="page"
      >
        <CalendarDays className="size-5" />
        <span>Today</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
      >
        <ChartNoAxesColumnIncreasing className="size-5" />
        <span>Insights</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
      >
        <PlusCircle className="size-5" />
        <span>Add</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
      >
        <UserRound className="size-5" />
        <span>Profile</span>
      </button>
    </div>
  </nav>
</div>;