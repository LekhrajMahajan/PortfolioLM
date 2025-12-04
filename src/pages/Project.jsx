import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Project = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND STARTS --- */}
      {/* Rotating Conic Gradient */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none opacity-20 dark:opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#6366F1_50%,#E2E8F0_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#0F172A_0%,#4338ca_50%,#0F172A_100%)] blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects demonstrating my skills in React and UI Design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ y: -10 }} // Floats up slightly on hover
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      
      {/* 1. Card Image Area (with Zoom Effect) */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Floating Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-bold text-indigo-600 dark:text-indigo-400 rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* 2. Card Content Area */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
              {t}
            </span>
          ))}
        </div>

        {/* 3. Card Footer (Internal Links) */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
          
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors group/btn"
          >
            <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" /> 
            Live Demo
          </a>

          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-500 text-sm font-semibold rounded-lg transition-all"
          >
            <Github size={16} /> 
            Source
          </a>

        </div>
      </div>

    </motion.div>
  );
};

// -------------------------------------------------------------
// Sample Data
// -------------------------------------------------------------
const projectsData = [
  {
    title: "TimeLine - Watch Store",
    category: "Frontend",
    description: "Built a responsive e-commerce watch store with add-to-cart, checkout, order placement, and login/signup using React, Tailwind CSS, and Vite.",
    tech: ["React", "Tailwind", "Vite"],
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "https://lekhrajmahajan.github.io/TimeLine/",   
    githubLink: "https://github.com/LekhrajMahajan/TimeLine" 
  },
  {
    title: "Condrinks",
    category: "Frontend",
    description: "Created an animated beverage website with background animations and text up–down effects using HTML5 and Tailwind CSS.",
    tech: ["Html5", "Tailwindcss", "Javascript"],
    image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    liveLink: "https://lekhrajmahajan.github.io/Condrinks/",
    githubLink: "https://github.com/LekhrajMahajan/Condrinks"
  },
  {
    title: "Construction",
    category: "Frontend",
    description: "Developed a responsive construction company website with modern UI layout and interactive elements.",
    tech: ["Html5", "Tailwindcss", "Javascript"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    liveLink: "https://lekhrajmahajan.github.io/Construction/",
    githubLink: "https://github.com/LekhrajMahajan/Construction"
  }
  
];

export default Project;