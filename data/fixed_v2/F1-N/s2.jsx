<div className="bg-background w-full h-fit text-[#0f2a2e]">
  <main className="flex pr-6 pb-8 pl-6 flex-col flex-1 min-h-[874px]">
    <header className="flex pt-4 pb-4 justify-between items-center">
      <button
        type="button"
        aria-label="Back"
        className="rounded-lg flex justify-center items-center size-10 text-[#0f2a2e]"
      >
        <ChevronLeft className="size-6" />
      </button>
      <h1 className="font-semibold text-base">Transaction details</h1>
      <button
        type="button"
        aria-label="More options"
        className="rounded-lg text-foreground flex justify-center items-center size-10"
      >
        <MoreHorizontal className="size-6" />
      </button>
    </header>
    <section className="text-center flex pt-8 flex-col items-center gap-4">
      <div className="rounded-full bg-chart-2/15 flex justify-center items-center size-24 text-[#0f2a2e]">
        <ShoppingBasket className="size-12" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-xl">Whole Foods</h2>
        <p className="font-semibold tracking-tight text-[30px]">-$86.42</p>
      </div>
      <p className="text-sm text-[#526669]">
        Today, March 31, 2025 at 9:41 AM
      </p>
      <span className="font-medium rounded-full bg-chart-2/15 text-xs pt-1 pr-3 pb-1 pl-3 text-[#b42318]">
        Expense
      </span>
    </section>
    <div className="mt-8 mb-8 h-px bg-[#d3dedf]" />
    <section className="flex flex-col gap-6" aria-label="Transaction details">
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-[#526669]">Category</span>
        <span className="font-medium text-right text-sm">Groceries</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-[#526669]">Account</span>
        <span className="font-medium text-right text-sm">
          Everyday checking
        </span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-[#526669]">Payment method</span>
        <span className="font-medium text-right text-sm">Visa •••• 4821</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-[#526669]">Location</span>
        <span className="font-medium text-right text-sm max-w-[210px]">
          Market Street, San Francisco
        </span>
      </div>
    </section>
    <section className="rounded-xl flex mt-8 pt-4 pr-4 pb-4 pl-4 flex-col gap-2 bg-[#e3eff0]">
      <h3 className="font-semibold text-sm text-[#0f2a2e]">Notes</h3>
      <p className="text-sm leading-6 text-[#526669]">
        Weekly groceries and household staples.
      </p>
    </section>
    <div className="flex mt-auto flex-col items-center gap-4 pt-[48px]">
      <button
        type="button"
        className="font-medium bg-background text-sm border-t border-r border-b border-l pt-3 pr-4 pb-3 pl-4 w-full text-[#0f2a2e] border-[#d3dedf] rounded-[6px]"
      >
        Edit transaction
      </button>
      <button type="button" className="font-medium text-sm text-[#b42318]">
        Delete transaction
      </button>
    </div>
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
      className="font-medium text-xs flex flex-col items-center flex-1 gap-1 min-w-0 text-[#2e7d4f]"
      aria-current="page"
    >
      <span className="rounded-xl text-primary-foreground flex justify-center items-center size-9 bg-[#2e7d4f]">
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