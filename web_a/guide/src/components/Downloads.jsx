export default function Downloads() {
  const platforms = [
    {
      name: 'Windows',
      fileName: 'ClaudeTool.exe',
      size: '44.7 MB',
      icon: '🪟',
      url: '#',
      badge: '推荐',
    },
    {
      name: 'macOS',
      fileName: 'ClaudeTool-macos.dmg',
      size: '56.5 MB',
      icon: '🍎',
      url: '#',
      badge: null,
    },
    {
      name: 'Linux',
      fileName: 'ClaudeTool-linux.AppImage',
      size: '50.2 MB',
      icon: '🐧',
      url: '#',
      badge: null,
    },
  ]

  return (
    <section id="downloads" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">下载 Claude Tool</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            选择适合你操作系统的版本，下载安装即可使用。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="group relative bg-gray-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 transform hover:-translate-y-1"
            >
              {platform.badge && (
                <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold rounded-full">
                  {platform.badge}
                </span>
              )}
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">下载 {platform.name} 版</h3>
              <p className="text-gray-500 text-sm mb-4">{platform.fileName}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{platform.size}</span>
                <span className="text-violet-400 group-hover:text-violet-300 transition-colors text-sm font-medium">
                  下载 ↓
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}