
import React, { useState, useEffect } from 'react';
import { NavItem, ViewState } from '../types';
import { Home, BookOpen, Sword, Feather, Flame, Menu, X, ScrollText } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items: NavItem[] = [
    { id: ViewState.DASHBOARD, label: 'Home', icon: <Home size={18} /> },
    { id: ViewState.RECOMMENDED_TOOLS, label: 'Recommended Tools', icon: <Sword size={18} /> },
    { id: ViewState.ARCHIVES, label: 'The Archives', icon: <ScrollText size={18} /> },
    { id: ViewState.WHO_I_AM, label: 'Behind Nole', icon: <Feather size={18} /> },
  ];

  const handleNavClick = (id: ViewState) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleNavClick(ViewState.DASHBOARD)}
        >
          {/* Animated Logo Container */}
          <div className="relative">
             <div className="absolute -inset-2 bg-aurora-purple/50 rounded-full blur-md opacity-0 group-hover:opacity-60 animate-pulse transition-opacity duration-500"></div>
             <div className="absolute -inset-1 bg-gradient-to-r from-aurora-blue to-aurora-gold rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
             
             <div className="relative w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-aurora-purple/50 transition-all duration-300">
                <Flame size={20} className="text-white fill-white/10 group-hover:text-aurora-purple group-hover:fill-aurora-purple/30 transition-colors duration-300" />
             </div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl tracking-wide text-white group-hover:text-slate-200 transition-colors leading-none">
              NOLE
            </h1>
            <span className="text-[10px] text-slate-500 tracking-[0.2em] group-hover:text-aurora-gold transition-colors duration-300">AI KNOWLEDGE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm">
          {items.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-slate-800 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span className={`transition-colors duration-300 ${isActive ? 'text-aurora-blue' : 'opacity-70 group-hover:text-aurora-gold'}`}>
                    {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  currentView === item.id 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <span className={currentView === item.id ? 'text-aurora-blue' : ''}>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
