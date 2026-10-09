<div className="bg-background text-foreground w-full h-fit">
  <main className="flex pt-4 pr-4 pb-24 pl-4 flex-col gap-6 min-h-screen">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <a
          href="#"
          aria-label="Back"
          className="rounded-full flex justify-center items-center size-9"
        >
          <ChevronLeft className="size-5" />
        </a>
        <h1 className="font-semibold text-2xl tracking-tight">Your cart</h1>
      </div>
      <button type="button" className="font-medium text-primary text-sm">
        Clear all
      </button>
    </div>
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-accent text-accent-foreground flex justify-center items-center size-12">
        <Utensils className="size-6" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold">Nona’s Kitchen</span>
        <span className="text-muted-foreground text-sm">25–35 min</span>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <Card className="pt-4 pr-4 pb-4 pl-4 gap-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <span className="font-medium text-ellipsis whitespace-nowrap overflow-hidden">
              Truffle Carbonara
            </span>
            <span className="text-muted-foreground text-sm">$18.50</span>
          </div>
          <div className="rounded-lg border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-1 pr-1 pb-1 pl-1 items-center gap-2">
            <button
              type="button"
              className="rounded-md text-muted-foreground flex justify-center items-center size-7"
            >
              <Minus className="size-4" />
            </button>
            <span className="font-semibold text-center text-sm w-5">1</span>
            <button
              type="button"
              className="rounded-md text-primary flex justify-center items-center size-7"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>
      </Card>
      <Card className="pt-4 pr-4 pb-4 pl-4 gap-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <span className="font-medium text-ellipsis whitespace-nowrap overflow-hidden">
              Garlic Bread
            </span>
            <span className="text-muted-foreground text-sm">$7.50</span>
          </div>
          <div className="rounded-lg border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-1 pr-1 pb-1 pl-1 items-center gap-2">
            <button
              type="button"
              className="rounded-md text-muted-foreground flex justify-center items-center size-7"
            >
              <Minus className="size-4" />
            </button>
            <span className="font-semibold text-center text-sm w-5">1</span>
            <button
              type="button"
              className="rounded-md text-primary flex justify-center items-center size-7"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>
      </Card>
      <div className="text-center rounded-lg text-muted-foreground text-sm border-t border-t-dashed border-t-border border-r border-r-dashed border-r-border border-b border-b-dashed border-b-border border-l border-l-dashed border-l-border hidden pt-6 pr-6 pb-6 pl-6">
        Your cart is empty
      </div>
    </div>
    <Button variant="outline" className="rounded-lg w-full">
      Add more items
    </Button>
    <Card className="pt-4 pr-4 pb-4 pl-4 gap-3">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-secondary text-secondary-foreground flex justify-center items-center size-10">
          <Truck className="size-5" />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <span className="font-medium">Standard delivery</span>
          <span className="text-muted-foreground text-sm">
            Arrives in 25–35 min
          </span>
        </div>
        <span className="font-medium text-sm">Free</span>
      </div>
    </Card>
    <div className="border-t-border border-r-border border-b border-b-border border-l-border flex pb-4 items-center gap-3">
      <Ticket className="text-muted-foreground size-5" />
      <input
        placeholder="Add promo code"
        className="bg-transparent text-sm outline-none flex-1 min-w-0"
        defaultValue=""
      />
      <ChevronRight className="text-muted-foreground size-5" />
    </div>
    <Card className="pt-4 pr-4 pb-4 pl-4 gap-4">
      <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-0">
        <h2 className="font-semibold">Order summary</h2>
      </CardHeader>
      <CardContent className="flex pt-0 pr-0 pb-0 pl-0 flex-col gap-3">
        <div className="text-sm flex justify-between items-center">
          <span className="text-muted-foreground">Subtotal</span>
          <span>$26.00</span>
        </div>
        <div className="text-sm flex justify-between items-center">
          <span className="text-muted-foreground">Delivery fee</span>
          <span>Free</span>
        </div>
        <div className="text-sm flex justify-between items-center">
          <span className="text-muted-foreground">Service fee</span>
          <span>$2.50</span>
        </div>
        <div className="font-semibold border-x-border border-t border-t-border border-b-border flex pt-3 justify-between items-center">
          <span>Total</span>
          <span>$28.50</span>
        </div>
      </CardContent>
    </Card>
    <Button className="font-semibold rounded-xl bg-primary text-primary-foreground text-base mt-auto pt-6 pb-6 w-full">
      Place order • $28.50
    </Button>
  </main>
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
        className="text-primary flex relative flex-col justify-center items-center flex-1 gap-1 h-full"
        aria-current="page"
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