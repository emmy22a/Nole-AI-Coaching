import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'aurora';
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', delay = 0, variant = 'default' }) => {
  return (
    <div 
      className={`group relative rounded-2xl border transition-all duration-300 ${className}
        ${variant === 'aurora' 
          ? 'bg-slate-900/80 border-slate-700 hover:border-aurora-purple/50' 
          : 'bg-slate-950/40 border-slate-800 hover:bg-slate-900/60 hover:border-slate-600'
        }
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Only show the aurora gradient blob for 'aurora' variant */}
      {variant === 'aurora' && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};