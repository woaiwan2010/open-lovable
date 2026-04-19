import { useState } from 'react'

export default function Guide() {
  const [activeTab, setActiveTab] = useState('windows')

  const tabs = [
    { id: 'windows', label: 'Windows', icon: '🪟' },
    { id: 'macos', label: 'macOS', icon: '🍎' },
    { id: 'linux', label: 'Linux', icon: '🐧' },
  ]

  const windowsSteps = [
    {
      text: '点击 "下载 Windows 版" 按钮，下载',
      code: 'ClaudeTool.exe',
      after: '（约 44.7 MB）',
    },
    {
      text: '将 exe 文件放到固定位置（如桌面或',
      code: 'C:\\Tools\\',
      after: '）， 不要放在临时文件夹',
    },
    {
      text: '双击运行 exe，首次启动弹出 激活窗口，输入您获得的 激活码 完成激活',
    },
    {
      text: '激活成功后，程序自动配置 VS Code 的 MCP 服务器',
    },
    {
      text: '重新打开 VS Code，点击右下角 青蛙头像 登录 GitHub 账号并授权 Copilot Pro，然后打开 Copilot Chat 对话框，在模型选择中切换为 Claude Opus 4.6，发送',
      code: '使用claude tool和我对话',
      after: '，点击 "允许" 按钮，即可和 Claude Tool 进行对话， 不消耗 token',
    },
  ]

  const macosSteps = [
    {
      text: '点击 "下载 macOS 版" 按钮，下载',
      code: 'ClaudeTool-macos.dmg',
      after: '（约 56.5 MB）',
    },
    {
      text: '双击打开下载的',
      code: '.dmg',
      after: '文件，会弹出一个安装窗口',
    },
    {
      text: '将 Claude Tool 图标拖拽到 Applications（应用程序）文件夹中',
    },
    {
      text: '首次打开：在 Finder → 应用程序 中找到 Claude Tool， 右键 → 打开（绕过 macOS 安全提示）',
      warning: 'macOS 可能提示"无法验证开发者"，请在 系统设置 → 隐私与安全性 中点击 "仍要打开"',
    },
    {
      text: '首次启动后弹出 激活窗口，输入您获得的 激活码 完成激活',
    },
    {
      text: '激活成功后，程序自动配置 VS Code 的 MCP 服务器',
    },
    {
      text: '重新打开 VS Code，点击右下角 青蛙头像 登录 GitHub 账号并授权 Copilot Pro，然后打开 Copilot Chat 对话框，在模型选择中切换为 Claude Opus 4.6，发送',
      code: '使用claude tool和我对话',
      after: '，点击 "允许" 按钮，即可和 Claude Tool 进行对话， 不消耗 token',
    },
  ]

  const linuxSteps = [
    {
      text: '点击 "下载 Linux 版" 按钮下载',
    },
    {
      text: '赋予执行权限：',
      code: 'chmod +x ClaudeTool-linux.AppImage',
    },
    {
      text: '双击运行或命令行执行：',
      code: './ClaudeTool-linux.AppImage',
    },
    {
      text: '首次运行自动配置 VS Code，然后重新打开 VS Code，点击右下角 青蛙头像 登录 GitHub 账号并授权 Copilot Pro，打开 Copilot Chat 对话框，模型选择 Claude Opus 4.6，发送',
      code: '使用claude tool和我对话',
      after: '，点击 "允许" 按钮即可， 不消耗 token',
    },
  ]

  const steps = { windows: windowsSteps, macos: macosSteps, linux: linuxSteps }

  return (
    <section id="guide" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/5 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-4xl mb-4">📖</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">使用教程</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            根据你的操作系统，按照以下步骤完成 Claude Tool 的安装和配置。
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-gray-900/50 text-gray-400 border border-white/5 hover:border-violet-500/20 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            {tabs.find((t) => t.id === activeTab).icon}
            {tabs.find((t) => t.id === activeTab).label} 安装步骤
          </h3>

          <div className="space-y-6">
            {steps[activeTab].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-full flex items-center justify-center text-violet-400 text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {step.text.split(/(「|」)/).map((part, i) => {
                      if (part === '「' || part === '」') return null
                      return <span key={i}>{part}</span>
                    })}
                    {step.code && (
                      <code className="mx-1 px-2 py-0.5 bg-violet-500/10 text-violet-300 rounded text-xs sm:text-sm font-mono border border-violet-500/20">
                        {step.code}
                      </code>
                    )}
                    {step.after && <span>{step.after}</span>}
                  </p>
                  {step.warning && (
                    <div className="mt-3 flex items-start gap-2 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                      <span className="text-amber-400 flex-shrink-0">⚠️</span>
                      <p className="text-amber-300/90 text-sm leading-relaxed">{step.warning}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}