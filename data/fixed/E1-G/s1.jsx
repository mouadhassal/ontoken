<div className="bg-background text-foreground w-full h-fit">
  <main className="font-sans bg-[#FFFBF5] text-[#2B2118] flex pt-6 pr-4 pl-4 flex-col gap-6 min-h-[874px] pb-[40px]">
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="text-[#C23B0B] size-5" strokeWidth={2} />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[#6B5B4D] text-[13px] leading-[17px] font-[family-name:DM_Sans]">
              Delivering to
            </span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[15px] leading-[20px] font-[family-name:DM_Sans]">
                125 Market Street
              </span>
              <ChevronDown className="text-[#6B5B4D] size-4" strokeWidth={2} />
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="font-medium rounded-full bg-[#FAEFE2] text-[#2B2118] text-[13px] pt-0 pr-0 pb-0 pl-0 size-10 font-[family-name:DM_Sans]"
        >
          JM
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[34px] leading-[44px] -tracking-[0.02em] font-[family-name:DM_Sans]">
          What are you craving?
        </h1>
        <p className="font-normal text-[#6B5B4D] text-[17px] leading-[22px] font-[family-name:DM_Sans]">
          Fresh food, delivered to your door.
        </p>
      </div>
      <div className="relative">
        <Search
          className="-translate-y-1/2 text-[#6B5B4D] absolute top-1/2 left-4 size-5"
          strokeWidth={2}
        />
        <Input
          placeholder="Search restaurants or dishes"
          className="rounded-2xl bg-white text-[#2B2118] text-[15px] leading-[20px] border-[#EADBC8] h-12 placeholder:text-[#6b5b4d] font-[family-name:DM_Sans] pl-[40px]"
          defaultValue=""
        />
      </div>
      <div className="flex pb-1 gap-2 overflow-x-auto">
        <Button className="text-[15px] font-[family-name:DM_Sans] rounded-[10px]">All</Button>
        <Button className="text-[15px] font-[family-name:DM_Sans] rounded-[10px]">Burgers</Button>
        <Button className="text-[15px] font-[family-name:DM_Sans] rounded-[10px]">Pizza</Button>
        <Button className="text-[15px] font-[family-name:DM_Sans] rounded-[10px]">Healthy</Button>
      </div>
    </div>
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[22px] leading-[29px] font-[family-name:DM_Sans]">
          Popular near you
        </h2>
        <Button
          variant="ghost"
          className="font-medium text-[#C23B0B] text-[13px] leading-[17px] pt-0 pr-0 pb-0 pl-0 h-auto font-[family-name:DM_Sans]"
        >
          See all
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Card className="shadow-none rounded-2xl bg-white border-[#EADBC8] pt-0 pr-0 pb-0 pl-0 gap-4 overflow-hidden text-[#2b2118]">
          <div className="relative h-28">
            <img
              src="https://images.unsplash.com/photo-1593759608142-e9b18c0dbe86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjByZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8MHx8fDE3OTE1Nzc1NTl8MA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Gourmet burger with fries"
              className="size-full object-cover"
              data-photoid="1593759608142-e9b18c0dbe86"
              data-authorname="Quin Engle"
              data-authorurl="https://unsplash.com/@twistsandzests"
            />
            <span className="font-medium rounded-full bg-[#F4B400] text-[#2B2118] text-[13px] leading-[17px] absolute top-3 right-3 pt-1 pr-2 pb-1 pl-2 font-[family-name:DM_Sans]">
              20–30 min
            </span>
          </div>
          <CardContent className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-1">
            <h3 className="font-semibold text-[17px] leading-[22px] font-[family-name:DM_Sans]">
              Ember Burger Co.
            </h3>
            <p className="text-[#6B5B4D] text-[15px] leading-[20px] font-[family-name:DM_Sans]">
              Burgers · American
            </p>
            <div className="text-[#6B5B4D] text-[13px] leading-[17px] flex items-center gap-2">
              <span className="font-[family-name:DM_Sans]">4.8</span>
              <Star
                className="fill-[#F4B400] text-[#F4B400] size-4"
                strokeWidth={2}
              />
              <span className="font-[family-name:DM_Sans]">$ · 0.8 mi</span>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none rounded-2xl bg-white border-[#EADBC8] pt-0 pr-0 pb-0 pl-0 gap-4 overflow-hidden text-[#2b2118]">
          <div className="relative h-28">
            <img
              src="https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RhJTIwYm93bCUyMHJlc3RhdXJhbnQlMjBkaXNofGVufDF8MHx8fDE3OTE1Nzc1NTl8MA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Fresh pasta bowl"
              className="size-full object-cover"
              data-photoid="1712746784067-e9e1bd86c043"
              data-authorname="Nima Naseri"
              data-authorurl="https://unsplash.com/@nimanaseri"
            />
            <span className="font-medium rounded-full bg-[#F4B400] text-[#2B2118] text-[13px] leading-[17px] absolute top-3 right-3 pt-1 pr-2 pb-1 pl-2 font-[family-name:DM_Sans]">
              25–35 min
            </span>
          </div>
          <CardContent className="flex pt-4 pr-4 pb-4 pl-4 flex-col gap-1">
            <h3 className="font-semibold text-[17px] leading-[22px] font-[family-name:DM_Sans]">{`Basil & Co.`}</h3>
            <p className="text-[#6B5B4D] text-[15px] leading-[20px] font-[family-name:DM_Sans]">
              Italian · Pasta
            </p>
            <div className="text-[#6B5B4D] text-[13px] leading-[17px] flex items-center gap-2">
              <span className="font-[family-name:DM_Sans]">4.7</span>
              <Star
                className="fill-[#F4B400] text-[#F4B400] size-4"
                strokeWidth={2}
              />
              <span className="font-[family-name:DM_Sans]">$$ · 1.2 mi</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </main>
  <nav
    className="bg-card border-x-border border-t border-t-border border-b-border fixed z-10 right-0 bottom-0 left-0 pt-3 pr-4 pb-3 pl-4"
    aria-label="Primary navigation"
  >
    <div className="grid grid-cols-4">
      <a
        href="#"
        className="text-primary flex flex-col items-center gap-1"
        aria-current="page"
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
        className="flex flex-col items-center gap-1 text-[#6b5b4d]"
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