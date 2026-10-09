<div className="bg-background text-foreground w-full h-fit">
  <main className="flex pt-8 pr-6 pb-32 pl-6 flex-col gap-6 min-h-screen">
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
        className="rounded-lg bg-muted grid pt-1 pr-1 pb-1 pl-1 grid-cols-3"
        role="tablist"
        aria-label="Saved article filters"
      >
        <button type="button" role="tab">
          All
        </button>
        <button type="button" role="tab">
          Unread
        </button>
        <button type="button" role="tab">
          Archived
        </button>
      </div>
      <p className="text-muted-foreground text-sm">12 articles saved</p>
    </div>
    <section className="flex flex-col" aria-label="Saved articles">
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-0 pb-5 gap-4">
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <span className="font-semibold text-muted-foreground text-xs tracking-[0.16em]">
            WORLD
          </span>
          <h2 className="font-semibold text-base leading-6">
            Rescue teams search for survivors after powerful coastal quake
          </h2>
          <p className="text-muted-foreground text-sm">
            The Daily Brief · 8 min read
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium rounded-full bg-secondary text-secondary-foreground text-xs pt-1 pr-2 pb-1 pl-2">
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
        <div className="font-medium rounded-lg bg-foreground text-background text-xs tracking-[0.14em] flex justify-center items-center shrink-0 w-24 h-20">
          IMAGE
        </div>
      </article>
      <article className="border-t-border border-r-border border-b border-b-border border-l-border flex pt-5 pb-5 gap-4">
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <span className="font-semibold text-muted-foreground text-xs tracking-[0.16em]">
            SCIENCE
          </span>
          <h2 className="font-semibold text-base leading-6">
            A new telescope map reveals the hidden structure of our galaxy
          </h2>
          <p className="text-muted-foreground text-sm">
            Orbit Journal · 6 min read
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium rounded-full bg-muted text-muted-foreground text-xs pt-1 pr-2 pb-1 pl-2">
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
        <div className="font-medium rounded-lg bg-foreground text-background text-xs tracking-[0.14em] flex justify-center items-center shrink-0 w-24 h-20">
          IMAGE
        </div>
      </article>
      <article className="flex pt-5 pb-5 gap-4">
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <span className="font-semibold text-muted-foreground text-xs tracking-[0.16em]">
            CULTURE
          </span>
          <h2 className="font-semibold text-base leading-6">
            The quiet design trend reshaping city streets
          </h2>
          <p className="text-muted-foreground text-sm">
            The Daily Brief · 5 min read
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium rounded-full bg-secondary text-secondary-foreground text-xs pt-1 pr-2 pb-1 pl-2">
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
        <div className="font-medium rounded-lg bg-foreground text-background text-xs tracking-[0.14em] flex justify-center items-center shrink-0 w-24 h-20">
          IMAGE
        </div>
      </article>
    </section>
    <button
      type="button"
      className="font-medium text-primary text-sm flex mt-auto pt-4 pb-4 flex-col items-center gap-2"
    >
      <Settings className="size-4" />
      <span>Manage saved articles</span>
    </button>
  </main>
  <nav
    className="pb-[env(safe-area-inset-bottom)] bg-background border-x-border border-t border-t-border border-b-border fixed z-50 right-0 bottom-0 left-0"
    aria-label="Primary navigation"
  >
    <div className="grid items-center grid-cols-4 h-16">
      <button
        type="button"
        className="rounded-lg text-muted-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12"
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
        className="rounded-lg bg-primary text-primary-foreground flex mr-2 ml-2 flex-col justify-center items-center gap-1 h-12"
        aria-current="page"
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