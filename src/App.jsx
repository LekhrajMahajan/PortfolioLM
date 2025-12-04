import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 flex flex-col">
      
      <Navbar />

      <main className="flex-grow">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;