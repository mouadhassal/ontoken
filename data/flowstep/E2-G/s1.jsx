<div className="bg-background text-foreground w-full h-fit">
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
        Order confirmed
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
  <main className="font-['DM_Sans'] flex pt-8 pr-4 pb-8 pl-4 flex-col items-center gap-6">
    <div className="text-center flex flex-col items-center gap-4">
      <div className="rounded-full bg-[#FAEFE2] text-[#2F7D32] flex justify-center items-center size-16">
        <Check className="size-8" strokeWidth={3} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-[#2B2118] text-[28px] leading-[36px]">
          Order confirmed!
        </h2>
        <p className="font-normal text-[#6B5B4D] text-[17px] leading-[22px]">
          Your order from The Green Fork is being prepared.
        </p>
      </div>
    </div>
    <div className="rounded-3xl bg-card text-[#2B2118] flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-normal text-[17px] leading-[22px]">
            Order #4821
          </span>
          <span className="font-normal text-[#6B5B4D] text-[15px] leading-[20px]">
            Placed at 7:42 PM
          </span>
        </div>
        <p className="font-normal text-[#6B5B4D] text-[15px] leading-[20px]">
          Estimated arrival 8:15–8:25 PM
        </p>
      </div>
      <div className="flex items-start">
        <div className="text-center flex flex-col items-center flex-1 gap-2 min-w-0">
          <div className="rounded-full bg-primary text-primary-foreground flex justify-center items-center size-8">
            <Check className="size-4" />
          </div>
          <span className="font-medium text-primary text-[13px] leading-[17px]">
            Confirmed
          </span>
        </div>
        <div className="bg-[#EADBC8] mt-4 flex-1 h-px" />
        <div className="text-center flex flex-col items-center flex-1 gap-2 min-w-0">
          <div className="rounded-full bg-[#FAEFE2] border-t border-t-[#EADBC8] border-r border-r-[#EADBC8] border-b border-b-[#EADBC8] border-l border-l-[#EADBC8] size-8" />
          <span className="font-medium text-[#6B5B4D] text-[13px] leading-[17px]">
            Preparing
          </span>
        </div>
        <div className="bg-[#EADBC8] mt-4 flex-1 h-px" />
        <div className="text-center flex flex-col items-center flex-1 gap-2 min-w-0">
          <div className="rounded-full bg-[#FAEFE2] border-t border-t-[#EADBC8] border-r border-r-[#EADBC8] border-b border-b-[#EADBC8] border-l border-l-[#EADBC8] size-8" />
          <span className="font-medium text-[#6B5B4D] text-[13px] leading-[17px]">
            On the way
          </span>
        </div>
      </div>
    </div>
    <div className="rounded-3xl bg-[#FAEFE2] flex pt-4 pr-4 pb-4 pl-4 items-center gap-4 w-full">
      <div className="rounded-full bg-card text-[#C23B0B] flex justify-center items-center size-10">
        <Utensils className="size-5" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-normal text-[#2B2118] text-[17px] leading-[22px]">
          The Green Fork
        </span>
        <span className="font-normal text-[#6B5B4D] text-[15px] leading-[20px]">
          12 Oak Street
        </span>
      </div>
    </div>
    <Button className="font-normal rounded-3xl bg-primary text-primary-foreground text-[17px] leading-[22px] pt-3 pr-4 pb-3 pl-4 w-full">
      View order details
    </Button>
  </main>
</div>;