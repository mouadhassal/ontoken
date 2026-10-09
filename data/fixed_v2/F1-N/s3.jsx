<div className="bg-background w-full h-fit text-[#0f2a2e]">
  <main className="flex pt-6 pr-6 pb-6 pl-6 flex-col flex-1 gap-6 min-h-[790px]">
    <header className="flex justify-between items-center">
      <button
        type="button"
        aria-label="Previous month"
        className="rounded-full flex justify-center items-center size-10 text-[#526669]"
      >
        <ChevronLeft className="size-5" />
      </button>
      <h1 className="font-semibold text-xl tracking-tight" />
      <button
        type="button"
        aria-label="Next month"
        className="rounded-full flex justify-center items-center size-10 text-[#526669]"
      >
        <ChevronRight className="size-5" />
      </button>
    </header>
    <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] bg-card flex pt-6 pr-6 pb-6 pl-6 flex-row justify-between items-center gap-4 text-[#0f2a2e] border-[#d3dedf] rounded-[12px]">
      <CardContent className="text-center flex pt-0 pr-0 pb-0 pl-0 flex-col justify-center items-center flex-1 gap-2">
        <p className="font-semibold text-2xl tracking-tight">$1,742.80 spent</p>
        <p className="text-sm text-[#526669]">
          $757.20 under your $2,500 budget
        </p>
      </CardContent>
      <div className="bg-[conic-gradient(oklch(0.48_0.1_175)_0deg_252deg,oklch(0.94_0.018_90)_252deg_360deg)] rounded-full flex relative justify-center items-center shrink-0 size-24 from-[#2e7d4f] to-[#f2f6f6] via-[#2e7d4f]">
        <div className="rounded-full bg-card flex justify-center items-center size-16">
          <span className="font-semibold text-sm text-[#0f2a2e]">70%</span>
        </div>
      </div>
    </Card>
    <div
      className="rounded-xl grid pt-1 pr-1 pb-1 pl-1 gap-1 grid-cols-2 bg-[#f2f6f6]"
      role="tablist"
      aria-label="Spending breakdown view"
    >
      <Button type="button" variant="ghost" role="tab">
        Categories
      </Button>
      <Button type="button" variant="ghost" role="tab">
        Trends
      </Button>
    </div>
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-[20px]">Spending by category</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="rounded-xl flex justify-center items-center size-10 text-[#2e7d4f] bg-[#d3dedf]">
            <House className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <span className="font-medium text-sm">Housing</span>
              <span className="font-medium text-sm">$850.00</span>
            </div>
            <div className="flex mt-2 items-center gap-2">
              <div className="rounded-full flex-1 h-2 overflow-hidden bg-[#f2f6f6]">
                <div className="rounded-full w-[49%] h-full bg-[#2e7d4f]" />
              </div>
              <span className="text-right text-xs w-8 text-[#526669]">
                49%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-chart-4/20 flex justify-center items-center size-10 text-[#0f2a2e]">
            <Utensils className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <span className="font-medium text-sm">{`Food & dining`}</span>
              <span className="font-medium text-sm">$326.74</span>
            </div>
            <div className="flex mt-2 items-center gap-2">
              <div className="rounded-full flex-1 h-2 overflow-hidden bg-[#f2f6f6]">
                <div className="rounded-full bg-chart-4 w-[19%] h-full" />
              </div>
              <span className="text-right text-xs w-8 text-[#526669]">
                19%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-chart-3/20 flex justify-center items-center size-10 text-[#0f2a2e]">
            <Car className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <span className="font-medium text-sm">Transportation</span>
              <span className="font-medium text-sm">$214.60</span>
            </div>
            <div className="flex mt-2 items-center gap-2">
              <div className="rounded-full flex-1 h-2 overflow-hidden bg-[#f2f6f6]">
                <div className="rounded-full bg-chart-3 w-[12%] h-full" />
              </div>
              <span className="text-right text-xs w-8 text-[#526669]">
                12%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-xl flex justify-center items-center size-10 text-[#0f2a2e] bg-[#e3eff0]">
            <ShoppingBag className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <span className="font-medium text-sm">Shopping</span>
              <span className="font-medium text-sm">$187.28</span>
            </div>
            <div className="flex mt-2 items-center gap-2">
              <div className="rounded-full flex-1 h-2 overflow-hidden bg-[#f2f6f6]">
                <div className="rounded-full bg-chart-3 w-[11%] h-full" />
              </div>
              <span className="text-right text-xs w-8 text-[#526669]">
                11%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-xl flex justify-center items-center size-10 text-[#b42318] bg-[#f2f6f6]">
            <Clapperboard className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <span className="font-medium text-sm">Entertainment</span>
              <span className="font-medium text-sm">$164.18</span>
            </div>
            <div className="flex mt-2 items-center gap-2">
              <div className="rounded-full flex-1 h-2 overflow-hidden bg-[#f2f6f6]">
                <div className="rounded-full w-[9%] h-full bg-[#b42318]" />
              </div>
              <span className="text-right text-xs w-8 text-[#526669]">
                9%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Card className="flex mt-auto pt-4 pr-4 pb-4 pl-4 flex-row items-start gap-3 bg-[#f2f6f6] border-[#d3dedf] rounded-[12px]">
      <span className="rounded-full flex justify-center items-center shrink-0 size-9 text-[#0f2a2e] bg-[#e3eff0]">
        <Sparkles className="size-4" />
      </span>
      <p className="text-sm leading-5 text-[#0f2a2e]">
        You’re spending 12% less on dining than last month.
      </p>
    </Card>
  </main>
  <nav
    className="bg-background border-t flex pt-2 pr-3 pb-2 pl-3 justify-around items-center w-full border-[#d3dedf]"
    aria-label="Primary navigation"
  >
    <button
      type="button"
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#526669]"
    >
      <span className="rounded-xl text-muted-foreground flex justify-center items-center size-9 bg-[#f2f6f6]">
        <Home className="size-5" />
      </span>
      <span>Home</span>
    </button>
    <button
      type="button"
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#526669]"
    >
      <span className="rounded-xl flex justify-center items-center size-9 text-[#526669] bg-[#f2f6f6]">
        <ArrowLeftRight className="size-5" />
      </span>
      <span>Transactions</span>
    </button>
    <button
      type="button"
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#2e7d4f]"
      aria-current="page"
    >
      <span className="rounded-xl text-primary-foreground flex justify-center items-center size-9 bg-[#2e7d4f]">
        <WalletCards className="size-5" />
      </span>
      <span>Budget</span>
    </button>
    <button
      type="button"
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#526669]"
    >
      <span className="rounded-xl flex justify-center items-center size-9 text-[#526669] bg-[#f2f6f6]">
        <UserRound className="size-5" />
      </span>
      <span>Profile</span>
    </button>
  </nav>
</div>;