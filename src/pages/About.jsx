import React from 'react';
import { motion as Motion } from 'framer-motion';
import { GraduationCap, Code, Palette, Coffee, ArrowRight } from 'lucide-react';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <Motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Radial fade to make center readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-slate-900 dark:via-transparent dark:to-slate-900 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <Motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-indigo-500 mx-auto rounded-full"
          />
        </Motion.div>

        {/* Main Text Content */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Hello! I'm a passionate <span className="font-bold text-indigo-600 dark:text-indigo-400">Computer Engineering Graduate</span> looking to kickstart my career as a Full Stack Developer.
          </Motion.p>

          <Motion.p variants={itemVariants} className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            While I may be fresh to the industry, I have spent the last few years bridging the gap between theory and practice. <span className="text-slate-900 dark:text-white font-medium">I don't just write code; I build solutions.</span> I am eager to learn, adaptable to new technologies, and ready to contribute to a real-world team from day one.
          </Motion.p>
        </Motion.div>

        {/* The "Fresher Highlights" Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Card 1: Education */}
          <HighlightCard
            icon={<GraduationCap className="w-8 h-8 text-indigo-500" />}
            title="Education"
            desc="B.Tech Graduate with a strong foundation in Data Structures, Algorithms, and Web Technologies."
          />

          {/* Card 2: Technical Mindset */}
          <HighlightCard
            icon={<Code className="w-8 h-8 text-purple-500" />}
            title="Clean Code Enthusiast"
            desc="I believe in writing maintainable, scalable, and readable code. I follow best practices like DRY and SOLID principles."
          />

          {/* Card 3: Problem Solving */}
          <HighlightCard
            icon={<Palette className="w-8 h-8 text-pink-500" />}
            title="UI/UX Enthusiast"
            desc="I believe good code deserves good design. I create clean, modern, and responsive interfaces that prioritize user experience."
          />

          {/* Card 4: Dedication */}
          <HighlightCard
            icon={<Coffee className="w-8 h-8 text-amber-500" />}
            title="Always Learning"
            desc="The tech world moves fast, and so do I. I am currently learning Node.js."
          />

        </Motion.div>

        {/* Bottom CTA */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline decoration-2 underline-offset-4 group"
          >
            Check out my projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Motion.div>

      </div>
    </section>
  );
};

// Reusable Card Component with Hover Effect
const HighlightCard = ({ icon, title, desc }) => {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
      className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-md text-left"
    >
      <div className="mb-4 bg-white dark:bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </Motion.div>
  );
};

export default About;