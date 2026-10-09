<div className="bg-background text-foreground w-full h-fit">
  <div className="flex pt-8 pr-6 pb-4 pl-6 flex-col min-h-[874px]">
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
    <Button
      variant="ghost"
      size="icon"
      className="text-foreground mt-8 self-start"
      aria-label="Go back"
    >
      <ChevronLeft className="size-6" />
    </Button>
    <main className="flex flex-col flex-1">
      <h1 className="font-sans font-bold text-foreground text-2xl leading-8 mt-8">
        Check your phone
      </h1>
      <p className="font-sans font-normal text-muted-foreground text-base leading-5 mt-2">
        We sent a 6-digit verification code to ••• •••
        <span className="text-foreground">4821</span>.
      </p>
      <div className="flex mt-8 justify-center gap-2">
        <input
          aria-label="Digit 1"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center rounded-sm bg-background text-foreground text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px]"
          defaultValue="4"
        />
        <input
          aria-label="Digit 2"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center rounded-sm bg-background text-foreground text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px]"
          defaultValue="8"
        />
        <input
          aria-label="Digit 3"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center rounded-sm bg-background text-foreground text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px]"
          defaultValue="2"
        />
        <input
          aria-label="Digit 4"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center rounded-sm bg-background text-foreground text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px]"
          defaultValue="1"
        />
        <input
          aria-label="Digit 5"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center rounded-sm bg-background text-foreground text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px]"
          defaultValue="6"
        />
        <input
          aria-label="Digit 6"
          inputMode="numeric"
          maxLength={1}
          className="font-sans font-semibold text-center rounded-sm bg-background text-foreground text-xl leading-6 border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input outline-none size-[44px]"
          defaultValue="3"
        />
      </div>
      <p className="font-sans font-medium text-center text-muted-foreground text-xs leading-4 mt-3">
        Code expires in 04:32
      </p>
      <Button className="font-sans font-semibold rounded-lg bg-primary text-primary-foreground text-base leading-5 mt-8 pt-3 pb-3 w-full">
        Verify code
      </Button>
      <Button
        variant="ghost"
        className="font-sans font-semibold text-primary text-base leading-5 mt-4 self-center"
      >
        Resend code
      </Button>
      <p className="font-sans font-medium text-center text-muted-foreground text-xs leading-4 mt-2">
        You can request a new code in 28 seconds.
      </p>
    </main>
    <div className="flex pt-4 justify-center" aria-hidden="true">
      <div className="rounded-full bg-foreground w-32 h-1" />
    </div>
  </div>
</div>;