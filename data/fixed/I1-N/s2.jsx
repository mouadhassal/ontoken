<div className="bg-background w-full h-fit text-[#111111]">
  <main className="pr-6 pl-6 flex-1 pb-[64px]">
    <div className="border-t-border border-r-border border-b border-b-border border-l-border flex justify-between items-center h-16">
      <button
        type="button"
        className="font-medium text-sm flex items-center gap-1 text-[#111111]"
      >
        <ChevronLeft className="size-5" />
        <span className="text-[15px]">Top stories</span>
      </button>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Share article"
          className="rounded-full flex justify-center items-center size-10 text-[#5e5e58]"
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
        <p className="font-semibold tracking-[0.18em] text-[#1f3a93] text-[13px]">
          WORLD
        </p>
        <h1 className="font-semibold tracking-tight text-[#111111] text-[32px] leading-tight">
          Rescue teams search for survivors after powerful coastal quake
        </h1>
        <p className="text-[#5e5e58] text-[15px] leading-7">
          Communities across the region are beginning to assess the damage as
          emergency crews work through the night.
        </p>
        <p className="text-[#5e5e58] text-[15px]">
          By Elena Marquez · 8 min read · 24 min ago
        </p>
      </header>
      <figure className="flex flex-col gap-2">
        <div className="text-center rounded-lg flex pr-4 pl-4 justify-center items-center aspect-video bg-[#111111]">
          <span className="font-medium text-background tracking-wide text-[15px]">
            IMAGE — COASTAL QUAKE AFTERMATH
          </span>
        </div>
        <figcaption className="text-[#5e5e58] text-[13px] leading-5">
          Residents gather near the harbor after the early-morning tremor.
        </figcaption>
      </figure>
      <div className="text-base leading-8 flex flex-col gap-6 text-[#111111]">
        <p className="text-[15px]">
          Emergency crews moved into the hardest-hit coastal towns before
          sunrise Monday, searching damaged homes and clearing roads blocked by
          fallen masonry.
        </p>
        <p className="text-[15px]">
          Officials said the strongest shock was followed by several
          aftershocks, but reported no immediate tsunami threat. Hospitals in
          three cities activated emergency plans as residents gathered in public
          squares.
        </p>
        <p className="text-[15px]">
          The full scale of the damage remains unclear. Local authorities asked
          people to conserve water and avoid damaged structures while assessment
          teams continue their work.
        </p>
        <blockquote className="font-medium text-lg leading-8 pt-6 pr-6 pb-6 pl-6 text-[#111111] bg-[#dcdcd3] rounded-[4px]">
          The first 24 hours are about reaching people safely and restoring the
          essential services they rely on.
        </blockquote>
        <p className="text-[#5e5e58] text-[15px]">
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