import React from 'react';
import { GlowCard } from '../components/GlowCard';
import { DemoVideo } from '../types';
import { Play } from 'lucide-react';

const demos: DemoVideo[] = [
  {
    id: '1',
    title: 'Automated Meeting Summarization',
    description: 'See how AI listens to a voice recording, identifies speakers, and generates formatted meeting minutes with action items in seconds.',
    thumbnailUrl: 'https://picsum.photos/seed/meeting/600/400',
    duration: '2:15'
  },
  {
    id: '2',
    title: 'Data Analysis Assistant',
    description: 'Watch an AI interpret a complex CSV file, create visualizations, and extract key insights without writing a single line of SQL.',
    thumbnailUrl: 'https://picsum.photos/seed/data/600/400',
    duration: '3:45'
  },
  {
    id: '3',
    title: 'Generative Design Workflow',
    description: 'A walkthrough of creating marketing assets using text-to-image models, refining prompts to get brand-consistent results.',
    thumbnailUrl: 'https://picsum.photos/seed/design/600/400',
    duration: '4:10'
  },
  {
    id: '4',
    title: 'Code Refactoring Bot',
    description: 'Developers can use AI to identify bugs, suggest optimizations, and write unit tests for legacy codebases automatically.',
    thumbnailUrl: 'https://picsum.photos/seed/code/600/400',
    duration: '1:55'
  }
];

export const AIInAction: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">AI in Action</h2>
        <p className="text-slate-400">Real-world examples of artificial intelligence streamlining professional workflows.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {demos.map((demo, index) => (
          <GlowCard key={demo.id} delay={index * 100} className="flex flex-col h-full overflow-hidden p-0">
            <div className="relative group cursor-pointer h-48 overflow-hidden">
              <img 
                src={demo.thumbnailUrl} 
                alt={demo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded font-mono">
                {demo.duration}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-aurora-blue transition-colors">
                {demo.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {demo.description}
              </p>
              <button className="text-sm font-semibold text-aurora-purple hover:text-aurora-blue transition-colors uppercase tracking-wider flex items-center gap-2">
                Watch Demo <span className="text-lg">→</span>
              </button>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};