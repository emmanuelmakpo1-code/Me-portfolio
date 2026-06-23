import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ExternalLink, Github } from 'lucide-react';

import imgEcoTrack from '@assets/ecotrack.png';
import imgDevFlow from '@assets/devflow.png';
import imgShopSphere from '@assets/shopsphere.png';
import imgMindSpace from '@assets/mindspace.png';
import imgCodeCollab from '@assets/codecollab.png';
import imgDataPulse from '@assets/datapulse.png';

const projects = [
  {
    id: 1,
    title: 'EcoTrack',
    shortDesc: 'A sustainability tracking mobile app with real-time carbon footprint monitoring.',
    fullDesc: 'EcoTrack is a comprehensive sustainability tracking mobile app built with Flutter. It features real-time carbon footprint monitoring, community challenges, and personalized actionable insights to help users reduce their environmental impact.',
    features: ['Real-time carbon footprint calculation', 'Community leaderboards and challenges', 'Personalized eco-tips', 'Offline support'],
    stack: ['Flutter', 'Firebase', 'Node.js'],
    image: imgEcoTrack,
  },
  {
    id: 2,
    title: 'DevFlow',
    shortDesc: 'Developer productivity dashboard with GitHub integration.',
    fullDesc: 'DevFlow is a developer productivity dashboard designed to streamline workflows. It integrates directly with GitHub to pull pull requests, issues, and repository stats into a customizable kanban board, complete with code review reminders.',
    features: ['GitHub API integration', 'Customizable Kanban board', 'Automated code review reminders', 'Time tracking'],
    stack: ['React', 'Next.js', 'PostgreSQL'],
    image: imgDevFlow,
  },
  {
    id: 3,
    title: 'ShopSphere',
    shortDesc: 'Full-stack e-commerce platform with AI-powered recommendations.',
    fullDesc: 'ShopSphere is a premium full-stack e-commerce platform supporting multi-vendor stores. It includes AI-powered product recommendations, real-time inventory sync, and a seamless checkout experience powered by Stripe.',
    features: ['Multi-vendor architecture', 'AI product recommendations', 'Real-time inventory management', 'Stripe integration'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: imgShopSphere,
  },
  {
    id: 4,
    title: 'MindSpace',
    shortDesc: 'Mental wellness mobile app with mood tracking and meditation.',
    fullDesc: 'MindSpace is a mental wellness mobile app focused on daily mood tracking and guided meditations. It uses machine learning to suggest relevant meditations based on the user\'s mood history and connects users with licensed therapists.',
    features: ['Daily mood tracking', 'ML-driven meditation suggestions', 'In-app therapist matching', 'Calming UI/UX'],
    stack: ['Flutter', 'Firebase', 'ML'],
    image: imgMindSpace,
  },
  {
    id: 5,
    title: 'CodeCollab',
    shortDesc: 'Real-time collaborative code editor with video calling.',
    fullDesc: 'CodeCollab is a powerful real-time collaborative code editor built for remote teams. It features built-in video calling, rich presence cursors, and AI-powered code suggestions to accelerate pair programming.',
    features: ['Real-time collaborative editing (CRDT)', 'Integrated WebRTC video calling', 'AI code suggestions', 'Syntax highlighting for 50+ languages'],
    stack: ['React', 'WebSockets', 'OpenAI API'],
    image: imgCodeCollab,
  },
  {
    id: 6,
    title: 'DataPulse',
    shortDesc: 'Business analytics dashboard with live data visualization.',
    fullDesc: 'DataPulse is a high-performance business analytics dashboard. It processes large datasets in real-time, providing interactive custom reports, live data visualization with D3.js, and secure team collaboration tools.',
    features: ['Live data visualization', 'Custom report builder', 'Role-based access control', 'Export to PDF/CSV'],
    stack: ['React', 'D3.js', 'PostgreSQL'],
    image: imgDataPulse,
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Selected <span className="text-primary">Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.3)]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 text-sm">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/10">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/10">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card/95 backdrop-blur-xl border-white/10">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors border border-white/10">
                  <X size={20} />
                </DialogClose>
              </div>
              
              <div className="p-6 md:p-10 md:-mt-16 relative z-10">
                <DialogHeader className="mb-6 text-left">
                  <DialogTitle className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                    {selectedProject.fullDesc}
                  </DialogDescription>
                </DialogHeader>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6 rounded-full shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)]">
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/5 gap-2 h-12 px-6 rounded-full text-foreground">
                    <Github size={18} />
                    View Source
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
