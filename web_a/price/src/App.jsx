import React from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;