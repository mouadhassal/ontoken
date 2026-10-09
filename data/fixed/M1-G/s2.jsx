<div className="bg-background w-full h-fit text-[#1b261d]">
  <div className="flex flex-col min-h-[874px]">
    <main className="pt-6 pr-6 pb-6 pl-6 flex-1">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl leading-[31px] text-[#1b261d] font-[family-name:Manrope]">
            New habit
          </h1>
          <p className="font-medium text-sm leading-[18px] text-[#5a6a5c] font-[family-name:Manrope]">
            Small steps become lasting change.
          </p>
        </div>
        <div className="bg-card flex pt-4 pr-4 pb-4 pl-4 flex-col gap-6 rounded-[16px]">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="habit-name"
              className="font-semibold text-sm leading-[18px] text-[#1b261d] font-[family-name:Manrope]"
            >
              Habit name
            </label>
            <input
              id="habit-name"
              type="text"
              className="ring-primary font-medium bg-card text-base leading-[21px] border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border outline-none pr-4 pl-4 h-12 text-[#1b261d] rounded-[16px] font-[family-name:Manrope]"
              defaultValue="Take a short walk"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm leading-[18px] text-[#1b261d] font-[family-name:Manrope]">
              How often?
            </span>
            <div className="flex gap-2">
              <button className="font-[family-name:Manrope]" type="button">Daily</button>
              <button className="font-[family-name:Manrope]" type="button">Weekdays</button>
              <button className="font-[family-name:Manrope]" type="button">Custom</button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="reminder"
              className="font-semibold text-sm leading-[18px] text-[#1b261d] font-[family-name:Manrope]"
            >
              Reminder
            </label>
            <div className="relative">
              <input
                id="reminder"
                type="text"
                className="ring-primary font-medium bg-card text-base leading-[21px] border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border outline-none pr-12 pl-4 w-full h-12 text-[#1b261d] rounded-[16px] font-[family-name:Manrope]"
                defaultValue="8:00 AM"
              />
              <Clock
                className="-translate-y-1/2 text-muted-foreground absolute top-1/2 right-4 size-5"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm leading-[18px] text-[#1b261d] font-[family-name:Manrope]">
              Choose an icon
            </span>
            <div className="flex justify-between gap-2">
              <button type="button" aria-label="Water drop">
                <Droplets aria-hidden="true" />
              </button>
              <button type="button" aria-label="Sun">
                <Sun aria-hidden="true" />
              </button>
              <button type="button" aria-label="Book">
                <BookOpen aria-hidden="true" />
              </button>
              <button type="button" aria-label="Heart">
                <Heart aria-hidden="true" />
              </button>
              <button type="button" aria-label="Dumbbell">
                <Dumbbell aria-hidden="true" />
              </button>
              <button type="button" aria-label="Moon">
                <Moon aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="font-semibold text-base leading-[21px] w-full text-[#d5e1d1] bg-[#2f6b3a] rounded-[16px] p-[16px] font-[family-name:Manrope]"
          >
            Save habit
          </button>
          <button
            type="button"
            className="font-semibold text-sm leading-[18px] w-full p-[16px] text-[#5a6a5c] font-[family-name:Manrope]"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
    <nav
      className="bg-card border-x-border border-t border-t-border border-b-border flex pt-2 pr-4 pb-4 pl-4 w-full"
      aria-label="Primary navigation"
    >
      <a
        href="#today"
        className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
      >
        <Check className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs font-[family-name:Manrope]">Today</span>
      </a>
      <a
        href="#add"
        className="flex flex-col items-center flex-1 gap-1 text-[#2f6b3a]"
      >
        <Plus className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs font-[family-name:Manrope]">Add</span>
      </a>
      <a
        href="#stats"
        className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
      >
        <BarChart3 className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs font-[family-name:Manrope]">Stats</span>
      </a>
      <a
        href="#profile"
        className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
      >
        <User className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs font-[family-name:Manrope]">Profile</span>
      </a>
    </nav>
  </div>
</div>;