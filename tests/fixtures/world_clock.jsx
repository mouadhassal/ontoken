<!-- screenType: "iphone-x-vertical" width: "375" height: "812" name: "Change to a light theme" colorTheme: "blue" screenId: "c13d3707-0efe-49f5-b6cb-0ca5ac5223d0" -->
<div className="bg-white text-zinc-950 w-full h-fit">
  <div className="flex p-6 flex-col gap-6">
    <div className="flex pt-4 justify-between items-center">
      <ArrowLeft className="size-5 text-[#71717b]" />
      <span className="font-semibold text-zinc-950 text-lg leading-7">
        World Clock
      </span>
      <Plus className="size-5 text-[#2b7fff]" />
    </div>
    <div className="rounded-xl bg-zinc-100 flex p-2 items-center gap-2">
      <Search className="size-4 text-[#71717b] ml-2" />
      <span className="text-[#71717b] text-sm leading-5">Search cities...</span>
    </div>
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center rounded-2xl border border-zinc-200 p-[18px]">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-[#a1a1aa]">Today, +0h</span>
          <span className="text-base font-medium">Tallinn</span>
        </div>
        <span className="text-[34px] font-light tracking-tight">14:32</span>
      </div>
      <div className="flex justify-between items-center rounded-2xl border border-zinc-200 p-[18px]">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-[#a1a1aa]">Today, -6h</span>
          <span className="text-base font-medium">Toronto</span>
        </div>
        <span className="text-[34px] font-light tracking-tight">08:32</span>
      </div>
      <Badge variant="secondary" className="self-start">2 cities</Badge>
    </div>
    <div className="flex pt-2 pb-4 justify-center items-center gap-4">
      <Button variant="outline" className="rounded-full px-6 gap-2">
        <Clock className="size-4" />
        <span>Compare</span>
      </Button>
      <Button className="rounded-full bg-[#2b7fff] text-blue-50 px-6 gap-2">
        <Bell className="size-4" />
        <span>Set Alert</span>
      </Button>
    </div>
  </div>
</div>;
