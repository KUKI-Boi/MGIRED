import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Careers } from './components/Careers';
import { HeritageVillage } from './components/HeritageVillage';
import { VideoBreak } from './components/VideoBreak';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { ProgramsPage } from './components/ProgramsPage';
import { AboutDetailsPage } from './components/AboutDetailsPage';
import { LegalPage } from './components/LegalPage';
import { GovernmentSchemesPage } from './components/GovernmentSchemesPage';
import { Suspense } from 'react';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#programs') {
        setView('programs');
      } else if (window.location.hash === '#government-schemes') {
        setView('government-schemes');
      } else if (window.location.hash === '#about-details') {
        setView('about-details');
      } else if (window.location.hash === '#privacy-policy') {
        setView('privacy');
      } else if (window.location.hash === '#terms') {
        setView('terms');
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <Suspense fallback={<div className="h-screen w-full bg-brand-bg flex items-center justify-center text-brand-text">Loading...</div>}>
      <div className="bg-brand-bg text-brand-text min-h-screen font-sans selection:bg-brand-accent selection:text-brand-bg">
        <Navbar />
        {view === 'programs' ? (
          <ProgramsPage onBack={handleBackToHome} />
        ) : view === 'government-schemes' ? (
          <GovernmentSchemesPage onBack={handleBackToHome} />
        ) : view === 'about-details' ? (
          <AboutDetailsPage onBack={handleBackToHome} />
        ) : view === 'privacy' ? (
          <LegalPage defaultTab="privacy" onBack={handleBackToHome} />
        ) : view === 'terms' ? (
          <LegalPage defaultTab="terms" onBack={handleBackToHome} />
        ) : (
          <main>
            <Hero />
            <Marquee />
            <About />
            <Careers />
            <VideoBreak />
            <HeritageVillage />
            <CTABanner />
          </main>
        )}
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
