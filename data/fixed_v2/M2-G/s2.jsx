<div className="bg-background text-foreground w-full h-fit">
  <div className="font-manrope bg-background text-foreground flex flex-col min-h-screen">
    <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-12">
      <span className="font-bold text-lg leading-6 text-[#2f6b3a]">Moss</span>
      <div className="rounded-full bg-secondary flex justify-center items-center size-8 text-[#2f6b3a]">
        <Leaf className="size-4" aria-hidden="true" />
      </div>
    </header>
    <main className="pr-4 pb-12 pl-4 flex-1 overflow-y-auto">
      <div className="flex pt-6 pb-6 flex-col gap-4">
        <button
          type="button"
          className="font-semibold text-sm leading-[18px] flex pt-0 pr-0 pb-0 pl-0 items-center gap-1 w-fit text-[#2f6b3a]"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          <span>Today</span>
        </button>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-foreground text-2xl leading-[31px]">
            How are you feeling today?
          </h1>
          <p className="font-medium text-sm leading-[18px] text-[#5a6a5c]">
            There is no right answer. Choose what feels closest.
          </p>
        </div>
        <div className="rounded-2xl bg-card text-card-foreground flex pt-4 pr-4 pb-4 pl-4 flex-col gap-4">
          <span className="font-semibold text-xs leading-4 text-[#5a6a5c]">
            Tuesday, October 15
          </span>
          <div className="grid gap-4 grid-cols-2">
            <button type="button">
              <Leaf className="size-6" aria-hidden="true" />
              <span className="font-semibold text-sm leading-[18px]">
                Peaceful
              </span>
              <Check className="hidden size-4" aria-hidden="true" />
            </button>
            <button type="button">
              <CloudSun className="size-6" aria-hidden="true" />
              <span className="font-semibold text-sm leading-[18px]">Okay</span>
              <Check className="hidden size-4" aria-hidden="true" />
            </button>
            <button type="button">
              <Moon className="size-6" aria-hidden="true" />
              <span className="font-semibold text-sm leading-[18px]">
                Tired
              </span>
              <Check className="size-4" aria-hidden="true" />
            </button>
            <button type="button">
              <Cloud className="size-6" aria-hidden="true" />
              <span className="font-semibold text-sm leading-[18px]">Low</span>
              <Check className="hidden size-4" aria-hidden="true" />
            </button>
            <button type="button">
              <Waves className="size-6" aria-hidden="true" />
              <span className="font-semibold text-sm leading-[18px]">
                Anxious
              </span>
              <Check className="hidden size-4" aria-hidden="true" />
            </button>
            <button type="button">
              <Sun className="size-6" aria-hidden="true" />
              <span className="font-semibold text-sm leading-[18px]">
                Energized
              </span>
              <Check className="hidden size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <label className="font-semibold text-foreground text-xs leading-4 flex flex-col gap-2">
          <span>Anything on your mind?</span>
          <textarea
            placeholder="A few words are enough..."
            className="font-medium resize-none rounded-lg bg-card text-foreground text-sm leading-[18px] border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input pt-4 pr-4 pb-4 pl-4 min-h-24 placeholder:text-[#5a6a5c]"
            defaultValue=""
          />
        </label>
        <button
          type="button"
          className="font-semibold rounded-lg text-primary-foreground text-base leading-[21px] pt-4 pr-4 pb-4 pl-4 w-full bg-[#2f6b3a]"
        >
          Save check-in
        </button>
        <p className="font-semibold text-center text-xs leading-4 text-[#5a6a5c]">
          You can update this later.
        </p>
      </div>
    </main>
    <nav
      className="bg-background border-x-border border-t border-t-border border-b-border fixed right-0 bottom-0 left-0"
      aria-label="Primary navigation"
    >
      <div className="grid grid-cols-3">
        <a
          href="#today"
          className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#5a6a5c]"
        >
          <CalendarDays className="size-5" aria-hidden="true" />
          <span className="font-semibold text-xs leading-4">Today</span>
        </a>
        <a
          href="#check-in"
          className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#2f6b3a]"
          aria-current="page"
        >
          <ClipboardCheck className="size-5" aria-hidden="true" />
          <span className="font-semibold text-xs leading-4">Check-in</span>
        </a>
        <a
          href="#trends"
          className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#5a6a5c]"
        >
          <TrendingUp className="size-5" aria-hidden="true" />
          <span className="font-semibold text-xs leading-4">Trends</span>
        </a>
      </div>
    </nav>
  </div>
</div>;