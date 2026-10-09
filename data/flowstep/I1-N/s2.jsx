<div className="bg-background text-foreground w-full h-fit">
  <main className="pr-6 pb-24 pl-6 flex-1">
    <div className="border-t-border border-r-border border-b border-b-border border-l-border flex justify-between items-center h-16">
      <button
        type="button"
        className="font-medium text-foreground text-sm flex items-center gap-1"
      >
        <ChevronLeft className="size-5" />
        <span>Top stories</span>
      </button>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Share article"
          className="rounded-full text-muted-foreground flex justify-center items-center size-10"
        >
          <Share2 className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Bookmark article"
          className="rounded-full flex justify-center items-center size-10"
        >
          <Bookmark />
        </button>
      </div>
    </div>
    <article className="flex pt-8 flex-col gap-6">
      <header className="flex flex-col gap-4">
        <p className="font-semibold text-primary text-xs tracking-[0.18em]">
          WORLD
        </p>
        <h1 className="font-semibold text-foreground text-3xl leading-tight tracking-tight">
          Rescue teams search for survivors after powerful coastal quake
        </h1>
        <p className="text-muted-foreground text-base leading-7">
          Communities across the region are beginning to assess the damage as
          emergency crews work through the night.
        </p>
        <p className="text-muted-foreground text-sm">
          By Elena Marquez · 8 min read · 24 min ago
        </p>
      </header>
      <figure className="flex flex-col gap-2">
        <div className="text-center rounded-lg bg-foreground flex pr-4 pl-4 justify-center items-center aspect-video">
          <span className="font-medium text-background text-sm tracking-wide">
            IMAGE — COASTAL QUAKE AFTERMATH
          </span>
        </div>
        <figcaption className="text-muted-foreground text-xs leading-5">
          Residents gather near the harbor after the early-morning tremor.
        </figcaption>
      </figure>
      <div className="text-foreground text-base leading-8 flex flex-col gap-6">
        <p>
          Emergency crews moved into the hardest-hit coastal towns before
          sunrise Monday, searching damaged homes and clearing roads blocked by
          fallen masonry.
        </p>
        <p>
          Officials said the strongest shock was followed by several
          aftershocks, but reported no immediate tsunami threat. Hospitals in
          three cities activated emergency plans as residents gathered in public
          squares.
        </p>
        <p>
          The full scale of the damage remains unclear. Local authorities asked
          people to conserve water and avoid damaged structures while assessment
          teams continue their work.
        </p>
        <blockquote className="font-medium rounded-xl bg-accent text-accent-foreground text-lg leading-8 pt-6 pr-6 pb-6 pl-6">
          The first 24 hours are about reaching people safely and restoring the
          essential services they rely on.
        </blockquote>
        <p className="text-muted-foreground text-sm">
          Reporting from Port Alira
        </p>
      </div>
    </article>
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