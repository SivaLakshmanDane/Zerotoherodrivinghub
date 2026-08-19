/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenType, Language, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { TrainingScreen } from './components/TrainingScreen';
import { OffersScreen } from './components/OffersScreen';
import { GalleryScreen } from './components/GalleryScreen';
import { ContactScreen } from './components/ContactScreen';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { CONTACT_INFO } from './data/content';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingProgramId, setBookingProgramId] = useState<string | undefined>(undefined);
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const handleToggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'te' : 'en'));
  };

  const handleOpenBooking = (programId?: string) => {
    setBookingProgramId(programId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingProgramId(undefined);
  };

  const handleOpenImage = (item: GalleryItem) => {
    setLightboxImage(item);
  };

  const handleCloseImage = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1a1c1e] selection:bg-blue-600 selection:text-white">
      
      {/* Top Main Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Layout Container with Responsive Sidebar */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* Dynamic Screen Header Breadcrumb & Switcher */}
        <div className="flex items-center justify-between pb-6 mb-2 border-b border-[#eae7e7]">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button onClick={() => handleNavigate('home')} className="hover:text-slate-900 transition-colors">
              ZERO TO HERO
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold uppercase tracking-wider">
              {currentScreen === 'home' && (language === 'en' ? 'Overview' : 'హోమ్')}
              {currentScreen === 'training' && (language === 'en' ? 'Training Programs' : 'శిక్షణ ప్రోగ్రామ్‌లు')}
              {currentScreen === 'offers' && (language === 'en' ? 'Special Offers' : 'ఆఫర్లు')}
              {currentScreen === 'about' && (language === 'en' ? 'About Us & FAQs' : 'మా గురించి & FAQ')}
              {currentScreen === 'gallery' && (language === 'en' ? 'Photo Gallery' : 'గ్యాలరీ')}
              {currentScreen === 'contact' && (language === 'en' ? 'Contact & Map' : 'కాంటాక్ట్ & మ్యాప్')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-slate-500 font-medium">
              {language === 'en' ? 'Doorstep Service Area: ' : 'సర్వీస్ ప్రాంతం: '}
              <strong className="text-slate-800">Kukatpally & Hyderabad</strong>
            </span>
          </div>
        </div>

        {/* Content Area with Sidebar */}
        <div className="flex gap-8 items-start">
          
          {/* Main Dynamic View Screen */}
          <div className="flex-1 min-w-0">
            {currentScreen === 'home' && (
              <HomeScreen
                language={language}
                onNavigate={handleNavigate}
                onOpenBooking={handleOpenBooking}
              />
            )}

            {currentScreen === 'training' && (
              <TrainingScreen
                language={language}
                onNavigate={handleNavigate}
                onOpenBooking={handleOpenBooking}
              />
            )}

            {currentScreen === 'offers' && (
              <OffersScreen
                language={language}
                onNavigate={handleNavigate}
                onOpenBooking={handleOpenBooking}
              />
            )}

            {currentScreen === 'about' && (
              <AboutScreen
                language={language}
                onNavigate={handleNavigate}
                onOpenBooking={handleOpenBooking}
                onOpenImage={handleOpenImage}
              />
            )}

            {currentScreen === 'gallery' && (
              <GalleryScreen
                language={language}
                onNavigate={handleNavigate}
                onOpenBooking={() => handleOpenBooking()}
                onOpenImage={handleOpenImage}
              />
            )}

            {currentScreen === 'contact' && (
              <ContactScreen
                language={language}
                onNavigate={handleNavigate}
                onOpenBooking={handleOpenBooking}
              />
            )}
          </div>

          {/* Persistent Desktop Sidebar */}
          <Sidebar
            currentScreen={currentScreen}
            onNavigate={handleNavigate}
            language={language}
            onOpenBooking={handleOpenBooking}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Direct Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        language={language}
        initialProgramId={bookingProgramId}
      />

      {/* Image Lightbox Modal */}
      <ImageLightboxModal
        item={lightboxImage}
        onClose={handleCloseImage}
        language={language}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingActions language={language} />

    </div>
  );
}

