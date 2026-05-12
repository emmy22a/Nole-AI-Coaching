
import React, { useState } from 'react';
import { GlowCard } from '../components/GlowCard';
import { ScrollText, Calendar, ArrowRight, BookOpen, Sparkles, ChevronLeft, Check, AlertTriangle, MessageSquare, Layers } from 'lucide-react';

export const Archives: React.FC<{ initialArticleId?: number }> = ({ initialArticleId }) => {
  const [readingArticleId, setReadingArticleId] = useState<number | null>(initialArticleId || null);

  // Effect to sync prop changes if navigated directly
  React.useEffect(() => {
    if (initialArticleId) {
        setReadingArticleId(initialArticleId);
    }
  }, [initialArticleId]);

  const articles = [
    { 
      id: 1,
      title: "The Art of Prompting", 
      date: "May 12, 2026", 
      readTime: "5 min", 
      excerpt: "Speaking with AI is more an act of lore-mastery than of cold logic. Mastering the nuance of language is the key to unlocking better results.", 
      category: "Foundations" 
    },
    { 
      id: 2,
      title: "Starting with the Perfect Tool", 
      date: "May 12, 2026", 
      readTime: "7 min", 
      excerpt: <>There is no 'One Tool to Rule Them All.'<br /><span className="block mt-1">A guide to finding the right companion for your daily quests.</span></>, 
      category: "Strategy" 
    },
    { 
      id: 3,
      title: "The Hybrid Workflow", 
      date: "May 12, 2026", 
      readTime: "3 min", 
      excerpt: "How to integrate LLMs without losing your personal touch. A guide to co-creation rather than replacement.", 
      category: "Productivity" 
    },
    { 
      id: 4,
      title: "Entering the Agentic Era", 
      date: "May 12, 2026", 
      readTime: "10 min", 
      excerpt: "Exploring agents, automation, and the changing tides of generative technology.", 
      category: "Future Tech" 
    }
  ];

  // Article Content Database
  const articleContent: Record<number, React.ReactNode> = {
    1: (
        <div className="space-y-8 animate-fade-in">
           <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed [&>p]:mb-6">
             <p>
               There is a misconception that using AI requires technical expertise, like learning Python or HTML. It doesn't. Prompting is not coding; it is <strong>communication</strong>. It is closer to delegating a task to a talented but literal-minded junior intern than it is to programming a computer.
             </p>
             <p>
               If you ask an intern to "write a report," you will get a generic, useless document. If you ask them to "write a 2-page summary of Q3 sales trends for the executive board, highlighting our growth in the APAC region," you will get exactly what you need. AI works the same way.
             </p>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">The P.C.T.F. Framework</h3>
             <p>To consistently get high-quality outputs, I use a simple formula derived from the essentials of effective prompting. Every major AI model (Gemini, ChatGPT, Claude) responds well to this structure:</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-aurora-purple/30 transition-colors">
                    <h4 className="font-bold text-aurora-purple mb-2 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-aurora-purple/20 flex items-center justify-center text-xs">P</div> Persona</h4>
                    <p className="text-sm text-slate-400">Tell the AI who to be. "Act as a Senior Marketing Manager" or "Act as a strict Editor." This sets the tone and expertise level.</p>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-aurora-blue/30 transition-colors">
                    <h4 className="font-bold text-aurora-blue mb-2 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-aurora-blue/20 flex items-center justify-center text-xs">C</div> Context</h4>
                    <p className="text-sm text-slate-400">Give the background. "I am writing to a skeptical client who is worried about budget." The model needs to know the <em>why</em>.</p>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-aurora-green/30 transition-colors">
                    <h4 className="font-bold text-aurora-green mb-2 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-aurora-green/20 flex items-center justify-center text-xs">T</div> Task</h4>
                    <p className="text-sm text-slate-400">Be specific about the action. "Draft an email" is weak. "Draft a persuasive 200-word email with a clear call to action" is strong.</p>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-aurora-gold/30 transition-colors">
                    <h4 className="font-bold text-aurora-gold mb-2 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-aurora-gold/20 flex items-center justify-center text-xs">F</div> Format</h4>
                    <p className="text-sm text-slate-400">Define the output. "Format as a bulleted list," "Create a table," or "Write in JSON." Don't make the AI guess the layout.</p>
                </div>
             </div>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">Before & After</h3>
             <p>Let's look at a real-world example of how adding structure transforms the result.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl relative">
                  <span className="absolute top-3 right-3 text-red-500 text-[10px] font-bold uppercase tracking-wider">Weak Prompt</span>
                  <div className="mt-6">
                      <p className="text-red-200 text-sm leading-relaxed">"Write a job description for a social media manager."</p>
                  </div>
                  <p className="mt-4 text-xs text-red-400/70 italic">Result: A generic, boring list of duties that looks like every other post on LinkedIn.</p>
              </div>

              <div className="bg-green-950/20 border border-green-900/50 p-6 rounded-xl relative">
                  <span className="absolute top-3 right-3 text-green-500 text-[10px] font-bold uppercase tracking-wider">Strong Prompt</span>
                  <div className="mt-6">
                      <div className="text-green-200 text-xs space-y-3 leading-relaxed">
                          <p><span className="text-green-500 font-bold block mb-1">Act as:</span> A playful Tech Recruiter.</p>
                          <p><span className="text-green-500 font-bold block mb-1">Context:</span> We are a startup with a Gen-Z audience.</p>
                          <p><span className="text-green-500 font-bold block mb-1">Task:</span> Write a job description for a Social Media Manager.</p>
                          <p><span className="text-green-500 font-bold block mb-1">Format:</span> Use emojis, keep it under 300 words, and include a 'Vibe Check' section.</p>
                      </div>
                  </div>
              </div>
           </div>

            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed [&>p]:mb-6">
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Secret Weapon: Chain Prompting</h3>
              <p>
                If the AI still isn't "getting it," the most powerful technique you can use is called <strong>Chain Prompting</strong>. Use the output from one prompt as context in the input of your next prompt. You can also request the AI model to show you its "Thought Reasoning" so you can see exactly why the AI is giving you the specific output.
              </p>
              <div className="not-prose space-y-3 my-6">
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                    <p className="text-xs text-aurora-gold font-bold uppercase mb-2">Prompt 1: Structure</p>
                    <p className="text-slate-300 text-xs leading-relaxed">"Review the attached feedback from my client. Summarize the major pain points and categorize them by 'Urgent' and 'Minor'."</p>
                </div>
                <div className="flex justify-center text-slate-600">
                    <ArrowRight size={14} className="rotate-90" />
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                    <p className="text-xs text-aurora-green font-bold uppercase mb-2">Prompt 2: Action (Chained)</p>
                    <p className="text-slate-300 text-xs leading-relaxed">"Based on those 'Urgent' pain points you identified, draft a response to the client demonstrating how our new update directly addresses their concerns. Show me your thought reasoning before writing the email."</p>
                </div>
              </div>
              <p>
                By layering your requests, you provide the AI with a deeper foundation for its final output. It stops guessing and starts building upon its own logical steps.
              </p>
             <p className="mt-6 border-l-4 border-aurora-blue pl-4 italic text-slate-400">
               "Prompting is an iterative process. Don't expect perfection on the first try. Talk to the model, refine your instructions, and guide it to the finish line."
             </p>
           </div>
        </div>
    ),
    2: (
        <div className="space-y-8 animate-fade-in">
           <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed [&>p]:mb-6">
             <p>
               The AI landscape is noisy, and frankly, it can be exhausting. It feels like every week a new "revolutionary" tool drops, and your LinkedIn feed is flooded with people claiming you're already behind if you haven't mastered it.
             </p>
             <p>
               Take a deep breath. You aren't behind. You just need to find the right tool for the job.
             </p>
             <p>
               Personally, my day-to-day work happens almost exclusively inside <strong>Google Gemini</strong>. That’s simply because my workplace is built on Google Workspace, and it integrates seamlessly with the docs and sheets I use every hour. It’s what I’m most comfortable with. But that doesn’t mean <em>you</em> have to use Gemini. My "best" tool might be your "worst" tool if your workflow looks different.
             </p>
             <p>
               Just like you wouldn't use a hammer to cut a steak, you shouldn't use a coding assistant to write a poem. Let's break down the landscape into manageable buckets so you can choose what works for <strong>you</strong>.
             </p>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Know Your Tool Types</h3>
             <p>Before picking a brand, pick a category. Most tools fall into three buckets:</p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-bold text-aurora-blue mb-2">Generative</h4>
                    <p className="text-sm text-slate-400"><strong>The Creators.</strong> Best for brainstorming, drafting emails, creating images, and rewriting text. (e.g., Midjourney, Nano Banana)</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-bold text-aurora-purple mb-2">Agentic</h4>
                    <p className="text-sm text-slate-400"><strong>The Doers.</strong> These tools act on your behalf. They can book meetings, write code, or browse the web. (e.g., Gemini, Claude Cowork)</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-bold text-aurora-gold mb-2">Organizational</h4>
                    <p className="text-sm text-slate-400"><strong>The Helpers.</strong> They summarize meetings, organize notes, and find files. (e.g., Otter.ai, Notion AI)</p>
                </div>
             </div>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. The Big Four: A Comparison</h3>
             <p>Most beginners start with a "General Purpose" model. Here is how the major players stack up right now.</p>
           </div>

           {/* Custom Comparison Table */}
           <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/50">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                   <th className="p-4 font-bold w-1/4">Model</th>
                   <th className="p-4 font-bold w-1/3">Best For...</th>
                   <th className="p-4 font-bold w-1/3">Watch Out For...</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-800 text-sm">
                 <tr className="hover:bg-slate-900 transition-colors">
                   <td className="p-4 font-bold text-white flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div> ChatGPT (GPT-4)
                   </td>
                   <td className="p-4 text-slate-300">
                     <strong>General Logic & Reasoning.</strong> It is the jack-of-all-trades. Great for brainstorming, basic coding, and conversational advice.
                   </td>
                   <td className="p-4 text-slate-400 italic">
                     Can be "verbose" and wordy. Sometimes refuses prompts that are overly sensitive.
                   </td>
                 </tr>
                 <tr className="hover:bg-slate-900 transition-colors">
                   <td className="p-4 font-bold text-white flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-blue-500"></div> Gemini (Google)
                   </td>
                   <td className="p-4 text-slate-300">
                     <strong>Research & Ecosystem.</strong> If you live in Google Docs/Drive, this integrates perfectly. Excellent at processing large amounts of info.
                   </td>
                   <td className="p-4 text-slate-400 italic">
                     Creative writing style can vary. Sometimes refuses prompts that are overly sensitive.
                   </td>
                 </tr>
                 <tr className="hover:bg-slate-900 transition-colors">
                   <td className="p-4 font-bold text-white flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-orange-500"></div> Claude (Anthropic)
                   </td>
                   <td className="p-4 text-slate-300">
                     <strong>Writing & Coding.</strong> Known for having a more "human" tone and processing huge documents (PDFs) very accurately.
                   </td>
                   <td className="p-4 text-slate-400 italic">
                     Image generation is not its focus (yet). Strict safety filters can sometimes block harmless requests.
                   </td>
                 </tr>
                 <tr className="hover:bg-slate-900 transition-colors">
                   <td className="p-4 font-bold text-white flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-indigo-500"></div> MS CoPilot
                   </td>
                   <td className="p-4 text-slate-300">
                     <strong>The Office Worker.</strong> Built into Word/Excel. If you are in a corporate enterprise environment, this is your tool.
                   </td>
                   <td className="p-4 text-slate-400 italic">
                     Largely restricted to the Microsoft 365 ecosystem with long processing time and frequent error codes.
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>

           <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
             <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. The Nole Recommendation</h3>
             <p>
               Don't try to learn them all at once. Pick <strong>one</strong> based on your primary need:
             </p>
             <ul className="space-y-6 my-8">
                <li className="flex items-start gap-2">
                    <Check size={18} className="text-aurora-green mt-1 shrink-0" />
                    <span>Need to analyze PDF reports and write memos? Start with <strong>Claude</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                    <Check size={18} className="text-aurora-green mt-1 shrink-0" />
                    <span>Need to plan a vacation or brainstorm wild ideas? Start with <strong>ChatGPT</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                    <Check size={18} className="text-aurora-green mt-1 shrink-0" />
                    <span>Need to summarize emails and organize Drive files? Start with <strong>Gemini</strong>.</span>
                </li>
             </ul>
             <p className="mt-6 border-l-4 border-aurora-purple pl-4 italic text-slate-400">
               "The best AI tool is the one you actually use to solve a problem. Mastery comes from practice, not from collecting subscriptions."
             </p>
           </div>
        </div>
    ),
    3: (
        <div className="space-y-8 animate-fade-in">
           <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed [&>p]:mb-6">
             <p>
               The fear that AI will eventually replace the "human element" in professional work assumes that creativity is a destination. In reality, creativity is a craft, and every master craftsman throughout history has eventually adopted better tools.
             </p>
             <p>
               The goal isn't to let the AI speak for you; it’s to use it as a skilled apprentice that handles the heavy lifting so you can focus on the vision. Here is how to build a hybrid workflow that keeps your personal touch front and center.
             </p>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. The "Lore-Master" Approach to Prompting</h3>
             <p>
               When you treat a prompt like a cold command, you get a cold result. Instead, treat it as a transfer of lore.
             </p>
             <p>
               Don't just ask for a "blog post about marketing." Give the AI your unique perspective, your specific experiences, and your "voice." When you provide the context, the AI isn't replacing your thoughts—it’s acting as a scribe for them.
             </p>
             <div className="bg-slate-900 border-l-4 border-aurora-gold p-4 my-6 italic text-sm text-slate-400">
                "The Subtle Nod: Think of yourself as the Lore-master. The AI may hold the pen, but you are the one providing the ancient wisdom and the direction of the tale."
             </div>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Iteration: The Refiner’s Fire</h3>
             <p>
               The biggest mistake in an AI workflow is "one-and-done" prompting. A hybrid workflow relies on the Refiner’s Fire.
             </p>

             <div className="space-y-4 my-8 not-prose">
                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-aurora-blue font-bold text-sm uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-aurora-blue"></div>
                        Draft 1
                    </div>
                    <p className="text-slate-400 text-sm italic">Let the AI build the skeleton. Focus on structure and raw information density.</p>
                </div>
                
                <div className="flex justify-center text-slate-700">
                    <ArrowRight size={16} className="rotate-90" />
                </div>

                <div className="bg-aurora-purple/5 border border-aurora-purple/20 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-aurora-purple font-bold text-sm uppercase tracking-wider">
                        <Sparkles size={14} />
                        The Pivot
                    </div>
                    <p className="text-slate-300 text-sm">Identify where the AI sounds too "robotic" and inject your own anecdotes or unique terminology. Correct the logic gaps.</p>
                </div>

                <div className="flex justify-center text-slate-700">
                    <ArrowRight size={16} className="rotate-90" />
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-aurora-green font-bold text-sm uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-aurora-green"></div>
                        Draft 2
                    </div>
                    <p className="text-slate-400 text-sm italic">Ask the AI to rewrite specific sections based on your corrections. Guide it through the final polish.</p>
                </div>
             </div>

             <p>
               This back-and-forth ensures the final output has been "tempered" by your own judgment.
             </p>

             <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Strategic Automation</h3>
             <p>
               Integration doesn't mean the AI is involved in every step. A healthy hybrid workflow identifies the "low-value" tasks for automation so you can protect your "high-value" creative energy.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-red-900/10 border border-red-900/20 p-6 rounded-2xl">
                    <h5 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle size={16} /> AI Handles
                    </h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li className="flex items-center gap-2 font-mono">Outlining</li>
                        <li className="flex items-center gap-2 font-mono">Paper Summarization</li>
                        <li className="flex items-center gap-2 font-mono">Formatting</li>
                    </ul>
                </div>
                <div className="bg-aurora-green/10 border border-aurora-green/20 p-6 rounded-2xl">
                    <h5 className="text-aurora-green font-bold mb-3 flex items-center gap-2">
                        <Check size={16} /> You Handle
                    </h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center gap-2">The "Hook"</li>
                        <li className="flex items-center gap-2">Emotional Resonance</li>
                        <li className="flex items-center gap-2 font-bold tracking-tight">The Final Vibe Check</li>
                    </ul>
                </div>
             </div>

             <h3 className="text-2xl font-bold text-white mt-12 mb-6 text-center">The Horizon of Co-Creation</h3>
             <p>
               As we move into this next age of technology, the most successful professionals won't be those who use AI the most, but those who use it with the most intent.
             </p>
             <p>
               When you stop viewing AI as a replacement and start seeing it as a fellowship of tools, you unlock a level of productivity that doesn't sacrifice who you are. The work begins to move with a new efficiency, but the "heart" of the project remains unmistakably yours.
             </p>
           </div>
        </div>
    ),
    4: (
        <div className="space-y-8 animate-fade-in">
           <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed [&>p]:mb-6">
             <p>
               The transition from tools we <em>use</em> to partners we <em>work with</em> is the defining shift of our decade. We are moving away from simple interfaces and toward autonomous intelligence. To understand where we are going, we must look at the path that led us here.
             </p>
             
             <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Evolution of the Interface</h3>
             <p>Our relationship with digital intelligence has evolved through three distinct phases:</p>

             <div className="space-y-6 my-10 not-prose">
                <div className="relative pl-8 border-l-2 border-slate-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-900"></div>
                    <h4 className="text-aurora-blue font-bold mb-1">2016 – 2022: The "Command" Era</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Think of the original smart home assistants like Google Home or Amazon Alexa. They were reactive butlers; helpful, but very literal. They required specific commands like "Turn on the lights" or "Set a timer." They had zero natural interoperability with other apps or platforms.
                    </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-slate-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-900"></div>
                    <h4 className="text-aurora-purple font-bold mb-1">2023 – 2024: The "Chat" Era</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        The first massive shift to generative AI. Moving from butlers to knowledgeable researchers, AI could synthesize huge amounts of data and write in a human style. But the intelligence was isolated inside a Chat Box. It could write a vacation itinerary, but it couldn't find your flight confirmation in your email or add activities to your calendar. It provided info, but you still had to execute.
                    </p>
                </div>

                <div className="relative pl-8 border-l-2 border-aurora-gold/50">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-aurora-gold shadow-[0_0_10px_rgba(255,212,59,0.5)]"></div>
                    <h4 className="text-aurora-gold font-bold mb-1">Now: The "Agent" Era</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        We've moved beyond research to proactive execution. Reasoning and autonomy make this phase different. Instead of just answering questions, an agent reasons through a complex goal. If you say "Help me prep for my QBR," the agent understands it needs to look at Docs in your Drive, check your calendar for conflicts, and draft a meeting proposal to send via email.
                    </p>
                </div>
             </div>

             <h3 className="text-2xl font-bold text-white mt-12 mb-6">Choosing Your Agent: Four Vital Considerations</h3>
             <p>As you begin to build your autonomous workflow, look for these four pillars of agentic capability:</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-aurora-blue/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-aurora-blue/10 flex items-center justify-center text-aurora-blue mb-4">
                      <Layers size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">1. The Workspace Surface Area</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                      What apps do you want the AI to work within? For example, Gemini is deeply integrated into Google Workspace, giving it "Permissioned Native Access" to your Docs, Sheets, and Gmail for seamless day-to-day coordination.
                  </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-aurora-purple/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-aurora-purple/10 flex items-center justify-center text-aurora-purple mb-4">
                      <MessageSquare size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">2. Agent-to-Agent Protocol</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                      Your agent should talk to other agents, not just scrape sites. When booking a flight, an "A2A" system allows your agent to negotiate with an airline's agent to find the best seat based on your historical preferences.
                  </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-aurora-green/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-aurora-green/10 flex items-center justify-center text-aurora-green mb-4">
                      <Sparkles size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">3. Multi-modal Reasoning Loops</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                      Agentic tools can "see" and "hear" your environment. Point your camera at equipment in your garage; the agent doesn't just identify it—it finds the receipt in email, checks the warranty in Drive, and drafts a return request automatically.
                  </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-aurora-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-aurora-gold/10 flex items-center justify-center text-aurora-gold mb-4">
                      <ScrollText size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">4. Showing the Thought Signature</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                      To solve the "Black Box Problem," agents use thought signatures—reasoning logs that show the decision path. It maintains the "human-in-the-loop" requirement, pausing for you to confirm critical actions like a final purchase click.
                  </p>
              </div>
           </div>

           <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed mt-8 [&>p]:mb-6">
             <h3 className="text-2xl font-bold text-white mt-12 mb-6">Putting it into Practice: The "Distraction-Proof" Workflow</h3>
             <p>
               Theoretical pillars are good, but how do agents actually change your day-to-day? To illustrate this, let's look at a real-world scenario from the middle of the NHL Stanley Cup Playoffs.
             </p>
             <p>
               Even though my favorite teams have already been eliminated, I still want to watch the remaining games and see who ends up hoisting the cup. However, since I'm chronically late and distracted, the chances of me remembering what time games are on is slim-to-none.
             </p>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 not-prose">
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl h-full flex flex-col justify-center">
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            Instead of manually checking a schedule every day, I went to <code className="text-aurora-gold">nhl.com/schedule</code> which shows all upcoming games. I opened the <strong>Gemini-in-Chrome side bar</strong> and simply asked:
                        </p>
                        <div className="bg-slate-950 p-4 rounded-lg border-l-4 border-aurora-blue italic text-slate-400 text-sm mb-4">
                            "Add all round two games to my calendar as events and set a reminder an hour before the game to notify me. Include the names of the teams playing and what network(s) are broadcasting the game in the description."
                        </div>
                        <p className="text-sm text-slate-400">
                            Gemini confirmed the games and dates. I selected <span className="text-aurora-green font-medium">"Add to calendar"</span> and just like that—all Round 2 games were present with active reminders. No manual entries, no missed puck drops.
                        </p>
                    </div>
                </div>

                <div className="relative aspect-video bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed overflow-hidden group flex items-center justify-center">
                    {/* Video Placeholder */}
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-aurora-blue/10 flex items-center justify-center text-aurora-blue mb-4 group-hover:scale-110 transition-transform">
                            <Sparkles size={32} />
                        </div>
                        <h5 className="text-white font-bold mb-2">NHL Demo Video Placeholder</h5>
                        <p className="text-[10px] text-slate-500 max-w-[200px] leading-relaxed">
                            Replace the code below with your Imgur .mp4 link to see the execution in action.
                        </p>
                    </div>
                </div>
             </div>

             <h3 className="text-xl font-bold text-white mt-12 mb-6 opacity-50">Future Study: Seamless Travel Planning</h3>
             <p className="opacity-50">
               Coming soon: An exploration of how agents navigate multi-modal constraints to book travel, manage confirmations, and handle itinerary changes autonomously.
             </p>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 not-prose opacity-40 grayscale">
                <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl border-dashed">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 mb-4"></div>
                    <div className="h-4 bg-slate-800 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2 mb-4"></div>
                    <div className="h-20 bg-slate-900 rounded mb-4"></div>
                </div>
                <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-900 flex items-center justify-center border-dashed">
                    <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">Awaiting Travel Data</p>
                </div>
             </div>

             <p className="border-t border-slate-800 pt-8 italic text-slate-400">
               "We are moving from a world where we tell computers what to do, to a world where we tell computers what we want to achieve. The difference is autonomy."
             </p>
           </div>
        </div>
    )
  };

  // ----------------------------------------------------------------------------------
  // READER MODE
  // ----------------------------------------------------------------------------------
  if (readingArticleId) {
    const article = articles.find(a => a.id === readingArticleId);
    
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <button 
                onClick={() => setReadingArticleId(null)}
                className="mb-6 flex items-center gap-2 text-sm text-aurora-blue hover:text-white transition-colors uppercase tracking-wider font-semibold group"
            >
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return to Archives
            </button>

            <article className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-aurora-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

                {/* Header */}
                <header className="mb-8 border-b border-slate-800 pb-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-bold text-aurora-gold uppercase tracking-wider border border-slate-700">
                            {article?.category}
                        </span>
                        <span className="text-slate-500 text-xs flex items-center gap-1">
                            <Calendar size={12} /> {article?.date}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {article?.title}
                    </h1>
                    <div className="text-xl text-slate-400 font-light leading-relaxed">
                        {article?.excerpt}
                    </div>
                </header>

                {/* Content Injection */}
                <div className="relative z-10">
                    {articleContent[readingArticleId] || (
                        <div className="text-center py-20 text-slate-500 italic">
                            <AlertTriangle className="mx-auto mb-2 opacity-50" />
                            This scroll is currently being transcribed. Check back soon.
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
  }

  // ----------------------------------------------------------------------------------
  // LIST MODE (Default)
  // ----------------------------------------------------------------------------------
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12 border-b border-slate-800 pb-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-aurora-purple/10 rounded-full blur-[50px] pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-700 shadow-sm shadow-aurora-purple/20">
            <ScrollText className="text-aurora-gold" size={24} />
          </div>
          The Archives
        </h2>
        <p className="text-slate-400 max-w-3xl text-lg relative z-10 leading-relaxed">
          A repository of scrolls, guides, and thoughts on the era of artificial intelligence.
          <br />
          Here we document the lore of the new age.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <GlowCard 
            key={article.id} 
            delay={index * 100} 
            className="flex flex-col h-full bg-slate-900/80 border-slate-800 p-6 md:p-8 hover:-translate-y-1 transition-transform duration-500 cursor-pointer"
          >
            {/* Click Handler Wrapper */}
            <div onClick={() => setReadingArticleId(article.id)} className="h-full flex flex-col">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full gap-4">
                    <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-aurora-blue uppercase tracking-widest px-2 py-1 bg-aurora-blue/5 border border-aurora-blue/20 rounded">
                        {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                    </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white hover:text-aurora-gold transition-colors leading-tight">
                    {article.title}
                    </h3>
                    
                    <div className="text-slate-400 leading-relaxed text-sm flex-grow border-l-2 border-slate-800 pl-4 py-1">
                    {article.excerpt}
                    </div>
                    
                    <div className="pt-6 mt-auto border-t border-slate-800/50 flex items-center justify-between">
                        <span className="text-xs text-slate-600 font-mono">{article.readTime} read</span>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group">
                        Read Scroll 
                        <ArrowRight size={16} className="text-aurora-purple group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </div>
          </GlowCard>
        ))}
      </div>
      
      {/* Full Width "More Scrolls" Banner - Only shown in List Mode */}
      <div className="mt-12 w-full">
        <div className="group relative py-4 px-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 overflow-hidden hover:border-aurora-gold/30 transition-colors duration-500">
             
             {/* Glowing Background on Hover */}
             <div className="absolute inset-0 bg-aurora-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Left Side: Icon & Text */}
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-900 rounded-full text-slate-600 group-hover:text-aurora-gold transition-colors duration-500 shadow-inner shrink-0">
                        <BookOpen size={18} />
                    </div>
                    <p className="text-slate-400 text-sm font-medium">
                        More scrolls are being transcribed by the scribes each week.
                    </p>
                </div>

                {/* Right Side: Easter Egg Quote */}
                <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-help">
                    <p className="opacity-0 group-hover:opacity-100 transition-all duration-700 text-[11px] text-aurora-gold font-cinzel tracking-widest italic text-center md:text-right">
                        "Someone else always has to carry on the story."
                    </p>
                    <Sparkles size={14} className="text-slate-600 group-hover:text-aurora-gold animate-pulse shrink-0" />
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};
