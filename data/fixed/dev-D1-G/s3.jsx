<div className="bg-background w-full h-fit text-[#0f2a2e]">
  <div className="bg-background flex flex-col min-h-[874px] pb-[48px]">
    <header className="flex pt-6 pr-6 pl-6 justify-between items-center">
      <div className="flex items-center gap-2">
        <div
          className="flex justify-center items-center size-8 bg-[#1f6f78] rounded-[6px]"
          aria-hidden="true"
        >
          <Check className="text-primary-foreground size-5" strokeWidth={3} />
        </div>
        <span className="font-sans font-semibold text-xl leading-6 text-[#1f6f78]">
          Fjord
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full relative pt-2 pr-2 pb-2 pl-2"
          aria-label="Notifications"
        >
          <Bell className="size-5 text-[#0f2a2e]" />
          <span className="font-medium rounded-full text-xs flex absolute top-0 right-0 justify-center items-center size-4 text-[#0f2a2e] bg-[#f2a541]">
            2
          </span>
        </Button>
        <Button
          variant="ghost"
          className="font-medium rounded-full bg-secondary text-sm pt-0 pr-0 pb-0 pl-0 size-10 text-[#0f2a2e]"
          aria-label="Profile"
        >
          AM
        </Button>
      </div>
    </header>
    <main className="flex pt-8 pr-6 pl-6 flex-col flex-1 gap-6">
      <section className="flex flex-col gap-1">
        <h1 className="font-sans font-bold text-2xl leading-[31px] text-[#0f2a2e]">
          Good morning, Alex
        </h1>
        <p className="font-sans font-normal text-base leading-[21px] text-[#526669]">
          Here’s your financial snapshot.
        </p>
      </section>
      <section className="rounded-xl text-primary-foreground flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4 bg-[#1f6f78]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="font-sans font-medium text-primary-foreground text-xs leading-4">
              Total balance
            </span>
            <span className="font-sans font-bold text-primary-foreground text-3xl leading-[39px]">
              $12,840.56
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-primary-foreground pt-2 pr-2 pb-2 pl-2"
            aria-label="Show balance"
          >
            <Eye className="size-5" />
          </Button>
        </div>
        <span className="font-sans font-normal text-sm leading-[18px] text-[#e3eff0]">
          Updated just now
        </span>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-sans font-semibold text-xl leading-[26px] text-[#0f2a2e]">
          Quick actions
        </h2>
        <div className="grid gap-2 grid-cols-3">
          <Button
            variant="ghost"
            className="text-left rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col items-start gap-4 h-auto"
          >
            <ArrowUpRight className="size-5 text-[#1f6f78]" />
            <span className="font-sans font-medium text-xs leading-4 text-[#0f2a2e]">
              Send money
            </span>
          </Button>
          <Button
            variant="ghost"
            className="text-left rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col items-start gap-4 h-auto"
          >
            <Plus className="size-5 text-[#1f6f78]" />
            <span className="font-sans font-medium text-xs leading-4 text-[#0f2a2e]">
              Deposit
            </span>
          </Button>
          <Button
            variant="ghost"
            className="text-left rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col items-start gap-4 h-auto"
          >
            <Receipt className="size-5 text-[#1f6f78]" />
            <span className="font-sans font-medium text-xs leading-4 text-[#0f2a2e]">
              Pay bills
            </span>
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-sans font-semibold text-xl leading-[26px] text-[#0f2a2e]">
            Recent activity
          </h2>
          <Button
            variant="ghost"
            className="font-medium text-sm leading-[18px] pt-0 pr-0 pb-0 pl-0 h-auto text-[#1f6f78]"
          >
            See all
          </Button>
        </div>
        <div className="flex flex-col">
          <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-sm leading-[18px] text-[#0f2a2e]">
                Grocery Market
              </span>
              <span className="font-sans font-medium text-xs leading-4 text-[#526669]">
                Today, 9:42 AM
              </span>
            </div>
            <span className="font-sans font-medium text-sm leading-[18px] text-[#b42318]">
              -$86.24
            </span>
          </div>
          <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-sm leading-[18px] text-[#0f2a2e]">
                Harbor Utilities
              </span>
              <span className="font-sans font-medium text-xs leading-4 text-[#526669]">
                Yesterday
              </span>
            </div>
            <span className="font-sans font-medium text-sm leading-[18px] text-[#b42318]">
              -$142.00
            </span>
          </div>
          <div className="flex pt-4 pb-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-sm leading-[18px] text-[#0f2a2e]">
                Payroll deposit
              </span>
              <span className="font-sans font-medium text-xs leading-4 text-[#526669]">
                Mon, Jun 10
              </span>
            </div>
            <span className="font-sans font-medium text-[#2E7D4F] text-sm leading-[18px]">
              +$2,450.00
            </span>
          </div>
        </div>
      </section>
    </main>
    <nav className="bg-background border-x-border border-t border-t-border border-b-border flex fixed right-0 bottom-0 left-0 pt-4 pr-6 pb-2 pl-6 flex-col gap-2">
      <div className="grid grid-cols-4">
        <Button variant="ghost">
          <Home className="size-5" />
          <span className="font-sans font-medium text-xs leading-4">Home</span>
        </Button>
        <Button variant="ghost">
          <ArrowLeftRight className="size-5" />
          <span className="font-sans font-medium text-xs leading-4">
            Payments
          </span>
        </Button>
        <Button variant="ghost">
          <CreditCard className="size-5" />
          <span className="font-sans font-medium text-xs leading-4">Cards</span>
        </Button>
        <Button variant="ghost">
          <UserRound className="size-5" />
          <span className="font-sans font-medium text-xs leading-4">
            Profile
          </span>
        </Button>
      </div>
      <div
        className="rounded-full mr-auto ml-auto w-32 h-1 bg-[#0f2a2e]"
        aria-hidden="true"
      />
    </nav>
  </div>
</div>;