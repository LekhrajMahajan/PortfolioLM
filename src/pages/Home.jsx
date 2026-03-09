import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Lottie from "lottie-react";
import { TypeAnimation } from 'react-type-animation';
import myResume from '../assets/LekhrajCV.pdf';
import robotAnimation from '../assets/hello animation.json';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 pb-16 md:pb-0"
    >
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
        />
        <Motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]"
        />
        <Motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">

        {/* --- Left Column: Text Content --- */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Badge */}
          <Motion.div variants={itemVariants} className="inline-block">
            <span className="py-2 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-semibold tracking-wide border border-indigo-200 dark:border-indigo-800">
              👋 Welcome to my portfolio
            </span>
          </Motion.div>

          {/* Headline with Typewriter Effect */}
          <Motion.h1
            variants={itemVariants}
            className="mt-6 text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {/* TypeAnimation Component Start */}
              <TypeAnimation
                sequence={[
                  'Lekhraj Mahajan', // Types name
                  2000,              // Waits 2 seconds
                  'A Frontend Dev',  // Types next title
                  2000,
                  'A React Coder',   // Types next title
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity} // Loop chalta rahega
              />
              {/* TypeAnimation Component End */}
            </span>
          </Motion.h1>

          <Motion.h2
            variants={itemVariants}
            className="mt-4 text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300"
          >
            I build <span className="text-indigo-500 font-bold">Scalable Web Applications</span>
          </Motion.h2>

          {/* Description */}
          <Motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed"
          >
            A passionate Frontend Developer crafting seamless web experiences. I bridge the gap between design and engineering using <span className="text-slate-900 dark:text-white font-semibold">React and Tailwind</span>. Ready to solve real-world problems with clean, modern code.
          </Motion.p>

          {/* Buttons */}
          <Motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <Motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all"
            >
              Hire Me <ArrowRight size={20} />
            </Motion.a>

            <Motion.a
              href={myResume} // 
              download="Lekhraj_Mahajan_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Download CV <Download size={20} />
            </Motion.a>
          </Motion.div>
        </Motion.div>

        {/* --- Right Column: Animated Robot --- */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          // Added 'flex' here to fix alignment issue from previous code
          className="relative hidden md:flex h-full items-center justify-center"
        >
          {/* Lottie Player Container with floating animation */}
          <Motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-full max-w-lg drop-shadow-2xl relative z-20"
          >
            <Lottie
              animationData={robotAnimation}
              loop={true}
              className="w-full h-auto"
            />
          </Motion.div>

          {/* Floating Skill Badges */}
          <FloatingBadge
            text="Frontend Developer"
            color="bg-blue-100 text-blue-600 dark:bg-blue-900/80 dark:text-blue-300"
            position="-top-10 -left-10"
            delay={0}
          />
          <FloatingBadge
            text="Fresher"
            color="bg-green-100 text-green-600 dark:bg-green-900/80 dark:text-green-300"
            position="-bottom-10 right-0"
            delay={1}
          />
        </Motion.div>

      </div>
    </section>
  );
};

// ---------------------------------------------------
// Sub-Components
// ---------------------------------------------------

const FloatingBadge = ({ text, color, position, delay }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay * 0.2, type: "spring" }}
      className={`absolute ${position} px-4 py-2 rounded-xl shadow-lg font-semibold text-sm backdrop-blur-sm z-30 flex items-center gap-2 ${color}`}
    >
      {text}
    </Motion.div>
  );
};

export default Home;