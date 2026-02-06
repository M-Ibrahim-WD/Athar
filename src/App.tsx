import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Vision from '@/sections/Vision';
import Mission from '@/sections/Mission';
import Values from '@/sections/Values';
import Goals from '@/sections/Goals';
import Services from '@/sections/Services';
import Team from '@/sections/Team';
import Work from '@/sections/Work';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Vision />
            <Mission />
            <Values />
            <Goals />
            <Services />
            <Team />
            <Work />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
