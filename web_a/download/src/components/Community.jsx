export default function Community() {
  return (
    <section id="community" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-white/5 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Claude 无限用</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-2">技术交流群</h3>
          <p className="text-gray-400 mb-8">快来一起交流吧~</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white rounded-2xl p-3 shadow-xl shadow-violet-500/10">
              <img
                src="https://www.zsmeter.com/ct-sys/releases/qq-group-qr.png"
                alt="QQ群二维码"
                className="w-48 h-48 object-contain"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="text-left">
                <p className="text-gray-300 mb-1">群号</p>
                <p className="text-2xl font-bold text-white tracking-wide">484325720</p>
              </div>

              <a
                href="tencent://message/?uin=345235793&Site=Claude+Tool&Menu=yes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                QQ 对话
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}