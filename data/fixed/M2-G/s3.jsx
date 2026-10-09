<div className="bg-background text-foreground w-full h-fit">
  <div className="font-manrope bg-background text-foreground flex flex-col min-h-screen">
    <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-12">
      <span className="font-bold text-lg leading-6 text-[#2f6b3a] font-[family-name:Manrope]">Moss</span>
      <div className="rounded-full bg-secondary flex justify-center items-center size-8 text-[#2f6b3a]">
        <Leaf className="size-4" aria-hidden="true" />
      </div>
    </header>
    <main className="pr-4 pb-12 pl-4 flex-1 overflow-y-auto">
      <section className="flex pt-6 pb-6 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-foreground text-2xl leading-8 font-[family-name:Manrope]">
            Your last 30 days
          </h1>
          <p className="font-medium text-base leading-5 text-[#5a6a5c] font-[family-name:Manrope]">
            Small patterns become clearer over time.
          </p>
        </div>
        <Tabs className="w-full" defaultValue="sleep">
          <TabsList className="bg-secondary grid pt-1 pr-1 pb-1 pl-1 grid-cols-2 w-full h-12 rounded-[16px]">
            <TabsTrigger
              value="sleep"
              className="font-semibold rounded-lg text-sm font-[family-name:Manrope]"
            >
              Sleep
            </TabsTrigger>
            <TabsTrigger
              value="mood"
              className="font-semibold rounded-lg text-sm font-[family-name:Manrope]"
            >
              Mood
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Card className="bg-card text-card-foreground pt-4 pr-4 pb-4 pl-4 gap-4 rounded-[16px]">
          <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-1">
            <CardTitle className="font-bold text-lg leading-6 font-[family-name:Manrope]">
              Sleep duration
            </CardTitle>
            <CardDescription className="font-bold text-2xl leading-8 text-[#2f6b3a] font-[family-name:Manrope]">
              7h 18m
            </CardDescription>
            <p className="font-semibold text-xs leading-4 text-[#5a6a5c] font-[family-name:Manrope]">
              Average per night
            </p>
          </CardHeader>
          <CardContent className="pt-0 pr-0 pb-0 pl-0 gap-2">
            <div className="flex relative flex-col justify-end h-48">
              <div className="border-t absolute right-0 bottom-24 left-0 border-[#d5e1d1]">
                <span className="font-semibold bg-card text-xs leading-4 absolute -top-5 right-0 pr-1 pl-1 text-[#5a6a5c] font-[family-name:Manrope] rounded-[8px]">
                  7h 18m
                </span>
              </div>
              <div className="flex justify-between items-end gap-1 h-40">
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-20 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-36 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-20 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-36 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-40 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-20 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-36 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-20 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-28 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-36 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-24 bg-[#2f6b3a]" />
                <div className="rounded-full w-1.5 h-32 bg-[#2f6b3a]" />
              </div>
            </div>
            <div className="font-semibold text-xs leading-4 flex justify-between text-[#5a6a5c]">
              <span className="font-[family-name:Manrope]">Sep 16</span>
              <span className="font-[family-name:Manrope]">Oct 1</span>
              <span className="font-[family-name:Manrope]">Oct 15</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground pt-4 pr-4 pb-4 pl-4 gap-4 rounded-[16px]">
          <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-1">
            <CardTitle className="font-bold text-lg leading-6 font-[family-name:Manrope]">
              Sleep and mood
            </CardTitle>
            <CardDescription className="font-medium text-sm leading-5 text-[#5a6a5c] font-[family-name:Manrope]">
              You tend to feel more energized after 7+ hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 pr-0 pb-0 pl-0 gap-4">
            <div className="w-full h-32">
              <svg
                viewBox="0 0 320 112"
                className="size-full fill-[#1b261d]"
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
            <div className="font-semibold text-xs leading-4 flex items-center gap-4 text-[#5a6a5c]">
              <span className="flex items-center gap-1 font-[family-name:Manrope]">
                <span className="rounded-full size-2 bg-[#2f6b3a]" />
                Sleep
              </span>
              <span className="flex items-center gap-1 font-[family-name:Manrope]">
                <span className="rounded-full size-2 bg-[#6d5bd0]" />
                Mood
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="bg-secondary flex pt-4 pr-4 pb-4 pl-4 gap-2 text-[#234d2b] rounded-[16px]">
          <Leaf
            className="mt-0.5 shrink-0 size-5 text-[#2f6b3a]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-base leading-5 font-[family-name:Manrope]">A gentle pattern</h2>
            <p className="font-medium text-sm leading-5 font-[family-name:Manrope]">
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
          className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#5a6a5c]"
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
          className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#2f6b3a]"
          aria-current="page"
        >
          <TrendingUp className="size-5" aria-hidden="true" />
          <span className="font-semibold text-xs leading-4 font-[family-name:Manrope]">Trends</span>
        </a>
      </div>
    </nav>
  </div>
</div>;