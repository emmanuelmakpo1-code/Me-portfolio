import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a 
            href="#home" 
            className="text-2xl font-bold tracking-tighter mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ALEX<span className="text-primary">.</span>
          </a>
          <p className="text-muted-foreground text-sm">
            Building modern digital experiences.
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
          <p className="mt-1">Designed & Built with React & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
