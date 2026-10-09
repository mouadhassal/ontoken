<div className="bg-background text-foreground flex flex-col w-full h-fit min-h-screen">
  <main className="pt-6 pr-6 pb-6 pl-6 flex-1 overflow-y-auto">
    <header className="flex mb-6 justify-between items-center">
      <h1 className="font-semibold text-xl tracking-tight">
        Good morning, Alex
      </h1>
      <button
        type="button"
        className="rounded-full bg-card text-foreground border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex justify-center items-center size-10"
        aria-label="Notifications"
      >
        <Bell className="size-5" />
      </button>
    </header>
    <section className="rounded-2xl bg-primary text-primary-foreground flex mb-6 pt-6 pr-6 pb-6 pl-6 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="font-medium opacity-80 text-sm">Total balance</span>
        <span className="font-semibold text-4xl tracking-tight">$4,286.40</span>
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
        className="rounded-xl bg-secondary text-secondary-foreground h-12"
      >
        <Plus className="size-4" />
        Add income
      </Button>
      <Button
        type="button"
        className="rounded-xl bg-destructive text-primary-foreground h-12"
      >
        <Minus className="size-4" />
        Add expense
      </Button>
    </div>
    <section className="flex mb-6 flex-col gap-4">
      <div className="flex justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-lg">Spending this month</h2>
          <p className="text-muted-foreground text-sm">$1,742.80 of $2,500</p>
        </div>
        <span className="font-medium text-muted-foreground text-sm">
          $757.20 left
        </span>
      </div>
      <div className="rounded-full bg-muted w-full h-3 overflow-hidden">
        <div className="rounded-full bg-primary w-[70%] h-full" />
      </div>
    </section>
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Recent transactions</h2>
        <button type="button" className="font-medium text-primary text-sm">
          See all
        </button>
      </div>
      <div className="rounded-2xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pr-4 pl-4 flex-col">
        <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 items-center gap-4">
          <span className="rounded-xl bg-destructive/10 text-destructive flex justify-center items-center shrink-0 size-10">
            <ShoppingCart className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              Whole Foods
            </p>
            <p className="text-muted-foreground text-xs">
              Groceries · Today, 9:41 AM
            </p>
          </div>
          <span className="font-semibold text-foreground text-sm">-$86.42</span>
        </div>
        <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 items-center gap-4">
          <span className="rounded-xl bg-accent text-accent-foreground flex justify-center items-center shrink-0 size-10">
            <Music2 className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              Spotify
            </p>
            <p className="text-muted-foreground text-xs">
              Entertainment · Yesterday
            </p>
          </div>
          <span className="font-semibold text-foreground text-sm">-$10.99</span>
        </div>
        <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 items-center gap-4">
          <span className="rounded-xl bg-primary/10 text-primary flex justify-center items-center shrink-0 size-10">
            <BriefcaseBusiness className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              Salary deposit
            </p>
            <p className="text-muted-foreground text-xs">Income · Mar 28</p>
          </div>
          <span className="font-semibold text-primary text-sm">+$3,200.00</span>
        </div>
        <div className="flex pt-4 pb-4 items-center gap-4">
          <span className="rounded-xl bg-destructive/10 text-destructive flex justify-center items-center shrink-0 size-10">
            <Zap className="size-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-ellipsis whitespace-nowrap text-sm overflow-hidden">
              City Power
            </p>
            <p className="text-muted-foreground text-xs">Utilities · Mar 27</p>
          </div>
          <span className="font-semibold text-foreground text-sm">-$64.18</span>
        </div>
      </div>
    </section>
  </main>
  <nav
    className="bg-background border-x-border border-t border-t-border border-b-border flex pt-2 pr-3 pb-2 pl-3 justify-around items-center w-full"
    aria-label="Primary navigation"
  >
    <button
      type="button"
      className="font-medium text-primary text-xs flex flex-col items-center flex-1 gap-1 min-w-0"
      aria-current="page"
    >
      <span className="rounded-xl bg-primary text-primary-foreground flex justify-center items-center size-9">
        <Home className="size-5" />
      </span>
      <span>Home</span>
    </button>
    <button
      type="button"
      className="font-medium text-muted-foreground text-xs flex flex-col items-center flex-1 gap-1 min-w-0"
    >
      <span className="rounded-xl bg-muted text-muted-foreground flex justify-center items-center size-9">
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