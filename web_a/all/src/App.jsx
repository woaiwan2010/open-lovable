import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Guide from './components/Guide';
import Copilot from './components/Copilot';
import Models from './components/Models';
import Skill from './components/Skill';

function FloatingQQ() {
  const [showQQ, setShowQQ] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {showQQ && (
        <div className="mb-3 p-4 bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl w-64 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-white">Claude 无限用</span>
            <button onClick={() => setShowQQ(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-1">技术交流群</p>
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Download />} />
            <Route path="/download" element={<Download />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/copilot" element={<Copilot />} />
            <Route path="/models" element={<Models />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <FloatingQQ />
      </div>
    </BrowserRouter>
  );
}

export default App;