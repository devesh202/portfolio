import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 3D & Animations
import Scene from './components/canvas/Scene';
import GSAPController from './animations/GSAPController';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen text-slate-300 font-sans selection:bg-primary selection:text-white bg-transparent">
      <CustomCursor />
      <Scene />
      <GSAPController />
      
      {/* Foreground UI Layer */}
      <div className="relative z-10 w-full overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
