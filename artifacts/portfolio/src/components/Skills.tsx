import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiFlutter, SiSwift, SiKotlin, SiAndroid, SiApple,
  SiNodedotjs, SiPostgresql, SiMongodb, SiFirebase, SiDocker,
  SiFigma, SiGit, SiGithub
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Swift", icon: <SiSwift /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "React Native", icon: <SiReact /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Skills() {
  return (
    <div className="py-24 relative bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-foreground/90 border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="glass-card flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default"
                  >
                    <div className="text-3xl text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
