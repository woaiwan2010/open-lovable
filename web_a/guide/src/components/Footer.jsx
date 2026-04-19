export default function Footer() {
  return (
    <footer id="community" className="py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                CT
              </div>
              <span className="text-lg font-bold text-white">Claude Tool</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              让 Claude Opus 4.6 在 VS Code 中免费运行，通过 Copilot Pro 授权，零 token 消耗。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#downloads" className="text-gray-400 hover:text-white text-sm transition-colors">
                  下载
                </a>
              </li>
              <li>
                <a href="#guide" className="text-gray-400 hover:text-white text-sm transition-colors">
                  使用教程
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">
                  功能特色
                </a>
              </li>
              <li>
                <a
                  href="https://www.zsmeter.com/ct-sys/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  购买激活码
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">技术交流</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              加入我们的技术交流群，获取最新动态和技术支持。
            </p>
            <a
              href="#community"
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/20 border border-violet-500/20 rounded-lg text-violet-300 text-sm hover:bg-violet-600/30 transition-colors"
            >
              加入交流群
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2025 Claude Tool. All rights reserved.</p>
          <p className="text-gray-600 text-sm">
            Powered by VS Code MCP Server
          </p>
        </div>
      </div>
    </footer>
  )
}