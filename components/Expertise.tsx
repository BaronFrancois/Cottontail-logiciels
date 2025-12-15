import React, { useEffect, useState } from 'react';
import { EXPERTISE_STEPS } from '../constants';

const Expertise: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const STEP_IMAGES = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxrJaODiYYQarbG1ZX2rii6g2kTQsYLSa2g_wZ6n6VA-FH2lXsTtr-4NwiswMOY_U37hB6uUWMx7kDjxK8eMxX3i5QB5S_TDJC5IAdfLnW2WaoX5NWjtKkv4LS7b4p-Xn7YVSc5hThPqlwc9uXSqrkRkN3wvUAjWkrJ-RpX9wggC1VEBUCSHWmWFQx342qqcF1PfO9rCY0ETCF4aRGTmjplkdGJmmgWCRNYiKlif6aqXTLusSN4dEKXJu543hfAQQQFrd-YZTN2k2z",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB_7Kt9mnP0xoj2zPXDDVvTaafS3NUOEwpXL1pgHwIjeNTguaho56Y3ABu14CHaEgd0oku7D30saL9VUp3d2kPvuvtUVIswbyVB7MrFNrdN4KJBu0CPhvQ_Z4IRMbswIbS_JD2w2GkxVLC8pcMckeCpvbd_0KJiOSHW0DtZ-lwSEfJ2DNgCPsV9UYqGMi-VdUkFUa-kB4Mq56IyYLKulgCm-lomRkJO3Bo4hnnxFsTGuvTE2IhwUTsj2FL3XaLNGSli1eQ_-fEgUZbA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2N4ZIRjG71rT4FQA3x_rLg5e7TD3Cc6FXbVAzVMiVfi51AOJyMO8ZZGY66P7LilWFb_73VGcIJWBZLkJN8t_TPS5T8ss8zTwLT1SeXUypPnjwXsy9MKVsp_kgEHJkK7IqiSokuVE_9nBZhmp6EuDwvc3FNXU08xDRYH6pbdh0Por4C6SSK0_eVkOUatFB0kO6sXXQDhF3FHayucup_QC0j_608B9ImKP3PgCb25lYotg8HUW9B6xudkwih1vKxsCf0OLsM6Ld5hCS"
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
