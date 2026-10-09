<div className="bg-background text-foreground w-full h-fit">
  <div className="font-manrope bg-background text-foreground flex flex-col min-h-screen">
    <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-12">
      <span className="font-bold text-primary text-lg leading-6">Moss</span>
      <div className="rounded-full bg-secondary text-primary flex justify-center items-center size-8">
        <Leaf className="size-4" aria-hidden="true" />
      </div>
    </header>
    <main className="pr-4 pb-12 pl-4 flex-1 overflow-y-auto">
      <section className="flex pt-6 pb-6 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-foreground text-2xl leading-8">
            Your last 30 days
          </h1>
          <p className="font-medium text-muted-foreground text-base leading-5">
            Small patterns become clearer over time.
          </p>
        </div>
        <Tabs className="w-full" defaultValue="sleep">
          <TabsList className="rounded-xl bg-secondary grid pt-1 pr-1 pb-1 pl-1 grid-cols-2 w-full h-12">
            <TabsTrigger
              value="sleep"
              className="font-semibold rounded-lg text-sm"
            >
              Sleep
            </TabsTrigger>
            <TabsTrigger
              value="mood"
              className="font-semibold rounded-lg text-sm"
            >
              Mood
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Card className="rounded-xl bg-card text-card-foreground pt-4 pr-4 pb-4 pl-4 gap-4">
          <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-1">
            <CardTitle className="font-bold text-lg leading-6">
              Sleep duration
            </CardTitle>
            <CardDescription className="font-bold text-primary text-2xl leading-8">
              7h 18m
            </CardDescription>
            <p className="font-semibold text-muted-foreground text-xs leading-4">
              Average per night
            </p>
          </CardHeader>
          <CardContent className="pt-0 pr-0 pb-0 pl-0 gap-2">
            <div className="flex relative flex-col justify-end h-48">
              <div className="border-x-dotted border-x-primary border-t border-t-dotted border-t-primary border-b-dotted border-b-primary absolute right-0 bottom-24 left-0">
                <span className="font-semibold rounded-sm bg-card text-muted-foreground text-xs leading-4 absolute -top-5 right-0 pr-1 pl-1">
                  7h 18m
                </span>
              </div>
              <div className="flex justify-between items-end gap-1 h-40">
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-20" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-36" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
                <div className="rounded-full bg-primary w-1.5 h-20" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
                <div className="rounded-full bg-primary w-1.5 h-36" />
                <div className="rounded-full bg-primary w-1.5 h-40" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
                <div className="rounded-full bg-primary w-1.5 h-20" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-36" />
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-20" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-28" />
                <div className="rounded-full bg-primary w-1.5 h-36" />
                <div className="rounded-full bg-primary w-1.5 h-24" />
                <div className="rounded-full bg-primary w-1.5 h-32" />
              </div>
            </div>
            <div className="font-semibold text-muted-foreground text-xs leading-4 flex justify-between">
              <span>Sep 16</span>
              <span>Oct 1</span>
              <span>Oct 15</span>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-xl bg-card text-card-foreground pt-4 pr-4 pb-4 pl-4 gap-4">
          <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-1">
            <CardTitle className="font-bold text-lg leading-6">
              Sleep and mood
            </CardTitle>
            <CardDescription className="font-medium text-muted-foreground text-sm leading-5">
              You tend to feel more energized after 7+ hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 pr-0 pb-0 pl-0 gap-4">
            <div className="w-full h-32">
              <svg
                viewBox="0 0 320 112"
                className="size-full"
                aria-label="Seven weekly mood trend points"
              >
                <polyline
                  points="8,82 58,70 108,76 158,48 208,56 258,30 312,38"
                  className="fill-none stroke-accent stroke-2"
                />
                <circle cx="8" cy="82" r="3" className="fill-accent" />
                <circle cx="58" cy="70" r="3" className="fill-accent" />
                <circle cx="108" cy="76" r="3" className="fill-accent" />
                <circle cx="158" cy="48" r="3" className="fill-accent" />
                <circle cx="208" cy="56" r="3" className="fill-accent" />
                <circle cx="258" cy="30" r="3" className="fill-accent" />
                <circle cx="312" cy="38" r="3" className="fill-accent" />
              </svg>
            </div>
            <div className="font-semibold text-muted-foreground text-xs leading-4 flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="rounded-full bg-primary size-2" />
                Sleep
              </span>
              <span className="flex items-center gap-1">
                <span className="rounded-full bg-accent size-2" />
                Mood
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="rounded-xl bg-secondary text-secondary-foreground flex pt-4 pr-4 pb-4 pl-4 gap-2">
          <Leaf
            className="text-primary mt-0.5 shrink-0 size-5"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-base leading-5">A gentle pattern</h2>
            <p className="font-medium text-sm leading-5">
              Your most restful week was Oct 1–7.
            </p>
          </div>
        </div>
      </section>
    </main>
    <nav
      className="bg-background border-x-border border-t border-t-border border-b-border fixed right-0 bottom-0 left-0"
      aria-label="Primary navigation"
    >
      <div className="grid grid-cols-3">
        <a
          href="#today"
          className="text-muted-foreground flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
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
          className="text-primary flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
          aria-current="page"
        >
          <TrendingUp className="size-5" aria-hidden="true" />
          <span className="font-semibold text-xs leading-4">Trends</span>
        </a>
      </div>
    </nav>
  </div>
</div>;