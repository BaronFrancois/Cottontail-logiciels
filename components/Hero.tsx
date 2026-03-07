import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';

const TOTAL_SLIDES = PROJECTS.length + 1;
const WHEEL_THRESHOLD = 600; // pixels de delta cumulé avant de changer de slide

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);
  const currentSlideRef = useRef(0);
  const isPinnedRef = useRef(false);
  const wheelAccumRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const viewport = viewportRef.current;
    if (!container || !viewport) return;

    const applySlide = (index: number) => {
      slidesRef.current.forEach((el, i) => {
        if (!el) return;
        if (i === index) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
      currentSlideRef.current = index;
    };

    const goToSlide = (index: number) => {
      if (index === currentSlideRef.current) return;
      isAnimatingRef.current = true;
      applySlide(index);
      // Bloquer brièvement pour éviter les transitions en cascade
      setTimeout(() => {
        isAnimatingRef.current = false;
        wheelAccumRef.current = 0;
      }, 600);
    };

    const updatePinning = () => {
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight - 72;

      if (rect.top >= 72) {
        // Au-dessus : viewport en haut du container
        viewport.style.position = 'absolute';
        viewport.style.top = '0';
        viewport.style.bottom = 'auto';
        isPinnedRef.current = false;
        applySlide(0);
        wheelAccumRef.current = 0;
      } else if (rect.bottom <= window.innerHeight) {
        // En-dessous : viewport en bas du container
        viewport.style.position = 'absolute';
        viewport.style.top = 'auto';
        viewport.style.bottom = '0';
        isPinnedRef.current = false;
        applySlide(TOTAL_SLIDES - 1);
        wheelAccumRef.current = 0;
      } else {
        // Pinned : viewport fixé
        viewport.style.position = 'fixed';
        viewport.style.top = '72px';
        viewport.style.bottom = 'auto';
        isPinnedRef.current = true;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (!isPinnedRef.current || isAnimatingRef.current) return;

      const current = currentSlideRef.current;

      // Laisser le scroll natif sortir de la zone hero
      if (e.deltaY > 0 && current >= TOTAL_SLIDES - 1) return;
      if (e.deltaY < 0 && current <= 0) return;

      // Intercepter le scroll pour accumuler le delta
      e.preventDefault();

      wheelAccumRef.current += e.deltaY;

      if (wheelAccumRef.current >= WHEEL_THRESHOLD) {
        goToSlide(current + 1);
      } else if (wheelAccumRef.current <= -WHEEL_THRESHOLD) {
        goToSlide(current - 1);
      }
    };

    // Le scroll natif gère uniquement le pinning (entrer/sortir de la zone)
    window.addEventListener('scroll', updatePinning, { passive: true });
    window.addEventListener('resize', updatePinning, { passive: true });
    // Le wheel gère les transitions de slides quand on est pinned
    container.addEventListener('wheel', onWheel, { passive: false });
    updatePinning();
    return () => {
      window.removeEventListener('scroll', updatePinning);
      window.removeEventListener('resize', updatePinning);
      container.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-scroll-container">
      <div ref={viewportRef} className="hero-pinned-viewport">
        {/* Slide Titre */}
        <section
          ref={(el) => { slidesRef.current[0] = el; }}
          className="hero-slide active"
        >
          <div className="max-w-3xl text-center px-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-text-main">
              L'Innovation Numérique,<br />
              Simplifiée.
            </h1>
            <p className="text-text-secondary text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
              Nous transformons vos idées complexes en expériences digitales fluides et intuitives.
            </p>
            <div className="mt-12 flex flex-col items-center text-gray-400 animate-bounce">
              <span className="material-symbols-outlined text-2xl">expand_more</span>
              <span className="text-xs">Scroll</span>
            </div>
          </div>
        </section>

        {/* Slides Projets */}
        {PROJECTS.map((project, index) => (
          <section
            key={project.id}
            ref={(el) => { slidesRef.current[index + 1] = el; }}
            className="hero-slide"
          >
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
              <div className="flex justify-center gap-3 mt-6">
                {PROJECTS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === idx ? 'bg-black w-8' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Hero;
