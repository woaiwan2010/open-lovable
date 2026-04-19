export default function Downloads() {
  const platforms = [
    {
      name: 'Windows',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
      versions: 'Windows 7 / 10 / 11',
      server: 'Server 2012 R2+',
      size: '35.4 MB',
      downloadUrl: 'https://www.zsmeter.com/ct-sys/api/public/download/windows',
      available: true,
    },
    {
      name: 'macOS',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.06 4.83 18.89 5.08 20.06 6.78C19.95 6.85 17.62 8.24 17.65 11.09C17.69 14.52 20.62 15.63 20.65 15.64C20.63 15.7 20.17 17.28 19.05 18.91L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
      ),
      versions: 'macOS 10.14+',
      server: 'Intel / Apple Silicon',
      size: '36.2 MB',
      downloadUrl: 'https://www.zsmeter.com/ct-sys/api/public/download/macos',
      available: true,
    },
    {
      name: 'Linux',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.504 0c-.155 0-.311.015-.466.04C7.266.456 3.39 4.063 2.705 8.75c-.392 2.682.197 5.375 1.6 7.625l.09.137a4.322 4.322 0 01.494 2.782 3.55 3.55 0 01-.366 1.07l-.378.728c-.143.276-.082.61.149.82l2.191 1.954c.204.182.496.221.74.099a7.04 7.04 0 00.873-.498c.462-.32.86-.728 1.175-1.196a.792.792 0 01.658-.36h.087a.79.79 0 01.646.35c.323.478.73.893 1.202 1.226.286.19.586.357.897.498.244.107.524.06.726-.12l2.22-1.98a.597.597 0 00.142-.795l-.395-.72a3.58 3.58 0 01-.393-1.098 4.335 4.335 0 01.45-2.816l.09-.141c1.39-2.24 1.974-4.92 1.588-7.59C19.465 4.025 15.612.437 10.924.04A3.584 3.584 0 0012.504 0zM9.49 9.22a.89.89 0 01-.89-.89.89.89 0 01.89-.89.89.89 0 01.89.89.89.89 0 01-.89.89zm4.816 0a.89.89 0 01-.89-.89.89.89 0 01.89-.89.89.89 0 01.89.89.89.89 0 01-.89.89zM9.6 12.5a.596.596 0 01-.058-.543c.282-.682 1.04-1.234 2.458-1.234 1.418 0 2.176.552 2.458 1.234a.596.596 0 01-.058.543c-.33.487-1.194 1.03-2.4 1.03-1.206 0-2.07-.543-2.4-1.03z" />
        </svg>
      ),
      versions: 'Ubuntu 18.04+ / Debian 10+',
      server: 'CentOS 7+ / Fedora 30+',
      size: null,
      downloadUrl: null,
      available: false,
    },
  ]

  return (
    <section id="downloads" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">下载安装</h2>
          <p className="text-gray-400 text-lg">选择你的操作系统，开始使用 Claude Tool</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group relative bg-gray-900/50 border border-white/5 rounded-2xl p-8 hover:border-violet-500/30 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{platform.name}</h3>

                <div className="space-y-1.5 mb-6 text-sm text-gray-400">
                  <p>{platform.versions}</p>
                  <p>{platform.server}</p>
                  {platform.size && <p className="text-gray-500">{platform.size}</p>}
                </div>

                {platform.available ? (
                  <a
                    href={platform.downloadUrl}
                    className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    下载 {platform.name} 版
                  </a>
                ) : (
                  <div className="w-full py-3 bg-white/5 text-gray-500 font-medium rounded-xl border border-white/5">
                    即将推出
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}