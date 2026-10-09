<div className="bg-background text-foreground flex flex-col w-full h-fit min-h-[874px]">
  <main className="font-sans bg-[#F7FAF5] pt-6 pr-6 pb-6 pl-6 flex-1">
    <header className="flex flex-col gap-1">
      <h1 className="font-bold text-[#1B261D] text-[24px] leading-[31px]">
        Good morning, Maya
      </h1>
      <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
        Tuesday, October 8
      </p>
    </header>
    <section className="rounded-2xl bg-white flex mt-6 pt-6 pr-6 pb-6 pl-6 flex-col gap-4">
      <p className="font-semibold text-[#5A6A5C] text-[12px] leading-[16px] tracking-wide">
        TODAY’S PROGRESS
      </p>
      <p className="font-bold text-[#1B261D] text-[24px] leading-[31px]">
        3 of 5 complete
      </p>
      <div className="rounded-full bg-[#E5EFE2] w-full h-2 overflow-hidden">
        <div className="rounded-full bg-[#2F6B3A] w-3/5 h-full" />
      </div>
      <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
        Keep your momentum going
      </p>
    </section>
    <section className="flex mt-6 flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[#1B261D] text-[18px] leading-[23px]">
          Your habits
        </h2>
        <span className="font-semibold rounded-full bg-[#6D5BD0] text-white text-[12px] leading-[16px] pt-1 pr-2 pb-1 pl-2">
          3 day streak
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl bg-white border-t border-t-[#D5E1D1] border-r border-r-[#D5E1D1] border-b border-b-[#D5E1D1] border-l border-l-[#D5E1D1] flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <Checkbox
            className="rounded-full border-[#2F6B3A] size-5 bg-[#2f6b3a]"
            defaultChecked={true}
          />
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#1B261D] text-[16px] leading-[21px]">
              Drink water
            </p>
            <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
              8 glasses
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white border-t border-t-[#D5E1D1] border-r border-r-[#D5E1D1] border-b border-b-[#D5E1D1] border-l border-l-[#D5E1D1] flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <Checkbox
            className="rounded-full border-[#2F6B3A] size-5 bg-[#2f6b3a]"
            defaultChecked={true}
          />
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#1B261D] text-[16px] leading-[21px]">
              Morning walk
            </p>
            <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
              20 minutes
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white border-t border-t-[#D5E1D1] border-r border-r-[#D5E1D1] border-b border-b-[#D5E1D1] border-l border-l-[#D5E1D1] flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <Checkbox
            className="rounded-full border-[#2F6B3A] size-5 bg-[#2f6b3a]"
            defaultChecked={true}
          />
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#1B261D] text-[16px] leading-[21px]">
              Read
            </p>
            <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
              10 pages
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white border-t border-t-[#D5E1D1] border-r border-r-[#D5E1D1] border-b border-b-[#D5E1D1] border-l border-l-[#D5E1D1] flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <Checkbox
            className="rounded-full border-[#2F6B3A] size-5"
            defaultChecked={false}
          />
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#1B261D] text-[16px] leading-[21px]">
              Stretch
            </p>
            <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
              5 minutes
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white border-t border-t-[#D5E1D1] border-r border-r-[#D5E1D1] border-b border-b-[#D5E1D1] border-l border-l-[#D5E1D1] flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <Checkbox
            className="rounded-full border-[#2F6B3A] size-5"
            defaultChecked={false}
          />
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#1B261D] text-[16px] leading-[21px]">
              Meditate
            </p>
            <p className="font-medium text-[#5A6A5C] text-[14px] leading-[18px]">
              10 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <nav
    className="bg-card border-x-border border-t border-t-border border-b-border flex pt-2 pr-4 pb-4 pl-4 w-full"
    aria-label="Primary navigation"
  >
    <a
      href="#today"
      className="flex flex-col items-center flex-1 gap-1 text-[#2f6b3a]"
    >
      <Check className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Today</span>
    </a>
    <a
      href="#add"
      className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
    >
      <Plus className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Add</span>
    </a>
    <a
      href="#stats"
      className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
    >
      <BarChart3 className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Stats</span>
    </a>
    <a
      href="#profile"
      className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
    >
      <User className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Profile</span>
    </a>
  </nav>
</div>;