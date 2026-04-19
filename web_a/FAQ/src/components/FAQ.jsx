import React, { useState } from 'react';

const faqs = [
  {
    question: '没有魔法工具怎么办？有没有稳定的魔法链接？',
    answer: '可以使用以下魔法链接，非常稳定：',
    link: { text: 'https://快车.com?c=DVRPBC', url: 'https://xn--66tw07h.com/?c=DVRPBC' },
  },
  {
    question: '本产品是 API 吗？',
    answer: '本产品非 API，只能在 VS Code 配合 Copilot Pro / Pro+ 无限使用。',
  },
  {
    question: '电脑关机/重启后需要手动打开插件吗？',
    answer: '不需要。只需打开 VS Code，在对话框中发送"使用 Claude Tool 和我对话"，插件会自动启动并连接，无需任何额外操作，开箱即用。',
  },
  {
    question: '激活码怎么使用？',
    answer: '打开 Claude Tool → 输入激活码 → 点击激活。程序会自动配置 VS Code 的 MCP 设置。',
  },
  {
    question: '支持哪些 Claude 模型？',
    answer: '支持 Claude 全系列模型，包括 Opus 4.6 及后续发布的所有新模型，无需额外付费。',
  },
  {
    question: '可以多设备使用吗？',
    answer: '支持最多2台设备同时在线。如需更多设备，请联系客服 QQ: 345235793。',
  },
  {
    question: '到期后怎么续费？',
    answer: '购买新的激活码，在 Claude Tool 中输入即可。未到期时输入新码会自动叠加时长。',
  },
  {
    question: '免费试用有什么限制？',
    answer: '免费试用有效期3小时，同一IP每7天限领1次。功能与付费版完全一致，包括全系列 Claude 模型和无限对话。',
  },
  {
    question: '付款后多久收到激活码？',
    answer: '付款后请联系 QQ: 345235793，客服会在工作时间内尽快发放激活码。',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.05]">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:ring-inset"
      >
        <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-500 text-white rotate-0' : 'bg-white/10 text-gray-400'}`}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? 'M5 15l7-7 7 7' : 'M9 5l7 7-7 7'} />
          </svg>
        </div>
        <span className="text-base font-medium text-white leading-relaxed">{faq.question}</span>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-5 pb-5 pl-15">
          <div className="ml-10 border-l-2 border-indigo-500/30 pl-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              {faq.answer}
              {faq.link && (
                <>
                  {' '}
                  <a
                    href={faq.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
                  >
                    {faq.link.text}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showQQ, setShowQQ] = useState(false);

  return (
    <section id="faq" className="relative pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 pt-8 md:pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            常见问题
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            常见问题
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            关于 Claude Tool 的常见疑问解答
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-16">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
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
          <div className="mb-3 p-4 bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl w-64">
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

export default FAQ;