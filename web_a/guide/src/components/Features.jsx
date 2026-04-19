export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: '零 Token 消耗',
      desc: '通过 Copilot Pro 授权使用 Claude Opus 4.6，无需额外付费，不消耗任何 token。',
    },
    {
      icon: '🔧',
      title: 'MCP 原生集成',
      desc: '自动配置 VS Code 的 MCP 服务器，无缝集成到你的开发工作流中。',
    },
    {
      icon: '🖥️',
      title: '全平台支持',
      desc: '支持 Windows、macOS 和 Linux 三大主流操作系统，下载即用。',
    },
    {
      icon: '🔒',
      title: '安全可靠',
      desc: '通过 GitHub 账号授权，使用官方 Copilot Pro 通道，安全稳定。',
    },
    {
      icon: '🚀',
      title: '一键配置',
      desc: '下载运行后自动完成所有配置，无需手动编辑任何文件。',
    },
    {
      icon: '💬',
      title: '智能对话',
      desc: '在 VS Code Copilot Chat 中直接与 Claude Tool 对话，体验强大的 AI 编程助手。',
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/5 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">功能特色</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Claude Tool 提供强大而便捷的功能，让你的开发效率倍增。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}