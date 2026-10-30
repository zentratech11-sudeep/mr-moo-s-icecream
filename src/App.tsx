import React, { useState, useEffect } from 'react';
import { Header, ActivePage } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { CafeMenuView } from './views/CafeMenuView';
import { FlavoursView } from './views/FlavoursView';
import { BeachWalkView } from './views/BeachWalkView';
import { CaravanSiteView } from './views/CaravanSiteView';
import { WholesaleView } from './views/WholesaleView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Handle URL hash changes or internal state
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home',
        'about',
        'cafe',
        'flavours',
        'caravan',
        'wholesale',
        'beach',
        'gallery',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f0] text-[#2c332d] font-sans antialiased">
      {/* Top Header Navigation */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && <HomeView onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutView onNavigate={handleNavigate} />}
        {activePage === 'cafe' && <CafeMenuView onNavigate={handleNavigate} />}
        {activePage === 'flavours' && <FlavoursView onNavigate={handleNavigate} />}
        {activePage === 'beach' && <BeachWalkView onNavigate={handleNavigate} />}
        {activePage === 'caravan' && <CaravanSiteView onNavigate={handleNavigate} />}
        {activePage === 'wholesale' && <WholesaleView onNavigate={handleNavigate} />}
        {activePage === 'gallery' && <GalleryView onNavigate={handleNavigate} />}
        {activePage === 'contact' && <ContactView onNavigate={handleNavigate} />}
      </main>

      {/* Farmhouse Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
