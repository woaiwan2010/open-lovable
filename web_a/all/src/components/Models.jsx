import React from 'react';

const models = [
  {
    name: 'Claude Opus 4.6',
    desc: '最新旗舰模型，推理能力最强',
    tag: '最新',
    capabilities: ['复杂推理', '代码生成', '多步骤任务', '长文本理解'],
  },
  {
    name: 'Claude Sonnet 4',
    desc: '高性能模型，速度与质量兼顾',
    tag: '推荐',
    capabilities: ['日常编程', '文本生成', '数据分析', '快速响应'],
  },
  {
    name: 'Claude Haiku 3.5',
    desc: '轻量快速模型，适合简单任务',
    tag: '快速',
    capabilities: ['快速问答', '简单编程', '格式转换', '实时对话'],
  },
  {
    name: '后续新模型',
    desc: '持续支持后续发布的所有新模型',
    tag: '持续更新',
    capabilities: ['自动支持', '无需额外付费', '第一时间体验', '无缝升级'],
  },
];

const Models = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            支持模型
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            支持的模型
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            支持全系列 Claude 模型，包括最新 Opus 4.6 及后续发布的所有新模型
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">{model.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      idx === 0 ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                      idx === 1 ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      idx === 2 ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    }`}>
                      {model.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{model.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {model.capabilities.map((cap, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl text-center">
          <p className="text-sm text-gray-300">
            所有模型均包含在激活码内，<span className="text-indigo-400 font-medium">无需额外付费</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Models;