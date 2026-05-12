import React from 'react';

interface FlipCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: string;
  delay?: number;
}

export const FlipCard: React.FC<FlipCardProps> = ({ 
  title, 
  description, 
  icon, 
  accentColor = "from-aurora-blue to-cyan-500",
  delay = 0 
}) => {
  return (
    <div 
      className="group h-64 w-full [perspective:1000px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg hover:shadow-2xl hover:shadow-aurora-blue/20">
        
        {/* Front of Card */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900/80 border border-slate-700/50 p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] backdrop-blur-sm overflow-hidden">
          
          {/* Dynamic Background Effect on Front */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          
          <div className="relative z-10 p-4 rounded-full bg-slate-800/50 mb-4 border border-slate-600 group-hover:border-aurora-blue/50 group-hover:scale-110 transition-all duration-500">
            {icon}
          </div>
          
          <h3 className="relative z-10 text-xl font-bold text-white tracking-wide group-hover:text-aurora-blue transition-colors">
            {title}
          </h3>
          
          {/* Golden Accent Line */}
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-transparent via-aurora-gold to-transparent opacity-50 mx-auto group-hover:opacity-100 transition-opacity"></div>
          
          <p className="absolute bottom-4 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            Reveal
          </p>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
          
          {/* Decorative Gradient Blob */}
           <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${accentColor} blur-[60px] opacity-20`}></div>
           <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr ${accentColor} blur-[60px] opacity-10`}></div>
           
           <h3 className="text-lg font-bold text-white mb-4 relative z-10 border-b border-white/10 pb-2 w-full">
             {title}
           </h3>
           
           <p className="text-slate-300 leading-relaxed text-sm relative z-10 font-light">
             {description}
           </p>

           {/* Decorative Element */}
           <div className="absolute bottom-4 right-4 text-slate-700">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
               <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
             </svg>
           </div>
        </div>
      </div>
    </div>
  );
};