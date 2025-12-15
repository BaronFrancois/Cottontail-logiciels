import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';

const Hero: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8; // Scroll about 80% of width
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
        // Simple heuristic to update dots based on scroll position
        const container = scrollContainerRef.current;
        const index = Math.round(container.scrollLeft / (container.clientWidth * 0.8));
        const boundedIndex = Math.min(Math.max(index, 0), PROJECTS.length - 1);
        setActiveDot(boundedIndex);
    }
  };

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 pt-16 pb-12 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-text-main">
          L'Innovation Numérique,<br />
          Simplifiée.
        </h1>
        <p className="text-text-secondary text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
          Nous transformons vos idées complexes en expériences digitales fluides et intuitives.
        </p>
      </div>

      <div className="relative w-full max-w-[1400px] group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white text-text-main hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-100 hidden md:flex cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white text-text-main hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-100 hidden md:flex cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 snap-x snap-mandatory no-scrollbar"
        >
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="snap-center shrink-0 w-[90vw] md:w-[1000px] h-[600px] relative rounded-3xl overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group/card cursor-pointer"
            >
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
                aria-label={project.alt}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 font-semibold text-lg">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-2">
            {PROJECTS.map((_, idx) => (
                <div 
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${activeDot === idx ? 'bg-black scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                    onClick={() => {
                        if (scrollContainerRef.current) {
                             const container = scrollContainerRef.current;
                             container.scrollTo({
                                left: idx * (container.clientWidth < 1000 ? container.clientWidth : 1000 + 32),
                                behavior: 'smooth'
                             })
                        }
                    }}
                ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;