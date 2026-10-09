<div className="bg-background text-foreground w-full h-fit">
  <header className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-3 pr-4 pb-3 pl-4 justify-between items-center">
    <div className="font-serif font-semibold text-2xl leading-[31px]">
      THE LEDGER
    </div>
    <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
      MONDAY, OCTOBER 14, 2024
    </div>
  </header>
  <main className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-4 overflow-hidden">
    <section className="flex flex-col gap-2">
      <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
        TOP STORIES
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif font-bold text-[32px] leading-[42px]">
            The quiet reshaping of the American city
          </h1>
          <p className="font-sans font-normal text-[18px] leading-[23px]">
            From empty offices to newly walkable blocks, a different urban
            future is taking shape.
          </p>
          <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
            MAYA ORTIZ · 8 MIN READ
          </div>
        </div>
        <Button
          aria-label="Save lead story"
          className="rounded-sm bg-transparent text-primary border-t border-t-primary border-r border-r-primary border-b border-b-primary border-l border-l-primary pt-2 pr-2 pb-2 pl-2 shrink-0"
        >
          <Bookmark />
        </Button>
      </div>
    </section>
    <div className="border-x-border border-t border-t-border border-b-border" />
    <section className="flex pt-2 pb-2 flex-col gap-2">
      <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
        CLIMATE
      </div>
      <h2 className="font-serif font-semibold text-2xl leading-[31px]">
        A New Map for the River
      </h2>
      <p className="font-sans font-normal text-[15px] leading-5">
        Communities are learning to live with water, not against it.
      </p>
      <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
        ELI PARK · 5 MIN READ
      </div>
    </section>
    <div className="border-x-border border-t border-t-border border-b-border" />
    <section className="flex pt-2 pb-2 flex-col gap-2">
      <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
        CULTURE
      </div>
      <h2 className="font-serif font-semibold text-2xl leading-[31px]">
        The long afterlife of a good song
      </h2>
      <p className="font-sans font-normal text-[15px] leading-5">
        Why certain melodies refuse to leave us.
      </p>
      <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
        NORA BELL · 6 MIN READ
      </div>
    </section>
    <div className="border-x-border border-t border-t-border border-b-border" />
    <section className="flex pt-2 pb-2 flex-col gap-2">
      <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
        IDEAS
      </div>
      <h2 className="font-serif font-semibold text-2xl leading-[31px]">
        The case for looking closely
      </h2>
      <p className="font-sans font-normal text-[15px] leading-5">
        Attention is a civic resource. We should spend it well.
      </p>
      <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
        DAVID LIN · 4 MIN READ
      </div>
    </section>
    <a
      href="#all-top-stories"
      className="font-sans font-semibold text-primary text-[13px] leading-[17px]"
    >
      SEE ALL TOP STORIES →
    </a>
  </main>
  <nav
    className="bg-card border-x-border border-t border-t-border border-b-border flex pt-3 pr-4 pb-3 pl-4 justify-around items-center"
    aria-label="Primary navigation"
  >
    <a
      href="#front-page"
      className="text-primary flex flex-col items-center gap-1"
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
      className="text-muted-foreground flex flex-col items-center gap-1"
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
</div>;