<div className="bg-background text-foreground w-full h-fit">
  <div className="font-sans bg-background text-foreground min-h-screen">
    <aside className="bg-muted border-y-border border-r border-r-border border-l-border flex fixed top-0 bottom-0 left-0 pt-4 pr-4 pb-4 pl-4 flex-col w-60">
      <div className="font-semibold text-primary text-xl leading-[26px] mb-8 pt-2 pr-2 pb-2 pl-2">
        Fjord Invoice
      </div>
      <nav
        className="flex flex-col flex-1 gap-2"
        aria-label="Primary navigation"
      >
        <a
          href="#invoices"
          className="font-medium rounded-xl bg-primary text-primary-foreground text-sm leading-[18px] flex pt-3 pr-3 pb-3 pl-3 items-center gap-3"
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
          <div className="font-medium rounded-full bg-primary text-primary-foreground text-xs leading-4 flex justify-center items-center size-8">
            AM
          </div>
          <div className="min-w-0">
            <div className="font-medium text-ellipsis whitespace-nowrap text-foreground text-sm leading-[18px] overflow-hidden">
              Avery Morgan
            </div>
            <div className="font-medium text-muted-foreground text-xs leading-4">
              Owner
            </div>
          </div>
        </div>
      </div>
    </aside>
    <main className="bg-background ml-60 min-h-screen">
      <header className="border-t-border border-r-border border-b border-b-border border-l-border flex pr-6 pl-6 justify-between items-center h-16">
        <div className="text-muted-foreground text-sm leading-[18px]">
          Invoices
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="text-muted-foreground"
          >
            <Bell className="size-5" />
          </button>
          <div className="font-medium rounded-full bg-primary text-primary-foreground text-xs leading-4 flex justify-center items-center size-8">
            AM
          </div>
        </div>
      </header>
      <div className="flex pt-8 pr-8 pb-8 pl-8 flex-col gap-8">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-foreground text-3xl leading-[39px]">
              Invoices
            </h1>
            <p className="font-normal text-muted-foreground text-base leading-[21px]">
              Track what’s sent, due, and paid.
            </p>
          </div>
          <Button className="font-medium rounded-xl bg-primary text-primary-foreground text-sm leading-[18px] pt-3 pr-4 pb-3 pl-4 gap-2">
            <Plus className="size-4" />
            Create invoice
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search invoices"
            className="rounded-xl text-sm border-input pr-4 pl-4 w-80 h-12"
            defaultValue=""
          />
          <Select defaultValue="all">
            <SelectTrigger className="rounded-xl w-44 h-12">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="rounded-xl w-48 h-12">
              <SelectValue placeholder="All customers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All customers</SelectItem>
              <SelectItem value="northstar">Northstar Studio</SelectItem>
              <SelectItem value="bloom">{`Bloom & Co.`}</SelectItem>
              <SelectItem value="riverbend">Riverbend Cafe</SelectItem>
              <SelectItem value="cedar">{`Cedar & Stone`}</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="90">
            <SelectTrigger className="rounded-xl w-44 h-12">
              <SelectValue placeholder="Last 90 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            className="font-medium text-muted-foreground text-sm"
          >
            Clear filters
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-medium text-muted-foreground text-sm leading-[18px]">
            24 invoices · $48,260.00 total
          </div>
          <div className="rounded-xl border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border overflow-hidden">
            <table className="text-left border-collapse w-full">
              <thead className="bg-muted">
                <tr className="border-t-border border-r-border border-b border-b-border border-l-border">
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    Invoice
                  </th>
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    Customer
                  </th>
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    Issue date
                  </th>
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    Due date
                  </th>
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    Amount
                  </th>
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    Status
                  </th>
                  <th className="font-medium text-muted-foreground text-xs leading-4 pt-4 pr-6 pb-4 pl-6">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-border border-r-border border-b border-b-border border-l-border">
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    INV-1048
                  </td>
                  <td className="text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Northstar Studio
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 08, 2025
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Apr 07, 2025
                  </td>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    $4,800.00
                  </td>
                  <td className="font-medium text-destructive text-sm pt-5 pr-6 pb-5 pl-6">
                    Overdue
                  </td>
                  <td className="pt-5 pr-6 pb-5 pl-6">
                    <button
                      type="button"
                      aria-label="Actions for INV-1048"
                      className="text-muted-foreground"
                    >
                      <MoreHorizontal className="size-5" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-border border-r-border border-b border-b-border border-l-border">
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    INV-1047
                  </td>
                  <td className="text-foreground text-sm pt-5 pr-6 pb-5 pl-6">{`Bloom & Co.`}</td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 05, 2025
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Apr 04, 2025
                  </td>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    $2,150.00
                  </td>
                  <td className="font-medium text-[#146d34] text-sm pt-5 pr-6 pb-5 pl-6">
                    Paid
                  </td>
                  <td className="pt-5 pr-6 pb-5 pl-6">
                    <button
                      type="button"
                      aria-label="Actions for INV-1047"
                      className="text-muted-foreground"
                    >
                      <MoreHorizontal className="size-5" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-border border-r-border border-b border-b-border border-l-border">
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    INV-1046
                  </td>
                  <td className="text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Riverbend Cafe
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 01, 2025
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 31, 2025
                  </td>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    $980.00
                  </td>
                  <td className="font-medium text-primary text-sm pt-5 pr-6 pb-5 pl-6">
                    Sent
                  </td>
                  <td className="pt-5 pr-6 pb-5 pl-6">
                    <button
                      type="button"
                      aria-label="Actions for INV-1046"
                      className="text-muted-foreground"
                    >
                      <MoreHorizontal className="size-5" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-border border-r-border border-b border-b-border border-l-border">
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    INV-1045
                  </td>
                  <td className="text-foreground text-sm pt-5 pr-6 pb-5 pl-6">{`Cedar & Stone`}</td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Feb 24, 2025
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 26, 2025
                  </td>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    $6,420.00
                  </td>
                  <td className="font-medium text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Draft
                  </td>
                  <td className="pt-5 pr-6 pb-5 pl-6">
                    <button
                      type="button"
                      aria-label="Actions for INV-1045"
                      className="text-muted-foreground"
                    >
                      <MoreHorizontal className="size-5" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-border border-r-border border-b border-b-border border-l-border">
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    INV-1044
                  </td>
                  <td className="text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Atlas Fitness
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Feb 18, 2025
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 20, 2025
                  </td>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    $1,275.00
                  </td>
                  <td className="font-medium text-[#146d34] text-sm pt-5 pr-6 pb-5 pl-6">
                    Paid
                  </td>
                  <td className="pt-5 pr-6 pb-5 pl-6">
                    <button
                      type="button"
                      aria-label="Actions for INV-1044"
                      className="text-muted-foreground"
                    >
                      <MoreHorizontal className="size-5" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    INV-1043
                  </td>
                  <td className="text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Little Lantern
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Feb 12, 2025
                  </td>
                  <td className="text-muted-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    Mar 14, 2025
                  </td>
                  <td className="font-medium text-foreground text-sm pt-5 pr-6 pb-5 pl-6">
                    $3,600.00
                  </td>
                  <td className="font-medium text-primary text-sm pt-5 pr-6 pb-5 pl-6">
                    Sent
                  </td>
                  <td className="pt-5 pr-6 pb-5 pl-6">
                    <button
                      type="button"
                      aria-label="Actions for INV-1043"
                      className="text-muted-foreground"
                    >
                      <MoreHorizontal className="size-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-muted-foreground text-sm">Showing 1–6 of 24</div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">1</Button>
            <Button variant="ghost">2</Button>
            <Button variant="ghost">3</Button>
            <Button variant="ghost">4</Button>
            <Button
              variant="ghost"
              aria-label="Next page"
              className="rounded-lg text-muted-foreground size-10"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>;