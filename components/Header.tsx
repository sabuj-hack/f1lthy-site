import React from 'react';
import { Terminal, Menu, X, ExternalLink } from 'lucide-react';
import { APP_NAME, DISCORD_LINK } from '../constants';

interface HeaderProps {
  onStatusClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStatusClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleStatusClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onStatusClick) {
      onStatusClick();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-900/50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={handleStatusClick}>
            <div className="relative">
              <Terminal className="h-8 w-8 text-brand-500 group-hover:text-brand-400 transition-colors" />
              <div className="absolute inset-0 bg-brand-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold font-mono tracking-tighter text-white">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={handleStatusClick}
                className="text-brand-500 px-3 py-2 rounded-md text-sm font-medium font-mono border border-brand-500/20 bg-brand-500/5 hover:bg-brand-500/10 transition-all shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] cursor-pointer"
              >
                Status
              </button>
              <a 
                href={DISCORD_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              >
                Discord <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={handleStatusClick} className="w-full text-left text-brand-500 block px-3 py-2 rounded-md text-base font-medium bg-brand-900/10">Status</button>
            <a href={DISCORD_LINK} className="text-indigo-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-900">Discord</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;