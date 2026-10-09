<div className="bg-background w-full h-fit text-[#1b261d]">
  <div className="flex flex-col min-h-[874px]">
    <main className="flex pt-6 pr-6 pb-6 pl-6 flex-col flex-1 gap-6">
      <header className="flex justify-between items-center">
        <h1 className="font-semibold tracking-tight text-[32px]">Insights</h1>
        <button
          type="button"
          className="bg-card border-t border-r border-b border-l flex justify-center items-center size-10 text-[#1b261d] border-[#d5e1d1] rounded-[16px]"
        >
          <CalendarDays className="size-5" />
        </button>
      </header>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="rounded-full flex justify-center items-center size-9 text-[#5a6a5c]"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="font-medium text-sm">Oct 14 – Oct 20</span>
        <button
          type="button"
          className="rounded-full flex justify-center items-center size-9 text-[#5a6a5c]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <section className="bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4 rounded-[16px]">
        <h2 className="font-semibold text-lg">This week</h2>
        <div className="grid gap-4 grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">78%</span>
            <span className="text-xs text-[#5a6a5c]">Completion</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">6 days</span>
            <span className="text-xs text-[#5a6a5c]">
              Current streak
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">12</span>
            <span className="text-xs text-[#5a6a5c]">Habits done</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Daily completion</h2>
        <div className="bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4 rounded-[16px]">
          <div className="border-b flex relative pr-1 pl-1 justify-between items-end h-40 border-[#d5e1d1] pb-[32px]">
            <div className="border-b absolute right-1 bottom-7 left-1 border-[#d5e1d1]" />
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-4/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c]">M</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-3/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c]">T</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-chart-2 w-5 h-full" />
              <span className="text-xs text-[#5a6a5c]">W</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-2/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c]">T</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-4/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c]">F</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-chart-2 w-5 h-full" />
              <span className="text-xs text-[#5a6a5c]">S</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-3/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c]">S</span>
            </div>
          </div>
          <p className="text-sm text-[#5a6a5c]">Best day: Wednesday</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Habit streaks</h2>
        <div className="flex flex-col gap-2">
          <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center rounded-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Drink water</span>
              <span className="text-sm text-[#5a6a5c]">
                12 day streak
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#1b261d]">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold">12</span>
            </div>
          </div>
          <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center rounded-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Morning stretch</span>
              <span className="text-sm text-[#5a6a5c]">
                6 day streak
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#1b261d]">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold">6</span>
            </div>
          </div>
          <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center rounded-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Read</span>
              <span className="text-sm text-[#5a6a5c]">
                4 day streak
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#1b261d]">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold">4</span>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center text-xs mt-auto text-[#5a6a5c]">
        Consistency beats intensity.
      </p>
    </main>
  </div>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-t border-[#d5e1d1]"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-4">
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
      >
        <CalendarDays className="size-5" />
        <span>Today</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#2f6b3a] py-[16px]"
        aria-current="page"
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