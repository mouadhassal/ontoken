<div className="bg-background w-full h-fit text-[#5a6a5c]">
  <div className="flex flex-col min-h-[874px]">
    <main className="flex pt-6 pr-6 pb-6 pl-6 flex-col flex-1 gap-6">
      <header className="flex justify-between items-center">
        <h1 className="font-semibold tracking-tight text-[32px] font-[family-name:Manrope]">Insights</h1>
        <button
          type="button"
          className="bg-card text-foreground border-t border-r border-b border-l flex justify-center items-center size-10 border-[#d5e1d1] rounded-[16px]"
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
        <span className="font-medium text-sm font-[family-name:Manrope]">Oct 14 – Oct 20</span>
        <button
          type="button"
          className="rounded-full flex justify-center items-center size-9 text-[#5a6a5c]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <section className="bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4 rounded-[16px]">
        <h2 className="font-semibold text-lg font-[family-name:Manrope]">This week</h2>
        <div className="grid gap-4 grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl font-[family-name:Manrope]">78%</span>
            <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">Completion</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl font-[family-name:Manrope]">6 days</span>
            <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">
              Current streak
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl font-[family-name:Manrope]">12</span>
            <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">Habits done</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg font-[family-name:Manrope]">Daily completion</h2>
        <div className="bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4 rounded-[16px]">
          <div className="border-b flex relative pr-1 pl-1 justify-between items-end h-40 border-[#d5e1d1] pb-[32px]">
            <div className="border-b absolute right-1 bottom-7 left-1 border-[#d5e1d1]" />
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-4/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">M</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-3/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">T</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-chart-2 w-5 h-full" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">W</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-2/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">T</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-4/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">F</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg bg-chart-2 w-5 h-full" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">S</span>
            </div>
            <div className="flex relative z-10 flex-col justify-end items-center gap-2 w-7 h-full">
              <div className="rounded-t-lg w-5 h-3/5 bg-[#2f6b3a]" />
              <span className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">S</span>
            </div>
          </div>
          <p className="text-sm text-[#5a6a5c] font-[family-name:Manrope]">Best day: Wednesday</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg font-[family-name:Manrope]">Habit streaks</h2>
        <div className="flex flex-col gap-2">
          <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center rounded-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-medium font-[family-name:Manrope]">Drink water</span>
              <span className="text-sm text-[#5a6a5c] font-[family-name:Manrope]">
                12 day streak
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#5a6a5c]">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold font-[family-name:Manrope]">12</span>
            </div>
          </div>
          <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center rounded-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-medium font-[family-name:Manrope]">Morning stretch</span>
              <span className="text-sm text-[#5a6a5c] font-[family-name:Manrope]">
                6 day streak
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#5a6a5c]">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold font-[family-name:Manrope]">6</span>
            </div>
          </div>
          <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center rounded-[16px]">
            <div className="flex flex-col gap-1">
              <span className="font-medium font-[family-name:Manrope]">Read</span>
              <span className="text-sm text-[#5a6a5c] font-[family-name:Manrope]">
                4 day streak
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#5a6a5c]">
              <Flame className="fill-chart-2 size-5" />
              <span className="font-semibold font-[family-name:Manrope]">4</span>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center text-xs mt-auto text-[#5a6a5c] font-[family-name:Manrope]">
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
        <span className="font-[family-name:Manrope]">Today</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#2f6b3a] py-[16px]"
        aria-current="page"
      >
        <ChartNoAxesColumnIncreasing className="size-5" />
        <span className="font-[family-name:Manrope]">Insights</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
      >
        <PlusCircle className="size-5" />
        <span className="font-[family-name:Manrope]">Add</span>
      </button>
      <button
        type="button"
        className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
      >
        <UserRound className="size-5" />
        <span className="font-[family-name:Manrope]">Profile</span>
      </button>
    </div>
  </nav>
</div>;