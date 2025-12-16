import React, { useEffect, useState } from 'react';
import { EXPERTISE_STEPS } from '../constants';

const Expertise: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const STEP_IMAGES = [
    "./images/audit.webp",
    "./images/conception.jpg",
    "./images/realisation.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EXPERTISE_STEPS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-black pb-2 leading-tight">
        Expertise, <br />
        On vous accompagne <br />
        de A à Z
      </h2>
      
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start relative gap-8 md:gap-4">
          <div className="hidden md:block absolute top-[26px] left-[10%] w-[80%] h-[2px] bg-gray-100 z-0"></div>
          
          {EXPERTISE_STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={step.id} className="flex md:flex-col items-center gap-6 md:gap-4 relative z-10 w-full md:w-1/3 group cursor-default">
                <div className={`step-visual ${isActive ? 'is-active' : ''} ${index === 0 ? 'is-initial' : ''}`}>
                  <span className="material-symbols-outlined step-icon-symbol">
                    {step.icon}
                  </span>
                  <div
                    className="step-icon-image"
                    style={{ backgroundImage: `url(${STEP_IMAGES[index % STEP_IMAGES.length]})` }}
                  />
                </div>
              <div className="md:text-center pt-2">
                <h3 className="text-text-main text-lg font-bold mb-1">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-20">
        <button className="flex items-center gap-2 px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md group">
          <span>Voir exemple concret</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </section>
  );
};

export default Expertise;
