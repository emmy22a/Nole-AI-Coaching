import React, { useState } from 'react';
import { GlowCard } from '../components/GlowCard';
import { Button } from '../components/Button';
import { getToolRecommendations } from '../services/geminiService';
import { ToolRecommendation } from '../types';
import { Search, PenTool, Layers, Box, ArrowRight, Zap, BookOpen, Smile, Palette, ExternalLink } from 'lucide-react';

const favoriteCategories = [
  {
    name: 'Productivity',
    icon: <Zap size={20} className="text-aurora-blue" />,
    tools: [
      { name: 'Motion', desc: 'AI-powered task management.', url: 'https://www.usemotion.com/' },
      { name: 'Mural AI', desc: 'Visual collaboration and mind mapping.', url: 'https://www.mural.co/' },
      { name: 'Otter.ai', desc: 'Smart meeting notes & transcription.', url: 'https://otter.ai/' }
    ]
  },
  {
    name: 'Learning',
    icon: <BookOpen size={20} className="text-aurora-purple" />,
    tools: [
      { name: 'NotebookLM', desc: 'Turn sources into visual learnings.', url: 'https://notebooklm.google.com/' },
      { name: 'Kinnu', desc: 'Gamified learning for curiosity.', url: 'https://kinnu.xyz/' },
      { name: 'Heptabase', desc: 'Visual learning for complex topics.', url: 'https://heptabase.com/' }
    ]
  },
  {
    name: 'Entertainment',
    icon: <Smile size={20} className="text-aurora-gold" />,
    tools: [
      { name: 'Rosebud AI', desc: 'Bring video game ideas to life.', url: 'https://www.rosebud.ai/' },
      { name: 'Suno', desc: 'Vibe-based AI music generation.', url: 'https://suno.com/' },
      { name: 'Leonardo AI', desc: 'Advanced generative imagery and models.', url: 'https://leonardo.ai/' }
    ]
  },
  {
    name: 'Creativity',
    icon: <Palette size={20} className="text-aurora-green" />,
    tools: [
      { name: 'Midjourney', desc: 'High-end generative art.', url: 'https://www.midjourney.com/' },
      { name: 'Runway', desc: 'AI-powered video generation.', url: 'https://runwayml.com/' },
      { name: 'Nano Banana', desc: 'Realistic and stylized image generation.', url: 'https://gemini.google.com/app?android-min-version=301356232&ios-min-version=322.0&is_sa=1&hl=en-US&utm_campaign=microsite_gemini_image_generation_page&icid=microsite_gemini_image_generation_page&utm_source=gemini&utm_medium=web&_gl=1*1k7k7fh*_gcl_au*MTM3NDA3MTUwMi4xNzc4NTUyODcy*_ga*Nzc5NTc2NTU4LjE3Nzg1NTI4NzI.*_ga_WC57KJ50ZZ*czE3Nzg1NTI4NzIkbzEkZzAkdDE3Nzg1NTI4NzIkajYwJGwwJGgw' }
    ]
  }
];

export const RecommendedTools: React.FC = () => {
  const [role, setRole] = useState('');
  const [challenge, setChallenge] = useState('');
  const [tools, setTools] = useState<ToolRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !challenge) return;

    setLoading(true);
    setHasSearched(true);
    setTools([]); // Clear previous

    try {
      const results = await getToolRecommendations(role, challenge);
      setTools(results);
    } catch (error) {
      console.error("Failed to fetch tools", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-24">
      {/* Featured Recommendations Section */}
      <section className="mb-24">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Recommended Tools</h2>
          <p className="text-slate-400">Not sure where to get started? Here's our favorite hand-picked tools for the four main use cases of AI.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {favoriteCategories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-white">{cat.name}</h3>
              </div>
              
              <div className="space-y-3">
                {cat.tools.map((tool, tIdx) => (
                  <a 
                    key={tIdx} 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block group"
                  >
                    <GlowCard className="p-4 border-slate-800/50 group-hover:border-aurora-blue/30 transition-all group-hover:bg-slate-900/50">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-white group-hover:text-aurora-blue transition-colors">{tool.name}</h4>
                        <ExternalLink size={12} className="text-slate-600 group-hover:text-slate-400" />
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{tool.desc}</p>
                    </GlowCard>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-24 opacity-50" />

      {/* Existing Search Section - Now at bottom */}
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your AI Toolkit</h2>
        <p className="text-slate-400">
          Tell us about your professional role and what you need help with. 
          Our AI engine will curate the perfect stack for you.
        </p>
      </header>

      <div className="mb-16">
        <GlowCard className="bg-slate-900/80 p-8 border-aurora-blue/20">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Your Role / Industry</label>
              <div className="relative">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Marketing Manager, Software Engineer..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-aurora-purple focus:ring-1 focus:ring-aurora-purple transition-all"
                  required
                />
                <UserIcon className="absolute left-3 top-3.5 text-slate-500" size={18} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Your Main Challenge</label>
              <div className="relative">
                <input
                  type="text"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  placeholder="e.g. Generating social content, debugging code..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-aurora-purple focus:ring-1 focus:ring-aurora-purple transition-all"
                  required
                />
                <Layers className="absolute left-3 top-3.5 text-slate-500" size={18} />
              </div>
            </div>

            <div className="md:col-span-2 mt-6 flex flex-col items-center gap-3">
              <Button type="submit" variant="secondary" isLoading={loading} className="w-full md:w-auto min-w-[200px]">
                <Search size={18} />
                Generate Recommendations
              </Button>
              
              <div className="text-center mt-2 space-y-1">
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-aurora-blue shadow-[0_0_8px_rgba(76,110,245,0.8)]"></span>
                  Powered by Google Gemini 3 Flash
                </p>
                <p className="text-[10px] text-slate-600">
                  AI can make mistakes. Please verify important information.
                </p>
              </div>
            </div>
          </form>
        </GlowCard>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {loading && (
          <div className="text-center py-20 animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 border-4 border-aurora-blue border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-lg">Analyzing workflows & querying database...</p>
          </div>
        )}

        {!loading && hasSearched && tools.length === 0 && (
           <div className="text-center py-20">
             <p className="text-slate-500">No specific tools found. Try broader keywords.</p>
           </div>
        )}

        {!loading && tools.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {tools.map((tool, idx) => (
              <GlowCard key={idx} delay={idx * 150} className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-aurora-blue">
                    <Box size={24} />
                  </div>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
                    {tool.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-800">
                  <p className="text-xs font-semibold text-aurora-purple mb-1">BEST USE CASE</p>
                  <p className="text-sm text-slate-300">{tool.useCase}</p>
                </div>

                <a href={`#${tool.name.replace(/\s/g, '')}`} className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </GlowCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Simple Icon component for the input field
const UserIcon = ({className, size}: {className?: string, size?: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);