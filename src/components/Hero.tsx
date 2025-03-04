import AvatarImage from "./AvatarImage";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-[#0a0215] text-white px-6 overflow-hidden" id="home">
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-500/30 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center relative px-6 md:px-10 gap-8 mt-[2rem] md:mt-[5rem]">
      {/* Avatar Section */}
        <div className="w-auto flex items-center">
          <AvatarImage />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          {/* Hello Line with Arrow */}
          <div className="relative inline-block">
            <p className="text-lg text-gray-300">
              Hello! I am <span className="text-purple-400 font-semibold">Aditya Kumar Mohanty</span>
            </p>
            <div className="absolute top-5 -left-10 md:-left-16 text-purple-300 text-xs">
              <img src="/Vector.svg" alt="arrow" className="w-[45px] md:w-[55px]" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            A Python Developer who
          </h1>
          <h1 className="text-4xl md:text-5xl font-medium leading-[1.3]">
            Judges a function
            <br />
            by its <span className="relative inline-block">
              <span className="text-purple-400 font-bold">readability</span>
              <span className="absolute -right-1 -bottom-[3px] w-full h-[0.1em] bg-purple-400 rounded-full"></span>
            </span>
            ...
          </h1>

          {/* Subtitle */}
          <p className="text-md md:text-lg text-gray-400 italic">
            Because if the logic isn’t clean, will it ever scale?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-6 items-center md:items-start w-full">
          <button className="relative px-6 py-3 font-semibold text-white uppercase tracking-wide transition-all duration-200 bg-[#0f1923] rounded-lg shadow-lg group hover:scale-105 hover:shadow-xl">
              <span className="absolute inset-0 bg-purple-500 transform skew-x-[-15deg] scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Download Now</span>
            </button>

            <button className="relative  px-6 py-3 font-semibold text-white uppercase tracking-wide transition-all duration-200 bg-[#0f1923] rounded-lg shadow-lg group hover:scale-105 hover:shadow-xl">
              <span className="absolute inset-0 bg-purple-500 transform skew-x-[-15deg] scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
