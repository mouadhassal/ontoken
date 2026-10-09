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
  <main className="flex pt-4 pr-4 pb-12 pl-4 flex-col flex-1 gap-6 max-h-[794px] overflow-y-auto">
    <a
      href="#transactions"
      className="font-medium text-sm flex items-center gap-1 text-[#1f6f78]"
    >
      <ChevronLeft className="size-5" />
      <span>All transactions</span>
    </a>
    <section className="bg-muted flex pt-4 pr-4 pb-4 pl-4 items-center gap-4 rounded-[6px]">
      <div className="flex flex-col flex-1 gap-1">
        <span className="font-semibold text-base">
          Save more with Fjord Plus
        </span>
        <span className="text-muted-foreground text-sm">
          Get smart spending insights for $2.99/mo.
        </span>
        <button
          type="button"
          className="font-medium text-primary-foreground text-sm pt-2 pr-2 pb-2 pl-2 self-start bg-[#1f6f78] rounded-[6px]"
        >
          Learn more
        </button>
      </div>
      <button
        type="button"
        aria-label="Dismiss promotion"
        className="text-muted-foreground pt-1 pr-1 pb-1 pl-1"
      >
        <X className="size-5" />
      </button>
    </section>
    <section className="text-center flex flex-col items-center gap-2">
      <h1 className="font-semibold text-xl">Whole Foods Market</h1>
      <p className="font-bold text-3xl">−$84.20</p>
      <span className="font-medium rounded-full bg-secondary text-xs pt-1 pr-2 pb-1 pl-2 text-[#14474d]">
        Cleared
      </span>
      <p className="text-muted-foreground text-sm">Yesterday · 4:36 PM</p>
    </section>
    <section className="rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col gap-4">
      <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 items-center gap-4">
        <div className="bg-secondary flex justify-center items-center size-12 text-[#14474d] rounded-[6px]">
          <ShoppingBag className="size-6" />
        </div>
        <span className="font-medium text-base">Grocery purchase</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Category</span>
        <span className="font-medium text-sm">Groceries</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Account</span>
        <span className="font-medium text-sm">Everyday checking</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Date</span>
        <span className="font-medium text-sm">June 17, 2024</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className="text-muted-foreground text-sm">Payment method</span>
        <span className="font-medium text-right text-sm">
          Visa ending in 4242
        </span>
      </div>
    </section>
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-xl">Notes</h2>
      <p className="text-base">Weekly groceries and household essentials.</p>
    </section>
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="font-medium rounded-xl bg-secondary text-base pt-4 pr-4 pb-4 pl-4 w-full text-[#14474d]"
      >
        Edit transaction
      </button>
      <button
        type="button"
        className="font-medium rounded-xl text-base pt-4 pr-4 pb-4 pl-4 w-full text-[#b42318]"
      >
        Delete transaction
      </button>
    </div>
  </main>
  <nav
    aria-label="Primary navigation"
    className="bg-background border-x-border border-t border-t-border border-b-border flex right-0 bottom-0 left-0 pt-2 pr-2 pb-2 pl-2 justify-around items-center h-16"
  >
    <a
      href="#home"
      className="text-muted-foreground flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
    >
      <Home className="size-5" />
      <span className="font-medium text-xs">Home</span>
    </a>
    <a
      href="#transactions"
      className="flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1 text-[#1f6f78]"
      aria-current="page"
    >
      <ArrowLeftRight className="size-5" />
      <span className="font-medium text-xs">Transactions</span>
    </a>
    <a
      href="#insights"
      className="text-muted-foreground flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
    >
      <ChartNoAxesCombined className="size-5" />
      <span className="font-medium text-xs">Insights</span>
    </a>
    <a
      href="#settings"
      className="text-muted-foreground flex pt-2 pr-2 pb-2 pl-2 flex-col items-center gap-1"
    >
      <Settings className="size-5" />
      <span className="font-medium text-xs">Settings</span>
    </a>
  </nav>
</div>;