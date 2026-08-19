import React from 'react';
import { Language, ScreenType } from '../types';
import { CONTACT_INFO } from '../data/content';
import { Phone, MapPin, MessageSquare, Clock, Heart, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenBooking
}) => {
  return (
    <footer id="main-footer" className="bg-[#000613] text-white border-t border-slate-800">
      
      {/* Top Pre-footer CTA */}
      <div className="border-b border-slate-800/80 bg-[#001f3f]/40 px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-heading font-black text-xl sm:text-2xl text-white">
              {language === 'en' ? 'ZERO TO HERO DRIVING HUB' : 'జీరో టు హీరో కార్ డ్రైవింగ్ హబ్'}
            </div>
            <p className="text-xs text-blue-400 font-telugu font-semibold mt-0.5">
              ఒక్క రోజులో Complete Practical Car Driving Training
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30 transition-all hover:scale-105"
            >
              {language === 'en' ? 'Book a Slot Now' : 'స్లాట్ బుక్ చేయండి'}
            </button>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20want%20to%20know%20about%20car%20driving%20slots`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About & Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-600/30">
                <span className="material-symbols-outlined text-lg">directions_car</span>
              </div>
              <span className="font-heading font-black text-base text-white">ZERO TO HERO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              {language === 'en'
                ? 'Hyderabad’s premier doorstep car driving training hub. Transforming beginners into confident, fearless drivers with 100% real road practical training.'
                : 'హైదరాబాద్‌లోని ప్రముఖ డోర్‌స్టెప్ కార్ డ్రైవింగ్ హబ్. ఎటువంటి భయం లేకుండా డ్రైవింగ్ నేర్పించడం మా ప్రత్యేకత.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'en' ? 'RTO Approved Dual Control Vehicles' : 'డ్యుయల్ కంట్రోల్ సేఫ్టీ వాహనాలు'}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-blue-400 tracking-wider">
              {language === 'en' ? 'Quick Links' : 'ముఖ్య లింకులు'}
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'Home & Services' : 'హోమ్ & సేవలు'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('training')} className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? '1-Day Complete Training' : '1-డే కంప్లీట్ ట్రైనింగ్'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('offers')} className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? '₹1999/- Special Offer' : '₹1999/- ప్రత్యేక ఆఫర్'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'Why Choose Us & FAQs' : 'మా ప్రత్యేకతలు & FAQ'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'Student Success Gallery' : 'విజయ గాథల గ్యాలరీ'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">
                  {language === 'en' ? 'Kukatpally Hub Location' : 'హబ్ లొకేషన్ & కాంటాక్ట్'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Batches & Timings */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-blue-400 tracking-wider">
              {language === 'en' ? 'Batches & Timings' : 'శిక్షణ సమయాలు'}
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>{language === 'en' ? 'Morning Batch' : 'ఉదయం బ్యాచ్'}</span>
                  <span className="text-blue-400 font-mono">06:00 - 09:00 AM</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Empty roads & clutch muscle memory</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>{language === 'en' ? 'Evening Batch' : 'సాయంత్రం బ్యాచ్'}</span>
                  <span className="text-blue-400 font-mono">07:00 - 10:00 PM</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Night driving & headlights navigation</div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact Numbers */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-blue-400 tracking-wider">
              {language === 'en' ? 'Contact & Location' : 'సంప్రదించండి'}
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <a href={`tel:${CONTACT_INFO.primaryPhone}`} className="flex items-center gap-2 hover:text-blue-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="font-mono font-bold text-white">{CONTACT_INFO.primaryPhone}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.secondaryPhone}`} className="flex items-center gap-2 hover:text-blue-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="font-mono font-bold text-white">{CONTACT_INFO.secondaryPhone}</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-tight">
                  {CONTACT_INFO.addressEn}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Zero to Hero Driving Hub. All rights reserved. Kukatpally, Hyderabad.
          </div>
          <div className="flex items-center gap-1 font-telugu text-slate-400">
            <span>హైదరాబాద్‌లో అత్యుత్తమ కార్ డ్రైవింగ్ శిక్షణ</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
