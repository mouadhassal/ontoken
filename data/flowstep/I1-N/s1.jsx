<div className="bg-background text-foreground w-full h-fit">
  <div className="pt-6 pr-6 pb-28 pl-6 flex-1">
    <header className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl tracking-tight">
          The Daily Brief
        </h1>
        <div className="font-semibold rounded-full bg-secondary text-secondary-foreground text-sm flex justify-center items-center size-10">
          AM
        </div>
      </div>
      <p className="text-muted-foreground text-sm">Monday, October 14, 2024</p>
    </header>
    <div className="flex mt-6 pb-1 gap-2 overflow-x-auto" aria-label="Topics">
      <button
        type="button"
        className="font-medium rounded-full bg-primary text-primary-foreground text-sm pt-2 pr-4 pb-2 pl-4 shrink-0"
      >
        Top stories
      </button>
      <button
        type="button"
        className="font-medium rounded-full bg-muted text-muted-foreground text-sm pt-2 pr-4 pb-2 pl-4 shrink-0"
      >
        World
      </button>
      <button
        type="button"
        className="font-medium rounded-full bg-muted text-muted-foreground text-sm pt-2 pr-4 pb-2 pl-4 shrink-0"
      >
        Business
      </button>
      <button
        type="button"
        className="font-medium rounded-full bg-muted text-muted-foreground text-sm pt-2 pr-4 pb-2 pl-4 shrink-0"
      >
        Science
      </button>
      <button
        type="button"
        className="font-medium rounded-full bg-muted text-muted-foreground text-sm pt-2 pr-4 pb-2 pl-4 shrink-0"
      >
        Culture
      </button>
    </div>
    <section className="flex mt-8 flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg tracking-tight">Top stories</h2>
        <span className="font-medium text-primary text-sm">See all</span>
      </div>
      <article className="rounded-2xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border overflow-hidden">
        <div className="font-semibold bg-foreground text-background text-sm tracking-[0.2em] flex justify-center items-center h-48">
          IMAGE
        </div>
        <div className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-3">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-primary text-xs tracking-[0.16em]">
                WORLD
              </span>
              <h3 className="font-semibold text-xl leading-tight">
                Rescue teams search for survivors after powerful coastal quake
              </h3>
            </div>
            <button
              type="button"
              aria-label="Save lead story"
              className="rounded-full bg-muted flex justify-center items-center shrink-0 size-8"
            >
              <Bookmark />
            </button>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Communities across the region are beginning to assess the damage as
            emergency crews work through the night.
          </p>
          <p className="text-muted-foreground text-xs">
            8 min read · 24 min ago
          </p>
        </div>
      </article>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 gap-3">
        <div className="font-semibold rounded-xl bg-muted text-muted-foreground text-[10px] tracking-[0.16em] flex justify-center items-center shrink-0 size-24">
          IMAGE
        </div>
        <div className="flex justify-between items-start flex-1 gap-3 min-w-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base leading-snug">
              Markets steady as investors await new inflation data
            </h3>
            <p className="text-muted-foreground text-xs">
              BUSINESS · 4 min read
            </p>
          </div>
          <button
            type="button"
            aria-label="Save markets story"
            className="rounded-full bg-muted flex justify-center items-center shrink-0 size-8"
          >
            <Bookmark />
          </button>
        </div>
      </article>
      <article className="flex gap-3">
        <div className="font-semibold rounded-xl bg-muted text-muted-foreground text-[10px] tracking-[0.16em] flex justify-center items-center shrink-0 size-24">
          IMAGE
        </div>
        <div className="flex justify-between items-start flex-1 gap-3 min-w-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base leading-snug">
              A new telescope map reveals the hidden structure of our galaxy
            </h3>
            <p className="text-muted-foreground text-xs">
              SCIENCE · 6 min read
            </p>
          </div>
          <button
            type="button"
            aria-label="Save telescope story"
            className="rounded-full bg-muted flex justify-center items-center shrink-0 size-8"
          >
            <Bookmark />
          </button>
        </div>
      </article>
    </section>
    <section className="flex mt-8 flex-col gap-4">
      <h2 className="font-semibold text-lg tracking-tight">Your brief</h2>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 justify-between items-center gap-4">
        <h3 className="font-medium text-sm leading-snug">
          What to know before the summit begins
        </h3>
        <button
          type="button"
          aria-label="Save summit story"
          className="rounded-full bg-muted flex justify-center items-center shrink-0 size-8"
        >
          <Bookmark />
        </button>
      </article>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 justify-between items-center gap-4">
        <h3 className="font-medium text-sm leading-snug">
          The quiet design trend reshaping city streets
        </h3>
        <button
          type="button"
          aria-label="Save design story"
          className="rounded-full bg-muted flex justify-center items-center shrink-0 size-8"
        >
          <Bookmark />
        </button>
      </article>
      <article className="flex justify-between items-center gap-4">
        <h3 className="font-medium text-sm leading-snug">
          Tonight’s sky: a guide to the autumn constellations
        </h3>
        <button
          type="button"
          aria-label="Save sky story"
          className="rounded-full bg-muted flex justify-center items-center shrink-0 size-8"
        >
          <Bookmark />
        </button>
      </article>
    </section>
  </div>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-x-border border-t border-t-border border-b-border fixed z-50 right-0 bottom-0 left-0"
    aria-label="Primary navigation"
  >
    <div className="grid items-center grid-cols-4 h-16">
      <button
        type="button"
        className="rounded-lg bg-primary text-primary-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12"
        aria-current="page"
      >
        <Home className="size-5" />
        <span className="font-medium text-xs">Home</span>
      </button>
      <button
        type="button"
        className="rounded-lg text-muted-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12"
      >
        <Compass className="size-5" />
        <span className="font-medium text-xs">Explore</span>
      </button>
      <button
        type="button"
        className="rounded-lg text-muted-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12"
      >
        <Bookmark className="size-5" />
        <span className="font-medium text-xs">Saved</span>
      </button>
      <button
        type="button"
        className="rounded-lg text-muted-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12"
      >
        <User className="size-5" />
        <span className="font-medium text-xs">Profile</span>
      </button>
    </div>
  </nav>
</div>;