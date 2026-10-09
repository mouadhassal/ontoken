<div className="bg-background text-foreground w-full h-fit">
  <div className="flex pt-8 pr-6 pb-4 pl-6 flex-col min-h-[874px]">
    <div className="flex items-center gap-2">
      <div
        className="flex justify-center items-center size-8 bg-[#1f6f78] rounded-[6px]"
        aria-hidden="true"
      >
        <Check className="text-primary-foreground size-5" strokeWidth={3} />
      </div>
      <span className="font-sans font-semibold text-xl leading-6 text-[#1f6f78]">
        Fjord
      </span>
    </div>
    <main className="flex flex-col flex-1">
      <section className="mt-12">
        <h1 className="font-sans font-bold text-[30px] leading-[39px] text-[#0f2a2e]">
          Welcome back
        </h1>
        <p className="font-sans font-normal text-base leading-[21px] mt-2 text-[#526669]">
          Sign in to continue to your Fjord account.
        </p>
      </section>
      <form className="flex mt-8 flex-col">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-sans font-medium text-xs leading-4 text-[#0f2a2e]"
          >
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="font-sans rounded-xl bg-background text-foreground text-base leading-[21px] border-border pt-3 pr-3 pb-3 pl-3 h-12 placeholder:text-[#526669]"
            defaultValue=""
          />
        </div>
        <div className="flex mt-4 flex-col gap-2">
          <label
            htmlFor="password"
            className="font-sans font-medium text-xs leading-4 text-[#0f2a2e]"
          >
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Enter your password"
              className="font-sans rounded-xl bg-background text-foreground text-base leading-[21px] border-border pt-3 pr-12 pb-3 pl-3 h-12 placeholder:text-[#526669]"
              defaultValue=""
            />
            <button
              type="button"
              aria-label="Show password"
              className="flex absolute top-0 right-0 justify-center items-center size-12 text-[#526669]"
            >
              <Eye className="size-4" />
            </button>
          </div>
        </div>
        <button
          type="button"
          className="font-sans font-normal text-sm leading-[18px] mt-2 self-end text-[#1f6f78]"
        >
          Forgot password?
        </button>
        <Button
          type="button"
          className="font-sans font-medium rounded-xl text-primary-foreground text-base leading-[21px] mt-8 pt-3 pr-3 pb-3 pl-3 w-full h-12 bg-[#1f6f78]"
        >
          Sign in
        </Button>
        <div className="font-sans text-sm leading-[18px] flex mt-4 justify-center items-center gap-1">
          <span className="text-[#526669]">New to Fjord?</span>
          <button type="button" className="text-[#1f6f78]">
            Create an account
          </button>
        </div>
      </form>
    </main>
    <div className="flex pt-4 justify-center" aria-hidden="true">
      <div className="rounded-full w-32 h-1 bg-[#0f2a2e]" />
    </div>
  </div>
</div>;