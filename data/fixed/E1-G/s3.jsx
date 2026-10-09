<div className="bg-background w-full h-fit text-[#2b2118]">
  <main className="flex pt-6 pr-4 pl-4 flex-col gap-6 pb-[40px]">
    <div className="grid items-center grid-cols-[40px_1fr_40px]">
      <button
        type="button"
        aria-label="Go back"
        className="flex justify-start items-center size-10 text-[#2b2118]"
      >
        <ChevronLeft className="size-6" strokeWidth={2} />
      </button>
      <h1 className="font-semibold text-center text-[22px] leading-[29px] font-[family-name:DM_Sans]">
        Your cart
      </h1>
      <button
        type="button"
        aria-label="Empty cart"
        className="text-foreground flex justify-end items-center size-10"
      >
        <Trash2 className="size-5" strokeWidth={2} />
      </button>
    </div>
    <div className="rounded-[16px] bg-muted flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
      <MapPin className="text-primary shrink-0 size-5" strokeWidth={2} />
      <div className="flex flex-col flex-1 gap-1 min-w-0">
        <span className="font-medium text-[13px] leading-[17px] text-[#6b5b4d] font-[family-name:DM_Sans]">
          Deliver to
        </span>
        <span className="font-semibold text-[15px] leading-[20px] text-[#2b2118] font-[family-name:DM_Sans]">
          125 Market Street
        </span>
      </div>
      <ChevronRight
        className="shrink-0 size-5 text-[#6b5b4d]"
        strokeWidth={2}
      />
    </div>
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-baseline gap-2">
        <h2 className="font-semibold text-[22px] leading-[29px] font-[family-name:DM_Sans]">
          Ember Burger Co.
        </h2>
        <span className="font-medium text-[13px] leading-[17px] text-[#2f7d32] font-[family-name:DM_Sans]">
          Open now
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="rounded-[24px] bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <h3 className="font-semibold text-[17px] leading-[22px] font-[family-name:DM_Sans]">
              The Ember Classic
            </h3>
            <p className="font-normal text-[13px] leading-[17px] text-[#6b5b4d] font-[family-name:DM_Sans]">
              Double smashed beef, cheddar, house sauce
            </p>
            <span className="font-semibold text-[15px] leading-[20px] pt-1 font-[family-name:DM_Sans]">
              $14.50
            </span>
          </div>
          <div className="rounded-[16px] bg-muted flex pt-1 pr-1 pb-1 pl-1 items-center shrink-0 gap-2">
            <button
              type="button"
              className="rounded-full flex justify-center items-center size-7 text-[#2b2118]"
            >
              <Minus className="size-4" strokeWidth={2} />
            </button>
            <span className="font-medium text-center text-[15px] leading-[20px] w-4 font-[family-name:DM_Sans]">
              1
            </span>
            <button
              type="button"
              className="rounded-full bg-primary text-primary-foreground flex justify-center items-center size-7"
            >
              <Plus className="size-4" strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="rounded-[24px] bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 items-center gap-4">
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <h3 className="font-semibold text-[17px] leading-[22px] font-[family-name:DM_Sans]">
              Truffle Parmesan Fries
            </h3>
            <p className="font-normal text-[13px] leading-[17px] text-[#6b5b4d] font-[family-name:DM_Sans]">
              Crispy fries, parmesan, herbs
            </p>
            <span className="font-semibold text-[15px] leading-[20px] pt-1 font-[family-name:DM_Sans]">
              $7.50
            </span>
          </div>
          <div className="rounded-[16px] bg-muted flex pt-1 pr-1 pb-1 pl-1 items-center shrink-0 gap-2">
            <button
              type="button"
              className="rounded-full flex justify-center items-center size-7 text-[#2b2118]"
            >
              <Minus className="size-4" strokeWidth={2} />
            </button>
            <span className="font-medium text-center text-[15px] leading-[20px] w-4 font-[family-name:DM_Sans]">
              1
            </span>
            <button
              type="button"
              className="rounded-full bg-primary text-primary-foreground flex justify-center items-center size-7"
            >
              <Plus className="size-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="font-sans font-medium text-primary text-[15px] leading-[20px] flex self-start items-center gap-2"
      >
        <Plus className="size-4" strokeWidth={2} />
        <span className="font-[family-name:DM_Sans]">Add more items</span>
      </a>
    </section>
    <div className="rounded-[24px] bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-3 pr-3 pb-3 pl-3 items-center gap-3">
      <Tag className="text-primary shrink-0 size-5" strokeWidth={2} />
      <Input
        placeholder="Enter promo code"
        className="shadow-none bg-transparent text-[15px] leading-[20px] border-t-0 border-r-0 border-b-0 border-l-0 pt-0 pr-0 pb-0 pl-0 flex-1 h-10 placeholder:text-[#6b5b4d] font-[family-name:DM_Sans]"
        defaultValue=""
      />
      <Button
        type="button"
        variant="outline"
        className="font-medium rounded-[24px] text-primary text-[13px] leading-[17px] border-primary pr-4 pl-4 h-10 font-[family-name:DM_Sans]"
      >
        Apply
      </Button>
    </div>
    <section className="rounded-[24px] bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-5 pr-5 pb-5 pl-5 flex-col gap-4">
      <h2 className="font-semibold text-[22px] leading-[29px] font-[family-name:DM_Sans]">
        Order summary
      </h2>
      <div className="flex flex-col gap-3">
        <div className="font-sans text-[15px] leading-[20px] flex justify-between items-center">
          <span className="font-[family-name:DM_Sans]">Subtotal</span>
          <span className="font-[family-name:DM_Sans]">$22.00</span>
        </div>
        <div className="font-sans text-[15px] leading-[20px] flex justify-between items-center">
          <span className="font-[family-name:DM_Sans]">Delivery fee</span>
          <span className="font-[family-name:DM_Sans]">$2.49</span>
        </div>
        <div className="font-sans text-[15px] leading-[20px] flex justify-between items-center">
          <span className="font-[family-name:DM_Sans]">Service fee</span>
          <span className="font-[family-name:DM_Sans]">$1.32</span>
        </div>
      </div>
      <div className="bg-border w-full h-px" />
      <div className="font-sans font-semibold text-[22px] leading-[29px] flex justify-between items-center">
        <span className="font-[family-name:DM_Sans]">Total</span>
        <span className="font-[family-name:DM_Sans]">$25.81</span>
      </div>
      <p className="font-normal text-[13px] leading-[17px] text-[#6b5b4d] font-[family-name:DM_Sans]">
        Estimated delivery: 20–30 min
      </p>
    </section>
    <Button
      type="button"
      className="font-sans font-semibold rounded-[24px] bg-primary text-primary-foreground text-[17px] leading-[22px] w-full h-14"
    >
      <Lock className="size-5" strokeWidth={2} />
      <span className="font-[family-name:DM_Sans]">Place order · $25.81</span>
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
        <span className="font-medium text-[13px] leading-[17px] font-[family-name:DM_Sans]">
          Home
        </span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center gap-1 text-[#6b5b4d]"
      >
        <Search className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-[family-name:DM_Sans]">
          Search
        </span>
      </a>
      <a
        href="#"
        className="text-primary flex flex-col items-center gap-1"
        aria-current="page"
      >
        <ClipboardList className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-[family-name:DM_Sans]">
          Orders
        </span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center gap-1 text-[#6b5b4d]"
      >
        <User className="size-5" strokeWidth={2} />
        <span className="font-medium text-[13px] leading-[17px] font-[family-name:DM_Sans]">
          Profile
        </span>
      </a>
    </div>
  </nav>
</div>;