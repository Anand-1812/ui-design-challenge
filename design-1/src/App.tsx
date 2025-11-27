import { PanelRightClose, PanelRightOpen, Search, House } from "lucide-react";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div
        className={`
          bg-white shadow-xl rounded-2xl overflow-hidden
          transition-all duration-500 ease-in-out
          ${isOpen ? "w-80" : "w-16"}
        `}
      >
        {/* Header */}
        <div
          className={`
            flex items-center justify-between
            px-5 py-3 border-b border-gray-200
            transition-all duration-500
          `}
        >
          {isOpen && (
            <h2 className="text-gray-800 text-xl font-semibold tracking-wide">
              Sidebar
            </h2>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            {isOpen ? (
              <button title="collapse"><PanelRightOpen className="w-5 h-5 cursor-pointer" /></button>
            ) : (
              <button title="expand"><PanelRightClose className="w-5 h-5 cursor-pointer" /></button>
            )}
          </button>
        </div>

        {/* Search Section */}
        <div
          className={`
            flex items-center justify-center
            px-4 py-4 transition-all duration-300
          `}
        >
          {!isOpen ? (
            <button title="search" className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors">
              <Search className="w-5 h-5 cursor-pointer" />
            </button>
          ) : (
            <div className="relative w-full max-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-3 py-2 rounded-md bg-gray-100 focus:bg-white border border-gray-200 text-gray-800
                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all
                "
              />
            </div>
          )}
        </div>

        {/* Dashboard */}
        <div
          className={`
            flex items-center justify-center
            px-4 py-4 transition-all duration-300
          `}
        >
          {!isOpen ? (
            <button title="dashboard" className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors">
              <House className="w-5 h-5 cursor-pointer" />
            </button>
          ) : (
            <div className="flex items-center gap-3 w-full max-w-[220px]">
              <div className="p-2">
                <House className="w-5 h-5 cursor-pointer text-gray-600" />
              </div>

              <span className="text-gray-800 font-medium tracking-wide">
                Dashboard
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
