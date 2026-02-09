import React from 'react';
import { STORY_DATA } from '../constants';

interface NavigationProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeId, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 h-full w-20 hidden md:flex flex-col items-center justify-center z-50 pointer-events-none">
      <div className="flex flex-col gap-8 bg-oriental-900/80 backdrop-blur-sm p-4 rounded-r-2xl border-r border-oriental-gold/30 pointer-events-auto shadow-2xl">
        {STORY_DATA.map((section) => {
          const isActive = activeId === section.id;
          const Icon = section.icon;
          
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
                isActive 
                  ? 'bg-oriental-gold text-oriental-900 scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]' 
                  : 'bg-oriental-800 text-oriental-gold hover:bg-oriental-700'
              }`}
              title={section.title}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              
              {/* Tooltip Label */}
              <span className={`absolute left-14 whitespace-nowrap px-3 py-1 bg-oriental-800 text-oriental-paper text-xs rounded border border-oriental-gold/30 transition-all duration-300 ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
                {section.title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export const MobileNavigation: React.FC<NavigationProps> = ({ activeId, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-oriental-900/90 backdrop-blur-md border-t border-oriental-gold/30">
      <div className="flex justify-around items-center p-4">
        {STORY_DATA.map((section) => {
           const isActive = activeId === section.id;
           const Icon = section.icon;
           return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-oriental-gold' : 'text-gray-500'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px]">{section.title}</span>
            </button>
           )
        })}
      </div>
    </nav>
  );
};