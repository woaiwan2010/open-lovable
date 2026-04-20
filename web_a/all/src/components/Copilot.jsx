import React from 'react';

const Copilot = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Copilot 集成
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            配合 Copilot 使用
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Claude Tool 与 VS Code Copilot 深度集成，无缝协作
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Copilot Pro</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              配合 Copilot Pro 订阅使用，在 VS Code 中通过 Claude Tool 无限调用 Claude 全系列模型，享受完整的 AI 编程辅助体验。
            </p>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Copilot Pro+</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              配合 Copilot Pro+ 使用，获得更强大的 AI 能力。Claude Tool 支持与 Pro+ 完美协作，提供无限 Claude 模型对话。
            </p>
          </div>
        </div>

        <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl mb-10">
          <h3 className="text-lg font-bold text-white mb-4">MCP 配置</h3>
          <p className="text-sm text-gray-400 mb-4">
            Claude Tool 通过 MCP (Model Context Protocol) 与 VS Code 集成。激活后，程序会自动配置 VS Code 的 MCP 设置，无需手动操作。
          </p>
          <div className="bg-black/30 rounded-xl p-4 border border-white/5">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`{
  "mcpServers": {
    "claude-tool": {
      "command": "claude-tool",
      "args": ["--mcp"]
    }
  }
}`}</code>
            </pre>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            以上配置由 Claude Tool 自动生成，请勿手动修改
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: '自动配置', desc: '激活后自动设置 MCP', color: 'green' },
            { title: '开箱即用', desc: '无需额外配置操作', color: 'blue' },
            { title: '无缝切换', desc: 'Claude 模型随时切换', color: 'purple' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/[0.03] border border-white/10 rounded-xl text-center">
              <p className="text-sm font-medium text-white mb-1">{item.title}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Copilot;