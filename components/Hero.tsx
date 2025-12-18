import React from 'react';
import { PROJECTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="hero-scroll-container">
      {/* Section Titre - Premier snap point */}
      <section className="hero-snap-section">
        <div className="max-w-3xl text-center px-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-text-main">
            L'Innovation Numérique,<br />
            Simplifiée.
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
            Nous transformons vos idées complexes en expériences digitales fluides et intuitives.
          </p>
          {/* Indicateur de scroll */}
          <div className="mt-12 flex flex-col items-center text-gray-400 animate-bounce">
            <span className="material-symbols-outlined text-2xl">expand_more</span>
            <span className="text-xs">Scroll</span>
          </div>
        </div>
      </section>

      {/* Slides - Un snap point par projet */}
      {PROJECTS.map((project, index) => (
        <section key={project.id} className="hero-snap-section">
          <div className="w-full max-w-[1200px] h-[70vh] max-h-[600px] mx-auto px-6 md:px-12">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
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
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Indicateur de position */}
            <div className="flex justify-center gap-3 mt-6">
              {PROJECTS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === idx
                      ? 'bg-black w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Hero;
