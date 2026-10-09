<div className="bg-background w-full h-fit text-[#0f2a2e]">
  <header className="bg-background border-t-border border-r-border border-b border-b-border border-l-border flex pr-4 pl-4 justify-between items-center h-14">
    <span className="font-semibold text-xl">Fjord</span>
    <button
      type="button"
      aria-label="Open profile"
      className="font-medium rounded-full text-primary-foreground text-xs flex justify-center items-center size-8 bg-[#1f6f78]"
    >
      JD
    </button>
  </header>
  <main className="flex pt-6 pr-6 pb-8 pl-6 flex-col gap-6 max-h-[794px] overflow-y-auto">
    <section className="flex flex-col gap-1">
      <h1 className="font-semibold text-xl leading-[26px]">
        Good morning, Jordan
      </h1>
      <p className="font-medium text-muted-foreground text-xs leading-4">
        Tuesday, June 18
      </p>
    </section>
    <section className="bg-muted flex pt-4 pr-4 pb-4 pl-4 justify-between items-start gap-4 rounded-[6px]">
      <div className="flex flex-col gap-2 min-w-0">
        <p className="font-semibold text-sm leading-[18px]">
          Save more with Fjord Plus
        </p>
        <p className="text-muted-foreground text-sm leading-[18px]">
          Get smart spending insights for $2.99/mo.
        </p>
        <button
          type="button"
          className="font-medium text-primary-foreground text-xs leading-4 pt-2 pr-2 pb-2 pl-2 self-start bg-[#1f6f78] rounded-[6px]"
        >
          Learn more
        </button>
        <button
          type="button"
          className="font-medium text-xs leading-4 self-start text-[#1f6f78]"
        >
          Not now
        </button>
      </div>
      <button
        type="button"
        aria-label="Dismiss promotion"
        className="text-muted-foreground flex justify-center items-center shrink-0 size-6"
      >
        <X className="size-4" />
      </button>
    </section>
    <section className="text-primary-foreground flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4 bg-[#1f6f78] rounded-[6px]">
      <p className="font-medium text-xs leading-4">Available balance</p>
      <p className="font-bold text-[30px] leading-[39px]">$4,286.40</p>
      <p className="text-sm leading-[18px]">+$620.00 this month</p>
    </section>
    <section className="grid gap-4 grid-cols-2">
      <div className="bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2 rounded-[6px]">
        <p className="font-medium text-muted-foreground text-xs leading-4">
          Monthly budget
        </p>
        <p className="font-semibold text-xl leading-[26px]">$5,000.00</p>
        <p className="text-muted-foreground text-sm leading-[18px]">
          $713.60 left
        </p>
      </div>
      <div className="bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2 rounded-[6px]">
        <p className="font-medium text-muted-foreground text-xs leading-4">
          Spent this month
        </p>
        <p className="font-semibold text-xl leading-[26px]">$4,286.40</p>
        <p className="text-muted-foreground text-sm leading-[18px]">
          85.7% of budget
        </p>
      </div>
    </section>
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl leading-[26px]">
          Recent transactions
        </h2>
        <button
          type="button"
          className="font-medium text-sm leading-[18px] text-[#1f6f78]"
        >
          See all
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="rounded-full bg-secondary flex justify-center items-center shrink-0 size-10 text-[#14474d]">
              <Coffee className="size-4" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <p className="font-medium text-ellipsis whitespace-nowrap text-sm leading-[18px] overflow-hidden">
                Blue Bottle Coffee
              </p>
              <p className="font-medium text-ellipsis whitespace-nowrap text-muted-foreground text-xs leading-4 overflow-hidden">{`Today · Food & Drink`}</p>
            </div>
          </div>
          <p className="font-medium text-sm leading-[18px] shrink-0">−$6.50</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="rounded-full bg-secondary flex justify-center items-center shrink-0 size-10 text-[#14474d]">
              <ShoppingCart className="size-4" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <p className="font-medium text-ellipsis whitespace-nowrap text-sm leading-[18px] overflow-hidden">
                Whole Foods Market
              </p>
              <p className="font-medium text-ellipsis whitespace-nowrap text-muted-foreground text-xs leading-4 overflow-hidden">
                Yesterday · Groceries
              </p>
            </div>
          </div>
          <p className="font-medium text-sm leading-[18px] shrink-0">−$84.20</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="rounded-full bg-secondary flex justify-center items-center shrink-0 size-10 text-[#14474d]">
              <BriefcaseBusiness className="size-4" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <p className="font-medium text-ellipsis whitespace-nowrap text-sm leading-[18px] overflow-hidden">
                Acme Studio
              </p>
              <p className="font-medium text-ellipsis whitespace-nowrap text-muted-foreground text-xs leading-4 overflow-hidden">
                Jun 15 · Income
              </p>
            </div>
          </div>
          <p className="font-medium text-[#2E7D4F] text-sm leading-[18px] shrink-0">
            +$2,400.00
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="rounded-full bg-secondary flex justify-center items-center shrink-0 size-10 text-[#14474d]">
              <TrainFront className="size-4" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <p className="font-medium text-ellipsis whitespace-nowrap text-sm leading-[18px] overflow-hidden">
                Metro Transit
              </p>
              <p className="font-medium text-ellipsis whitespace-nowrap text-muted-foreground text-xs leading-4 overflow-hidden">
                Jun 14 · Transport
              </p>
            </div>
          </div>
          <p className="font-medium text-sm leading-[18px] shrink-0">−$32.00</p>
        </div>
      </div>
    </section>
    <button
      type="button"
      className="font-medium text-primary-foreground text-base leading-[21px] pt-3 pr-3 pb-3 pl-3 w-full bg-[#1f6f78] rounded-[6px]"
    >
      Add transaction
    </button>
  </main>
  <nav
    aria-label="Primary navigation"
    className="bg-background border-x-border border-t border-t-border border-b-border flex fixed right-0 bottom-0 left-0 pr-2 pl-2 justify-around items-center h-16"
  >
    <a
      href="#home"
      className="flex pr-2 pl-2 flex-col items-center gap-1 text-[#1f6f78]"
      aria-current="page"
    >
      <Home className="size-5" />
      <span className="font-medium text-xs">Home</span>
    </a>
    <a
      href="#transactions"
      className="text-muted-foreground flex pr-2 pl-2 flex-col items-center gap-1"
    >
      <ArrowLeftRight className="size-5" />
      <span className="font-medium text-xs">Transactions</span>
    </a>
    <a
      href="#insights"
      className="text-muted-foreground flex pr-2 pl-2 flex-col items-center gap-1"
    >
      <ChartNoAxesCombined className="size-5" />
      <span className="font-medium text-xs">Insights</span>
    </a>
    <a
      href="#settings"
      className="text-muted-foreground flex pr-2 pl-2 flex-col items-center gap-1"
    >
      <Settings className="size-5" />
      <span className="font-medium text-xs">Settings</span>
    </a>
  </nav>
</div>;