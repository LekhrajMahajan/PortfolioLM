import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent inline-block">
              LM.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              Crafting digital experiences with code and creativity. Let's build something amazing together.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#about" text="About" />
              <FooterLink href="#projects" text="Projects" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/LekhrajMahajan?tab=repositories" icon={<Github size={20} />} />
              <SocialIcon href="https://www.linkedin.com/in/lekhraj-mahajan-1212b6364/" icon={<Linkedin size={20} />} />
              <SocialIcon href="lekhrajmahajan506@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8" />

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright Text */}
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            © {currentYear} Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Lekhraj Mahajan.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

// Sub-component for Links
const FooterLink = ({ href, text }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        {text}
      </a>
    </li>
  );
};

// Sub-component for Social Icons
const SocialIcon = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-indigo-500 hover:text-white transition-colors"
    >
      {icon}
    </motion.a>
  );
};

export default Footer;