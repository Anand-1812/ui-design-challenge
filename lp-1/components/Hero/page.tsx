const Hero = () => {
  return (
    <div className="my-40 flex flex-col items-center">
      <h1 className="max-w-3xl text-center text-7xl font-bold tracking-tight
        leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
        Unleash the power of intuitive finance
      </h1>
      <p className="text-neutral-400 text-xl text-center max-w-3xl mx-auto mt-10 selection:bg-white">
        say goodbye to the outdated financial tools. Every small business owner, regardless of the
        background, can now manage their business like a pro.Simple, Intuitive. And never boring.
      </p>

      <div className="w-full max-w-lg flex justify-center mt-8">

        <input type="text"
          className="mr-4 flex-1 rounded-xl border border-neutral-700 px-4 text-white
          placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200"
          placeholder="Enter your email"
        />

        <button className="relative text-white px-4 py-2 rounded-xl border border-neutral-700 cursor-pointer">
          <div className="absolute -bottom-0 inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
          Join waitlist
        </button>
      </div>
    </div>
  )
}

export default Hero
