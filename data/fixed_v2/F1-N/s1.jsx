<div className="bg-background flex flex-col w-full h-fit min-h-screen text-[#0f2a2e]">
  <main className="pt-6 pr-6 pb-6 pl-6 flex-1 overflow-y-auto">
    <header className="flex mb-6 justify-between items-center">
      <h1 className="font-semibold text-xl tracking-tight">
        Good morning, Alex
      </h1>
      <button
        type="button"
        className="rounded-full bg-card border-t border-r border-b border-l flex justify-center items-center size-10 text-[#0f2a2e] border-[#d3dedf]"
        aria-label="Notifications"
      >
        <Bell className="size-5" />
      </button>
    </header>
    <section className="flex mb-6 pt-6 pr-6 pb-6 pl-6 flex-col gap-4 bg-[#2e7d4f] rounded-[12px] text-[#f2f6f6]">
      <div className="flex flex-col gap-2">
        <span className="font-medium opacity-80 text-sm">Total balance</span>
        <span className="font-semibold tracking-tight text-[30px]">$4,286.40</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="font-medium text-primary-foreground text-sm">
          +$238.16 this month
        </span>
        <span className="opacity-70 text-xs">Updated just now</span>
      </div>
    </section>
    <div className="grid mb-6 gap-4 grid-cols-2">
      <Button
        type="button"
        className="rounded-xl h-12 text-[#0f2a2e] bg-[#f2f6f6]"
      >
        <Plus className="size-4" />
        Add income
      </Button>
      <Button
        type="button"
        className="rounded-xl text-primary-foreground h-12 bg-[#b42318]"
      >
        <Minus className="size-4" />
        Add expense
      </Button>
    </div>
    <section className="flex mb-6 flex-col gap-4">
      <div className="flex justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[20px]">Spending this month</h2>
          <p className="text-sm text-[#526669]">$1,742.80 of $2,500</p>
        </div>
        <span className="font-medium text-sm text-[#526669]">
          $757.20 left
        </span>
      </div>
      <div className="rounded-full w-full h-3 overflow-hidden bg-[#f2f6f6]">
        <div className="rounded-full w-[70%] h-full bg-[#2e7d4f]" />
      </div>
    </section>
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[20px]">Recent transactions</h2>
        <button type="button" className="font-medium text-sm text-[#2e7d4f]">
          See all
        </button>
      </div>
      <div className="bg-card border-t border-r border-b border-l flex pr-4 pl-4 flex-col border-[#d3dedf] rounded-[12px]">
        <div className="border-b flex pt-4 pb-4 items-center gap-4 border-[#d3dedf]">
          <span className="rounded-xl flex justify-center items-center shrink-0 size-10 text-[#b42318] bg-[#f2f6f6]">
            <ShoppingCart className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              Whole Foods
            </p>
            <p className="text-xs text-[#526669]">
              Groceries · Today, 9:41 AM
            </p>
          </div>
          <span className="font-semibold text-sm text-[#0f2a2e]">-$86.42</span>
        </div>
        <div className="border-b flex pt-4 pb-4 items-center gap-4 border-[#d3dedf]">
          <span className="rounded-xl flex justify-center items-center shrink-0 size-10 text-[#0f2a2e] bg-[#e3eff0]">
            <Music2 className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              Spotify
            </p>
            <p className="text-xs text-[#526669]">
              Entertainment · Yesterday
            </p>
          </div>
          <span className="font-semibold text-sm text-[#0f2a2e]">-$10.99</span>
        </div>
        <div className="border-b flex pt-4 pb-4 items-center gap-4 border-[#d3dedf]">
          <span className="rounded-xl bg-primary/10 flex justify-center items-center shrink-0 size-10 text-[#2e7d4f]">
            <BriefcaseBusiness className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              Salary deposit
            </p>
            <p className="text-xs text-[#526669]">Income · Mar 28</p>
          </div>
          <span className="font-semibold text-sm text-[#2e7d4f]">+$3,200.00</span>
        </div>
        <div className="flex pt-4 pb-4 items-center gap-4">
          <span className="rounded-xl flex justify-center items-center shrink-0 size-10 text-[#b42318] bg-[#f2f6f6]">
            <Zap className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              City Power
            </p>
            <p className="text-xs text-[#526669]">Utilities · Mar 27</p>
          </div>
          <span className="font-semibold text-sm text-[#0f2a2e]">-$64.18</span>
        </div>
      </div>
    </section>
  </main>
  <nav
    className="bg-background border-t flex pt-2 pr-3 pb-2 pl-3 justify-around items-center w-full border-[#d3dedf]"
    aria-label="Primary navigation"
  >
    <button
      type="button"
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#2e7d4f]"
      aria-current="page"
    >
      <span className="rounded-xl text-primary-foreground flex justify-center items-center size-9 bg-[#2e7d4f]">
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
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#526669]"
    >
      <span className="rounded-xl flex justify-center items-center size-9 text-[#526669] bg-[#f2f6f6]">
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