import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Dynamically import page components using React.lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skill = lazy(() => import('./pages/Skill'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 flex flex-col">
      
      <Navbar />

      <main className="flex-grow">
        {/* Wrap the lazy-loaded components in a Suspense component */}
        {/* The fallback is shown while the component is being loaded */}
        <Suspense fallback={<div className="flex justify-center items-center py-20">Loading...</div>}>
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;