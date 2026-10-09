<div className="bg-background w-full h-fit text-[#111111]">
  <main className="flex pt-8 pr-6 pl-6 flex-col gap-6 min-h-screen pb-[64px]">
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl tracking-tight">
          Saved articles
        </h1>
        <button
          type="button"
          className="rounded-lg text-muted-foreground flex justify-center items-center size-10"
          aria-label="More options"
        >
          <MoreHorizontal className="size-5" />
        </button>
      </header>
      <div
        className="rounded-lg grid pt-1 pr-1 pb-1 pl-1 grid-cols-3 bg-[#dcdcd3]"
        role="tablist"
        aria-label="Saved article filters"
      >
        <button className="text-[15px]" type="button" role="tab">
          All
        </button>
        <button className="text-[15px]" type="button" role="tab">
          Unread
        </button>
        <button className="text-[15px]" type="button" role="tab">
          Archived
        </button>
      </div>
      <p className="text-[#5e5e58] text-[15px]">12 articles saved</p>
    </div>
    <section className="flex flex-col" aria-label="Saved articles">
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-0 gap-4 pb-[24px]">
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <span className="font-semibold tracking-[0.16em] text-[#5e5e58] text-[13px]">
            WORLD
          </span>
          <h2 className="font-semibold text-[15px] leading-6">
            Rescue teams search for survivors after powerful coastal quake
          </h2>
          <p className="text-[#5e5e58] text-[15px]">
            The Daily Brief · 8 min read
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium rounded-full pt-1 pr-2 pb-1 pl-2 text-[#111111] bg-[#fafaf7] text-[13px]">
              Unread
            </span>
            <button
              type="button"
              aria-label="Toggle saved article"
              className="rounded-lg flex ml-auto justify-center items-center size-8"
            >
              <Bookmark />
            </button>
          </div>
        </div>
        <div className="font-medium rounded-lg text-background tracking-[0.14em] flex justify-center items-center shrink-0 w-24 h-20 bg-[#111111] text-[13px]">
          IMAGE
        </div>
      </article>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex gap-4 py-[24px]">
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <span className="font-semibold tracking-[0.16em] text-[#5e5e58] text-[13px]">
            SCIENCE
          </span>
          <h2 className="font-semibold text-[15px] leading-6">
            A new telescope map reveals the hidden structure of our galaxy
          </h2>
          <p className="text-[#5e5e58] text-[15px]">
            Orbit Journal · 6 min read
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium rounded-full pt-1 pr-2 pb-1 pl-2 text-[#5e5e58] bg-[#dcdcd3] text-[13px]">
              Read
            </span>
            <button
              type="button"
              aria-label="Toggle saved article"
              className="rounded-lg flex ml-auto justify-center items-center size-8"
            >
              <Bookmark />
            </button>
          </div>
        </div>
        <div className="font-medium rounded-lg text-background tracking-[0.14em] flex justify-center items-center shrink-0 w-24 h-20 bg-[#111111] text-[13px]">
          IMAGE
        </div>
      </article>
      <article className="flex gap-4 py-[24px]">
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <span className="font-semibold tracking-[0.16em] text-[#5e5e58] text-[13px]">
            CULTURE
          </span>
          <h2 className="font-semibold text-[15px] leading-6">
            The quiet design trend reshaping city streets
          </h2>
          <p className="text-[#5e5e58] text-[15px]">
            The Daily Brief · 5 min read
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium rounded-full pt-1 pr-2 pb-1 pl-2 text-[#111111] bg-[#fafaf7] text-[13px]">
              Unread
            </span>
            <button
              type="button"
              aria-label="Toggle saved article"
              className="rounded-lg flex ml-auto justify-center items-center size-8"
            >
              <Bookmark />
            </button>
          </div>
        </div>
        <div className="font-medium rounded-lg text-background tracking-[0.14em] flex justify-center items-center shrink-0 w-24 h-20 bg-[#111111] text-[13px]">
          IMAGE
        </div>
      </article>
    </section>
    <button
      type="button"
      className="font-medium text-sm flex mt-auto pt-4 pb-4 flex-col items-center gap-2 text-[#1f3a93]"
    >
      <Settings className="size-4" />
      <span className="text-[15px]">Manage saved articles</span>
    </button>
  </main>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-x-border border-t border-t-border border-b-border fixed z-50 right-0 bottom-0 left-0"
    aria-label="Primary navigation"
  >
    <div className="grid items-center grid-cols-4 h-16">
      <button
        type="button"
        className="rounded-lg flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12 text-[#5e5e58]"
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
        className="rounded-lg text-primary-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12 bg-[#1f3a93]"
        aria-current="page"
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