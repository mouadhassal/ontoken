<div className="bg-background text-foreground w-full h-fit">
  <div className="bg-background text-foreground flex flex-col w-full">
    <header className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-3 pr-4 pb-3 pl-4 justify-between items-center">
      <div className="font-serif font-semibold text-2xl leading-[31px]">
        THE LEDGER
      </div>
      <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
        MONDAY, OCTOBER 14, 2024
      </div>
    </header>
    <main className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h1 className="font-serif font-bold text-[32px] leading-[42px]">
          Saved articles
        </h1>
        <p className="font-sans font-normal text-muted-foreground text-[15px] leading-5">
          Three stories waiting for you
        </p>
      </section>
      <div
        className="border-t-border border-r-border border-b border-b-border border-l-border flex"
        role="tablist"
        aria-label="Saved article views"
      >
        <button type="button" role="tab">
          SAVED
        </button>
        <button type="button" role="tab">
          HISTORY
        </button>
      </div>
      <section className="flex flex-col gap-4">
        <article className="rounded-sm bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
                SCIENCE
              </div>
              <h2 className="font-serif font-semibold text-2xl leading-[31px]">
                The hidden life of neighborhood trees
              </h2>
            </div>
            <Bookmark className="fill-primary text-primary shrink-0 size-5" />
          </div>
          <p className="font-sans font-normal text-[15px] leading-5">
            A closer look at the networks beneath our sidewalks.
          </p>
          <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
            JON BAKER · 7 MIN READ
          </div>
        </article>
        <article className="rounded-sm bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
                POLITICS
              </div>
              <h2 className="font-serif font-semibold text-2xl leading-[31px]">
                What local power looks like now
              </h2>
            </div>
            <Bookmark className="fill-primary text-primary shrink-0 size-5" />
          </div>
          <p className="font-sans font-normal text-[15px] leading-5">
            The mayors building change from the block up.
          </p>
          <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
            RHEA SINGH · 9 MIN READ
          </div>
        </article>
        <article className="rounded-sm bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
                FOOD
              </div>
              <h2 className="font-serif font-semibold text-2xl leading-[31px]">
                The bread that remembers
              </h2>
            </div>
            <Bookmark className="fill-primary text-primary shrink-0 size-5" />
          </div>
          <p className="font-sans font-normal text-[15px] leading-5">
            A baker, a village, and the patient return of an old grain.
          </p>
          <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
            TOMAS REED · 4 MIN READ
          </div>
        </article>
      </section>
      <section className="font-sans font-normal text-muted-foreground text-[15px] leading-5 hidden">
        No reading history yet.
      </section>
      <div className="flex pt-2 justify-between items-center gap-4">
        <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
          Saved on this device
        </div>
        <a
          href="#manage-saved-stories"
          className="font-sans font-semibold text-primary text-[13px] leading-[17px]"
        >
          MANAGE SAVED STORIES
        </a>
      </div>
    </main>
    <nav
      className="bg-card border-x-border border-t border-t-border border-b-border flex pt-3 pr-4 pb-3 pl-4 justify-around items-center"
      aria-label="Primary navigation"
    >
      <a
        href="#front-page"
        className="text-muted-foreground flex flex-col items-center gap-1"
      >
        <Newspaper className="size-5" />
        <span className="font-sans font-semibold text-[13px] leading-[17px]">
          Front Page
        </span>
      </a>
      <a
        href="#latest"
        className="text-muted-foreground flex flex-col items-center gap-1"
      >
        <Clock3 className="size-5" />
        <span className="font-sans font-semibold text-[13px] leading-[17px]">
          Latest
        </span>
      </a>
      <a
        href="#saved"
        className="text-primary flex flex-col items-center gap-1"
      >
        <Bookmark className="size-5" />
        <span className="font-sans font-semibold text-[13px] leading-[17px]">
          Saved
        </span>
      </a>
      <a
        href="#profile"
        className="text-muted-foreground flex flex-col items-center gap-1"
      >
        <UserRound className="size-5" />
        <span className="font-sans font-semibold text-[13px] leading-[17px]">
          Profile
        </span>
      </a>
    </nav>
  </div>
</div>;