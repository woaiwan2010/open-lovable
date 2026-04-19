export default function Community() {
  return (
    <section id="community" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">技术交流群</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            加入我们的技术交流群，获取最新动态、使用技巧和技术支持。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-white mb-2">QQ 交流群</h3>
            <p className="text-gray-400 text-sm mb-4">加入 QQ 群获取实时技术支持和交流。</p>
            <div className="px-4 py-3 bg-violet-500/10 border border-violet-500/20 rounded-xl">
              <code className="text-violet-300 text-sm font-mono">群号待更新</code>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-bold text-white mb-2">微信公众号</h3>
            <p className="text-gray-400 text-sm mb-4">关注公众号获取最新教程和更新通知。</p>
            <div className="px-4 py-3 bg-violet-500/10 border border-violet-500/20 rounded-xl">
              <code className="text-violet-300 text-sm font-mono">公众号待更新</code>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900/50 border border-white/5 rounded-xl text-gray-400 text-sm">
            <span>遇到问题？</span>
            <span className="text-violet-400">欢迎在交流群中提问</span>
          </div>
        </div>
      </div>
    </section>
  )
}