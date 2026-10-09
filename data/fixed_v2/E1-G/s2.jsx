<div className="bg-background text-foreground w-full h-fit">
  <main className="font-sans bg-[#FFFBF5] text-[#2B2118] pr-4 pb-8 pl-4 min-h-screen">
    <header className="flex justify-between items-center h-16">
      <button
        type="button"
        aria-label="Go back"
        className="text-[#2B2118] flex justify-center items-center size-10"
      >
        <ChevronLeft className="size-6" strokeWidth={2} />
      </button>
      <h1 className="font-semibold text-[22px] leading-[29px] font-['DM_Sans']">
        Ember Burger Co.
      </h1>
      <button
        type="button"
        aria-label="Favorite restaurant"
        className="flex justify-center items-center size-10"
      >
        <Heart strokeWidth={2} />
      </button>
    </header>
    <section className="rounded-2xl bg-white flex pt-4 pr-4 pb-4 pl-4 flex-col gap-2">
      <div className="rounded-lg h-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1593759608142-e9b18c0dbe86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjByZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8MHx8fDE3OTE1Nzc1NTl8MA&ixlib=rb-4.1.0&q=80&w=400"
          alt="Ember Burger Co. burger and fries"
          className="size-full object-cover"
          data-authorname="Quin Engle"
          data-authorurl="https://unsplash.com/@twistsandzests"
        />
      </div>
      <h2 className="font-semibold text-[22px] leading-[29px] font-['DM_Sans']">
        Ember Burger Co.
      </h2>
      <p className="text-[#6B5B4D] text-[15px] leading-5 font-['DM_Sans']">Burgers · American</p>
      <p className="text-[#6B5B4D] text-[15px] leading-5 font-['DM_Sans']">
        4.8 ★ · 20–30 min · $
      </p>
      <button
        type="button"
        className="underline underline-offset-2 font-medium text-[#6B5B4D] text-[13px] leading-[17px] self-start font-['DM_Sans']"
      >
        View restaurant info
      </button>
    </section>
    <div className="border-t-[#EADBC8] border-r-[#EADBC8] border-b border-b-[#EADBC8] border-l-[#EADBC8] flex mt-6 gap-6 overflow-x-auto">
      <button className="text-[17px] font-['DM_Sans']" type="button">Bestsellers</button>
      <button className="text-[17px] font-['DM_Sans']" type="button">Burgers</button>
      <button className="text-[17px] font-['DM_Sans']" type="button">Sides</button>
      <button className="text-[17px] font-['DM_Sans']" type="button">Drinks</button>
    </div>
    <section className="flex mt-6 flex-col gap-4">
      <h2 className="font-semibold text-[22px] leading-[29px] font-['DM_Sans']">Bestsellers</h2>
      <article className="rounded-2xl bg-white flex pt-4 pr-4 pb-4 pl-4 items-center gap-4 min-h-32">
        <div className="flex flex-col flex-1 gap-1 min-w-0">
          <h3 className="font-semibold text-[17px] leading-[22px] font-['DM_Sans']">
            The Ember Classic
          </h3>
          <p className="text-[#6B5B4D] text-[15px] leading-5 font-['DM_Sans']">
            Double smashed beef, cheddar, house sauce, pickles
          </p>
          <p className="font-semibold text-[15px] leading-5 pt-1 font-['DM_Sans']">$14.50</p>
        </div>
        <div className="relative shrink-0 size-20 overflow-visible">
          <img
            src="https://images.unsplash.com/photo-1593759608142-e9b18c0dbe86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjByZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8MHx8fDE3OTE1Nzc1NTl8MA&ixlib=rb-4.1.0&q=80&w=400"
            alt="The Ember Classic burger"
            className="rounded-lg size-full object-cover"
            data-authorname="Quin Engle"
            data-authorurl="https://unsplash.com/@twistsandzests"
          />
          <button
            type="button"
            aria-label="Add The Ember Classic"
            className="rounded-full bg-[#C23B0B] text-white flex absolute -right-2 -bottom-2 justify-center items-center size-8"
          >
            <Plus className="size-4" strokeWidth={2.5} />
          </button>
        </div>
      </article>
      <article className="rounded-2xl bg-white flex pt-4 pr-4 pb-4 pl-4 items-center gap-4 min-h-32">
        <div className="flex flex-col flex-1 gap-1 min-w-0">
          <h3 className="font-semibold text-[17px] leading-[22px] font-['DM_Sans']">
            Crispy Chicken Stack
          </h3>
          <p className="text-[#6B5B4D] text-[15px] leading-5 font-['DM_Sans']">
            Buttermilk chicken, slaw, hot honey, brioche
          </p>
          <p className="font-semibold text-[15px] leading-5 pt-1 font-['DM_Sans']">$13.00</p>
        </div>
        <button
          type="button"
          aria-label="Add Crispy Chicken Stack"
          className="rounded-full bg-[#C23B0B] text-white flex justify-center items-center shrink-0 size-8"
        >
          <Plus className="size-4" strokeWidth={2.5} />
        </button>
      </article>
      <article className="rounded-2xl bg-white flex pt-4 pr-4 pb-4 pl-4 items-center gap-4 min-h-32">
        <div className="flex flex-col flex-1 gap-1 min-w-0">
          <h3 className="font-semibold text-[17px] leading-[22px] font-['DM_Sans']">
            Truffle Parmesan Fries
          </h3>
          <p className="text-[#6B5B4D] text-[15px] leading-5 font-['DM_Sans']">
            Crispy fries, parmesan, herbs, truffle aioli
          </p>
          <p className="font-semibold text-[15px] leading-5 pt-1 font-['DM_Sans']">$7.50</p>
        </div>
        <button
          type="button"
          aria-label="Add Truffle Parmesan Fries"
          className="rounded-full bg-[#C23B0B] text-white flex justify-center items-center shrink-0 size-8"
        >
          <Plus className="size-4" strokeWidth={2.5} />
        </button>
      </article>
    </section>
    <Button
      type="button"
      className="font-medium rounded-2xl bg-[#C23B0B] text-white text-[15px] leading-5 mt-6 pr-4 pl-4 w-full h-12 font-['DM_Sans']"
    >
      <ShoppingBag className="mr-2 size-4" strokeWidth={2} />
      View cart · 2 items $27.50
    </Button>
  </main>
  <nav
    className="bg-card border-x-border border-t border-t-border border-b-border fixed z-10 right-0 bottom-0 left-0 pt-3 pr-4 pb-3 pl-4"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-4">
      <a
        href="#"
        className="flex flex-col items-center gap-1 text-[#6b5b4d]"
      >
        <Home className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-['DM_Sans']">
          Home
        </span>
      </a>
      <a
        href="#"
        className="text-primary flex flex-col items-center gap-1"
        aria-current="page"
      >
        <Search className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-['DM_Sans']">
          Search
        </span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center gap-1 text-[#6b5b4d]"
      >
        <ClipboardList className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-['DM_Sans']">
          Orders
        </span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center gap-1 text-[#6b5b4d]"
      >
        <User className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-['DM_Sans']">
          Profile
        </span>
      </a>
    </div>
  </nav>
</div>;