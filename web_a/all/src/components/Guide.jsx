import React from 'react';

const steps = [
  {
    number: '01',
    title: '下载安装 Claude Tool',
    description: '前往插件下载页面，下载对应系统的安装包。运行安装程序完成安装。',
  },
  {
    number: '02',
    title: '激活 Claude Tool',
    description: '打开 Claude Tool，输入激活码并点击激活。程序会自动配置 VS Code 的 MCP 设置。如无激活码，可免费领取试用码。',
  },
  {
    number: '03',
    title: '打开 VS Code',
    description: '打开 VS Code，确保已安装 Copilot 插件。Claude Tool 会自动与 VS Code 集成。',
  },
  {
    number: '04',
    title: '开始对话',
    description: '在 VS Code 的对话框中发送"使用 Claude Tool 和我对话"，插件会自动启动并连接，即可开始使用 Claude 模型进行无限对话。',
  },
];

const Guide = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            使用指南
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            使用指南
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            简单几步，快速上手 Claude Tool
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex gap-5 p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-400 font-bold text-lg">{step.number}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-3">温馨提示</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              电脑关机/重启后无需手动打开插件，打开 VS Code 即可自动连接
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              未到期时输入新激活码会自动叠加时长，不会覆盖
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              支持最多2台设备同时在线使用
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guide;