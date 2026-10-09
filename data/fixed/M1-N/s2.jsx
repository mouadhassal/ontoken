<div className="bg-background w-full h-fit text-[#5a6a5c]">
  <div className="flex flex-col min-h-[874px]">
    <main className="pt-6 pr-6 pb-6 pl-6 flex-1">
      <header className="flex mb-6 justify-between items-center">
        <Button variant="ghost" size="icon" className="rounded-full size-10">
          <ChevronLeft className="size-5" />
        </Button>
        <h1 className="font-semibold text-lg font-[family-name:Manrope]">New habit</h1>
        <Button
          variant="ghost"
          className="font-semibold text-sm pr-2 pl-2 text-[#2f6b3a] font-[family-name:Manrope]"
        >
          Save
        </Button>
      </header>
      <p className="text-sm mb-6 text-[#5a6a5c] font-[family-name:Manrope]">
        Build a routine that feels good.
      </p>
      <Card className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] bg-card mb-6 pt-6 pr-6 pb-6 pl-6 gap-6 text-[#1b261d] border-[#d5e1d1] rounded-[16px]">
        <CardContent className="pt-0 pr-0 pb-0 pl-0 gap-6">
          <div>
            <Label htmlFor="habit-name" className="mb-2 font-[family-name:Manrope]">
              Habit name
            </Label>
            <Input
              id="habit-name"
              className="mb-2 h-12 border-[#d5e1d1] font-[family-name:Manrope] rounded-[16px] px-[16px]"
              defaultValue="Take a walk"
            />
            <p className="text-xs text-[#5a6a5c] font-[family-name:Manrope]">
              What do you want to make consistent?
            </p>
          </div>
          <div>
            <Label className="font-[family-name:Manrope] mb-[16px]">Choose an icon</Label>
            <div className="grid grid-cols-4 gap-[16px]">
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
            <Label className="font-[family-name:Manrope] mb-[16px]">Frequency</Label>
            <div className="rounded-xl bg-muted grid pt-1 pr-1 pb-1 pl-1 grid-cols-3">
              <button className="font-[family-name:Manrope]" type="button">Daily</button>
              <button className="font-[family-name:Manrope]" type="button">Weekdays</button>
              <button className="font-[family-name:Manrope]" type="button">Custom</button>
            </div>
          </div>
          <div>
            <Label className="font-[family-name:Manrope] mb-[16px]">Reminder</Label>
            <button
              type="button"
              className="text-left bg-card border-t border-r border-b border-l flex pt-4 pr-4 pb-4 pl-4 items-center w-full border-[#d5e1d1] gap-[16px] rounded-[16px]"
            >
              <Bell className="size-5 text-[#2f6b3a]" />
              <span className="font-medium text-sm flex-1 font-[family-name:Manrope]">Remind me</span>
              <span className="text-sm text-[#5a6a5c] font-[family-name:Manrope]">8:00 AM</span>
              <ChevronRight className="size-4 text-[#5a6a5c]" />
            </button>
          </div>
          <div>
            <Label className="font-[family-name:Manrope] mb-[16px]">Goal</Label>
            <button
              type="button"
              className="text-left bg-card border-t border-r border-b border-l flex pt-4 pr-4 pb-4 pl-4 items-center w-full border-[#d5e1d1] gap-[16px] rounded-[16px]"
            >
              <Target className="size-5 text-[#2f6b3a]" />
              <span className="font-medium text-sm flex-1 font-[family-name:Manrope]">Daily goal</span>
              <span className="text-sm text-[#5a6a5c] font-[family-name:Manrope]">1 time</span>
              <ChevronRight className="size-4 text-[#5a6a5c]" />
            </button>
          </div>
        </CardContent>
      </Card>
      <Button className="text-primary-foreground w-full h-12 bg-[#2f6b3a] font-[family-name:Manrope] rounded-[16px]">
        Create habit
      </Button>
    </main>
    <nav
      className="pb-[env(safe-area-inset-bottom)] bg-background border-t border-[#d5e1d1]"
      aria-label="Primary navigation"
    >
      <div className="grid grid-cols-4">
        <button
          type="button"
          className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
        >
          <CalendarDays className="size-5" />
          <span className="font-[family-name:Manrope]">Today</span>
        </button>
        <button
          type="button"
          className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
        >
          <ChartNoAxesColumnIncreasing className="size-5" />
          <span className="font-[family-name:Manrope]">Insights</span>
        </button>
        <button
          type="button"
          className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#2f6b3a] py-[16px]"
          aria-current="page"
        >
          <PlusCircle className="size-5" />
          <span className="font-[family-name:Manrope]">Add</span>
        </button>
        <button
          type="button"
          className="font-medium text-xs flex flex-col justify-center items-center gap-1 text-[#5a6a5c] py-[16px]"
        >
          <UserRound className="size-5" />
          <span className="font-[family-name:Manrope]">Profile</span>
        </button>
      </div>
    </nav>
  </div>
</div>;