import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechNova Inc.",
    period: "2022–Present",
    achievements: [
      "Led development of 3 major products from concept to launch",
      "Reduced application load times by 60% through optimized rendering",
      "Mentored and managed a team of 5 junior developers"
    ]
  },
  {
    id: 2,
    role: "Mobile Developer",
    company: "AppForge",
    period: "2020–2022",
    achievements: [
      "Built and maintained 8 Flutter applications for iOS and Android",
      "Achieved 500K+ combined app downloads across stores",
      "Implemented CI/CD pipelines reducing deployment time by 40%"
    ]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebCraft Studio",
    period: "2019–2020",
    achievements: [
      "Delivered 15+ highly responsive client websites",
      "Collaborated closely with design team to ensure pixel-perfect implementation",
      "Improved overall accessibility scores by an average of 30%"
    ]
  },
  {
    id: 4,
    role: "Freelance Developer",
    company: "Independent",
    period: "2018–2019",
    achievements: [
      "Successfully delivered 20+ projects across web and mobile platforms",
      "Managed client communications, project scoping, and architecture",
      "Specialized in MVP development for early-stage startups"
    ]
  }
];

export default function Experience() {
  return (
    <div className="py-24 relative bg-card/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full md:mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Center Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 md:top-6 z-10 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />

              {/* Content Box */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground font-medium mb-6">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground/90 text-sm md:text-base">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for opposite side on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
