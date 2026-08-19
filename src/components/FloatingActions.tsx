import React from 'react';
import { CONTACT_INFO } from '../data/content';
import { Phone, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface FloatingActionsProps {
  language: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ language }) => {
  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Floating Call Button */}
      <a
        id="fab-call"
        href={`tel:${CONTACT_INFO.primaryPhone}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#000613] text-white hover:bg-[#001f3f] shadow-2xl border border-slate-700 transition-all hover:scale-105 group"
        title="Call Now / కాల్ చేయండి"
      >
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm shadow-blue-600/30">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold font-mono pr-1 hidden sm:inline">{CONTACT_INFO.primaryPhone}</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="fab-whatsapp"
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20want%20to%20inquire%20about%20car%20driving%20classes`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-2xl transition-all hover:scale-105 font-bold text-xs"
        title="WhatsApp Chat"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="font-bold tracking-wide">
          {language === 'en' ? 'WhatsApp Us' : 'వాట్సాప్'}
        </span>
      </a>

    </div>
  );
};
