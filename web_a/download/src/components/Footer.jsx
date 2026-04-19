export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Claude Tool &copy; 2026
          </p>
          <nav className="flex items-center gap-6">
            <a
              href="https://www.zsmeter.com/ct-sys/download"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              插件下载
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://www.zsmeter.com/ct-sys/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              激活码
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}