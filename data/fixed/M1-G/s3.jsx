<div className="bg-background w-full h-fit text-[#1b261d]">
  <main className="font-[Manrope] flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6 min-h-[810px]">
    <header className="flex justify-between items-center gap-4">
      <h1 className="font-bold text-2xl leading-[31px]">Your progress</h1>
      <Select defaultValue="This week">
        <SelectTrigger className="font-semibold bg-card text-foreground text-sm border-border pr-4 pl-4 w-[124px] h-10 rounded-[8px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="This week">This week</SelectItem>
          <SelectItem value="Last week">Last week</SelectItem>
          <SelectItem value="This month">This month</SelectItem>
        </SelectContent>
      </Select>
    </header>
    <Card className="bg-card border-border pt-6 pr-6 pb-6 pl-6 gap-4 rounded-[16px]">
      <CardContent className="flex pt-0 pr-0 pb-0 pl-0 items-center gap-4">
        <div className="rounded-full flex justify-center items-center size-12 bg-[#6d5bd0]">
          <Flame className="size-6 text-[#d5e1d1]" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-extrabold text-[32px] leading-[42px] text-[#1b261d]">
              12
            </span>
            <span className="font-medium text-base leading-[21px] text-[#5a6a5c]">
              day streak
            </span>
          </div>
          <p className="font-medium text-sm leading-[18px] text-[#5a6a5c]">
            You’re building a steady rhythm.
          </p>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-card border-border pt-6 pr-6 pb-6 pl-6 gap-6 rounded-[16px] text-[#5a6a5c]">
      <CardHeader className="pt-0 pr-0 pb-0 pl-0">
        <CardTitle className="font-bold text-lg leading-[23px]">
          Weekly completion
        </CardTitle>
      </CardHeader>
      <CardContent className="grid pt-0 pr-0 pb-0 pl-0 gap-2 grid-cols-7">
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">4</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="w-full h-4/5 bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Mon
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">5</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="size-full bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Tue
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">3</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="w-full h-3/5 bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Wed
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">5</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="size-full bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Thu
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">4</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="w-full h-4/5 bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Fri
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">2</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="w-full h-2/5 bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Sat
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xs text-[#1b261d]">3</span>
          <div className="bg-secondary flex items-end w-full h-32 rounded-[8px]">
            <div className="w-full h-3/5 bg-[#2f6b3a] rounded-[8px]" />
          </div>
          <span className="font-semibold text-xs text-[#5a6a5c]">
            Sun
          </span>
        </div>
      </CardContent>
    </Card>
    <section className="flex flex-col gap-4">
      <h2 className="font-bold text-lg leading-[23px]">By habit</h2>
      <Card className="bg-card border-border pt-4 pr-4 pb-4 pl-4 gap-4 rounded-[16px] text-[#5a6a5c]">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">
              Drink water
            </span>
            <span className="font-medium text-sm leading-[18px] text-[#5a6a5c]">
              8/8 days
            </span>
          </div>
          <span className="font-semibold text-sm leading-[18px] text-[#2f6b3a]">
            100%
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">
              Morning walk
            </span>
            <span className="font-medium text-sm leading-[18px] text-[#5a6a5c]">
              6/8 days
            </span>
          </div>
          <span className="font-semibold text-sm leading-[18px] text-[#2f6b3a]">
            75%
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">Read</span>
            <span className="font-medium text-sm leading-[18px] text-[#5a6a5c]">
              5/8 days
            </span>
          </div>
          <span className="font-semibold text-sm leading-[18px] text-[#2f6b3a]">
            63%
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">Meditate</span>
            <span className="font-medium text-sm leading-[18px] text-[#5a6a5c]">
              3/8 days
            </span>
          </div>
          <span className="font-semibold text-sm leading-[18px] text-[#6d5bd0]">
            38%
          </span>
        </div>
      </Card>
    </section>
    <p className="font-semibold text-xs leading-4 text-[#5a6a5c]">
      Last updated today at 9:42 AM
    </p>
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
      className="flex flex-col items-center flex-1 gap-1 text-[#5a6a5c]"
    >
      <Plus className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs font-[family-name:Manrope]">Add</span>
    </a>
    <a
      href="#stats"
      className="flex flex-col items-center flex-1 gap-1 text-[#2f6b3a]"
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
</div>;