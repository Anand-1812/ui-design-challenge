import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center px-8 py-6">
      <div
        className={`
          bg-white rounded-lg overflow-hidden
          transition-all duration-500 ease-in-out  
          ${isOpen ? "w-96" : "w-20"}
        `}
      >
        <div className="p-4 flex justify-around items-center">
          {
            isOpen ? <h2 className="text-black text-3xl">Sidebar</h2> : ""
          }
          <button 
            className="cursor-pointer text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <PanelRightOpen className="w-6 h-6" />
            ) : (
              <PanelRightClose className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
