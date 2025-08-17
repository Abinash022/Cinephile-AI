const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex justify-between items-center px-12 py-6">
        <div>
          <img src="cinephile.png" alt="Cinephile Logo" className="h-16 w-22" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-medium"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-medium"
          >
            Movie Release
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors font-medium"
          >
            Tv Shows
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Notifications Icon */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-5-5-5 5h5zm0 0v-5"
              />
            </svg>
          </button>

          {/* Profile Avatar */}
          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
