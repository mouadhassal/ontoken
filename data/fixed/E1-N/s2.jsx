<div className="bg-background text-foreground w-full h-fit">
  <main className="flex mr-auto ml-auto pr-4 pl-4 flex-col gap-6 min-h-screen max-w-md pb-[40px]">
    <header className="flex pt-6 justify-between items-center">
      <button
        type="button"
        aria-label="Go back"
        className="rounded-full text-foreground flex justify-center items-center size-10"
      >
        <ChevronLeft className="size-6" />
      </button>
      <h1 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Nona’s Kitchen</h1>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Favorite restaurant"
          className="rounded-full flex justify-center items-center size-10"
        >
          <Heart />
        </button>
        <button
          type="button"
          aria-label="Share restaurant"
          className="rounded-full text-foreground flex justify-center items-center size-10"
        >
          <Share2 className="size-5" />
        </button>
      </div>
    </header>
    <section className="flex items-center gap-4">
      <div className="rounded-2xl flex justify-center items-center shrink-0 size-20 text-[#2b2118] bg-[#eadbc8]">
        <Utensils className="size-10" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[17px] font-[family-name:DM_Sans]">Italian • Pasta</p>
        <div className="text-muted-foreground text-sm flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="flex items-center gap-1 text-[15px] font-[family-name:DM_Sans]">
            <Star className="fill-chart-2 text-chart-2 size-4" />
            4.8 (1.2k)
          </span>
          <span className="flex items-center gap-1 text-[15px] font-[family-name:DM_Sans]">
            <Clock3 className="size-4" />
            25–35 min
          </span>
        </div>
        <p className="font-medium text-[#c23b0b] text-[15px] font-[family-name:DM_Sans]">Free delivery</p>
      </div>
    </section>
    <Tabs className="w-full" defaultValue="Popular">
      <TabsList className="rounded-none bg-transparent border-t-border border-r-border border-b border-b-border border-l-border pt-0 pr-0 pb-0 pl-0 justify-start gap-1 w-full h-auto overflow-x-auto">
        <TabsTrigger
          value="Popular"
          className="rounded-none border-t-transparent border-r-transparent border-b-2 border-b-transparent border-l-transparent pt-3 pr-3 pb-3 pl-3 text-[15px] font-[family-name:DM_Sans]"
        >
          Popular
        </TabsTrigger>
        <TabsTrigger
          value="Starters"
          className="rounded-none border-t-transparent border-r-transparent border-b-2 border-b-transparent border-l-transparent pt-3 pr-3 pb-3 pl-3 text-[15px] font-[family-name:DM_Sans]"
        >
          Starters
        </TabsTrigger>
        <TabsTrigger
          value="Pasta"
          className="rounded-none border-t-transparent border-r-transparent border-b-2 border-b-transparent border-l-transparent pt-3 pr-3 pb-3 pl-3 text-[15px] font-[family-name:DM_Sans]"
        >
          Pasta
        </TabsTrigger>
        <TabsTrigger
          value="Mains"
          className="rounded-none border-t-transparent border-r-transparent border-b-2 border-b-transparent border-l-transparent pt-3 pr-3 pb-3 pl-3 text-[15px] font-[family-name:DM_Sans]"
        >
          Mains
        </TabsTrigger>
        <TabsTrigger
          value="Desserts"
          className="rounded-none border-t-transparent border-r-transparent border-b-2 border-b-transparent border-l-transparent pt-3 pr-3 pb-3 pl-3 text-[15px] font-[family-name:DM_Sans]"
        >
          Desserts
        </TabsTrigger>
      </TabsList>
    </Tabs>
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-[22px] font-[family-name:DM_Sans]">Popular</h2>
      <div className="flex flex-col gap-4">
        <article className="flex items-center gap-3">
          <div className="rounded-xl flex justify-center items-center shrink-0 order-last size-24 text-[#c23b0b] bg-[#faefe2]">
            <ChefHat className="size-10" />
          </div>
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Truffle Carbonara</h3>
            <p className="text-muted-foreground text-[15px] font-[family-name:DM_Sans] leading-snug">
              Creamy parmesan, pancetta, black truffle
            </p>
            <p className="font-semibold pt-1 text-[17px] font-[family-name:DM_Sans]">$18.50</p>
          </div>
          <Button
            type="button"
            size="icon"
            aria-label="Add Truffle Carbonara"
            className="rounded-full text-primary-foreground shrink-0 size-9 bg-[#c23b0b]"
          >
            <Plus className="size-4" />
          </Button>
        </article>
        <article className="flex items-center gap-3">
          <div className="rounded-xl flex justify-center items-center shrink-0 order-last size-24 text-[#2b2118] bg-[#eadbc8]">
            <Pizza className="size-10" />
          </div>
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Margherita Pizza</h3>
            <p className="text-muted-foreground text-[15px] font-[family-name:DM_Sans] leading-snug">
              San Marzano tomato, mozzarella, basil
            </p>
            <p className="font-semibold pt-1 text-[17px] font-[family-name:DM_Sans]">$16.00</p>
          </div>
          <Button
            type="button"
            size="icon"
            aria-label="Add Margherita Pizza"
            className="rounded-full text-primary-foreground shrink-0 size-9 bg-[#c23b0b]"
          >
            <Plus className="size-4" />
          </Button>
        </article>
        <article className="flex items-center gap-3">
          <div className="rounded-xl text-primary flex justify-center items-center shrink-0 order-last size-24 bg-[#faefe2]">
            <FallbackComponent className="size-10" />
          </div>
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Garlic Bread</h3>
            <p className="text-muted-foreground text-[15px] font-[family-name:DM_Sans] leading-snug">
              Wood-fired bread, roasted garlic butter
            </p>
            <p className="font-semibold pt-1 text-[17px] font-[family-name:DM_Sans]">$7.50</p>
          </div>
          <Button
            type="button"
            size="icon"
            aria-label="Add Garlic Bread"
            className="rounded-full text-primary-foreground shrink-0 size-9 bg-[#c23b0b]"
          >
            <Plus className="size-4" />
          </Button>
        </article>
        <article className="flex items-center gap-3">
          <div className="rounded-xl flex justify-center items-center shrink-0 order-last size-24 text-[#2b2118] bg-[#eadbc8]">
            <CakeSlice className="size-10" />
          </div>
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Tiramisu</h3>
            <p className="text-muted-foreground text-[15px] font-[family-name:DM_Sans] leading-snug">
              Mascarpone, espresso, cocoa
            </p>
            <p className="font-semibold pt-1 text-[17px] font-[family-name:DM_Sans]">$8.00</p>
          </div>
          <Button
            type="button"
            size="icon"
            aria-label="Add Tiramisu"
            className="rounded-full text-primary-foreground shrink-0 size-9 bg-[#c23b0b]"
          >
            <Plus className="size-4" />
          </Button>
        </article>
      </div>
    </section>
  </main>
  <div className="ring-1 ring-border shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card flex fixed z-40 right-4 bottom-20 left-4 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 justify-between items-center gap-4 max-w-md">
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-[15px] font-[family-name:DM_Sans]">2 items</span>
      <strong className="text-[17px] font-[family-name:DM_Sans]">$34.50</strong>
    </div>
    <Button
      type="button"
      className="rounded-xl text-primary-foreground pr-6 pl-6 bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans]"
    >
      View cart
    </Button>
  </div>
  <nav
    className="bg-background border-x-border border-t border-t-border border-b-border fixed z-50 right-0 bottom-0 left-0"
    aria-label="Main navigation"
  >
    <div className="flex mr-auto ml-auto justify-around items-center h-16 max-w-md">
      <a
        href="#"
        className="text-muted-foreground flex flex-col justify-center items-center flex-1 gap-1 h-full"
      >
        <Home className="size-5" />
        <span className="font-medium text-[13px] font-[family-name:DM_Sans]">Home</span>
      </a>
      <a
        href="#"
        className="text-muted-foreground flex flex-col justify-center items-center flex-1 gap-1 h-full"
      >
        <ReceiptText className="size-5" />
        <span className="font-medium text-[13px] font-[family-name:DM_Sans]">Orders</span>
      </a>
      <a
        href="#"
        className="flex relative flex-col justify-center items-center flex-1 gap-1 h-full text-[#c23b0b]"
        aria-current="page"
      >
        <ShoppingCart className="size-5" />
        <span className="font-medium text-[13px] font-[family-name:DM_Sans]">Cart</span>
        <span className="font-semibold rounded-full text-primary-foreground flex absolute top-2 right-1/4 pr-1 pl-1 justify-center items-center h-4 min-w-4 bg-[#c23b0b] text-[13px] font-[family-name:DM_Sans] leading-none">
          2
        </span>
      </a>
      <a
        href="#"
        className="text-muted-foreground flex flex-col justify-center items-center flex-1 gap-1 h-full"
      >
        <User className="size-5" />
        <span className="font-medium text-[13px] font-[family-name:DM_Sans]">Profile</span>
      </a>
    </div>
  </nav>
</div>;