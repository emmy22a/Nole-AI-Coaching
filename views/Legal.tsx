import React from 'react';
import { ShieldAlert, Scale, Lock } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

export const Legal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-4">
      <header className="mb-12 border-b border-slate-800 pb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Legal Disclaimer & Privacy Policy</h2>
        <p className="text-slate-400">
          Please read this important information regarding the use of Nole AI resources.
        </p>
      </header>

      <div className="space-y-6">
        <GlowCard className="bg-slate-900/40 p-8 space-y-4">
          <div className="flex items-center gap-3 text-aurora-gold mb-2">
            <Scale size={24} />
            <h3 className="text-xl font-bold text-white">General Disclaimer</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            The information provided on Nole AI ("the Site") is for general informational and educational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
        </GlowCard>

        <GlowCard className="bg-slate-900/40 p-8 space-y-4">
          <div className="flex items-center gap-3 text-aurora-purple mb-2">
            <ShieldAlert size={24} />
            <h3 className="text-xl font-bold text-white">AI Tools & Recommendations Liability</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Nole AI provides recommendations for third-party Artificial Intelligence tools and software. We do not own, control, or operate these third-party tools. We cannot guarantee the performance, safety, or reliability of any third-party AI tool recommended on this site.
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
             <li><strong>Usage Risk:</strong> AI tools can produce unpredictable, inaccurate, or biased outputs. Users are responsible for verifying all AI-generated content.</li>
             <li><strong>Data Security:</strong> Users are responsible for their own data privacy when interacting with third-party tools. Do not input sensitive or confidential information into public AI models.</li>
             <li><strong>No Endorsement:</strong> A recommendation does not constitute a legal endorsement. Relationships with software providers may change without notice.</li>
          </ul>
        </GlowCard>

        <GlowCard className="bg-slate-900/40 p-8 space-y-4">
          <div className="flex items-center gap-3 text-aurora-blue mb-2">
            <Lock size={24} />
            <h3 className="text-xl font-bold text-white">Privacy & API Usage</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            This application utilizes the Google Gemini API to provide interactive chat and recommendation features. 
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong>Data Transmission:</strong> When you use the "Nole Assistant" or "Recommended Tools" features, your text inputs are sent to Google's servers for processing. By using these features, you acknowledge and agree to Google's Generative AI terms of service.
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong>Data Storage:</strong> Nole AI does not permanently store your chat history or personal data on our servers. Your session data is local to your browser session.
          </p>
        </GlowCard>
      </div>

      {/* Easter Egg - Balanced Spacing */}
      <div className="mt-40 mb-2 flex flex-col items-center justify-center opacity-30 hover:opacity-100 transition-all duration-1000 group">
         <p className="font-cinzel text-sm text-aurora-gold mb-4 tracking-[0.3em] group-hover:text-amber-300 shadow-aurora-gold drop-shadow-[0_0_5px_rgba(255,212,59,0.5)]">
            Keep it secret. Keep it safe.
         </p>
         <div className="relative w-12 h-12 flex items-center justify-center">
            {/* The Ring Glow */}
            <div className="absolute inset-0 rounded-full bg-aurora-gold/20 blur-xl animate-pulse"></div>
            {/* The Ring Itself */}
            <div className="w-10 h-10 rounded-full border-[3px] border-aurora-gold shadow-[0_0_15px_rgba(255,212,59,0.6)] animate-pulse-slow flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
            </div>
         </div>
      </div>
    </div>
  );
};