
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './views/Dashboard';
import { RecommendedTools } from './views/RecommendedTools';
import { WhoIAm } from './views/WhoIAm';
import { Archives } from './views/Archives';
import { Legal } from './views/Legal';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [selectedArticleId, setSelectedArticleId] = useState<number | undefined>(undefined);

  // Wrapper to ensure article selection is reset when navigating via menu
  const handleNavigation = (view: ViewState) => {
    setCurrentView(view);
    setSelectedArticleId(undefined);
  };

  // Handler for deep linking to specific articles
  const handleReadArticle = (id: number) => {
    setSelectedArticleId(id);
    setCurrentView(ViewState.ARCHIVES);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard onNavigate={handleNavigation} onReadArticle={handleReadArticle} />;
      case ViewState.RECOMMENDED_TOOLS:
        return <RecommendedTools />;
      case ViewState.WHO_I_AM:
        return <WhoIAm />;
      case ViewState.ARCHIVES:
        return <Archives initialArticleId={selectedArticleId} />;
      case ViewState.LEGAL:
        return <Legal />;
      default:
        return <Dashboard onNavigate={handleNavigation} onReadArticle={handleReadArticle} />;
    }
  };

  return (
    <div className="min-h-screen bg-aurora-darker text-white font-sans selection:bg-aurora-blue/30 selection:text-aurora-blue overflow-x-hidden flex flex-col">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[130px] animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Overlay for Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <Navbar currentView={currentView} onNavigate={handleNavigation} />

      <main className="relative z-10 pt-24 flex-grow transition-all duration-300">
        <div className="container mx-auto px-6 pb-12">
          <div className="animate-fade-in">
             {renderView()}
          </div>
        </div>
      </main>

      {/* Footer / Privacy Section */}
      <footer className="relative z-10 py-6 border-t border-slate-900 mt-auto">
        <div className="container mx-auto px-6 text-center">
            <button 
                onClick={() => handleNavigation(ViewState.LEGAL)}
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-medium"
            >
                Disclaimer & Privacy Policy
            </button>
            <p className="text-[10px] text-slate-700 mt-2">© 2026 Nole AI</p>
        </div>
      </footer>

      {/* Global CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in 0.7s ease-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default App;
