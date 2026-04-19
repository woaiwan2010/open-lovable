import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CT</span>
            </div>
            <span className="text-base font-bold text-white">Claude Tool</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="https://www.zsmeter.com/ct-sys/download"
              className="text-gray-400 hover:text-white transition-colors"
            >
              插件下载
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white transition-colors"
            >
              激活码
            </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              常见问题
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            <a
              href="https://www.zsmeter.com/ct-sys/download"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              插件下载
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              激活码
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              常见问题
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;