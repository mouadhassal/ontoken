<div className="bg-background text-foreground w-full h-fit">
  <div className="bg-background flex pb-24 flex-col min-h-[874px]">
    <header className="flex pt-6 pr-6 pl-6 justify-between items-center">
      <div className="flex items-center gap-2">
        <div
          className="rounded-md bg-primary flex justify-center items-center size-8"
          aria-hidden="true"
        >
          <Check className="text-primary-foreground size-5" strokeWidth={3} />
        </div>
        <span className="font-sans font-semibold text-primary text-xl leading-6">
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
          <Bell className="text-foreground size-5" />
          <span className="font-medium rounded-full bg-accent text-accent-foreground text-xs flex absolute top-0 right-0 justify-center items-center size-4">
            2
          </span>
        </Button>
        <Button
          variant="ghost"
          className="font-medium rounded-full bg-secondary text-secondary-foreground text-sm pt-0 pr-0 pb-0 pl-0 size-10"
          aria-label="Profile"
        >
          AM
        </Button>
      </div>
    </header>
    <main className="flex pt-8 pr-6 pl-6 flex-col flex-1 gap-6">
      <section className="flex flex-col gap-1">
        <h1 className="font-sans font-bold text-foreground text-2xl leading-[31px]">
          Good morning, Alex
        </h1>
        <p className="font-sans font-normal text-muted-foreground text-base leading-[21px]">
          Here’s your financial snapshot.
        </p>
      </section>
      <section className="rounded-xl bg-primary text-primary-foreground flex pt-6 pr-6 pb-6 pl-6 flex-col gap-4">
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
        <span className="font-sans font-normal text-primary-foreground/70 text-sm leading-[18px]">
          Updated just now
        </span>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-sans font-semibold text-foreground text-xl leading-[26px]">
          Quick actions
        </h2>
        <div className="grid gap-2 grid-cols-3">
          <Button
            variant="ghost"
            className="text-left rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col items-start gap-4 h-auto"
          >
            <ArrowUpRight className="text-primary size-5" />
            <span className="font-sans font-medium text-foreground text-xs leading-4">
              Send money
            </span>
          </Button>
          <Button
            variant="ghost"
            className="text-left rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col items-start gap-4 h-auto"
          >
            <Plus className="text-primary size-5" />
            <span className="font-sans font-medium text-foreground text-xs leading-4">
              Deposit
            </span>
          </Button>
          <Button
            variant="ghost"
            className="text-left rounded-xl bg-muted flex pt-4 pr-4 pb-4 pl-4 flex-col items-start gap-4 h-auto"
          >
            <Receipt className="text-primary size-5" />
            <span className="font-sans font-medium text-foreground text-xs leading-4">
              Pay bills
            </span>
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-sans font-semibold text-foreground text-xl leading-[26px]">
            Recent activity
          </h2>
          <Button
            variant="ghost"
            className="font-medium text-primary text-sm leading-[18px] pt-0 pr-0 pb-0 pl-0 h-auto"
          >
            See all
          </Button>
        </div>
        <div className="flex flex-col">
          <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-foreground text-sm leading-[18px]">
                Grocery Market
              </span>
              <span className="font-sans font-medium text-muted-foreground text-xs leading-4">
                Today, 9:42 AM
              </span>
            </div>
            <span className="font-sans font-medium text-destructive text-sm leading-[18px]">
              -$86.24
            </span>
          </div>
          <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-4 pb-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-foreground text-sm leading-[18px]">
                Harbor Utilities
              </span>
              <span className="font-sans font-medium text-muted-foreground text-xs leading-4">
                Yesterday
              </span>
            </div>
            <span className="font-sans font-medium text-destructive text-sm leading-[18px]">
              -$142.00
            </span>
          </div>
          <div className="flex pt-4 pb-4 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-medium text-foreground text-sm leading-[18px]">
                Payroll deposit
              </span>
              <span className="font-sans font-medium text-muted-foreground text-xs leading-4">
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
        className="rounded-full bg-foreground mr-auto ml-auto w-32 h-1"
        aria-hidden="true"
      />
    </nav>
  </div>
</div>;