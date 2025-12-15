import React from 'react';
import { VISION_ITEMS } from '../constants';

const Vision: React.FC = () => {
  return (
    <section className="w-full bg-surface-light py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-6 pb-2 leading-tight">
              Une Vision Élargie
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Notre expertise ne s'arrête pas à un écran. Nous concevons des écosystèmes complets qui s'adaptent à tous les usages de vos utilisateurs.
            </p>
          </div>
          
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VISION_ITEMS.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:shadow-card transition-shadow cursor-default group border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-black text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-text-main font-bold">{item.title}</h3>
                <p className="text-center text-xs text-text-secondary">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;