<div className="bg-background text-foreground w-full h-fit">
  <div className="flex flex-col min-h-[874px]">
    <main className="pt-6 pr-6 pb-6 pl-6 flex-1">
      <header className="flex mb-6 justify-between items-center">
        <Button variant="ghost" size="icon" className="rounded-full size-10">
          <ChevronLeft className="size-5" />
        </Button>
        <h1 className="font-semibold text-lg">New habit</h1>
        <Button
          variant="ghost"
          className="font-semibold text-primary text-sm pr-2 pl-2"
        >
          Save
        </Button>
      </header>
      <p className="text-muted-foreground text-sm mb-6">
        Build a routine that feels good.
      </p>
      <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-card border-border mb-6 pt-6 pr-6 pb-6 pl-6 gap-6">
        <CardContent className="pt-0 pr-0 pb-0 pl-0 gap-6">
          <div>
            <Label htmlFor="habit-name" className="mb-2">
              Habit name
            </Label>
            <Input
              id="habit-name"
              className="rounded-xl mb-2 h-12"
              defaultValue="Take a walk"
            />
            <p className="text-muted-foreground text-xs">
              What do you want to make consistent?
            </p>
          </div>
          <div>
            <Label className="mb-3">Choose an icon</Label>
            <div className="grid gap-3 grid-cols-4">
              <button type="button" aria-label="Droplets">
                <Droplets className="size-5" />
              </button>
              <button type="button" aria-label="Dumbbell">
                <Dumbbell className="size-5" />
              </button>
              <button type="button" aria-label="BookOpen">
                <BookOpen className="size-5" />
              </button>
              <button type="button" aria-label="Brain">
                <Brain className="size-5" />
              </button>
              <button type="button" aria-label="Moon">
                <Moon className="size-5" />
              </button>
              <button type="button" aria-label="Apple">
                <Apple className="size-5" />
              </button>
              <button type="button" aria-label="Heart">
                <Heart className="size-5" />
              </button>
              <button type="button" aria-label="Leaf">
                <Leaf className="size-5" />
              </button>
            </div>
          </div>
          <div>
            <Label className="mb-3">Frequency</Label>
            <div className="rounded-xl bg-muted grid pt-1 pr-1 pb-1 pl-1 grid-cols-3">
              <button type="button">Daily</button>
              <button type="button">Weekdays</button>
              <button type="button">Custom</button>
            </div>
          </div>
          <div>
            <Label className="mb-3">Reminder</Label>
            <button
              type="button"
              className="text-left rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 items-center gap-3 w-full"
            >
              <Bell className="text-primary size-5" />
              <span className="font-medium text-sm flex-1">Remind me</span>
              <span className="text-muted-foreground text-sm">8:00 AM</span>
              <ChevronRight className="text-muted-foreground size-4" />
            </button>
          </div>
          <div>
            <Label className="mb-3">Goal</Label>
            <button
              type="button"
              className="text-left rounded-xl bg-card border-t border-t-border border-r border-r-border border-b border-b-border border-l border-l-border flex pt-4 pr-4 pb-4 pl-4 items-center gap-3 w-full"
            >
              <Target className="text-primary size-5" />
              <span className="font-medium text-sm flex-1">Daily goal</span>
              <span className="text-muted-foreground text-sm">1 time</span>
              <ChevronRight className="text-muted-foreground size-4" />
            </button>
          </div>
        </CardContent>
      </Card>
      <Button className="rounded-xl bg-primary text-primary-foreground w-full h-12">
        Create habit
      </Button>
    </main>
    <nav
      className="pb-[env(safe-area-inset-bottom)] bg-background border-x-border border-t border-t-border border-b-border"
      aria-label="Primary navigation"
    >
      <div className="grid grid-cols-4">
        <button
          type="button"
          className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
        >
          <CalendarDays className="size-5" />
          <span>Today</span>
        </button>
        <button
          type="button"
          className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
        >
          <ChartNoAxesColumnIncreasing className="size-5" />
          <span>Insights</span>
        </button>
        <button
          type="button"
          className="font-medium text-primary text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
          aria-current="page"
        >
          <PlusCircle className="size-5" />
          <span>Add</span>
        </button>
        <button
          type="button"
          className="font-medium text-muted-foreground text-xs flex pt-3 pb-3 flex-col justify-center items-center gap-1"
        >
          <UserRound className="size-5" />
          <span>Profile</span>
        </button>
      </div>
    </nav>
  </div>
</div>;