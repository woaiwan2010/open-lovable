import React from 'react';

const Download = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            插件下载
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            下载 Claude Tool
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            一键安装，在 VS Code 中使用全系列 Claude 模型
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Windows 版本</h3>
            <p className="text-sm text-gray-400 mb-4">适用于 Windows 10/11 系统</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>1. 下载安装包</p>
              <p>2. 运行安装程序</p>
              <p>3. 打开 VS Code 自动配置</p>
            </div>
            <button className="mt-4 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors">
              下载 Windows 版
            </button>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">macOS 版本</h3>
            <p className="text-sm text-gray-400 mb-4">适用于 macOS 12+ 系统</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>1. 下载 dmg 文件</p>
              <p>2. 拖拽到应用程序文件夹</p>
              <p>3. 打开 VS Code 自动配置</p>
            </div>
            <button className="mt-4 w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium transition-colors">
              下载 macOS 版
            </button>
          </div>
        </div>

        <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-4">系统要求</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">VS Code</p>
                <p className="text-xs text-gray-400">最新版本</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">网络</p>
                <p className="text-xs text-gray-400">稳定的网络连接</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">激活码</p>
                <p className="text-xs text-gray-400">免费试用或购买激活码</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;