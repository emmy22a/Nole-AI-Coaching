import React from 'react';
import { NavItem, ViewState } from '../types';
import { LayoutDashboard, PlayCircle, Cpu, User, Flame } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const items: NavItem[] = [
    { id: ViewState.DASHBOARD, label: 'Home', icon: <LayoutDashboard size={20} /> },
    { id: ViewState.AI_IN_ACTION, label: 'AI in Action', icon: <PlayCircle size={20} /> },
    { id: ViewState.RECOMMENDED_TOOLS, label: 'Recommended Tools', icon: <Cpu size={20} /> },
    { id: ViewState.WHO_I_AM, label: 'Who I Am', icon: <User size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-slate-950 border-r border-slate-800 z-50 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple flex items-center justify-center shadow-[0_0_15px_rgba(76,110,245,0.5)]">
          <Flame size={18} className="text-white fill-white/20" />
        </div>
        <h1 className="hidden lg:block font-serif font-bold text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          NOLE
        </h1>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {items.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-slate-800 text-white shadow-[0_0_20px_rgba(76,110,245,0.15)]' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className={`transition-colors duration-300 ${isActive ? 'text-aurora-blue' : 'text-slate-400 group-hover:text-aurora-purple'}`}>
                {item.icon}
              </div>
              <span className={`hidden lg:block font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
              
              {/* Active Indicator Line */}
              {isActive && (
                <div className="absolute left-0 w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-r-full" />
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Decorative Bottom Element - Elvish styling */}
      <div className="p-6 border-t border-slate-900 flex justify-center opacity-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-500">
           <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      </div>
    </aside>
  );
};