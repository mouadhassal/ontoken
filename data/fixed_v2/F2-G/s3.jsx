<div className="bg-background text-foreground w-full h-fit">
  <div className="font-sans bg-background min-h-screen text-[#0f2a2e]">
    <aside className="bg-muted border-y-border border-r border-r-border border-l-border flex fixed top-0 bottom-0 left-0 pt-4 pr-4 pb-4 pl-4 flex-col w-60">
      <div className="font-semibold text-xl leading-[26px] mb-8 pt-2 pr-2 pb-2 pl-2 text-[#1f6f78]">
        Fjord Invoice
      </div>
      <nav
        className="flex flex-col flex-1 gap-2"
        aria-label="Primary navigation"
      >
        <a
          href="#invoices"
          className="font-medium rounded-xl text-primary-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3 bg-[#1f6f78]"
        >
          <FileText className="size-5" />
          <span>Invoices</span>
        </a>
        <a
          href="#customers"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <Users className="size-5" />
          <span>Customers</span>
        </a>
        <a
          href="#products"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <Package className="size-5" />
          <span>Products</span>
        </a>
        <a
          href="#reports"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <BarChart3 className="size-5" />
          <span>Reports</span>
        </a>
        <a
          href="#settings"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <Settings className="size-5" />
          <span>Settings</span>
        </a>
      </nav>
      <div className="flex flex-col gap-4">
        <a
          href="#help"
          className="font-medium text-muted-foreground text-sm leading-[18px] flex pt-2 pr-3 pb-2 pl-3 items-center gap-3"
        >
          <HelpCircle className="size-5" />
          <span>Help</span>
        </a>
        <div className="border-x-border border-t border-t-border border-b-border flex pt-4 pr-2 pl-2 items-center gap-3">
          <div className="font-medium rounded-full text-primary-foreground text-xs leading-4 flex justify-center items-center size-8 bg-[#1f6f78]">
            AM
          </div>
          <div className="min-w-0">
            <div className="font-medium text-ellipsis whitespace-nowrap text-sm leading-[18px] overflow-hidden text-[#0f2a2e]">
              Avery Morgan
            </div>
            <div className="font-medium text-muted-foreground text-xs leading-4">
              Owner
            </div>
          </div>
        </div>
      </div>
    </aside>
    <main className="bg-background min-h-screen ml-[48px]">
      <header className="border-t-border border-r-border border-b border-b-border border-l-border flex pr-6 pl-6 justify-between items-center h-16">
        <div className="text-muted-foreground text-sm leading-[18px]">
          Invoices / INV-1047
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="text-muted-foreground"
          >
            <Bell className="size-5" />
          </button>
          <div className="font-medium rounded-full text-primary-foreground text-xs leading-4 flex justify-center items-center size-8 bg-[#1f6f78]">
            AM
          </div>
        </div>
      </header>
      <section className="flex pt-12 pr-12 pb-12 pl-12 flex-col items-center gap-6">
        <div className="rounded-full text-primary-foreground flex justify-center items-center size-16 bg-[#1f6f78]">
          <Check className="size-8" />
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="font-bold text-2xl leading-[31px]">
            Payment received
          </h1>
          <p className="text-muted-foreground text-base leading-[21px]">
            Northstar Studio paid invoice INV-1047.
          </p>
          <div className="font-bold text-[30px] leading-[39px] text-[#1f6f78]">
            $4,800.00
          </div>
          <p className="font-medium text-muted-foreground text-xs leading-4">
            Paid on Mar 12, 2025 via bank transfer
          </p>
        </div>
        <div className="bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6 w-[640px] rounded-[6px]">
          <div className="text-sm leading-[18px] grid gap-4 grid-cols-[1fr_auto]">
            <span className="text-muted-foreground">Invoice</span>
            <span className="font-medium">INV-1047</span>
          </div>
          <div className="text-sm leading-[18px] grid gap-4 grid-cols-[1fr_auto]">
            <span className="text-muted-foreground">Customer</span>
            <span className="font-medium">Northstar Studio</span>
          </div>
          <div className="text-sm leading-[18px] grid gap-4 grid-cols-[1fr_auto]">
            <span className="text-muted-foreground">Payment date</span>
            <span className="font-medium">Mar 12, 2025</span>
          </div>
          <div className="text-sm leading-[18px] grid gap-4 grid-cols-[1fr_auto]">
            <span className="text-muted-foreground">Payment method</span>
            <span className="font-medium">Bank transfer</span>
          </div>
          <div className="text-sm leading-[18px] grid items-center gap-4 grid-cols-[1fr_auto]">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium rounded-full bg-[#2E7D4F] text-white text-xs leading-4 pt-1 pr-3 pb-1 pl-3">
              Paid
            </span>
          </div>
          <div className="bg-muted text-muted-foreground text-sm leading-[18px] pt-4 pr-4 pb-4 pl-4 rounded-[6px]">
            The payment has been recorded and the invoice balance is now $0.00.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button className="font-medium rounded-xl text-primary-foreground text-sm leading-[18px] pt-3 pr-4 pb-3 pl-4 bg-[#1f6f78]">
            View invoice
          </Button>
          <Button
            variant="secondary"
            className="font-medium rounded-xl bg-secondary text-sm leading-[18px] pt-3 pr-4 pb-3 pl-4 text-[#14474d]"
          >
            Back to invoices
          </Button>
        </div>
        <p className="font-medium text-muted-foreground text-xs leading-4">
          Receipt sent to billing@northstarstudio.com
        </p>
      </section>
    </main>
  </div>
</div>;