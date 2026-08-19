import React from 'react';
import { Language, ScreenType } from '../types';
import { CONTACT_INFO, TRAINING_PROGRAMS } from '../data/content';
import { Zap, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Phone, MessageSquare, Clock } from 'lucide-react';

interface OffersScreenProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: (programId?: string) => void;
}

export const OffersScreen: React.FC<OffersScreenProps> = ({
  language,
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div id="offers-screen-root" className="space-y-12 pb-12">
      
      {/* OFFERS HERO */}
      <section className="rounded-3xl bg-gradient-to-br from-[#000613] via-[#001f3f] to-[#000613] text-white p-8 sm:p-12 border border-blue-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>{language === 'en' ? 'LIMITED SEASON SAVINGS' : 'పరిమిత కాల తగ్గింపు ఆఫర్లు'}</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
            {language === 'en' ? 'Special Discount Packages' : 'ప్రత్యేక తగ్గింపు డ్రైవింగ్ ప్యాకేజీలు'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-body">
            {language === 'en'
              ? 'Get premium professional road instruction with doorstep pick-up at unbeatable Hyderabad prices.'
              : 'అత్యుత్తమ శిక్షణ, డోర్‌స్టెప్ సర్వీస్‌తో సరసమైన ధరల్లో డ్రైవింగ్ నేర్చుకోండి.'}
          </p>
        </div>
      </section>

      {/* FEATURED ₹1999 MEGA DEAL CARD */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-100 via-sky-50 to-indigo-100 p-8 sm:p-10 border-2 border-blue-300 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase text-blue-950 bg-blue-200/80 px-3 py-1 rounded-full">
              HOTTEST ENROLLMENT
            </span>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
              {language === 'en'
                ? '2-Day Intensive Confidence Booster — ₹1,999/- Only'
                : '2 రోజుల ఇంటెన్సివ్ డ్రైవింగ్ కోర్సు — ₹1,999/- మాత్రమే'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body">
              {language === 'en'
                ? 'Designed for those with a valid license who still feel anxious behind the steering wheel. We cover peak traffic, flyover slope starts, reverse parking formulas, and highway overtaking.'
                : 'లైసెన్స్ ఉన్నా ట్రాఫిక్‌లో డ్రైవ్ చేయాలంటే భయపడేవారికి అనువైన స్పెషల్ బ్యాచ్. డోర్‌స్టెప్ పికప్ & డ్రాప్ సౌకర్యం కలదు.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{language === 'en' ? '2 Days × 3 Hours Intensive' : '2 రోజులు × 3 గంటల ప్రాక్టీస్'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{language === 'en' ? 'Doorstep Pick-up Included' : 'డోర్‌స్టెప్ పికప్ కలదు'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{language === 'en' ? 'Basement Parking Mastery' : 'బేస్‌మెంట్ పార్కింగ్ ప్రాక్టీస్'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{language === 'en' ? 'Morning / Evening Slots' : 'ఉదయం లేదా సాయంత్రం స్లాట్స్'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center bg-white/80 p-6 rounded-2xl border border-blue-200 shadow-sm">
            <div className="text-center sm:text-right mb-4">
              <span className="text-xs font-bold text-slate-500 line-through">Regular: ₹3,999</span>
              <div className="font-heading font-black text-4xl text-blue-900">₹1,999/-</div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">
                SAVE 50% TODAY
              </span>
            </div>

            <button
              onClick={() => onOpenBooking('intensive-two-day')}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <span>{language === 'en' ? 'Claim ₹1999 Slot' : 'ఆఫర్ బుక్ చేయండి'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ADDITIONAL PACKAGES & DISCOUNTS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Combo 1: Own Car Discount */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black uppercase bg-blue-100 text-blue-900 px-2.5 py-1 rounded">
              OWN VEHICLE PASS
            </span>
            <h3 className="font-heading font-black text-xl text-slate-900 mt-2 mb-1">
              {language === 'en' ? 'Doorstep Own Car Training' : 'మీ స్వంత కారులో శిక్షణ'}
            </h3>
            <div className="font-heading font-black text-2xl text-blue-600 mb-2">₹1,799/-</div>
            <p className="text-xs sm:text-sm text-slate-600 font-body">
              {language === 'en'
                ? 'Get trained on the exact car you drive daily. Trainer arrives at your apartment parking lot.'
                : 'మీరు కొన్న కారులోనే మీ గేట్ వద్దే శిక్షణ పొందండి.'}
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('doorstep-own-car')}
            className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
          >
            {language === 'en' ? 'Select Own Car Offer' : 'ఈ ఆఫర్ ఎంచుకోండి'}
          </button>
        </div>

        {/* Combo 2: Fast Track One Day */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black uppercase bg-blue-600 text-white px-2.5 py-1 rounded">
              1-DAY FAST TRACK
            </span>
            <h3 className="font-heading font-black text-xl text-slate-900 mt-2 mb-1">
              {language === 'en' ? 'One Day Complete Car Driving' : 'ఒక్క రోజులో Complete Car Driving'}
            </h3>
            <div className="font-heading font-black text-2xl text-blue-600 mb-2">₹3,499/-</div>
            <p className="text-xs sm:text-sm text-slate-600 font-body">
              {language === 'en'
                ? 'Full day 6-8 hour complete mastery from scratch. Includes heavy traffic & parallel parking formulas.'
                : 'పూర్తి రోజు ఇంటెన్సివ్ డ్రైవింగ్ కోర్సు. ఒక్క రోజులోనే డ్రైవింగ్ పై పూర్తి పట్టు సాధించండి.'}
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('one-day-complete')}
            className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
          >
            {language === 'en' ? 'Select 1-Day Pass' : 'ఈ ఆఫర్ ఎంచుకోండి'}
          </button>
        </div>

      </section>

    </div>
  );
};
