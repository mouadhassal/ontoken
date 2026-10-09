<div className="bg-background text-foreground w-full h-fit">
  <header className="font-['DM_Sans'] bg-background border-t-border border-r-border border-b border-b-border border-l-border flex relative pt-3 pr-4 pb-3 pl-4 justify-between items-center">
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Go back"
        className="rounded-sm flex justify-center items-center size-6 text-[#2b2118]"
      >
        <ChevronLeft className="size-5" />
      </button>
      <span className="font-semibold text-primary text-[22px] leading-[29px]">
        Ember
      </span>
    </div>
    <div className="text-center -translate-x-1/2 pointer-events-none absolute left-1/2">
      <h1 className="font-normal whitespace-nowrap text-[17px] leading-[22px] text-[#2b2118]">
        Rate your order
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
  <main className="font-['DM_Sans'] flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-[28px] leading-[36px] text-[#2b2118]">
        How was your order?
      </h2>
      <p className="font-normal text-[17px] leading-[22px] text-[#6b5b4d]">
        Your feedback helps The Green Fork serve you better.
      </p>
    </div>
    <div className="rounded-lg bg-card flex pt-6 pr-6 pb-6 pl-6 flex-col gap-6 text-[#2b2118]">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-muted text-primary flex justify-center items-center size-12">
          <Utensils className="size-6" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[22px] leading-[29px]">
            The Green Fork
          </h3>
          <p className="font-medium text-[13px] leading-[17px] text-[#6b5b4d]">
            Delivered at 8:16 PM
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-[15px] leading-[20px]">
          Rate your experience
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="1 star"
            className="rounded-sm flex justify-center items-center size-10"
          >
            <Star />
          </button>
          <button
            type="button"
            aria-label="2 stars"
            className="rounded-sm flex justify-center items-center size-10"
          >
            <Star />
          </button>
          <button
            type="button"
            aria-label="3 stars"
            className="rounded-sm flex justify-center items-center size-10"
          >
            <Star />
          </button>
          <button
            type="button"
            aria-label="4 stars"
            className="rounded-sm flex justify-center items-center size-10"
          >
            <Star />
          </button>
          <button
            type="button"
            aria-label="5 stars"
            className="rounded-sm flex justify-center items-center size-10"
          >
            <Star />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-[15px] leading-[20px]">
          What went well?
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="text-[17px]" type="button">Food quality</button>
          <button className="text-[17px]" type="button">Fast delivery</button>
          <button className="text-[17px]" type="button">Great value</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="comment"
          className="font-medium text-[13px] leading-[17px] text-[#2b2118]"
        >
          Add a comment (optional)
        </label>
        <Textarea
          id="comment"
          placeholder="Tell us what you loved…"
          className="resize-none bg-card text-[15px] leading-[20px] border-input pt-3 pr-4 pb-3 pl-4 min-h-24 placeholder:text-[#6b5b4d] rounded-[10px]"
          defaultValue=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          type="button"
          className="font-medium rounded-lg bg-primary text-primary-foreground text-[15px] leading-[20px] pt-3 pr-3 pb-3 pl-3 w-full"
        >
          Submit rating
        </Button>
        <button
          type="button"
          className="font-medium rounded-lg text-[15px] leading-[20px] pt-3 pr-3 pb-3 pl-3 w-full text-[#6b5b4d]"
        >
          Skip for now
        </button>
      </div>
    </div>
  </main>
</div>;