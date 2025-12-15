import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Vision from './components/Vision';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Expertise />
        <Vision />
        <Footer />
      </main>
    </div>
  );
};

export default App;