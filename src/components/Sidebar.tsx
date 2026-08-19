import React from 'react';
import { ScreenType, Language } from '../types';
import { CONTACT_INFO } from '../data/content';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Calendar, 
  Car, 
  Award,
  ChevronRight,
  Zap
} from 'lucide-react';

interface SidebarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  language: Language;
  onOpenBooking: (programId?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentScreen,
  onNavigate,
  language,
  onOpenBooking
}) => {
  return (
    <aside id="desktop-sidebar" className="hidden lg:flex flex-col w-72 shrink-0 space-y-6">
      
      {/* Quick Navigation Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eae7e7]">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
          {language === 'en' ? 'Quick Navigation' : 'త్వరిత నావిగేషన్'}
        </div>
        <nav className="space-y-1">
          {[
            { id: 'home', labelEn: 'Overview', labelTe: 'హోమ్ అవలోకనం', icon: 'dashboard' },
            { id: 'training', labelEn: 'Training Modules', labelTe: 'శిక్షణ ప్రోగ్రామ్‌లు', icon: 'directions_car' },
            { id: 'offers', labelEn: '₹1999/- Special Offer', labelTe: '₹1999/- ఆఫర్', icon: 'local_offer', badge: 'HOT' },
            { id: 'about', labelEn: 'Why Choose Us & FAQs', labelTe: 'మా ప్రత్యేకతలు & FAQ', icon: 'help_outline' },
            { id: 'gallery', labelEn: 'Student Success', labelTe: 'విజయ గాథలు', icon: 'photo_library' },
            { id: 'contact', labelEn: 'Hub Location & Map', labelTe: 'హబ్ లొకేషన్ & మ్యాప్', icon: 'pin_drop' }
          ].map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                id={`sidebar-nav-${item.id}`}
                onClick={() => onNavigate(item.id as ScreenType)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#000613] text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-lg ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                    {item.icon}
                  </span>
                  <span>{language === 'en' ? item.labelEn : item.labelTe}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-blue-600 text-white font-black px-1.5 py-0.5 rounded shadow-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Special Offer Highlight Banner */}
      <div className="bg-gradient-to-br from-[#000613] via-[#001f3f] to-[#000613] text-white rounded-2xl p-5 border border-blue-500/30 shadow-md relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full mb-3 shadow">
          <Zap className="w-3 h-3 fill-current" />
          <span>{language === 'en' ? 'LIMITED PERIOD' : 'పరిమిత సమయం'}</span>
        </div>
        <div className="font-heading font-black text-2xl text-white">
          ₹1,999<span className="text-sm font-normal text-slate-300">/- ONLY</span>
        </div>
        <div className="font-bold text-sm text-blue-400 mt-1">
          {language === 'en' ? '2-Day Confidence Booster' : '2 రోజుల ఇంటెన్సివ్ డ్రైవింగ్'}
        </div>
        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
          {language === 'en'
            ? 'Complete traffic, reverse & parking mastery with doorstep pickup.'
            : 'ట్రాఫిక్ భయం లేకుండా రివర్స్ మరియు పార్కింగ్ పర్ఫెక్ట్ ట్రైనింగ్.'}
        </p>
        <button
          id="sidebar-claim-offer-btn"
          onClick={() => onOpenBooking('intensive-two-day')}
          className="mt-4 w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30 transition-transform hover:scale-[1.02]"
        >
          <span>{language === 'en' ? 'Claim Offer Now' : 'ఆఫర్ బుక్ చేయండి'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Operational Timings Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eae7e7]">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>{language === 'en' ? 'Training Batches' : 'శిక్షణ సమయాలు'}</span>
        </div>
        <div className="space-y-2.5 text-xs">
          <div className="p-2.5 rounded-xl bg-sky-50/80 border border-sky-200/60">
            <div className="font-bold text-sky-950 flex items-center justify-between">
              <span>{language === 'en' ? 'Morning Batch' : 'ఉదయం బ్యాచ్'}</span>
              <span className="text-[11px] bg-sky-200/80 text-sky-900 px-1.5 py-0.5 rounded font-mono">06:00 - 09:00 AM</span>
            </div>
            <p className="text-[11px] text-sky-800/80 mt-1">
              {language === 'en' ? 'Clear roads & basic clutch muscle memory' : 'ప్రశాంతమైన రోడ్లపై బేసిక్స్ నేర్చుకోండి'}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/60">
            <div className="font-bold text-blue-950 flex items-center justify-between">
              <span>{language === 'en' ? 'Evening Batch' : 'సాయంత్రం బ్యాచ్'}</span>
              <span className="text-[11px] bg-blue-200/80 text-blue-900 px-1.5 py-0.5 rounded font-mono">07:00 - 10:00 PM</span>
            </div>
            <p className="text-[11px] text-blue-800/80 mt-1">
              {language === 'en' ? 'Night vision & post-work convenience' : 'నైట్ డ్రైవింగ్ & ఉద్యోగుల సౌలభ్యం కోసం'}
            </p>
          </div>
        </div>
      </div>

      {/* Direct Contact & Call Support */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eae7e7] space-y-3">
        <div className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
          <Phone className="w-4 h-4 text-blue-600" />
          <span>{language === 'en' ? 'Instant Helpline' : 'హెల్ప్‌లైన్ నంబర్లు'}</span>
        </div>
        
        <div className="space-y-2">
          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
          >
            <div>
              <div className="text-[10px] text-slate-500 font-semibold">{language === 'en' ? 'Primary' : 'ప్రధాన నంబర్'}</div>
              <div className="text-sm font-bold text-slate-900 font-mono">{CONTACT_INFO.primaryPhone}</div>
            </div>
            <Phone className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={`tel:${CONTACT_INFO.secondaryPhone}`}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
          >
            <div>
              <div className="text-[10px] text-slate-500 font-semibold">{language === 'en' ? 'Secondary' : 'రెండవ నంబర్'}</div>
              <div className="text-sm font-bold text-slate-900 font-mono">{CONTACT_INFO.secondaryPhone}</div>
            </div>
            <Phone className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20need%20details%20about%20car%20driving%20classes`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow transition-transform hover:scale-[1.02]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>{language === 'en' ? 'Chat on WhatsApp' : 'వాట్సాప్‌లో సంప్రదించండి'}</span>
        </a>
      </div>

      {/* Hub Location Badge */}
      <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
        <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-slate-900">{CONTACT_INFO.locationNameEn}</div>
          <div className="text-[11px] text-slate-500 mt-0.5 font-telugu">{CONTACT_INFO.locationNameTe}</div>
          <button 
            onClick={() => onNavigate('contact')}
            className="mt-1 text-xs text-blue-700 font-semibold hover:underline flex items-center gap-1"
          >
            <span>{language === 'en' ? 'View on map' : 'మ్యాప్ చూడండి'}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </aside>
  );
};
