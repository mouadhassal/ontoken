<div className="bg-background text-foreground w-full h-fit">
  <main className="font-[Manrope] flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6 min-h-[810px]">
    <header className="flex justify-between items-center gap-4">
      <h1 className="font-bold text-2xl leading-[31px]">Your progress</h1>
      <Select defaultValue="This week">
        <SelectTrigger className="font-semibold rounded-lg bg-card text-foreground text-sm border-border pr-4 pl-4 w-[124px] h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="This week">This week</SelectItem>
          <SelectItem value="Last week">Last week</SelectItem>
          <SelectItem value="This month">This month</SelectItem>
        </SelectContent>
      </Select>
    </header>
    <Card className="rounded-xl bg-card border-border pt-6 pr-6 pb-6 pl-6 gap-4">
      <CardContent className="flex pt-0 pr-0 pb-0 pl-0 items-center gap-4">
        <div className="rounded-full bg-accent flex justify-center items-center size-12">
          <Flame className="text-accent-foreground size-6" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-extrabold text-foreground text-[32px] leading-[42px]">
              12
            </span>
            <span className="font-medium text-muted-foreground text-base leading-[21px]">
              day streak
            </span>
          </div>
          <p className="font-medium text-muted-foreground text-sm leading-[18px]">
            You’re building a steady rhythm.
          </p>
        </div>
      </CardContent>
    </Card>
    <Card className="rounded-xl bg-card border-border pt-6 pr-6 pb-6 pl-6 gap-6">
      <CardHeader className="pt-0 pr-0 pb-0 pl-0">
        <CardTitle className="font-bold text-lg leading-[23px]">
          Weekly completion
        </CardTitle>
      </CardHeader>
      <CardContent className="grid pt-0 pr-0 pb-0 pl-0 gap-2 grid-cols-7">
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">4</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary w-full h-4/5" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Mon
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">5</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary size-full" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Tue
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">3</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary w-full h-3/5" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Wed
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">5</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary size-full" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Thu
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">4</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary w-full h-4/5" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Fri
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">2</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary w-full h-2/5" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Sat
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-foreground text-xs">3</span>
          <div className="rounded-lg bg-secondary flex items-end w-full h-32">
            <div className="rounded-lg bg-primary w-full h-3/5" />
          </div>
          <span className="font-semibold text-muted-foreground text-xs">
            Sun
          </span>
        </div>
      </CardContent>
    </Card>
    <section className="flex flex-col gap-4">
      <h2 className="font-bold text-lg leading-[23px]">By habit</h2>
      <Card className="rounded-xl bg-card border-border pt-4 pr-4 pb-4 pl-4 gap-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">
              Drink water
            </span>
            <span className="font-medium text-muted-foreground text-sm leading-[18px]">
              8/8 days
            </span>
          </div>
          <span className="font-semibold text-primary text-sm leading-[18px]">
            100%
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">
              Morning walk
            </span>
            <span className="font-medium text-muted-foreground text-sm leading-[18px]">
              6/8 days
            </span>
          </div>
          <span className="font-semibold text-primary text-sm leading-[18px]">
            75%
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">Read</span>
            <span className="font-medium text-muted-foreground text-sm leading-[18px]">
              5/8 days
            </span>
          </div>
          <span className="font-semibold text-primary text-sm leading-[18px]">
            63%
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base leading-[21px]">Meditate</span>
            <span className="font-medium text-muted-foreground text-sm leading-[18px]">
              3/8 days
            </span>
          </div>
          <span className="font-semibold text-accent text-sm leading-[18px]">
            38%
          </span>
        </div>
      </Card>
    </section>
    <p className="font-semibold text-muted-foreground text-xs leading-4">
      Last updated today at 9:42 AM
    </p>
  </main>
  <nav
    className="bg-card border-x-border border-t border-t-border border-b-border flex pt-2 pr-4 pb-4 pl-4 w-full"
    aria-label="Primary navigation"
  >
    <a
      href="#today"
      className="text-muted-foreground flex flex-col items-center flex-1 gap-1"
    >
      <Check className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Today</span>
    </a>
    <a
      href="#add"
      className="text-muted-foreground flex flex-col items-center flex-1 gap-1"
    >
      <Plus className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Add</span>
    </a>
    <a
      href="#stats"
      className="text-primary flex flex-col items-center flex-1 gap-1"
    >
      <BarChart3 className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Stats</span>
    </a>
    <a
      href="#profile"
      className="text-muted-foreground flex flex-col items-center flex-1 gap-1"
    >
      <User className="size-5" aria-hidden="true" />
      <span className="font-semibold text-xs">Profile</span>
    </a>
  </nav>
</div>;