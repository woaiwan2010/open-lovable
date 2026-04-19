import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Claude Tool &copy; 2026</span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a
              href="https://www.zsmeter.com/ct-sys/download"
              className="hover:text-gray-300 transition-colors"
            >
              插件下载
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a
              href="https://www.zsmeter.com/ct-sys/pricing"
              className="hover:text-gray-300 transition-colors"
            >
              激活码
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;