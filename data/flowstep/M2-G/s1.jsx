<div className="font-manrope bg-background text-foreground flex flex-col min-h-screen">
  <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-12">
    <span className="font-bold text-primary text-lg leading-6">Moss</span>
    <div className="rounded-full bg-secondary text-primary flex justify-center items-center size-8">
      <Leaf className="size-4" aria-hidden="true" />
    </div>
  </header>
  <main className="pt-6 pr-4 pb-12 pl-4 flex-1 overflow-y-auto">
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <span className="font-semibold text-muted-foreground text-xs leading-4">
          Tuesday, October 15
        </span>
        <h1 className="font-bold text-foreground text-2xl leading-[31px]">
          Good morning, Maya
        </h1>
        <p className="font-medium text-muted-foreground text-sm leading-[18px]">
          A gentle check-in can help you notice what your body needs today.
        </p>
      </section>
      <Card className="rounded-2xl bg-card text-card-foreground border-border pt-4 pr-4 pb-4 pl-4 gap-4">
        <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
          <div className="flex justify-between items-center gap-2">
            <CardTitle className="font-bold text-lg leading-[23px]">
              Last night's sleep
            </CardTitle>
            <span className="font-semibold rounded-full bg-secondary text-primary text-xs leading-4 pt-1 pr-2 pb-1 pl-2">
              Not logged
            </span>
          </div>
        </CardHeader>
        <CardContent className="grid pt-0 pr-0 pb-0 pl-0 gap-4 grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-muted-foreground text-xs leading-4">
              Bedtime
            </span>
            <span className="font-medium text-foreground text-base leading-[21px]">
              —
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-muted-foreground text-xs leading-4">
              Wake-up
            </span>
            <span className="font-medium text-foreground text-base leading-[21px]">
              —
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-muted-foreground text-xs leading-4">
              Sleep quality
            </span>
            <span className="font-medium text-foreground text-base leading-[21px]">
              —
            </span>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pr-0 pb-0 pl-0">
          <Button className="font-semibold rounded-xl bg-primary text-primary-foreground text-sm leading-[18px] pt-3 pr-3 pb-3 pl-3 gap-2 w-full">
            <Moon className="size-4" aria-hidden="true" />
            Log sleep
          </Button>
        </CardFooter>
      </Card>
      <Card className="rounded-2xl bg-accent/10 text-foreground border-border pt-4 pr-4 pb-4 pl-4 gap-4">
        <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
          <CardTitle className="font-bold text-lg leading-[23px]">
            How are you feeling?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pr-0 pb-0 pl-0">
          <p className="font-medium text-muted-foreground text-sm leading-[18px]">
            Your mood and sleep often tell a connected story.
          </p>
        </CardContent>
        <CardFooter className="pt-0 pr-0 pb-0 pl-0">
          <Button
            variant="secondary"
            className="font-semibold rounded-xl bg-secondary text-secondary-foreground text-sm leading-[18px] pt-3 pr-3 pb-3 pl-3"
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
        className="text-primary flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
        aria-current="page"
      >
        <CalendarDays className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs leading-4">Today</span>
      </a>
      <a
        href="#check-in"
        className="text-muted-foreground flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
      >
        <ClipboardCheck className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs leading-4">Check-in</span>
      </a>
      <a
        href="#trends"
        className="text-muted-foreground flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
      >
        <TrendingUp className="size-5" aria-hidden="true" />
        <span className="font-semibold text-xs leading-4">Trends</span>
      </a>
    </div>
  </nav>
</div>;