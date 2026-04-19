import React, { useState } from 'react';

const plans = [
  {
    name: '免费试用',
    price: '免费',
    originalPrice: null,
    duration: '3小时体验',
    daily: null,
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '同一IP每7天限领1次',
    ],
    cta: '领取试用码',
    highlighted: false,
    badge: null,
  },
  {
    name: '周卡',
    price: '¥19',
    originalPrice: '¥29',
    duration: '7天有效',
    daily: '≈ ¥2.7/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    cta: '获取激活码',
    highlighted: false,
    badge: null,
  },
  {
    name: '月卡',
    price: '¥59',
    originalPrice: '¥99',
    duration: '30天有效',
    daily: '≈ ¥2.0/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    cta: '获取激活码',
    highlighted: true,
    badge: '热门',
  },
  {
    name: '季卡',
    price: '¥139',
    originalPrice: '¥259',
    duration: '90天有效',
    daily: '≈ ¥1.5/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    cta: '获取激活码',
    highlighted: false,
    badge: null,
  },
  {
    name: '年卡',
    price: '¥399',
    originalPrice: '¥799',
    duration: '365天有效',
    daily: '≈ ¥1.1/天',
    features: [
      'Claude 全系列模型',
      '无限对话次数',
      '图片传输',
      '最多2台设备同时在线',
    ],
    cta: '获取激活码',
    highlighted: false,
    badge: '最划算',
  },
];

const Pricing = () => {
  const [showQQ, setShowQQ] = useState(false);

  return (
    <section id="pricing" className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            Claude Tool 激活码
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="text-indigo-400">Claude Tool</span> 激活码
          </h1>

          <p className="text-base md:text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            选择适合您的方案，全系列 Claude 模型无上限使用
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              官方满血 Opus 4.6 · 无限对话
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            活动价：自 2026 年 4 月 1 日至 4 月 15 日
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-indigo-500/15 to-blue-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    plan.badge === '热门'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-emerald-500 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl md:text-3xl font-extrabold text-white">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-1">{plan.duration}</p>
                {plan.daily && (
                  <p className="text-xs text-indigo-400 mt-0.5">{plan.daily}</p>
                )}
              </div>

              <div className="flex-1 mb-5">
                <div className="space-y-2.5">
                  {plan.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/25'
                    : plan.name === '免费试用'
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* QQ Group Section */}
        <div className="max-w-md mx-auto">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <h3 className="text-lg font-bold text-white mb-1">技术交流群</h3>
            <p className="text-sm text-gray-400 mb-4">快来一起交流吧~</p>

            <div className="mb-4">
              <img
                src="https://www.zsmeter.com/ct-sys/releases/qq-group-qr.png"
                alt="QQ群二维码"
                className="w-40 h-40 mx-auto rounded-lg bg-white p-2"
              />
            </div>

            <p className="text-sm text-gray-400 mb-3">群号: 484325720</p>

            <a
              href="tencent://message/?uin=345235793&Site=Claude+Tool&Menu=yes"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              QQ对话
            </a>
          </div>
        </div>
      </div>

      {/* Floating QQ Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {showQQ && (
          <div className="mb-3 p-4 bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl w-64 animate-in">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">Claude 无限用</span>
              <button onClick={() => setShowQQ(false)} className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-2">技术交流群</p>
            <p className="text-xs text-gray-400 mb-3">快来一起交流吧~</p>
            <img
              src="https://www.zsmeter.com/ct-sys/releases/qq-group-qr.png"
              alt="QQ群二维码"
              className="w-32 h-32 mx-auto rounded-lg bg-white p-1 mb-2"
            />
            <p className="text-xs text-gray-400 text-center">群号: 484325720</p>
          </div>
        )}
        <button
          onClick={() => setShowQQ(!showQQ)}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Pricing;