<div className="bg-background text-foreground w-full h-fit">
  <main className="flex mr-auto ml-auto pt-6 pr-4 pl-4 flex-col gap-6 min-h-screen max-w-md pb-[40px]">
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-[#c23b0b]" />
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground text-[15px] font-[family-name:DM_Sans]">Deliver to</span>
            <span className="font-semibold text-foreground text-[15px] font-[family-name:DM_Sans]">
              125 Market Street
            </span>
            <ChevronDown className="text-muted-foreground size-4" />
          </div>
        </div>
        <div className="rounded-full flex relative justify-center items-center size-9 bg-[#faefe2]">
          <Bell className="text-foreground size-5" />
          <span className="rounded-full absolute top-1 right-1 size-2 bg-[#c23b0b]" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold tracking-tight text-[22px] font-[family-name:DM_Sans]">
          Good evening, Alex
        </h1>
      </div>
      <div className="relative">
        <Search className="-translate-y-1/2 pointer-events-none text-muted-foreground absolute top-1/2 left-4 size-5" />
        <Input
          placeholder="Search restaurants or dishes"
          className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-xl bg-card border-border h-12 text-[15px] font-[family-name:DM_Sans] pl-[40px]"
          defaultValue=""
        />
      </div>
      <div className="flex pb-1 gap-2 overflow-x-auto">
        <Button className="bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans] rounded-[0px]">
          <LayoutGrid className="size-4" />
          All
        </Button>
        <Button className="bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans] rounded-[0px]">
          <Pizza className="size-4" />
          Pizza
        </Button>
        <Button className="bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans] rounded-[0px]">
          <Hamburger className="size-4" />
          Burgers
        </Button>
        <Button className="bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans] rounded-[0px]">
          <Fish className="size-4" />
          Sushi
        </Button>
        <Button className="bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans] rounded-[0px]">
          <Salad className="size-4" />
          Healthy
        </Button>
        <Button className="bg-[#c23b0b] text-[15px] font-[family-name:DM_Sans] rounded-[0px]">
          <IceCreamBowl className="size-4" />
          Desserts
        </Button>
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Popular near you</h2>
          <button className="font-medium text-[#c23b0b] text-[15px] font-[family-name:DM_Sans]">See all</button>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border flex pt-4 pr-4 pb-4 pl-4 flex-row items-center gap-4 text-[#6b5b4d]">
            <div className="flex flex-col flex-1 gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold rounded-full text-primary-foreground pt-1 pr-2 pb-1 pl-2 bg-[#c23b0b] text-[13px] font-[family-name:DM_Sans]">
                  Open
                </span>
                <span className="font-medium text-foreground flex items-center gap-1 text-[13px] font-[family-name:DM_Sans]">
                  <Star className="size-3.5 text-[#c23b0b] fill-[#c23b0b]" />
                  4.8
                </span>
              </div>
              <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Nona’s Kitchen</h3>
              <p className="text-muted-foreground text-[13px] font-[family-name:DM_Sans]">
                Italian • Pasta • 25–35 min
              </p>
              <p className="font-medium text-[#c23b0b] text-[13px] font-[family-name:DM_Sans]">Free delivery</p>
            </div>
            <div className="rounded-full text-accent-foreground flex justify-center items-center shrink-0 size-20 bg-[#eadbc8]">
              <Utensils className="size-9 text-[#c23b0b]" />
            </div>
          </Card>
          <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border flex pt-4 pr-4 pb-4 pl-4 flex-row items-center gap-4 text-[#6b5b4d]">
            <div className="flex flex-col flex-1 gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold rounded-full text-primary-foreground pt-1 pr-2 pb-1 pl-2 bg-[#c23b0b] text-[13px] font-[family-name:DM_Sans]">
                  Open
                </span>
                <span className="font-medium text-foreground flex items-center gap-1 text-[13px] font-[family-name:DM_Sans]">
                  <Star className="size-3.5 text-[#c23b0b] fill-[#c23b0b]" />
                  4.6
                </span>
              </div>
              <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Burger Yard</h3>
              <p className="text-muted-foreground text-[13px] font-[family-name:DM_Sans]">
                Burgers • American • 20–30 min
              </p>
              <p className="font-medium text-foreground text-[13px] font-[family-name:DM_Sans]">
                $1.99 delivery
              </p>
            </div>
            <div className="rounded-full flex justify-center items-center shrink-0 size-20 text-[#c23b0b] bg-[#faefe2]">
              <Hamburger className="size-9" />
            </div>
          </Card>
          <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border flex pt-4 pr-4 pb-4 pl-4 flex-row items-center gap-4 text-[#6b5b4d]">
            <div className="flex flex-col flex-1 gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold rounded-full text-primary-foreground pt-1 pr-2 pb-1 pl-2 bg-[#c23b0b] text-[13px] font-[family-name:DM_Sans]">
                  Open
                </span>
                <span className="font-medium text-foreground flex items-center gap-1 text-[13px] font-[family-name:DM_Sans]">
                  <Star className="size-3.5 text-[#c23b0b] fill-[#c23b0b]" />
                  4.9
                </span>
              </div>
              <h3 className="font-semibold text-[17px] font-[family-name:DM_Sans]">Sushi House</h3>
              <p className="text-muted-foreground text-[13px] font-[family-name:DM_Sans]">
                Japanese • Sushi • 30–40 min
              </p>
              <p className="font-medium text-[#c23b0b] text-[13px] font-[family-name:DM_Sans]">Free delivery</p>
            </div>
            <div className="rounded-full flex justify-center items-center shrink-0 size-20 text-[#c23b0b] bg-[#eadbc8]">
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
        className="flex flex-col justify-center items-center flex-1 gap-1 h-full text-[#c23b0b]"
        aria-current="page"
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
        className="text-muted-foreground flex relative flex-col justify-center items-center flex-1 gap-1 h-full"
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