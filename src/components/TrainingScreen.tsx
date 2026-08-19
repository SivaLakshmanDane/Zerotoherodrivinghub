import React from 'react';
import { Language, ScreenType, TrainingProgram } from '../types';
import { ASSETS, CONTACT_INFO, TRAINING_PROGRAMS } from '../data/content';
import { 
  Car, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  BadgeCheck,
  Star
} from 'lucide-react';

interface TrainingScreenProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: (programId?: string) => void;
}

export const TrainingScreen: React.FC<TrainingScreenProps> = ({
  language,
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div id="training-screen-root" className="space-y-12 pb-12">
      
      {/* TRAINING HERO BANNER */}
      <section id="training-hero-banner" className="relative rounded-3xl overflow-hidden bg-[#000613] text-white shadow-2xl border border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroSteeringVivid}
            alt="Professional Car Driving Instruction"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000613] via-[#000613]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'COMPREHENSIVE CURRICULUM' : 'సమగ్ర శిక్షణ ప్రణాళిక'}</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {language === 'en' ? 'Master the Road.' : 'రోడ్డుపై పట్టు సాధించండి.'}
            <span className="block text-blue-400">
              {language === 'en' ? 'Fast, Practical & Safe.' : 'వేగంగా, ప్రాక్టికల్‌గా & సురక్షితంగా.'}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            {language === 'en'
              ? 'Choose from single-day fast-track mastery, 2-day budget confidence builders, flexible hourly refreshers, or doorstep sessions in your personal car.'
              : 'మీ అవసరానికి తగ్గట్టుగా వన్-డే ఫాస్ట్ ట్రాక్ కోర్సు, 2 రోజుల బడ్జెట్ ప్రోగ్రామ్ లేదా మీ స్వంత కారులో శిక్షణ ఎంచుకోండి.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wide flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-transform hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'en' ? 'Reserve Your Slot' : 'స్లాట్ రిజర్వ్ చేసుకోండి'}</span>
            </button>
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="px-5 py-3.5 rounded-xl bg-slate-900/90 text-white text-sm font-bold border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* TIMING STRIP (MORNING, EVENING, CUSTOM) */}
      <section id="timings-strip" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-sky-200/80 text-sky-950 flex items-center justify-center font-bold shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase text-sky-800 tracking-wider">
              {language === 'en' ? 'EARLY BIRD SLOT' : 'ఉదయం స్లాట్'}
            </div>
            <div className="font-heading font-black text-lg text-sky-950">06:00 AM - 09:00 AM</div>
            <p className="text-xs text-sky-900/80 mt-1">
              {language === 'en' ? 'Best for empty road clutch balancing and steering fundamentals.' : 'ఖాళీ రోడ్లపై ప్రాథమిక క్లచ్ మరియు స్టీరింగ్ ప్రాక్టీస్ కోసం.'}
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-200/80 text-blue-950 flex items-center justify-center font-bold shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase text-blue-800 tracking-wider">
              {language === 'en' ? 'NIGHT VISION SLOT' : 'సాయంత్రం స్లాట్'}
            </div>
            <div className="font-heading font-black text-lg text-blue-950">07:00 PM - 10:00 PM</div>
            <p className="text-xs text-blue-900/80 mt-1">
              {language === 'en' ? 'Ideal for working professionals and night headlight navigation.' : 'ఉద్యోగులకు మరియు నైట్ డ్రైవింగ్ హెడ్‌లైట్ జడ్జిమెంట్ కోసం.'}
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-200/80 text-emerald-950 flex items-center justify-center font-bold shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">
              {language === 'en' ? 'FLEXIBLE WEEKEND' : 'వీకెండ్ & కస్టమ్'}
            </div>
            <div className="font-heading font-black text-lg text-emerald-950">Custom Hours</div>
            <p className="text-xs text-emerald-900/80 mt-1">
              {language === 'en' ? 'Choose any 2 to 4 hour block matching your daily routine.' : 'మీ సమయానికి అనుకూలంగా 2 నుండి 4 గంటల ప్రత్యేక స్లాట్.'}
            </p>
          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMS DETAILED GRID */}
      <section id="programs-catalog" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase text-blue-600 tracking-wider mb-1">
              {language === 'en' ? 'STRUCTURED PACKAGES' : 'శిక్షణ ప్యాకేజీలు'}
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              {language === 'en' ? 'Choose Your Training Program' : 'మీకు సరిపోయే శిక్షణ ప్రోగ్రామ్‌ను ఎంచుకోండి'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TRAINING_PROGRAMS.map((program) => {
            const isFeatured = program.highlight;
            return (
              <div
                key={program.id}
                id={`program-card-${program.id}`}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#000613] via-[#001f3f] to-[#000613] text-white border-blue-500/40 shadow-xl'
                    : 'bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {language === 'en' ? program.badgeEn : program.badgeTe}
                    </span>

                    <span className={`text-xs font-semibold ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                      {language === 'en' ? program.durationEn : program.durationTe}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <h3 className="font-heading font-black text-xl sm:text-2xl leading-snug">
                      {language === 'en' ? program.titleEn : program.titleTe}
                    </h3>
                    <div className="shrink-0 text-left sm:text-right">
                      <div className={`font-heading font-black text-2xl ${isFeatured ? 'text-blue-400' : 'text-slate-900'}`}>
                        {language === 'en' ? program.priceEn : program.priceTe}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-body ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {language === 'en' ? program.descriptionEn : program.descriptionTe}
                  </p>

                  {/* Curriculum Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? 'text-blue-400' : 'text-slate-700'}`}>
                      {language === 'en' ? 'What You Will Master:' : 'మీరు నేర్చుకునే ముఖ్యాంశాలు:'}
                    </div>
                    {(language === 'en' ? program.featuresEn : program.featuresTe).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-blue-400' : 'text-emerald-600'}`} />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className={`pt-5 border-t flex flex-wrap items-center justify-between gap-4 ${isFeatured ? 'border-white/10' : 'border-slate-100'}`}>
                  <div className={`text-xs font-medium ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {language === 'en' ? 'Doorstep Pick-up Included' : 'డోర్‌స్టెప్ పికప్ కలదు'}
                  </div>

                  <button
                    id={`book-btn-${program.id}`}
                    onClick={() => onOpenBooking(program.id)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-blue-600 hover:bg-blue-500 text-white font-black shadow-lg shadow-blue-600/30 hover:scale-105'
                        : 'bg-[#000613] hover:bg-[#001f3f] text-white'
                    }`}
                  >
                    <span>{language === 'en' ? 'Enroll / Book Slot' : 'స్లాట్ బుక్ చేయండి'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* SPECIAL MONTHLY OFFER CARD */}
      <section id="training-special-offer" className="rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-100 p-8 sm:p-10 border-2 border-blue-300 shadow-lg relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md shadow-blue-600/30">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{language === 'en' ? 'SPECIAL INTENSIVE OFFER' : 'ప్రత్యేక ఇంటెన్సివ్ ఆఫర్'}</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-950">
              {language === 'en'
                ? '2-Day Practical Road Confidence Package — ₹1,999/- Only'
                : '2 రోజుల ప్రాక్టికల్ రోడ్డు డ్రైవింగ్ ప్యాకేజ్ — ₹1,999/- మాత్రమే'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-body">
              {language === 'en'
                ? 'Specially designed for beginners and license holders struggling with bumper-to-bumper traffic, flyover stops, and tight basement parking. Zero theoretical lectures, 100% road driving.'
                : 'లైసెన్స్ ఉన్నా ట్రాఫిక్‌లో డ్రైవ్ చేయడానికి భయపడేవారికి అనువైన స్పెషల్ బ్యాచ్. ఎటువంటి థియరీ లేకుండా నేరుగా రోడ్డుపై డ్రైవింగ్ ప్రాక్టీస్.'}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
            <div className="text-center sm:text-right mb-4">
              <span className="text-xs font-bold text-slate-600 line-through">₹3,999</span>
              <div className="font-heading font-black text-4xl text-blue-900">₹1,999/-</div>
              <div className="text-[11px] font-bold text-blue-950 uppercase mt-0.5">
                {language === 'en' ? 'Doorstep Pick-up Included' : 'డోర్‌స్టెప్ సర్వీస్ కలదు'}
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('intensive-two-day')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider shadow-md shadow-blue-600/30 transition-transform hover:scale-105"
            >
              {language === 'en' ? 'Claim ₹1999 Offer' : 'ఆఫర్ బుక్ చేయండి'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
