import React, { useState, useEffect } from 'react';
import { Key, CheckCircle, Copy, Clock, Timer } from 'lucide-react';
import { FREE_TRIAL_KEY } from '../constants';

const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 Hours in milliseconds

const TrialCard: React.FC = () => {
  const [claimed, setClaimed] = useState(false);
  const [key, setKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const savedKey = localStorage.getItem('realxiter_trial_key');
    const savedTime = localStorage.getItem('realxiter_claim_time');

    if (savedKey && savedTime) {
      const claimTime = parseInt(savedTime, 10);
      const now = Date.now();

      if (now - claimTime < COOLDOWN_MS) {
        // Cooldown active
        setKey(savedKey);
        setClaimed(true);
      } else {
        // Cooldown expired
        localStorage.removeItem('realxiter_trial_key');
        localStorage.removeItem('realxiter_claim_time');
      }
    }
  }, []);

  useEffect(() => {
    let interval: number;

    if (claimed) {
      // Update timer immediately
      const updateTimer = () => {
        const savedTime = localStorage.getItem('realxiter_claim_time');
        if (savedTime) {
          const claimTime = parseInt(savedTime, 10);
          const now = Date.now();
          const remaining = COOLDOWN_MS - (now - claimTime);

          if (remaining <= 0) {
            // Timer finished
            setClaimed(false);
            setKey('');
            localStorage.removeItem('realxiter_trial_key');
            localStorage.removeItem('realxiter_claim_time');
            setTimeLeft('');
          } else {
            // Format time HH:MM:SS
            const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((remaining / (1000 * 60)) % 60);
            const seconds = Math.floor((remaining / 1000) % 60);
            setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          }
        }
      };

      updateTimer(); // Run once immediately
      interval = window.setInterval(updateTimer, 1000);
    }

    return () => clearInterval(interval);
  }, [claimed]);

  const handleClaim = () => {
    // If FREE_TRIAL_KEY is set in constants.ts, use it. Otherwise generate random.
    const newKey = (FREE_TRIAL_KEY && FREE_TRIAL_KEY.trim() !== '')
        ? FREE_TRIAL_KEY
        : `REALXITER-TRIAL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const now = Date.now();
    
    localStorage.setItem('realxiter_trial_key', newKey);
    localStorage.setItem('realxiter_claim_time', now.toString());

    setKey(newKey);
    setClaimed(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative h-full overflow-hidden bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:border-brand-500/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col justify-center">
       {/* Background Glow */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/10 transition-colors duration-500"></div>
       <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity blur duration-500 rounded-lg pointer-events-none" />

       <div className="relative z-10 w-full flex flex-col gap-5">
          {/* Header Row - Centered or Top aligned */}
          <div className="flex items-center gap-3 self-start">
             <div className="p-2 bg-brand-500/10 rounded-full border border-brand-500/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Key className="text-brand-500 w-5 h-5" />
             </div>
             <div>
                <h3 className="text-base font-bold text-white font-mono leading-tight">Free Trial Access</h3>
                <p className="text-zinc-400 text-xs">Every 24h</p>
             </div>
          </div>

          {/* Action Row - Key and Timer */}
          <div className="w-full">
             {!claimed ? (
                <button 
                  onClick={handleClaim}
                  className="w-full py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-md shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 active:scale-95 transition-all border border-brand-400/20 flex items-center justify-center gap-2"
                >
                  Claim Key
                </button>
             ) : (
                <div className="flex flex-col gap-3 w-full">
                   {/* Key Display - Full Width */}
                   <div className="flex items-center gap-2 bg-black/50 border border-brand-900/50 rounded-md p-3 w-full group-hover:border-brand-500/30 transition-colors">
                       <code className="text-brand-400 font-mono text-sm tracking-wide flex-grow text-center select-all break-all">
                          {key}
                       </code>
                       <button 
                         onClick={handleCopy}
                         className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors flex-shrink-0"
                         title="Copy to clipboard"
                       >
                          {copied ? <CheckCircle size={16} className="text-brand-500" /> : <Copy size={16} />}
                       </button>
                   </div>
                   
                   {/* Timer Display - Below Key */}
                   <div className="flex items-center justify-center gap-1.5 text-zinc-500 text-xs font-mono">
                      <Timer size={12} className="text-brand-500" />
                      <span>Next claim in: <span className="text-zinc-300 font-semibold">{timeLeft}</span></span>
                   </div>
                </div>
             )}
          </div>
       </div>
    </div>
  );
};

export default TrialCard;