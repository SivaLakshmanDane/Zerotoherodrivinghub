import React, { useState } from 'react';
import { Language, GalleryItem, ScreenType } from '../types';
import { GALLERY_ITEMS } from '../data/content';
import { Sparkles, Eye, ArrowRight, Camera } from 'lucide-react';

interface GalleryScreenProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: () => void;
  onOpenImage: (item: GalleryItem) => void;
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({
  language,
  onNavigate,
  onOpenBooking,
  onOpenImage
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Training Fleet', 'Practical Road', 'Student Success', 'City Traffic', 'Doorstep Service', 'Mentorship'];

  const filteredItems = selectedTag === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.tagEn === selectedTag);

  return (
    <div id="gallery-screen-root" className="space-y-10 pb-12">
      
      {/* GALLERY HERO */}
      <section className="rounded-3xl bg-[#000613] text-white p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30">
            <Camera className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'PHOTO & SUCCESS ARCHIVE' : 'శిక్షణ ఫోటోల గ్యాలరీ'}</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
            {language === 'en' ? 'Life on the Road with Zero to Hero' : 'జీరో టు హీరో విద్యార్థుల విజయ గాథలు'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-body">
            {language === 'en'
              ? 'Explore our modern dual-control training vehicles, live highway sessions, and happy students who passed their driving tests with flying colors.'
              : 'మా ఆధునిక కార్ల ఫ్లీట్, రోడ్డు డ్రైవింగ్ సెషన్స్ మరియు డ్రైవింగ్ నేర్చుకున్న విద్యార్థుల నిజమైన ఫోటోలు.'}
          </p>
        </div>
      </section>

      {/* FILTER TAGS */}
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedTag === tag
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenImage(item)}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <img
                src={item.imageUrl}
                alt={item.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <span className="absolute top-3 left-3 text-[10px] font-black uppercase bg-blue-600 text-white px-2.5 py-1 rounded shadow-sm">
                {language === 'en' ? item.tagEn : item.tagTe}
              </span>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                  {language === 'en' ? item.titleEn : item.titleTe}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-body">
                  {language === 'en' ? item.subtitleEn : item.subtitleTe}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="text-[11px] text-slate-400">Click to enlarge</span>
                <span className="text-blue-600 flex items-center gap-1 font-bold">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
