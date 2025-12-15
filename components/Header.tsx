import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel transition-all duration-300">
      <div className="layout-container mx-auto px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl relative z-10">
        <div className="flex items-center gap-3">
          <div className="text-black flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]">token</span>
          </div>
          <h2 className="text-text-main text-xl font-bold tracking-tight">
            Cottontail
          </h2>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white font-medium text-sm px-6 h-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;