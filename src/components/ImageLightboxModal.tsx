import React from 'react';
import { GalleryItem, Language } from '../types';
import { X, MapPin, CheckCircle, Calendar } from 'lucide-react';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  language: Language;
  onOpenBooking: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
  language,
  onOpenBooking
}) => {
  if (!item) return null;

  return (
    <div id="image-lightbox-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#000613] rounded-3xl max-w-2xl w-full border border-slate-800 overflow-hidden shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative aspect-video w-full bg-black">
          <img
            src={item.imageUrl}
            alt={item.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase bg-blue-600 text-white px-2.5 py-1 rounded shadow-sm">
              {language === 'en' ? item.tagEn : item.tagTe}
            </span>
          </div>

          <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
            {language === 'en' ? item.titleEn : item.titleTe}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            {language === 'en' ? item.subtitleEn : item.subtitleTe}
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
            <span className="text-slate-400">Zero to Hero Driving Hub - Kukatpally</span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-transform hover:scale-105"
            >
              {language === 'en' ? 'Book Similar Training' : 'స్లాట్ బుక్ చేయండి'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
