import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StatusRow from './components/StatusRow';
import Background from './components/Background';
import TrialCard from './components/TrialCard';
import { PRODUCTS, ANNOUNCEMENTS, APP_NAME } from './constants';
import { Bell } from 'lucide-react';

function App() {
  // Store which product ID is currently expanded. 
  // Since we only have one, this acts as a boolean basically, but scalable.
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  const statusListRef = useRef<HTMLDivElement>(null);

  const handleStatusClick = () => {
    // 1. Expand the features of the first (main) product
    if (PRODUCTS.length > 0) {
      setExpandedProductId(PRODUCTS[0].id);
    }
    
    // 2. Scroll to the status list area
    if (statusListRef.current) {
      statusListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-brand-500/30 selection:text-brand-200 flex flex-col">
      <Background />
      <Header onStatusClick={handleStatusClick} />

      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/5 border border-brand-500/20 text-xs text-brand-400 mb-6 font-mono">
            <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            System Operational
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase font-mono">
            {APP_NAME} <span className="text-brand-500">Status</span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Live service status and download portal. Check the status of your internal panel below.
          </p>
        </div>

        {/* Status List (Moved to First Position) */}
        <div ref={statusListRef} className="scroll-mt-24 mb-6">
          {PRODUCTS.length > 0 ? (
            PRODUCTS.map(product => (
              <StatusRow 
                key={product.id} 
                product={product} 
                isFeaturesOpen={expandedProductId === product.id}
                onToggleFeatures={() => {
                  setExpandedProductId(prev => prev === product.id ? null : product.id);
                }}
              />
            ))
          ) : (
            <div className="text-center py-20 border border-zinc-800 rounded-xl border-dashed bg-zinc-900/30">
              <p className="text-zinc-500">No products found.</p>
            </div>
          )}
        </div>

        {/* Bottom Section Grid: Free Trial (Left) & Announcements (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Free Trial Section (Left) */}
          <div className="h-full">
             <TrialCard />
          </div>

          {/* Announcements Section (Right) */}
          <div className="h-full">
            {ANNOUNCEMENTS.length > 0 && (
              <div className="h-full flex flex-col gap-3">
                  {ANNOUNCEMENTS.map(ann => (
                    <div 
                      key={ann.id} 
                      className={`group relative h-full p-4 rounded-lg border backdrop-blur-sm flex flex-col items-start gap-3 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] ${
                      ann.type === 'success' ? 'bg-zinc-900/40 border-brand-500/30 hover:border-brand-500/50' : 
                      ann.type === 'warning' ? 'bg-zinc-900/40 border-orange-500/30 hover:border-orange-500/50' : 
                      'bg-zinc-900/40 border-zinc-800'
                    }`}>
                      {/* Hover Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity blur duration-500 rounded-lg pointer-events-none" />

                      <div className="flex items-center gap-2 w-full border-b border-zinc-800/50 pb-2">
                        <Bell size={18} className={`flex-shrink-0 ${
                            ann.type === 'success' ? 'text-brand-400' : 
                            ann.type === 'warning' ? 'text-orange-400' : 'text-zinc-300'
                          }`} />
                        <h3 className={`text-base font-bold ${
                            ann.type === 'success' ? 'text-brand-400' : 
                            ann.type === 'warning' ? 'text-orange-400' : 'text-zinc-300'
                        }`}>{ann.title}</h3>
                      </div>
                      
                      <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-mono w-full">
                        {ann.content.split('\n').map((line, i) => (
                          <div key={i} className="mb-1 last:mb-0">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}

export default App;