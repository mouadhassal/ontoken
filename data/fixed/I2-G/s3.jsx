<div className="bg-background w-full h-fit text-[#5e5e58]">
  <header className="bg-background pt-6 pr-8 pb-6 pl-8 text-[#5e5e58]">
    <div className="flex justify-between items-end">
      <div>
        <div className="font-bold text-[44px] leading-[57px] font-[family-name:Source_Serif_4]">
          INK
        </div>
        <div className="bg-primary mt-2 w-full h-1" />
      </div>
      <nav aria-label="Primary navigation" className="flex items-center gap-6">
        <a
          href="#"
          className="font-semibold text-[13px] leading-[17px] text-[#5e5e58]"
        >
          HOME
        </a>
        <a
          href="#"
          className="font-semibold text-[13px] leading-[17px] text-[#5e5e58]"
        >
          ESSAYS
        </a>
        <a
          href="#"
          className="font-semibold text-[13px] leading-[17px] text-[#5e5e58]"
        >
          CULTURE
        </a>
        <a
          href="#"
          className="font-semibold text-[13px] leading-[17px] text-[#5e5e58]"
        >
          SCIENCE
        </a>
        <a
          href="#"
          className="font-semibold text-[13px] leading-[17px] text-[#5e5e58]"
        >
          ABOUT
        </a>
        <a
          href="#"
          className="font-semibold text-[13px] leading-[17px] flex ml-8 items-center gap-2 text-[#5e5e58]"
        >
          <Search className="size-4" />
          SEARCH
        </a>
        <button
          type="button"
          aria-current="page"
          className="font-semibold rounded-md bg-primary text-primary-foreground text-[13px] leading-[17px] pt-3 pr-3 pb-3 pl-3"
        >
          NEWSLETTER
        </button>
      </nav>
    </div>
  </header>
  <main className="pt-12 pr-12 pb-12 pl-12 min-h-[956px]">
    <section className="grid pt-12 pb-12 items-center gap-12 grid-cols-2">
      <div className="flex flex-col gap-6">
        <div className="font-sans font-semibold text-primary text-[13px] leading-[17px] tracking-[0.08em]">
          THE INK LETTER
        </div>
        <h1 className="font-bold text-[32px] leading-[42px] font-[family-name:Source_Serif_4]">
          A little more time to think.
        </h1>
        <p className="font-sans font-normal text-[18px] leading-[23px] max-w-[460px]">
          Once a week, we send one considered essay, a handful of things worth
          noticing, and no noise. Join 18,420 curious readers.
        </p>
        <div className="font-sans font-normal text-[15px] leading-[20px] pt-4 pr-4 pb-4 pl-4 w-fit bg-[#fff1c2]">
          Delivered every Sunday morning.
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-card pt-6 pr-6 pb-6 pl-6 w-full max-w-[440px]">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="font-sans font-semibold text-[13px] leading-[17px]"
            >
              YOUR EMAIL ADDRESS
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="font-sans rounded-sm bg-background text-foreground text-[15px] leading-[20px] border-t border-t-input border-r border-r-input border-b border-b-input border-l border-l-input pr-4 pl-4 h-12 placeholder:text-[#5e5e58]"
              defaultValue=""
            />
            <button
              type="button"
              className="font-sans font-semibold rounded-md bg-primary text-primary-foreground text-[13px] leading-[17px] pt-3 pr-3 pb-3 pl-3"
            >
              SUBSCRIBE TO INK
            </button>
            <p className="font-sans font-normal text-[13px] leading-[17px] text-[#5e5e58]">
              By subscribing, you agree to receive the Ink letter. Unsubscribe
              anytime.
            </p>
            <div className="font-sans font-normal text-[13px] leading-[17px] border-x-border border-t border-t-border border-b-border flex pt-4 items-center gap-2 text-[#5e5e58]">
              <Check className="text-primary size-4" />
              <span>No spam. Just one thoughtful letter.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="border-x-border border-t border-t-border border-b-border mt-12 pt-12">
      <div className="grid gap-8 grid-cols-3">
        <div className="flex flex-col gap-2">
          <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
            01 / ONE EMAIL
          </div>
          <p className="font-sans font-normal text-[15px] leading-[20px]">
            A calm note, once a week.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
            02 / EDITORIAL
          </div>
          <p className="font-sans font-normal text-[15px] leading-[20px]">
            Selected by people, not algorithms.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-sans font-semibold text-primary text-[13px] leading-[17px]">
            03 / FREE
          </div>
          <p className="font-sans font-normal text-[15px] leading-[20px]">
            Always free to read.
          </p>
        </div>
      </div>
    </section>
    <footer className="border-x-border border-t border-t-border border-b-border flex mt-12 pt-6 justify-between items-center">
      <div className="font-sans font-normal text-[13px] leading-[17px] text-[#5e5e58]">
        INK · Essays for a more attentive life
      </div>
      <nav
        aria-label="Footer navigation"
        className="font-sans font-semibold text-[13px] leading-[17px] flex items-center gap-6"
      >
        <a href="#" className="text-[#5e5e58]">
          Privacy
        </a>
        <a href="#" className="text-[#5e5e58]">
          Archive
        </a>
        <a href="#" className="text-[#5e5e58]">
          Contact
        </a>
      </nav>
    </footer>
  </main>
</div>;