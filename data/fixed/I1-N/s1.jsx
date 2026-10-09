<div className="bg-background w-full h-fit text-[#111111]">
  <div className="pt-6 pr-6 pl-6 flex-1 pb-[64px]">
    <header className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold tracking-tight text-[18px]">
          The Daily Brief
        </h1>
        <div className="font-semibold rounded-full flex justify-center items-center size-10 text-[#111111] bg-[#fafaf7] text-[15px]">
          AM
        </div>
      </div>
      <p className="text-[#5e5e58] text-[15px]">Monday, October 14, 2024</p>
    </header>
    <div className="flex mt-6 pb-1 gap-2 overflow-x-auto" aria-label="Topics">
      <button
        type="button"
        className="font-medium rounded-full text-primary-foreground pt-2 pr-4 pb-2 pl-4 shrink-0 bg-[#1f3a93] text-[15px]"
      >
        Top stories
      </button>
      <button
        type="button"
        className="font-medium rounded-full pt-2 pr-4 pb-2 pl-4 shrink-0 text-[#5e5e58] bg-[#dcdcd3] text-[15px]"
      >
        World
      </button>
      <button
        type="button"
        className="font-medium rounded-full pt-2 pr-4 pb-2 pl-4 shrink-0 text-[#5e5e58] bg-[#dcdcd3] text-[15px]"
      >
        Business
      </button>
      <button
        type="button"
        className="font-medium rounded-full pt-2 pr-4 pb-2 pl-4 shrink-0 text-[#5e5e58] bg-[#dcdcd3] text-[15px]"
      >
        Science
      </button>
      <button
        type="button"
        className="font-medium rounded-full pt-2 pr-4 pb-2 pl-4 shrink-0 text-[#5e5e58] bg-[#dcdcd3] text-[15px]"
      >
        Culture
      </button>
    </div>
    <section className="flex mt-8 flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg tracking-tight">Top stories</h2>
        <span className="font-medium text-[#1f3a93] text-[15px]">See all</span>
      </div>
      <article className="bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border overflow-hidden rounded-[4px]">
        <div className="font-semibold text-background tracking-[0.2em] flex justify-center items-center h-48 bg-[#111111] text-[15px]">
          IMAGE
        </div>
        <div className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-3">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-semibold tracking-[0.16em] text-[#1f3a93] text-[13px]">
                WORLD
              </span>
              <h3 className="font-semibold text-[18px] leading-tight">
                Rescue teams search for survivors after powerful coastal quake
              </h3>
            </div>
            <button
              type="button"
              aria-label="Save lead story"
              className="rounded-full flex justify-center items-center shrink-0 size-8 bg-[#dcdcd3]"
            >
              <Bookmark />
            </button>
          </div>
          <p className="text-[#5e5e58] text-[15px] leading-relaxed">
            Communities across the region are beginning to assess the damage as
            emergency crews work through the night.
          </p>
          <p className="text-[#5e5e58] text-[13px]">
            8 min read · 24 min ago
          </p>
        </div>
      </article>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 gap-3">
        <div className="font-semibold tracking-[0.16em] flex justify-center items-center shrink-0 size-24 text-[#5e5e58] bg-[#dcdcd3] text-[13px] rounded-[4px]">
          IMAGE
        </div>
        <div className="flex justify-between items-start flex-1 gap-3 min-w-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[15px] leading-snug">
              Markets steady as investors await new inflation data
            </h3>
            <p className="text-[#5e5e58] text-[13px]">
              BUSINESS · 4 min read
            </p>
          </div>
          <button
            type="button"
            aria-label="Save markets story"
            className="rounded-full flex justify-center items-center shrink-0 size-8 bg-[#dcdcd3]"
          >
            <Bookmark />
          </button>
        </div>
      </article>
      <article className="flex gap-3">
        <div className="font-semibold tracking-[0.16em] flex justify-center items-center shrink-0 size-24 text-[#5e5e58] bg-[#dcdcd3] text-[13px] rounded-[4px]">
          IMAGE
        </div>
        <div className="flex justify-between items-start flex-1 gap-3 min-w-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[15px] leading-snug">
              A new telescope map reveals the hidden structure of our galaxy
            </h3>
            <p className="text-[#5e5e58] text-[13px]">
              SCIENCE · 6 min read
            </p>
          </div>
          <button
            type="button"
            aria-label="Save telescope story"
            className="rounded-full flex justify-center items-center shrink-0 size-8 bg-[#dcdcd3]"
          >
            <Bookmark />
          </button>
        </div>
      </article>
    </section>
    <section className="flex mt-8 flex-col gap-4">
      <h2 className="font-semibold text-lg tracking-tight">Your brief</h2>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 justify-between items-center gap-4">
        <h3 className="font-medium text-[15px] leading-snug">
          What to know before the summit begins
        </h3>
        <button
          type="button"
          aria-label="Save summit story"
          className="rounded-full flex justify-center items-center shrink-0 size-8 bg-[#dcdcd3]"
        >
          <Bookmark />
        </button>
      </article>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 justify-between items-center gap-4">
        <h3 className="font-medium text-[15px] leading-snug">
          The quiet design trend reshaping city streets
        </h3>
        <button
          type="button"
          aria-label="Save design story"
          className="rounded-full flex justify-center items-center shrink-0 size-8 bg-[#dcdcd3]"
        >
          <Bookmark />
        </button>
      </article>
      <article className="flex justify-between items-center gap-4">
        <h3 className="font-medium text-[15px] leading-snug">
          Tonight’s sky: a guide to the autumn constellations
        </h3>
        <button
          type="button"
          aria-label="Save sky story"
          className="rounded-full flex justify-center items-center shrink-0 size-8 bg-[#dcdcd3]"
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
        className="rounded-lg text-primary-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12 bg-[#1f3a93]"
        aria-current="page"
      >
        <Home className="size-5" />
        <span className="font-medium text-[13px]">Home</span>
      </button>
      <button
        type="button"
        className="rounded-lg flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12 text-[#5e5e58]"
      >
        <Compass className="size-5" />
        <span className="font-medium text-[13px]">Explore</span>
      </button>
      <button
        type="button"
        className="rounded-lg flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12 text-[#5e5e58]"
      >
        <Bookmark className="size-5" />
        <span className="font-medium text-[13px]">Saved</span>
      </button>
      <button
        type="button"
        className="rounded-lg flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12 text-[#5e5e58]"
      >
        <User className="size-5" />
        <span className="font-medium text-[13px]">Profile</span>
      </button>
    </div>
  </nav>
</div>;