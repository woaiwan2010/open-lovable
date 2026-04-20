import React from 'react';

const plans = [
  {
    name: '免费试用',
    price: '免费',
    originalPrice: null,
    duration: '3小时体验',
    dailyCost: null,
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '同一IP每7天限领1次',
    ],
    buttonText: '领取试用码',
    buttonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    highlighted: false,
  },
  {
    name: '周卡',
    price: '¥19',
    originalPrice: '¥29',
    duration: '7天有效',
    dailyCost: '≈ ¥2.7/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    buttonText: '获取激活码',
    buttonStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    highlighted: false,
  },
  {
    name: '月卡',
    price: '¥59',
    originalPrice: '¥99',
    duration: '30天有效',
    dailyCost: '≈ ¥2.0/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    buttonText: '获取激活码',
    buttonStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    highlighted: true,
    badge: '最受欢迎',
  },
  {
    name: '季卡',
    price: '¥139',
    originalPrice: '¥259',
    duration: '90天有效',
    dailyCost: '≈ ¥1.5/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    buttonText: '获取激活码',
    buttonStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    highlighted: false,
  },
  {
    name: '年卡',
    price: '¥399',
    originalPrice: '¥799',
    duration: '365天有效',
    dailyCost: '≈ ¥1.1/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    buttonText: '获取激活码',
    buttonStyle: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white',
    highlighted: true,
    badge: '最划算',
  },
];

const Pricing = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            Claude Tool 激活码
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Claude Tool 激活码
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-4">
            选择适合您的方案，全系列 Claude 模型无上限使用
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              官方满血 Opus 4.6 · 无限对话
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-medium">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            活动价：自 2026 年 4 月 1 日至 4 月 15 日
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-5 transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-indigo-500/15 to-purple-500/10 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-1">
                  {plan.originalPrice && (
                    <span className="text-sm text-gray-500 line-through mr-1">{plan.originalPrice}</span>
                  )}
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-indigo-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{plan.duration}</p>
                {plan.dailyCost && (
                  <p className="text-xs text-indigo-400/70 mt-1">{plan.dailyCost}</p>
                )}
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;