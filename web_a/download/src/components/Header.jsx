import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              CT
            </div>
            <span className="text-lg font-bold text-white">Claude Tool</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#downloads" className="text-sm text-gray-400 hover:text-white transition-colors">
              下载
            </a>
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              功能特色
            </a>
            <a
              href="https://www.zsmeter.com/ct-sys/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              激活码
            </a>
            <a
              href="#community"
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              技术交流群
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-3">
              <a
                href="#downloads"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors px-2 py-1"
              >
                下载
              </a>
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors px-2 py-1"
              >
                功能特色
              </a>
              <a
                href="https://www.zsmeter.com/ct-sys/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors px-2 py-1"
              >
                激活码
              </a>
              <a
                href="#community"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors px-2 py-1"
              >
                技术交流群
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}