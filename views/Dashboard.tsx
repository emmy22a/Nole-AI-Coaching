
import React, { useState, useEffect } from 'react';
import { GlowCard } from '../components/GlowCard';
import { FlipCard } from '../components/FlipCard';
import { ViewState } from '../types';
import { ArrowRight, Bell, BellRing, CheckCircle, Hammer, Copy, Check, Feather, List, Zap, Sparkles, HelpCircle, MousePointer, Terminal } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
  onReadArticle: (id: number) => void;
}

interface PromptTemplate {
  id: string;
  trigger: string; // The user's pain point
  title: string;
  template: string;
  icon: React.ReactNode;
  color: string;
}

const GOLDEN_PROMPTS: PromptTemplate[] = [
  {
    id: 'polisher',
    trigger: "I sounded unsure in that email...",
    title: 'The Professional Polish',
    template: 'Rewrite the following text to be more professional, concise, and confident, while maintaining a collaborative tone: [PASTE TEXT HERE]',
    icon: <Feather size={16} />,
    color: 'text-pink-400 border-pink-400/20 bg-pink-400/10'
  },
  {
    id: 'synthesizer',
    trigger: "This document is way too long...",
    title: 'The Executive Summary',
    template: 'Analyze the following notes and extract: 1) Key Decisions Made, 2) Action Items (Who/What/When), and 3) Open Questions. Format clearly. [PASTE NOTES HERE]',
    icon: <List size={16} />,
    color: 'text-blue-400 border-blue-400/20 bg-blue-400/10'
  },
  {
    id: 'simplifier',
    trigger: "I don't understand this concept...",
    title: 'The 5-Year-Old Explainer',
    template: 'Explain the following concept to a beginner using simple language and a real-world analogy to make it relatable: [PASTE CONCEPT HERE]',
    icon: <Zap size={16} />,
    color: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10'
  }
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onReadArticle }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showNotificationToast, setShowNotificationToast] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activePreview, setActivePreview] = useState<string | null>(null);

  // Check initial notification permission
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "granted") {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscribe = async () => {
    if (isSubscribed) {
        setIsSubscribed(false);
        setShowNotificationToast(true);
        setTimeout(() => setShowNotificationToast(false), 3000);
        return;
    }

    if ("Notification" in window) {
        try {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
                try {
                    new Notification("The Counsel of the Wise", {
                        body: "You have joined the circle.",
                        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                    });
                } catch (e) {
                    console.log("Visual notification suppressed by browser/sandbox");
                }
            }
        } catch (error) {
            console.error("Notification API error", error);
        }
    }
    
    setIsSubscribed(true);
    setShowNotificationToast(true);
    setTimeout(() => setShowNotificationToast(false), 3000);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-12">
      
      {/* Hero Welcome Section */}
      <section className="text-center py-12 relative">
         <div className="mb-6 flex justify-center">
             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-aurora-gold to-transparent opacity-50"></div>
         </div>
         
         <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green animate-aurora-move bg-[length:200%_auto]">Nole</span>
         </h1>
         
         <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Your secure base for AI learning. Stripping away the hype to focus on practical, human-centric application.
         </p>

         {/* Decorative Divider - Elvish Silver & Gold */}
         <div className="flex items-center justify-center gap-4 opacity-70">
            <div className="h-[1px] w-12 md:w-32 bg-gradient-to-l from-slate-400 to-transparent"></div>
            <div className="w-2 h-2 rotate-45 border border-aurora-gold bg-slate-900"></div>
            <div className="h-[1px] w-12 md:w-32 bg-gradient-to-r from-slate-400 to-transparent"></div>
         </div>
      </section>

      {/* Main Content Grid - ITEMS STRETCH ensures columns are equal height */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Left Column (2/3): Flex col + h-full to fill grid cell */}
        <div className="lg:col-span-2 flex flex-col gap-8 h-full">
            
            {/* The Nole Standard - 3D Flip Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white pl-4 border-l-4 border-aurora-blue">The Nole Standard</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FlipCard 
                  title="No Hype"
                  description="We filter out the noise. We ignore trends that don't solve real problems. Only proven, effective strategies that work today."
                  icon={<span className="font-cinzel text-3xl text-aurora-blue">1</span>}
                  accentColor="from-blue-500 to-cyan-400"
                  delay={0}
                />
                <FlipCard 
                  title="Practical Use"
                  description="Theory is useless without action. Every lesson includes a real-world application you can use in your workflow immediately."
                  icon={<span className="font-cinzel text-3xl text-aurora-gold">2</span>}
                  accentColor="from-yellow-500 to-orange-400"
                  delay={100}
                />
                <FlipCard 
                  title="Guided Path"
                  description="You are never alone. From your first prompt to building complex agents, we provide the map and the compass for your journey."
                  icon={<span className="font-cinzel text-3xl text-aurora-purple">3</span>}
                  accentColor="from-purple-500 to-pink-400"
                  delay={200}
                />
              </div>
            </div>

            {/* The Meaning of Nole Section - h-fit keeps it compact */}
            <div className="w-full h-fit bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-800 py-4 px-5 rounded-2xl group relative hover:border-aurora-purple/50 transition-all duration-300">
                {/* Aurora Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                    <h3 className="text-sm font-bold text-white mb-2 text-aurora-gold">Why "Nole"?</h3>
                    <div className="text-slate-300 text-sm leading-relaxed space-y-2 font-light">
                        <p>
                            In J.R.R. Tolkien's Middle-earth legendarium, Sindarin is the language of the Grey Elves. The word <strong>Nole</strong> (pronounced <em>no-leh</em>) translates to <em>"deep knowledge"</em>, <em>"lore"</em>, or <em>"study"</em>. 
                        </p>
                        <p>
                            Tolkien poured decades of his life into crafting a world rich with history. He understood that true depth takes time. This platform is a repository of enduring wisdom—not fleeting trends.
                        </p>
                        <p className="text-slate-400 border-l-2 border-aurora-purple pl-4 italic pt-1 text-xs">
                            My goal is to pass this <em>Nole</em> on to you, illuminating the path to AI mastery.
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Scrolls - Flex Grow to match Right Column Height */}
            <div className="flex-1 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="text-xl font-semibold text-slate-300 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-aurora-purple"></span> 
                        Recent Scrolls
                    </h3>
                    <button 
                        onClick={() => onNavigate(ViewState.ARCHIVES)} 
                        className="text-[11px] text-aurora-blue hover:text-white transition-colors uppercase tracking-wider font-semibold flex items-center gap-1"
                    >
                        View All <ArrowRight size={12} />
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <ArticleCard 
                        title="The Art of Prompting" 
                        excerpt="Why talking to AI is more like creative writing than coding."
                        readTime="5 min read"
                        onClick={() => onReadArticle(1)}
                        keyPoints={[
                            "Contextual framing vs. direct commands",
                            "The power of persona adoption",
                            "Iterative refinement strategies"
                        ]}
                    />
                    <ArticleCard 
                        title="Starting with the Perfect Tool" 
                        excerpt={
                            <span>
                                There is no 'One Tool to Rule Them All.'
                                <span className="block mt-1">A guide to finding the right companion for your daily quests.</span>
                            </span>
                        }
                        readTime="7 min read"
                        onClick={() => onReadArticle(2)}
                        keyPoints={[
                            "Identify the specific job to be done",
                            "Compare Gemini, Claude, & ChatGPT",
                            "Build a focused, effective toolkit"
                        ]}
                    />
                </div>
            </div>
        </div>

        {/* Right Column (1/3): Flex col + h-full to fill grid cell */}
        <div className="flex flex-col gap-8 h-full">
          
          {/* Counsel of the Wise Group */}
          <div>
             {/* Ghost Header for alignment */}
             <div className="text-2xl font-bold text-transparent pl-4 border-l-4 border-transparent select-none pointer-events-none mb-6" aria-hidden="true">
               Ghost Header
             </div>

             {/* Counsel Card */}
             <div> 
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-3 relative overflow-hidden group h-fit rounded-2xl border border-slate-800 hover:border-aurora-purple/50 transition-all duration-300">
                {/* Aurora Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 pointer-events-none" />

                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                
                <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="text-aurora-gold" size={16} />
                      <h3 className="text-[11px] font-bold text-white tracking-wide uppercase">Counsel of the Wise</h3>
                    </div>
                    
                    <button 
                      onClick={handleSubscribe}
                      className={`p-1.5 rounded-full transition-all duration-300 ${
                        isSubscribed 
                          ? 'bg-aurora-gold/20 text-aurora-gold shadow-[0_0_10px_rgba(255,212,59,0.3)]' 
                          : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {isSubscribed ? <BellRing size={14} /> : <Bell size={14} />}
                    </button>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed italic relative z-10 border-l-2 border-aurora-gold/50 pl-3 py-1 mb-2">
                  "Do not fear the unknown, for it is merely knowledge waiting to be illuminated. Start small: replace one repetitive task with an AI script today."
                </p>
                
                <div className="flex items-center justify-between text-[11px] text-slate-500 relative z-10 font-medium tracking-wide uppercase border-t border-slate-800 pt-2">
                  <span className="bg-slate-800/50 px-2 py-0.5 rounded text-slate-400">Updated Weekly</span>
                  {isSubscribed && (
                    <span className="text-aurora-gold flex items-center gap-1">
                        <CheckCircle size={10} />
                        Subscribed
                    </span>
                  )}
                </div>

                {showNotificationToast && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-aurora-gold text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-fade-in z-20 whitespace-nowrap">
                        {isSubscribed ? 'Notifications Enabled!' : 'Notifications Disabled'}
                    </div>
                )}
              </div>
             </div>
          </div>

          {/* THE PROMPT FORGE - flex-1 forces it to fill remaining height */}
          <div className="flex flex-col gap-4 border border-slate-800/60 rounded-2xl p-4 bg-slate-950/20 flex-1 h-full">
             {/* Header */}
             <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-lg text-slate-300 shadow-sm border border-slate-700">
                        <Hammer size={18} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-none">The Prompt Forge</h3>
                        <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-1">Beginner Toolkit</p>
                    </div>
                </div>
             </div>

             {/* Guide Box */}
             <div className="bg-slate-900/50 rounded-lg p-3 text-xs space-y-2 border border-slate-800">
                <div className="flex items-start gap-2">
                    <HelpCircle size={14} className="text-aurora-blue shrink-0 mt-0.5" />
                    <p className="text-slate-400 leading-relaxed">
                        Instructions for your AI model. Hover to preview, click to copy.
                    </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/50 px-2 opacity-70">
                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      <MousePointer size={10} /> Select
                    </span>
                    <span className="text-slate-700">→</span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Copy size={10} /> Copy
                    </span>
                    <span className="text-slate-700">→</span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Terminal size={10} /> Paste
                    </span>
                </div>
             </div>

             {/* Prompts List */}
             <div className="space-y-2">
                {GOLDEN_PROMPTS.map((prompt, idx) => (
                    <div 
                        key={prompt.id} 
                        className="group relative bg-slate-950 border border-slate-800 rounded-lg p-3 hover:border-aurora-purple/40 hover:bg-slate-900 transition-all duration-300 cursor-default"
                        onMouseEnter={() => setActivePreview(prompt.template)}
                        onMouseLeave={() => setActivePreview(null)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* LOTR Number */}
                                <span className="font-cinzel text-xl text-slate-700 font-bold group-hover:text-aurora-gold transition-colors duration-300 w-6 text-center">
                                  {idx + 1}
                                </span>

                                <div className={`p-1.5 rounded-md border ${prompt.color}`}>
                                    {prompt.icon}
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-200">{prompt.title}</h4>
                                    <p className="text-[11px] text-slate-500 italic truncate max-w-[140px]">"{prompt.trigger}"</p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => handleCopy(prompt.id, prompt.template)}
                                className={`p-1.5 rounded-md transition-all duration-200 ${
                                    copiedId === prompt.id 
                                    ? 'bg-aurora-green/20 text-aurora-green' 
                                    : 'bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-700'
                                }`}
                                title="Copy Template"
                            >
                                {copiedId === prompt.id ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                        </div>
                    </div>
                ))}
             </div>

             {/* Preview Area - Integrated at bottom with FIXED height and MT-AUTO to push to bottom */}
             <div className="mt-auto h-[130px] overflow-y-auto px-3 py-3 bg-slate-900/30 rounded-lg border border-slate-800/50 custom-scrollbar">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-2 font-bold opacity-70 sticky top-0 bg-slate-900/0 backdrop-blur-none">Template Preview</p>
                <div className="text-sm leading-relaxed text-slate-300 font-sans break-words">
                    {activePreview ? (
                        <span className="animate-fade-in block">{activePreview}</span>
                    ) : (
                        <span className="text-slate-600 italic text-xs">Hover over a tool above to reveal the template...</span>
                    )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ title, excerpt, readTime, onClick, keyPoints }: { title: string, excerpt: React.ReactNode, readTime: string, onClick: () => void, keyPoints: string[] }) => (
    <div onClick={onClick} className="group relative p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-aurora-blue/40 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer flex flex-col h-full shadow-sm hover:shadow-aurora-blue/5">
        <h4 className="font-bold text-white mb-2 group-hover:text-aurora-blue transition-colors text-sm md:text-base">{title}</h4>
        <div className="text-xs text-slate-400 mb-4 leading-relaxed">{excerpt}</div>
        
        {/* Key Points Section */}
        <div className="mb-4 flex-grow">
             <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-800/50 pb-1 w-fit">Key Points</p>
             <ul className="space-y-1.5">
                {keyPoints.map((point, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-tight">
                        <span className="w-1 h-1 rounded-full bg-aurora-purple mt-1.5 shrink-0"></span>
                        {point}
                    </li>
                ))}
             </ul>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-800/50">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{readTime}</span>
            <div className="flex items-center text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors gap-1 font-medium">
                Read Scroll
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
        </div>
    </div>
);
