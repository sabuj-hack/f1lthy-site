
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { STATUS_CONFIG } from '../constants';
import { Download, Play, List, ChevronDown, ChevronUp, FileText, Monitor, Smartphone, Clock, Tag } from 'lucide-react';

interface StatusRowProps {
  product: Product;
  id?: string;
  isFeaturesOpen: boolean;
  onToggleFeatures: () => void;
}

const StatusRow: React.FC<StatusRowProps> = ({ product, id, isFeaturesOpen, onToggleFeatures }) => {
  const [showGuide, setShowGuide] = useState(false);
  const StatusIcon = STATUS_CONFIG[product.status].icon;
  const statusDetails = STATUS_CONFIG[product.status];
  
  // Close guide if features are opened
  useEffect(() => {
    if (isFeaturesOpen) {
      setShowGuide(false);
    }
  }, [isFeaturesOpen]);

  const toggleGuide = () => {
    setShowGuide(!showGuide);
    if (isFeaturesOpen) {
      onToggleFeatures(); 
    }
  };

  const handleToggleFeatures = () => {
    onToggleFeatures();
    if (showGuide) setShowGuide(false);
  };

  return (
    <div 
        id={id}
        className="group relative overflow-hidden bg-zinc-900/40 border border-zinc-800 transition-all duration-500 rounded-lg mb-4 hover:border-brand-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
    >
        {/* Subtle glow background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur duration-500 pointer-events-none" />
        
        <div className="relative p-5 sm:p-7">
            <div className="flex flex-col xl:flex-row items-start gap-6">
                
                {/* Left Side: Badge & Title Info */}
                <div className="flex-1 min-w-0 w-full flex flex-col items-start text-left">
                    {/* Status Badge & Version - Stacked properly */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] uppercase font-bold tracking-wider ${statusDetails.bgColor} ${statusDetails.color} ${statusDetails.borderColor}`}>
                            <StatusIcon size={12} strokeWidth={3} />
                            {statusDetails.label}
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-800/50 text-zinc-400 text-[10px] uppercase font-bold tracking-wider font-mono">
                            <Tag size={12} />
                            {product.version}
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-[10px] uppercase font-bold tracking-wider font-mono">
                            <Clock size={12} />
                            Updated {product.lastUpdated}
                        </div>
                    </div>

                    {/* Title & Category */}
                    <div className="flex items-baseline gap-3 mb-4">
                        <h3 className="text-2xl font-black text-white group-hover:text-brand-400 transition-colors uppercase italic tracking-tighter">
                            {product.name}
                        </h3>
                    </div>

                    {/* Description - Aligned with the left padding */}
                    {product.description && (
                        <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-md p-4 w-full max-w-3xl">
                           <p className="text-sm text-zinc-400 font-sans leading-relaxed text-left">
                              {product.description}
                           </p>
                        </div>
                    )}
                </div>

                {/* Right Side: Action Buttons */}
                <div className="flex flex-col gap-2 w-full xl:w-auto shrink-0 xl:min-w-[280px]">
                    {/* Top Row of Secondary Buttons */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap xl:grid xl:grid-cols-2 gap-2">
                        {product.features && product.features.length > 0 && (
                            <button 
                            onClick={handleToggleFeatures}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-xs font-bold transition-all uppercase font-mono ${
                                isFeaturesOpen 
                                ? 'bg-zinc-800 text-white border-zinc-700' 
                                : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                            }`}
                          >
                            <List size={14} />
                            Features
                          </button>
                        )}

                        {product.youtubeVideoId && (
                             <button 
                             onClick={toggleGuide}
                             className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-xs font-bold transition-all uppercase font-mono ${
                                 showGuide 
                                 ? 'bg-zinc-800 text-white border-zinc-700' 
                                 : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                             }`}
                           >
                             <Play size={14} fill={showGuide ? "currentColor" : "none"} />
                             Video
                           </button>
                        )}

                        {product.requirementUrl && (
                           <a 
                             href={product.requirementUrl}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-bold uppercase transition-all font-mono"
                           >
                             <FileText size={14} />
                             Drivers
                           </a>
                        )}
                    </div>

                    {/* Middle Row of Utility Buttons */}
                    <div className="flex flex-col gap-2">
                        {product.recommendedEmulatorUrl && (
                           <a 
                             href={product.recommendedEmulatorUrl}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:text-white hover:border-zinc-600 text-[10px] font-bold uppercase transition-all font-mono"
                           >
                             <Monitor size={12} />
                             Recommended Emulator
                           </a>
                        )}
                        {product.cleanEmulatorUrl && (
                           <a 
                             href={product.cleanEmulatorUrl}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:text-white hover:border-zinc-600 text-[10px] font-bold uppercase transition-all font-mono"
                           >
                             <Smartphone size={12} />
                             Clean Emulator
                           </a>
                        )}
                    </div>

                    {/* Primary Download Button */}
                    {product.downloadUrl && (
                    <a 
                        href={product.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-brand-600 hover:bg-brand-500 text-white font-black text-sm transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 active:scale-[0.98] uppercase italic tracking-wider border border-brand-500/50"
                    >
                        <Download size={18} strokeWidth={3} />
                        Download Panel
                    </a>
                    )}
                </div>
            </div>
        </div>

        {/* Features List Section */}
        {isFeaturesOpen && product.features && (
            <div className="relative border-t border-zinc-800 bg-black/60 p-5 sm:p-7 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/50 pb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 font-mono">Module Security Status</span>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider font-mono">
                        <div className="flex items-center gap-1.5 text-green-500"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div> Safe</div>
                        <div className="flex items-center gap-1.5 text-yellow-400"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div> Risk</div>
                        <div className="flex items-center gap-1.5 text-red-500"><div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div> Unsafe</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {product.features.map((feature, idx) => {
                        let statusColor = "bg-zinc-500";
                        let textColor = "text-zinc-400";
                        let borderColor = "border-zinc-800/30";
                        
                        if (feature.status === 'SAFE') {
                            statusColor = "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]";
                            textColor = "text-zinc-200";
                        } else if (feature.status === 'UNSAFE') {
                            statusColor = "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]";
                            textColor = "text-red-400/80";
                            borderColor = "border-red-900/20";
                        } else if (feature.status === 'RISK') {
                            statusColor = "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.4)]";
                            textColor = "text-yellow-200/80";
                            borderColor = "border-yellow-900/20";
                        }

                        return (
                            <div key={idx} className={`flex items-center gap-3 p-2.5 rounded border ${borderColor} bg-zinc-950/40 hover:bg-zinc-900/60 transition-colors group/feature`}>
                                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusColor}`}></div>
                                <span className={`text-[11px] font-bold font-mono tracking-tight uppercase ${textColor} group-hover/feature:text-white transition-colors`}>{feature.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}

        {/* Embedded Video Section */}
        {showGuide && product.youtubeVideoId && (
            <div className="relative border-t border-zinc-800 bg-black/80 p-5 sm:p-7 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <Play size={14} className="text-brand-500" fill="currentColor" />
                        <span className="text-xs font-black uppercase tracking-widest text-zinc-400 font-mono">Instructional Video Deployment</span>
                    </div>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-950">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${product.youtubeVideoId.includes('?') ? product.youtubeVideoId.split('?')[0] : product.youtubeVideoId}?${product.youtubeVideoId.includes('?') ? product.youtubeVideoId.split('?')[1] : ''}`} 
                            title="Setup Guide" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

// Fix: Add default export for StatusRow component
export default StatusRow;
