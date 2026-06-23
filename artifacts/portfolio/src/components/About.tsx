import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '@assets/profile.png';
import { Code2, Layers, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card aspect-[4/5]">
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 bg-muted/20" />
              <img 
                src={profileImg} 
                alt="Alex Morgan" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-white/90">Based in San Francisco</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
              Bridging elegant design with powerful functionality.
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate developer with 5+ years of experience crafting high-performance applications. Specialized in building scalable web and mobile solutions that bridge elegant design with powerful functionality. I don't just write code; I build products that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Experience', value: '5 Years', icon: <Layers className="w-5 h-5 text-primary mb-2" /> },
                { label: 'Projects', value: '50+', icon: <Code2 className="w-5 h-5 text-accent mb-2" /> },
                { label: 'Happy Clients', value: '20+', icon: <Smartphone className="w-5 h-5 text-primary mb-2" /> },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-xl flex flex-col justify-center border-white/5 border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {stat.icon}
                  <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {['Flutter', 'React', 'Next.js', 'Node.js', 'TypeScript', 'C++', 'PostgreSQL', 'Figma'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
