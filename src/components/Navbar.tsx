import React, { useState } from 'react';
import { ScreenType, Language } from '../types';
import { CONTACT_INFO } from '../data/content';
import { Phone, MessageSquare, Menu, X, Calendar, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenType; labelEn: string; labelTe: string }[] = [
    { id: 'home', labelEn: 'Home', labelTe: 'హోమ్' },
    { id: 'training', labelEn: 'Training Programs', labelTe: 'శిక్షణ కోర్సులు' },
    { id: 'offers', labelEn: 'Special Offers', labelTe: 'ఆఫర్స్' },
    { id: 'about', labelEn: 'About & FAQs', labelTe: 'మా గురించి & ప్రశ్నలు' },
    { id: 'gallery', labelEn: 'Success Gallery', labelTe: 'గ్యాలరీ' },
    { id: 'contact', labelEn: 'Contact Us', labelTe: 'సంప్రదించండి' },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#000613]/95 backdrop-blur-md text-white border-b border-blue-950 shadow-lg">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white px-4 py-1 text-xs font-bold tracking-wide flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-[#000613] text-blue-300 text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-wider shrink-0 border border-blue-400/30">
              {language === 'en' ? 'LIMITED SLOTS' : 'పరిమిత స్లాట్లు'}
            </span>
            <span className="truncate">
              {language === 'en' 
                ? '🔥 Special Offer: 2-Day Practical Driving at ₹1,999/- only | Doorstep Pick-up in Kukatpally'
                : '🔥 ప్రత్యేక ఆఫర్: 2 రోజుల ప్రాక్టికల్ డ్రైవింగ్ ₹1,999/- మాత్రమే | కూకట్‌పల్లిలో డోర్‌స్టెప్ సర్వీస్'}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold shrink-0">
            <a href={`tel:${CONTACT_INFO.primaryPhone}`} className="hover:underline flex items-center gap-1">
              <Phone className="w-3 h-3 text-blue-300" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="text-blue-300/40">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-300" />
              {CONTACT_INFO.locationNameEn}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <div 
            id="brand-logo-trigger"
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-3xl font-black">directions_car</span>
            </div>
            <div>
              <div className="font-heading font-black text-lg sm:text-xl tracking-tight leading-none text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                ZERO TO HERO
                <span className="text-blue-400 text-xs font-bold px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-400/30">HUB</span>
              </div>
              <div className="text-[11px] font-semibold text-[#c4c6cf] tracking-widest uppercase mt-0.5">
                {language === 'en' ? 'Car Driving Training Hub' : 'కార్ డ్రైవింగ్ ట్రైనింగ్ హబ్'}
              </div>
              <div className="text-[10px] text-blue-400 font-medium font-telugu">
                ఒక్క రోజులో Complete Practical Training
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {language === 'en' ? item.labelEn : item.labelTe}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Toggle Button */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-xs font-bold text-slate-200 transition-colors shadow-inner"
              title="Change Language / భాషను మార్చుకోండి"
            >
              <span className="material-symbols-outlined text-sm text-blue-400">translate</span>
              <span>{language === 'en' ? 'తెలుగు' : 'EN'}</span>
            </button>

            {/* Direct Call Button (Sm and up) */}
            <a
              id="nav-call-btn"
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 hover:border-slate-600 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>

            {/* Main Booking Button */}
            <button
              id="nav-book-now-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-black tracking-wide shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'en' ? 'Book Slot' : 'స్లాట్ బుక్ చేయండి'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#000613] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-lg text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-900/60 text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {language === 'en' ? item.labelEn : item.labelTe}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20am%20interested%20in%20car%20driving%20training`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'en' ? 'Chat on WhatsApp' : 'వాట్సాప్‌లో మెసేజ్ చేయండి'}</span>
            </a>
            
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-800 text-white text-sm font-bold border border-slate-700"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{CONTACT_INFO.primaryPhone} / {CONTACT_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
