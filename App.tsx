import React, { useState, useEffect, useRef } from 'react';
import { STORY_DATA } from './constants';
import { StorySection } from './components/StorySection';
import { Navigation, MobileNavigation } from './components/Navigation';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(STORY_DATA[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Active when element is in the middle 20% of screen
        threshold: 0.1,
      }
    );

    STORY_DATA.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStart = () => {
    const element = document.getElementById(STORY_DATA[0].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-oriental-900 bg-pattern-scales bg-fixed min-h-screen relative text-oriental-paper font-serif selection:bg-oriental-gold selection:text-oriental-900">
      
      {/* Background Spotlight Effects - Opacity reduced for darker feel */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-oriental-700/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-oriental-800/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-oriental-gold/5 rounded-full blur-[150px]" />
      </div>

      {/* Intro / Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center relative px-4 overflow-hidden z-10">
        {/* Atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-oriental-900 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-oriental-700/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="z-10 animate-fade-in-up flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-br from-oriental-paper via-oriental-gold to-oriental-paper drop-shadow-sm leading-tight">
            추락한<br/>이무기를<br/>주웠다
          </h1>
          
          <button 
            onClick={scrollToStart}
            className="group flex flex-col items-center gap-3 text-oriental-gold/70 hover:text-oriental-gold transition-colors duration-300"
          >
            <span className="text-sm tracking-widest">이야기 시작하기</span>
            <div className="p-3 border rounded-full border-oriental-gold/30 group-hover:border-oriental-gold group-hover:bg-oriental-gold/10 transition-all">
              <ChevronDown className="animate-bounce" />
            </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pb-24 md:pb-0 z-10">
        <Navigation activeId={activeSection} onNavigate={handleNavigate} />
        <MobileNavigation activeId={activeSection} onNavigate={handleNavigate} />

        <div className="flex flex-col gap-0">
          {STORY_DATA.map((section) => (
            <StorySection 
              key={section.id} 
              data={section} 
              isActive={activeSection === section.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;