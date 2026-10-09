<div className="bg-background text-foreground w-full h-fit">
  <main className="flex mr-auto ml-auto pt-6 pr-4 pb-20 pl-4 flex-col gap-6 min-h-screen max-w-md">
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="text-primary size-4" />
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground text-sm">Deliver to</span>
            <span className="font-semibold text-foreground text-sm">
              125 Market Street
            </span>
            <ChevronDown className="text-muted-foreground size-4" />
          </div>
        </div>
        <div className="rounded-full bg-secondary flex relative justify-center items-center size-9">
          <Bell className="text-foreground size-5" />
          <span className="rounded-full bg-primary absolute top-1 right-1 size-2" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl tracking-tight">
          Good evening, Alex
        </h1>
      </div>
      <div className="relative">
        <Search className="-translate-y-1/2 pointer-events-none text-muted-foreground absolute top-1/2 left-4 size-5" />
        <Input
          placeholder="Search restaurants or dishes"
          className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-xl bg-card text-sm border-border pl-11 h-12"
          defaultValue=""
        />
      </div>
      <div className="flex pb-1 gap-2 overflow-x-auto">
        <Button>
          <LayoutGrid className="size-4" />
          All
        </Button>
        <Button>
          <Pizza className="size-4" />
          Pizza
        </Button>
        <Button>
          <Hamburger className="size-4" />
          Burgers
        </Button>
        <Button>
          <Fish className="size-4" />
          Sushi
        </Button>
        <Button>
          <Salad className="size-4" />
          Healthy
        </Button>
        <Button>
          <IceCreamBowl className="size-4" />
          Desserts
        </Button>
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Popular near you</h2>
          <button className="font-medium text-primary text-sm">See all</button>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border flex pt-4 pr-4 pb-4 pl-4 flex-row items-center gap-4">
            <div className="flex flex-col flex-1 gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold rounded-full bg-primary text-primary-foreground text-[10px] pt-1 pr-2 pb-1 pl-2">
                  Open
                </span>
                <span className="font-medium text-foreground text-xs flex items-center gap-1">
                  <Star className="fill-amber-500 text-amber-500 size-3.5" />
                  4.8
                </span>
              </div>
              <h3 className="font-semibold text-base">Nona’s Kitchen</h3>
              <p className="text-muted-foreground text-xs">
                Italian • Pasta • 25–35 min
              </p>
              <p className="font-medium text-primary text-xs">Free delivery</p>
            </div>
            <div className="rounded-full bg-accent text-accent-foreground flex justify-center items-center shrink-0 size-20">
              <Utensils className="text-primary size-9" />
            </div>
          </Card>
          <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border flex pt-4 pr-4 pb-4 pl-4 flex-row items-center gap-4">
            <div className="flex flex-col flex-1 gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold rounded-full bg-primary text-primary-foreground text-[10px] pt-1 pr-2 pb-1 pl-2">
                  Open
                </span>
                <span className="font-medium text-foreground text-xs flex items-center gap-1">
                  <Star className="fill-amber-500 text-amber-500 size-3.5" />
                  4.6
                </span>
              </div>
              <h3 className="font-semibold text-base">Burger Yard</h3>
              <p className="text-muted-foreground text-xs">
                Burgers • American • 20–30 min
              </p>
              <p className="font-medium text-foreground text-xs">
                $1.99 delivery
              </p>
            </div>
            <div className="rounded-full bg-secondary text-primary flex justify-center items-center shrink-0 size-20">
              <Hamburger className="size-9" />
            </div>
          </Card>
          <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border flex pt-4 pr-4 pb-4 pl-4 flex-row items-center gap-4">
            <div className="flex flex-col flex-1 gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold rounded-full bg-primary text-primary-foreground text-[10px] pt-1 pr-2 pb-1 pl-2">
                  Open
                </span>
                <span className="font-medium text-foreground text-xs flex items-center gap-1">
                  <Star className="fill-amber-500 text-amber-500 size-3.5" />
                  4.9
                </span>
              </div>
              <h3 className="font-semibold text-base">Sushi House</h3>
              <p className="text-muted-foreground text-xs">
                Japanese • Sushi • 30–40 min
              </p>
              <p className="font-medium text-primary text-xs">Free delivery</p>
            </div>
            <div className="rounded-full bg-accent text-primary flex justify-center items-center shrink-0 size-20">
              <Fish className="size-9" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  </main>
  <nav
    className="bg-background border-x-border border-t border-t-border border-b-border fixed z-50 right-0 bottom-0 left-0"
    aria-label="Main navigation"
  >
    <div className="flex mr-auto ml-auto justify-around items-center h-16 max-w-md">
      <a
        href="#"
        className="text-primary flex flex-col justify-center items-center flex-1 gap-1 h-full"
        aria-current="page"
      >
        <Home className="size-5" />
        <span className="font-medium text-xs">Home</span>
      </a>
      <a
        href="#"
        className="text-muted-foreground flex flex-col justify-center items-center flex-1 gap-1 h-full"
      >
        <ReceiptText className="size-5" />
        <span className="font-medium text-xs">Orders</span>
      </a>
      <a
        href="#"
        className="text-muted-foreground flex relative flex-col justify-center items-center flex-1 gap-1 h-full"
      >
        <ShoppingCart className="size-5" />
        <span className="font-medium text-xs">Cart</span>
        <span className="font-semibold rounded-full bg-primary text-primary-foreground text-[10px] leading-none flex absolute top-2 right-1/4 pr-1 pl-1 justify-center items-center h-4 min-w-4">
          2
        </span>
      </a>
      <a
        href="#"
        className="text-muted-foreground flex flex-col justify-center items-center flex-1 gap-1 h-full"
      >
        <User className="size-5" />
        <span className="font-medium text-xs">Profile</span>
      </a>
    </div>
  </nav>
</div>;