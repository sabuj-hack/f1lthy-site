import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
            backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Radial Gradient overlay for vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Green Glow spot */}
      <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-brand-900/20 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default Background;