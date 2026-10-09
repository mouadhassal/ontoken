<div className="bg-background text-foreground w-full h-fit">
  <header className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-3 pr-4 pb-3 pl-4 justify-between items-center">
    <div className="font-serif font-semibold text-2xl leading-[31px]">
      THE LEDGER
    </div>
    <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
      MONDAY, OCTOBER 14, 2024
    </div>
  </header>
  <main className="pt-6 pr-4 pb-6 pl-4 max-h-screen overflow-y-auto">
    <article className="flex flex-col gap-4">
      <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
        CITIES
      </div>
      <h1 className="font-serif font-bold text-[32px] leading-[42px]">
        The quiet reshaping of the American city
      </h1>
      <p className="font-sans font-normal text-[18px] leading-[23px]">
        From empty offices to newly walkable blocks, a different urban future is
        taking shape.
      </p>
      <div className="flex flex-col gap-1">
        <div className="font-sans font-semibold text-[13px] leading-[17px]">
          BY MAYA ORTIZ
        </div>
        <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
          OCTOBER 14, 2024 · 8 MIN READ
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button className="font-sans font-semibold rounded-sm bg-primary text-primary-foreground text-[13px] leading-[17px] pt-3 pr-4 pb-3 pl-4 gap-2">
          <Bookmark />
          Save
        </Button>
        <Button
          variant="outline"
          className="font-sans font-semibold rounded-sm text-[13px] leading-[17px] border-border pt-3 pr-4 pb-3 pl-4 gap-2"
        >
          <Share2 className="size-4" />
          Share
        </Button>
      </div>
      <div className="border-x-border border-t border-t-border border-b-border" />
      <div className="flex flex-col gap-4">
        <p className="font-sans font-normal text-[18px] leading-[23px]">
          For decades, the American city was drawn around a commute. Every
          morning, millions moved inward; every evening, they moved out. The map
          made sense because the schedule did.
        </p>
        <p className="font-sans font-normal text-[18px] leading-[23px]">
          Now the schedule is changing. A generation of hybrid workers has
          loosened the old rhythm, leaving behind a question that is both
          practical and profound: what should the city be for?
        </p>
        <p className="font-sans font-normal text-[18px] leading-[23px]">
          In blocks once defined by glass towers and lunchtime crowds, small
          experiments are taking root. Libraries are extending their hours.
          Empty storefronts are becoming kitchens, studios, and places to meet.
        </p>
      </div>
      <div className="bg-accent flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2">
        <blockquote className="font-serif font-semibold text-[24px] leading-[31px]">
          A city is not a machine for moving people. It is a way of keeping them
          close.
        </blockquote>
        <div className="font-sans font-semibold text-muted-foreground text-[13px] leading-[17px]">
          — LENA MORI, URBANIST
        </div>
      </div>
      <a
        href="#continue-reading"
        className="font-sans font-semibold text-primary text-[13px] leading-[17px]"
      >
        CONTINUE READING →
      </a>
    </article>
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