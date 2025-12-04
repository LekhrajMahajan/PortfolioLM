import React from 'react';

// Import Layout Components from 'components' folder
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Page Sections from 'pages' folder
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    // Main wrapper handles global background color and dark mode transitions
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 flex flex-col">
      
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Main Content Sections */}
      <main className="flex-grow">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>

      {/* 3. Footer */}
      <Footer />
      
    </div>
  );
}

export default App;