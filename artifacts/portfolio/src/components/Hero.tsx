import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SKILLS = ['React', 'Flutter', 'Node.js', 'Next.js', 'C++'];

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % SKILLS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px]"
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          ALEX MORGAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-medium text-muted-foreground mb-8 h-[40px] flex items-center justify-center gap-2"
        >
          <span>Full-Stack & Mobile Developer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground/80 mb-10"
        >
          I build modern digital experiences that solve real problems. Crafting high-performance applications with <span className="text-foreground font-semibold inline-block min-w-[80px]">{SKILLS[skillIndex]}</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            onClick={() => scrollTo('#projects')}
            size="lg" 
            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_0_30px_-5px_rgba(var(--primary),0.5)] transition-all hover:shadow-[0_0_40px_0px_rgba(var(--primary),0.6)]"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={() => scrollTo('#contact')}
            size="lg" 
            variant="outline"
            className="h-14 px-8 text-lg rounded-full border-border hover:bg-white/5 backdrop-blur-sm"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </div>
  );
}
