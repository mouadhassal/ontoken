<div className="font-manrope bg-background text-foreground flex flex-col min-h-screen">
  <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-12">
    <span className="font-bold text-lg leading-6 text-[#2f6b3a] font-[family-name:Manrope]">Moss</span>
    <div className="rounded-full bg-secondary flex justify-center items-center size-8 text-[#2f6b3a]">
      <Leaf className="size-4" aria-hidden="true" />
    </div>
  </header>
  <main className="pt-6 pr-4 pb-12 pl-4 flex-1 overflow-y-auto">
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <span className="font-semibold text-xs leading-4 text-[#5a6a5c] font-[family-name:Manrope]">
          Tuesday, October 15
        </span>
        <h1 className="font-bold text-foreground text-2xl leading-[31px] font-[family-name:Manrope]">
          Good morning, Maya
        </h1>
        <p className="font-medium text-sm leading-[18px] text-[#5a6a5c] font-[family-name:Manrope]">
          A gentle check-in can help you notice what your body needs today.
        </p>
      </section>
      <Card className="rounded-2xl bg-card text-card-foreground border-border pt-4 pr-4 pb-4 pl-4 gap-4">
        <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
          <div className="flex justify-between items-center gap-2">
            <CardTitle className="font-bold text-lg leading-[23px] font-[family-name:Manrope]">
              Last night's sleep
            </CardTitle>
            <span className="font-semibold rounded-full bg-secondary text-xs leading-4 pt-1 pr-2 pb-1 pl-2 text-[#2f6b3a] font-[family-name:Manrope]">
              Not logged
            </span>
          </div>
        </CardHeader>
        <CardContent className="grid pt-0 pr-0 pb-0 pl-0 gap-4 grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-xs leading-4 text-[#5a6a5c] font-[family-name:Manrope]">
              Bedtime
            </span>
            <span className="font-medium text-foreground text-base leading-[21px] font-[family-name:Manrope]">
              —
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-xs leading-4 text-[#5a6a5c] font-[family-name:Manrope]">
              Wake-up
            </span>
            <span className="font-medium text-foreground text-base leading-[21px] font-[family-name:Manrope]">
              —
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-xs leading-4 text-[#5a6a5c] font-[family-name:Manrope]">
              Sleep quality
            </span>
            <span className="font-medium text-foreground text-base leading-[21px] font-[family-name:Manrope]">
              —
            </span>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pr-0 pb-0 pl-0">
          <Button className="font-semibold text-sm leading-[18px] gap-2 w-full text-[#d5e1d1] bg-[#2f6b3a] font-[family-name:Manrope] rounded-[16px] p-[16px]">
            <Moon className="size-4" aria-hidden="true" />
            Log sleep
          </Button>
        </CardFooter>
      </Card>
      <Card className="rounded-2xl text-foreground border-border pt-4 pr-4 pb-4 pl-4 gap-4 bg-[#e5efe2]">
        <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
          <CardTitle className="font-bold text-lg leading-[23px] font-[family-name:Manrope]">
            How are you feeling?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pr-0 pb-0 pl-0">
          <p className="font-medium text-sm leading-[18px] text-[#5a6a5c] font-[family-name:Manrope]">
            Your mood and sleep often tell a connected story.
          </p>
        </CardContent>
        <CardFooter className="pt-0 pr-0 pb-0 pl-0">
          <Button
            variant="secondary"
            className="font-semibold bg-secondary text-sm leading-[18px] text-[#234d2b] font-[family-name:Manrope] rounded-[16px] p-[16px]"
          >
            Check in
          </Button>
        </CardFooter>
      </Card>
    </div>
  </main>
  <nav
    className="bg-background border-x-border border-t border-t-border border-b-border fixed right-0 bottom-0 left-0"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-3">
      <a
        href="#today"
        className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#2f6b3a]"
        aria-current="page"
      >
        <CalendarDays className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs leading-4 font-[family-name:Manrope]">Today</span>
      </a>
      <a
        href="#check-in"
        className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#5a6a5c]"
      >
        <ClipboardCheck className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs leading-4 font-[family-name:Manrope]">Check-in</span>
      </a>
      <a
        href="#trends"
        className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#5a6a5c]"
      >
        <TrendingUp className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs leading-4 font-[family-name:Manrope]">Trends</span>
      </a>
    </div>
  </nav>
</div>;