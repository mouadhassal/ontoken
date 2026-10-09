<div className="bg-background text-foreground w-full h-fit">
  <div className="flex pt-8 pr-6 pb-4 pl-6 flex-col min-h-[874px]">
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
    <Button
      variant="ghost"
      size="icon"
      className="mt-8 self-start text-[#0f2a2e]"
      aria-label="Go back"
    >
      <ChevronLeft className="size-6" />
    </Button>
    <main className="flex flex-col flex-1">
      <h1 className="font-sans font-bold text-2xl leading-8 mt-8 text-[#0f2a2e]">
        Check your phone
      </h1>
      <p className="font-sans font-normal text-base leading-5 mt-2 text-[#526669]">
        We sent a 6-digit verification code to ••• •••
        <span className="text-[#0f2a2e]">4821</span>.
      </p>
      <div className="flex mt-8 justify-center gap-2">
        <input
          aria-label="Digit 1"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center bg-background text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px] text-[#0f2a2e] rounded-[0px]"
          defaultValue="4"
        />
        <input
          aria-label="Digit 2"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center bg-background text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px] text-[#0f2a2e] rounded-[0px]"
          defaultValue="8"
        />
        <input
          aria-label="Digit 3"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center bg-background text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px] text-[#0f2a2e] rounded-[0px]"
          defaultValue="2"
        />
        <input
          aria-label="Digit 4"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center bg-background text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px] text-[#0f2a2e] rounded-[0px]"
          defaultValue="1"
        />
        <input
          aria-label="Digit 5"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center bg-background text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px] text-[#0f2a2e] rounded-[0px]"
          defaultValue="6"
        />
        <input
          aria-label="Digit 6"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center bg-background text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px] text-[#0f2a2e] rounded-[0px]"
          defaultValue="3"
        />
      </div>
      <p className="font-sans font-medium text-center text-xs leading-4 mt-3 text-[#526669]">
        Code expires in 04:32
      </p>
      <Button className="font-sans font-semibold text-primary-foreground text-base leading-5 mt-8 pt-3 pb-3 w-full bg-[#1f6f78] rounded-[6px]">
        Verify code
      </Button>
      <Button
        variant="ghost"
        className="font-sans font-semibold text-base leading-5 mt-4 self-center text-[#1f6f78]"
      >
        Resend code
      </Button>
      <p className="font-sans font-medium text-center text-xs leading-4 mt-2 text-[#526669]">
        You can request a new code in 28 seconds.
      </p>
    </main>
    <div className="flex pt-4 justify-center" aria-hidden="true">
      <div className="rounded-full w-32 h-1 bg-[#0f2a2e]" />
    </div>
  </div>
</div>;