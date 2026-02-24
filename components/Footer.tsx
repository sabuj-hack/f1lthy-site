import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-mono text-zinc-200">{APP_NAME}</span>
            <p className="text-sm text-zinc-500 mt-2">
              Leading provider of undetectable enhancements.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Contact</a>
          </div>

          <div className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;