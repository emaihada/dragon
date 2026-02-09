import React, { useRef, useEffect, useState } from 'react';
import { StorySectionData } from '../types';
import { OrientalBorder, CloudPattern } from './OrientalBorder';

interface Props {
  data: StorySectionData;
  isActive: boolean;
}

export const StorySection: React.FC<Props> = ({ data, isActive }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Reduced threshold for better visibility
        rootMargin: "-5% 0px -5% 0px" // Relaxed margin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={data.id} 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6 md:px-24"
    >
      {/* Background Decor */}
      <CloudPattern className={`top-20 right-10 w-64 h-64 ${data.themeColor} opacity-5`} />
      <CloudPattern className={`bottom-20 left-10 w-48 h-48 ${data.themeColor} opacity-5 rotate-180`} />

      <div className="max-w-4xl w-full z-10">
        
        {/* Header Area */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`inline-flex items-center justify-center p-4 rounded-full border-2 border-current mb-6 ${data.themeColor} bg-oriental-900/50 backdrop-blur-sm shadow-xl`}>
            <data.icon size={48} strokeWidth={1} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-oriental-paper tracking-wide">
            {data.title}
          </h2>
          <OrientalBorder className="text-oriental-gold/50" />
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {data.content.map((block, idx) => (
            <div 
              key={idx}
              className={`group relative bg-oriental-800/30 border border-oriental-gold/10 p-8 rounded-lg backdrop-blur-sm hover:bg-oriental-800/50 transition-all duration-700 delay-${idx * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-oriental-gold/40" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-oriental-gold/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-oriental-gold/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-oriental-gold/40" />

              <h3 className="text-2xl font-bold mb-6 text-oriental-gold flex items-center gap-3">
                <span className="w-1.5 h-6 bg-oriental-gold/50 rounded-full" />
                {block.heading}
              </h3>
              <ul className="space-y-3">
                {block.description.map((item, i) => (
                  <li key={i} className="text-lg text-oriental-paper/90 font-light flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-oriental-gold/70 mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};