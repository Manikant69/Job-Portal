import SearchBar from "./SearchBar";

function HeroSection() {
    return (
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-800 to-purple-500 opacity-90">
          <div className="absolute inset-0 bg-[url('./heroPhoto.avif')] mix-blend-overlay opacity-20"></div>
        </div>
  
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm text-white inline-block px-4 py-1 rounded-full mb-4">
            <span className="font-medium">No. 1 Job Hunt Website</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Search, Apply & <br />
            Get Your <span className="text-orange-400">Dream Jobs</span>
          </h1>
          
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
            Whether you're a job seeker looking for new opportunities or a recruiter searching for top talent,
            our platform connects you with the right people, fast.
          </p>
          
          <SearchBar />
        </div>
      </div>
    );
}

export default HeroSection;