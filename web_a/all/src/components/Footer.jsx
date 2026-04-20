import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08080d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">CT</span>
            </div>
            <span className="text-sm text-gray-400">
              Claude Tool &copy; 2026
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link
              to="/download"
              className="text-gray-400 hover:text-white transition-colors"
            >
              插件下载
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              to="/pricing"
              className="text-gray-400 hover:text-white transition-colors"
            >
              激活码
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              to="/faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              常见问题
            </Link>
          </div>

          <a
            href="tencent://message/?uin=345235793&Site=Claude+Tool&Menu=yes"
            className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
          >
            QQ: 345235793
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;