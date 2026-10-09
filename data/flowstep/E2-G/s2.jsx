<div className="bg-background text-foreground w-full h-fit">
  <div className="font-['DM_Sans'] bg-background w-full min-h-[874px] max-w-[402px]">
    <header className="font-['DM_Sans'] bg-background border-t-border border-r-border border-b border-b-border border-l-border flex relative pt-3 pr-4 pb-3 pl-4 justify-between items-center">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Go back"
          className="rounded-sm text-foreground flex justify-center items-center size-6"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="font-semibold text-primary text-[22px] leading-[29px]">
          Ember
        </span>
      </div>
      <div className="text-center -translate-x-1/2 pointer-events-none absolute left-1/2">
        <h1 className="font-normal whitespace-nowrap text-foreground text-[17px] leading-[22px]">
          Courier on the way
        </h1>
      </div>
      <button
        type="button"
        aria-label="Get help"
        className="rounded-sm text-foreground flex justify-center items-center size-6"
      >
        <CircleHelp className="size-5" />
      </button>
    </header>
    <main className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h2 className="font-bold text-foreground text-[28px] leading-[36px]">
          Your courier is on the way
        </h2>
        <p className="font-normal text-muted-foreground text-[17px] leading-[22px]">
          Almost there — your order is heading to you now.
        </p>
      </section>
      <Card className="text-center rounded-lg bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-2">
        <span className="font-medium text-muted-foreground text-[13px] leading-[17px] tracking-[0.08em]">
          ARRIVING IN
        </span>
        <strong className="font-bold text-primary text-[34px] leading-[44px]">
          18 min
        </strong>
        <span className="font-normal text-muted-foreground text-[15px] leading-[20px]">
          By 8:15 PM
        </span>
      </Card>
      <div
        className="rounded-lg bg-muted relative w-full h-[236px] overflow-hidden"
        aria-label="Delivery route map"
      >
        <div className="opacity-80 absolute top-0 right-0 bottom-0 left-0">
          <div className="bg-border absolute top-8 left-0 w-full h-px" />
          <div className="bg-border absolute top-20 left-0 w-full h-px" />
          <div className="bg-border absolute top-32 left-0 w-full h-px" />
          <div className="bg-border absolute top-44 left-0 w-full h-px" />
          <div className="bg-border absolute top-0 left-8 w-px h-full" />
          <div className="bg-border absolute top-0 left-24 w-px h-full" />
          <div className="bg-border absolute top-0 left-44 w-px h-full" />
          <div className="bg-border absolute top-0 left-64 w-px h-full" />
          <div className="bg-border absolute top-0 left-80 w-px h-full" />
          <div className="rotate-28 bg-border absolute -top-[12px] left-12 w-px h-[280px]" />
          <div className="-rotate-32 bg-border absolute -top-[18px] left-52 w-px h-[280px]" />
          <div className="-rotate-16 bg-border absolute top-24 -left-[12px] w-[430px] h-px" />
        </div>
        <div className="-rotate-24 rounded-full bg-primary absolute top-[116px] left-[86px] w-[178px] h-1" />
        <div className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-full bg-primary text-primary-foreground border-t-4 border-t-card border-r-4 border-r-card border-b-4 border-b-card border-l-4 border-l-card flex absolute top-[126px] left-[68px] justify-center items-center size-10">
          <Bike className="size-5" />
        </div>
        <div className="flex absolute top-12 right-8 flex-col items-center gap-1">
          <div className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-full bg-secondary text-secondary-foreground border-t-4 border-t-card border-r-4 border-r-card border-b-4 border-b-card border-l-4 border-l-card flex justify-center items-center size-10">
            <Home className="size-4" />
          </div>
          <span className="font-medium shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-sm bg-card text-foreground text-[13px] leading-[17px] pt-1 pr-2 pb-1 pl-2">
            You
          </span>
        </div>
      </div>
      <Card className="rounded-lg bg-card flex pt-4 pr-4 pb-4 pl-4 justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="font-medium rounded-full bg-secondary text-secondary-foreground text-[17px] leading-[22px] flex justify-center items-center size-12">
            JR
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-normal text-foreground text-[17px] leading-[22px]">
              Jordan R.
            </span>
            <span className="font-normal text-muted-foreground text-[15px] leading-[20px]">
              Ember courier
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label="Call Jordan R."
          className="rounded-full bg-muted text-primary flex justify-center items-center size-12"
        >
          <Phone className="size-5" />
        </button>
      </Card>
      <div className="flex items-start gap-2">
        <div className="flex flex-col items-center flex-1 gap-2">
          <div className="bg-success rounded-full text-primary-foreground flex justify-center items-center size-8">
            <Check className="size-4" />
          </div>
          <span className="font-medium text-center text-foreground text-[13px] leading-[17px]">
            Confirmed
          </span>
        </div>
        <div className="bg-success mt-4 flex-1 h-0.5" />
        <div className="flex flex-col items-center flex-1 gap-2">
          <div className="bg-success rounded-full text-primary-foreground flex justify-center items-center size-8">
            <Check className="size-4" />
          </div>
          <span className="font-medium text-center text-foreground text-[13px] leading-[17px]">
            Preparing
          </span>
        </div>
        <div className="bg-primary mt-4 flex-1 h-0.5" />
        <div className="flex flex-col items-center flex-1 gap-2">
          <div className="rounded-full bg-primary text-primary-foreground flex justify-center items-center size-8">
            <span className="rounded-full bg-primary-foreground size-2" />
          </div>
          <span className="font-medium text-center text-primary text-[13px] leading-[17px]">
            On the way
          </span>
        </div>
      </div>
      <Button
        type="button"
        className="font-medium rounded-lg bg-secondary text-secondary-foreground text-[15px] leading-[20px] pr-4 pl-4 w-full h-12"
      >
        Contact support
      </Button>
    </main>
  </div>
</div>;