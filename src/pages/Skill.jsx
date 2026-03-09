import React from 'react';
import { motion as Motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

// Static random background particles
const particles = [...Array(10)].map((_, i) => ({
  x: (i * 11) % 100 + "vw",
  duration: 10 + (i * 1.5) % 10,
  delay: (i * 0.5) % 5
}));

const Skill = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">

      {/* --- ANIMATED BACKGROUND STARTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* --- ANIMATED BACKGROUND STARTS --- */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <Motion.div
              key={i}
              initial={{ y: "100vh", opacity: 0, x: p.x }}
              animate={{ y: "-10vh", opacity: [0, 1, 0], rotate: 360 }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay
              }}
              className="absolute w-8 h-8 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-lg backdrop-blur-sm"
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Tech Stack</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            These are the tools and technologies I use to build scalable, responsive, and performant web applications.
          </p>
        </Motion.div>

        {/* Skills Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Motion.div>

      </div>
    </section>
  );
};

// Individual Skill Card Component
const SkillCard = ({ skill }) => {
  return (
    <Motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-white dark:bg-slate-900 rounded-xl p-6 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl"
    >
      {/* Dynamic Hover Border/Glow - Uses the 'color' prop for specific brand glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2"
        style={{ borderColor: skill.hex }}
      />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-current blur-md"
        style={{ color: skill.hex }}
      />

      {/* Icon Container */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center relative z-10">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Text */}
      <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors relative z-10">
        {skill.name}
      </h3>
    </Motion.div>
  );
};

// Data List - Using High Quality SVG URLs for Brand Logos
const skillsData = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    hex: "#E34F26", // Orange
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    hex: "#1572B6", // Blue
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    hex: "#F7DF1E", // Yellow
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    hex: "#61DAFB", // Cyan
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    hex: "#06B6D4", // Teal
  },
];

export default Skill;