<div className="bg-background text-foreground w-full h-fit">
  <main className="flex pr-6 pb-8 pl-6 flex-col flex-1 min-h-[874px]">
    <header className="flex pt-4 pb-4 justify-between items-center">
      <button
        type="button"
        aria-label="Back"
        className="rounded-lg text-foreground flex justify-center items-center size-10"
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
      <div className="rounded-full bg-chart-2/15 text-chart-2 flex justify-center items-center size-24">
        <ShoppingBasket className="size-12" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-xl">Whole Foods</h2>
        <p className="font-semibold text-4xl tracking-tight">-$86.42</p>
      </div>
      <p className="text-muted-foreground text-sm">
        Today, March 31, 2025 at 9:41 AM
      </p>
      <span className="font-medium rounded-full bg-chart-2/15 text-destructive text-xs pt-1 pr-3 pb-1 pl-3">
        Expense
      </span>
    </section>
    <div className="bg-border mt-8 mb-8 h-px" />
    <section className="flex flex-col gap-6" aria-label="Transaction details">
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Category</span>
        <span className="font-medium text-right text-sm">Groceries</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Account</span>
        <span className="font-medium text-right text-sm">
          Everyday checking
        </span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Payment method</span>
        <span className="font-medium text-right text-sm">Visa •••• 4821</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Location</span>
        <span className="font-medium text-right text-sm max-w-[210px]">
          Market Street, San Francisco
        </span>
      </div>
    </section>
    <section className="rounded-xl bg-accent flex mt-8 pt-4 pr-4 pb-4 pl-4 flex-col gap-2">
      <h3 className="font-semibold text-accent-foreground text-sm">Notes</h3>
      <p className="text-accent-foreground/80 text-sm leading-6">
        Weekly groceries and household staples.
      </p>
    </section>
    <div className="flex mt-auto pt-10 flex-col items-center gap-4">
      <button
        type="button"
        className="font-medium rounded-lg bg-background text-foreground text-sm border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border pt-3 pr-4 pb-3 pl-4 w-full"
      >
        Edit transaction
      </button>
      <button type="button" className="font-medium text-destructive text-sm">
        Delete transaction
      </button>
    </div>
  </main>
  <nav
    className="bg-background border-x-border border-t border-t-border border-b-border flex pt-2 pr-3 pb-2 pl-3 justify-around items-center w-full"
    aria-label="Primary navigation"
  >
    <button
      type="button"
      className="font-medium text-muted-foreground text-xs flex flex-col items-center flex-1 gap-1 min-w-0"
    >
      <span className="rounded-xl bg-muted text-muted-foreground flex justify-center items-center size-9">
        <Home className="size-5" />
      </span>
      <span>Home</span>
    </button>
    <button
      type="button"
      className="font-medium text-primary text-xs flex flex-col items-center flex-1 gap-1 min-w-0"
      aria-current="page"
    >
      <span className="rounded-xl bg-primary text-primary-foreground flex justify-center items-center size-9">
        <ArrowLeftRight className="size-5" />
      </span>
      <span>Transactions</span>
    </button>
    <button
      type="button"
      className="font-medium text-muted-foreground text-xs flex flex-col items-center flex-1 gap-1 min-w-0"
    >
      <span className="rounded-xl bg-muted text-muted-foreground flex justify-center items-center size-9">
        <WalletCards className="size-5" />
      </span>
      <span>Budget</span>
    </button>
    <button
      type="button"
      className="font-medium text-muted-foreground text-xs flex flex-col items-center flex-1 gap-1 min-w-0"
    >
      <span className="rounded-xl bg-muted text-muted-foreground flex justify-center items-center size-9">
        <UserRound className="size-5" />
      </span>
      <span>Profile</span>
    </button>
  </nav>
</div>;