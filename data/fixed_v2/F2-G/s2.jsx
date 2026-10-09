<div className="bg-background text-foreground w-full h-fit">
  <div className="font-sans bg-background text-foreground min-h-screen">
    <aside className="bg-muted border-y-border border-r border-r-border border-l-border flex fixed top-0 bottom-0 left-0 pt-4 pr-4 pb-4 pl-4 flex-col w-60">
      <div className="font-semibold text-xl leading-[26px] mb-8 pt-2 pr-2 pb-2 pl-2 text-[#1f6f78]">
        Fjord Invoice
      </div>
      <nav
        className="flex flex-col flex-1 gap-2"
        aria-label="Primary navigation"
      >
        <a
          href="#invoices"
          className="font-medium rounded-xl text-primary-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3 bg-[#1f6f78]"
        >
          <FileText className="size-5" />
          <span>Invoices</span>
        </a>
        <a
          href="#customers"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <Users className="size-5" />
          <span>Customers</span>
        </a>
        <a
          href="#products"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <Package className="size-5" />
          <span>Products</span>
        </a>
        <a
          href="#reports"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <BarChart3 className="size-5" />
          <span>Reports</span>
        </a>
        <a
          href="#settings"
          className="font-medium rounded-xl text-muted-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
        >
          <Settings className="size-5" />
          <span>Settings</span>
        </a>
      </nav>
      <div className="flex flex-col gap-4">
        <a
          href="#help"
          className="font-medium text-muted-foreground text-sm leading-[18px] flex pt-2 pr-3 pb-2 pl-3 items-center gap-3"
        >
          <HelpCircle className="size-5" />
          <span>Help</span>
        </a>
        <div className="border-x-border border-t border-t-border border-b-border flex pt-4 pr-2 pl-2 items-center gap-3">
          <div className="font-medium rounded-full text-primary-foreground text-xs leading-4 flex justify-center items-center size-8 bg-[#1f6f78]">
            AM
          </div>
          <div className="min-w-0">
            <div className="font-medium text-ellipsis whitespace-nowrap text-sm leading-[18px] overflow-hidden text-[#0f2a2e]">
              Avery Morgan
            </div>
            <div className="font-medium text-muted-foreground text-xs leading-4">
              Owner
            </div>
          </div>
        </div>
      </div>
    </aside>
    <main className="bg-background min-h-screen ml-[48px]">
      <header className="border-t-border border-r-border border-b border-b-border border-l-border flex pr-6 pl-6 justify-between items-center h-16">
        <div className="text-muted-foreground text-sm leading-[18px]">
          Invoices / Create invoice
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="text-muted-foreground"
          >
            <Bell className="size-5" />
          </button>
          <div className="font-medium rounded-full text-primary-foreground text-xs leading-4 flex justify-center items-center size-8 bg-[#1f6f78]">
            AM
          </div>
        </div>
      </header>
      <div className="flex pt-8 pr-8 pb-8 pl-8 flex-col gap-8">
        <div className="flex justify-between items-end gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl leading-[39px] text-[#0f2a2e]">
              Create invoice
            </h1>
            <p className="text-muted-foreground text-base leading-[21px]">
              Send a clear invoice and get paid faster.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="font-medium rounded-xl text-sm pt-3 pr-3 pb-3 pl-3 text-[#14474d]"
            >
              Save as draft
            </Button>
            <Button className="font-medium rounded-xl text-primary-foreground text-sm pt-3 pr-3 pb-3 pl-3 bg-[#1f6f78]">
              Review invoice
            </Button>
          </div>
        </div>
        <div className="grid items-start gap-8 grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <div className="flex flex-col gap-6">
            <Card className="rounded-xl border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border pt-6 pr-6 pb-6 pl-6 gap-4 text-[#0f2a2e]">
              <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
                <h2 className="font-semibold text-xl leading-[26px]">
                  Customer
                </h2>
              </CardHeader>
              <CardContent className="flex pt-0 pr-0 pb-0 pl-0 items-center gap-4">
                <Select defaultValue="Northstar Studio">
                  <SelectTrigger className="rounded-xl text-sm border-input flex-1 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Northstar Studio">
                      Northstar Studio
                    </SelectItem>
                    <SelectItem value="Harbor Works">Harbor Works</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="secondary"
                  className="font-medium rounded-xl text-sm pt-3 pr-3 pb-3 pl-3 text-[#14474d]"
                >
                  + Add new customer
                </Button>
              </CardContent>
            </Card>
            <Card className="rounded-xl border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border pt-6 pr-6 pb-6 pl-6 gap-4 text-[#0f2a2e]">
              <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
                <h2 className="font-semibold text-xl leading-[26px]">
                  Invoice details
                </h2>
              </CardHeader>
              <CardContent className="grid pt-0 pr-0 pb-0 pl-0 gap-6 grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-muted-foreground text-xs leading-4">
                    Invoice number
                  </label>
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="INV-1049"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-muted-foreground text-xs leading-4">
                    Issue date
                  </label>
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="Mar 12, 2025"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-muted-foreground text-xs leading-4">
                    Due date
                  </label>
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="Apr 11, 2025"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-muted-foreground text-xs leading-4">
                    Payment terms
                  </label>
                  <Select defaultValue="Net 30">
                    <SelectTrigger className="rounded-xl text-sm border-input h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Net 30">Net 30</SelectItem>
                      <SelectItem value="Net 15">Net 15</SelectItem>
                      <SelectItem value="Due on receipt">
                        Due on receipt
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-xl border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border pt-6 pr-6 pb-6 pl-6 gap-4 text-[#0f2a2e]">
              <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
                <h2 className="font-semibold text-xl leading-[26px]">
                  Line items
                </h2>
              </CardHeader>
              <CardContent className="flex pt-0 pr-0 pb-0 pl-0 flex-col gap-4">
                <div className="font-medium text-muted-foreground text-xs leading-4 grid gap-4 grid-cols-[minmax(0,1fr)_80px_160px_160px]">
                  <span>Description</span>
                  <span>Qty</span>
                  <span>Unit price</span>
                  <span>Amount</span>
                </div>
                <div className="grid items-center gap-4 grid-cols-[minmax(0,1fr)_80px_160px_160px]">
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="Brand strategy workshop"
                  />
                  <Input className="rounded-xl text-sm h-12" defaultValue={1} />
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="$1,800.00"
                  />
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="$1,800.00"
                  />
                </div>
                <div className="grid items-center gap-4 grid-cols-[minmax(0,1fr)_80px_160px_160px]">
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="Monthly design support"
                  />
                  <Input className="rounded-xl text-sm h-12" defaultValue={1} />
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="$950.00"
                  />
                  <Input
                    className="rounded-xl text-sm h-12"
                    defaultValue="$950.00"
                  />
                </div>
                <Button
                  variant="secondary"
                  className="font-medium rounded-xl text-sm pt-3 pr-3 pb-3 pl-3 w-fit text-[#14474d]"
                >
                  + Add line item
                </Button>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-muted-foreground text-xs leading-4">
                    Notes
                  </label>
                  <Textarea
                    placeholder="Add a note for your customer"
                    className="rounded-xl text-sm min-h-24"
                    defaultValue=""
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-6">
            <Card className="rounded-xl bg-muted pt-6 pr-6 pb-6 pl-6 gap-6 text-[#0f2a2e]">
              <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
                <h2 className="font-semibold text-xl leading-[26px]">
                  Summary
                </h2>
              </CardHeader>
              <CardContent className="flex pt-0 pr-0 pb-0 pl-0 flex-col gap-4">
                <div className="text-sm leading-[18px] flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$2,750.00</span>
                </div>
                <div className="text-sm leading-[18px] flex justify-between">
                  <span className="text-muted-foreground">Tax 0.00%</span>
                  <span>$0.00</span>
                </div>
                <div className="font-semibold text-base leading-[21px] border-x-border border-t border-t-border border-b-border flex pt-4 justify-between">
                  <span>Total</span>
                  <span>$2,750.00</span>
                </div>
                <p className="font-medium text-muted-foreground text-xs leading-4">
                  Payment due Apr 11, 2025
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-xl border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border pt-6 pr-6 pb-6 pl-6 gap-6 text-[#0f2a2e]">
              <CardHeader className="pt-0 pr-0 pb-0 pl-0 gap-2">
                <h2 className="font-semibold text-xl leading-[26px]">
                  Payment options
                </h2>
              </CardHeader>
              <CardContent className="flex pt-0 pr-0 pb-0 pl-0 flex-col gap-4">
                <label className="text-sm leading-[18px] flex items-center gap-3">
                  <Checkbox className="bg-[#1f6f78] border-[#d3dedf] rounded-[6px]" defaultChecked={true} />
                  <span>Allow online card payments</span>
                </label>
                <label className="text-sm leading-[18px] flex items-center gap-3">
                  <Checkbox className="bg-[#1f6f78] border-[#d3dedf] rounded-[6px]" defaultChecked={true} />
                  <span>Allow bank transfer</span>
                </label>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="font-medium text-xs leading-4 text-[#0f2a2e]">
          All required fields are complete.
        </p>
      </div>
    </main>
  </div>
</div>;