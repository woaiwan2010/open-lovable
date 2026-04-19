export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-transparent" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm mb-8">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          Claude Tool - VS Code MCP Server
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          让 Claude Opus 4.6
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            在 VS Code 中免费运行
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          通过 Copilot Pro 授权，零 token 消耗使用 Claude Tool，
          体验强大的 AI 编程助手。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#downloads"
            className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105"
          >
            立即下载
          </a>
          <a
            href="#guide"
            className="px-8 py-3.5 bg-white/5 border border-white/10 hover:border-violet-500/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
          >
            查看教程
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">免费</div>
            <div className="text-sm text-gray-500 mt-1">零 token 消耗</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3 平台</div>
            <div className="text-sm text-gray-500 mt-1">全平台支持</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">MCP</div>
            <div className="text-sm text-gray-500 mt-1">原生集成</div>
          </div>
        </div>
      </div>
    </section>
  )
}