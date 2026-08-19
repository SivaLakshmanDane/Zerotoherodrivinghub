import React from 'react';
import { Language, ScreenType } from '../types';
import { ASSETS, CONTACT_INFO, STATS, TRAINING_PROGRAMS } from '../data/content';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Car, 
  Compass, 
  Zap,
  Award,
  Users
} from 'lucide-react';

interface HomeScreenProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: (programId?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  language,
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div id="home-screen-root" className="space-y-12 pb-12">
      
      {/* HERO BANNER SECTION */}
      <section id="hero-banner" className="relative rounded-3xl overflow-hidden bg-[#000613] text-white shadow-2xl border border-slate-800">
        
        {/* Background Image with Rich Navy & Gold Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroSteeringNavy}
            alt="Zero to Hero Car Driving Training"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-45 scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000613] via-[#000613]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000613] via-transparent to-transparent"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl">
          
          {/* Top Brand Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>{language === 'en' ? 'HYDERABAD’S #1 DRIVING HUB' : 'హైదరాబాద్ నెం.1 డ్రైవింగ్ హబ్'}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-slate-200 font-semibold text-xs border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'en' ? 'Kukatpally & Hyderabad Doorstep' : 'కూకట్‌పల్లి & హైదరాబాద్'}</span>
            </span>
          </div>

          {/* Main Hero Telugu & English Headlines */}
          <div className="space-y-3 mb-6">
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              ZERO TO HERO
              <span className="block text-blue-400 mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold font-telugu">
                {language === 'en' 
                  ? 'ఒక్క రోజులో Complete Practical Car Driving Training'
                  : 'ఒక్క రోజులో Complete Practical Car Driving Training'}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-body">
              {language === 'en'
                ? 'Say goodbye to driving anxiety! Master steering control, bumper-to-bumper traffic navigation, flyover clutch balancing, reverse gears, and basement parking with certified experts at your doorstep.'
                : 'డ్రైవింగ్ భయాన్ని వీడండి! స్టీరింగ్ కంట్రోల్, ట్రాఫిక్ డ్రైవింగ్, రివర్స్ గేర్ టెక్నిక్స్ మరియు పార్కింగ్ పూర్తిగా నేర్పించే ఏకైక సమగ్ర ప్రాక్టికల్ డ్రైవింగ్ హబ్.'}
            </p>
          </div>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {[
              { en: "100% Practical on Heavy Traffic Roads", te: "100% ప్రాక్టికల్ రోడ్డు శిక్షణ" },
              { en: "Doorstep Pick-up & Drop Facility", te: "ఇంటి వద్దకే పికప్ & డ్రాప్ సౌకర్యం" },
              { en: "Train in Dual-Control or Your Own Car", te: "మా కారులో లేదా మీ స్వంత కారులో శిక్షణ" },
              { en: "Morning (6-9 AM) & Evening (7-10 PM) Batches", te: "ఉదయం & సాయంత్రం అనుకూల సమయాలు" }
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{language === 'en' ? highlight.en : highlight.te}</span>
              </div>
            ))}
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              id="hero-book-btn"
              onClick={() => onOpenBooking('one-day-complete')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm sm:text-base tracking-wide flex items-center gap-2 shadow-xl shadow-blue-600/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              <span>{language === 'en' ? 'Book 1-Day Training' : '1-డే ట్రైనింగ్ బుక్ చేయండి'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20want%20to%20know%20more%20about%20car%20driving%20classes`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg transition-all transform hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{language === 'en' ? 'WhatsApp Us' : 'వాట్సాప్ మెసేజ్'}</span>
            </a>

            <a
              id="hero-call-btn"
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="font-mono">{CONTACT_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Banner Stats Strip */}
        <div className="relative z-10 border-t border-white/10 bg-[#000613]/70 backdrop-blur-md px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="font-heading font-black text-xl sm:text-2xl text-blue-400">{stat.valueEn}</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                {language === 'en' ? stat.labelEn : stat.labelTe}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL ₹1999/- PROMOTION BANNER */}
      <section id="special-monthly-offer" className="rounded-2xl p-6 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black shrink-0 shadow-md shadow-blue-600/30">
            <span className="material-symbols-outlined text-3xl">local_offer</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-blue-900 bg-blue-200/80 px-2 py-0.5 rounded-md mb-1">
              <Zap className="w-3 h-3 fill-current" />
              <span>{language === 'en' ? 'Special Limited Offer' : 'ప్రత్యేక ఆఫర్'}</span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
              {language === 'en' ? 'Complete 2-Day Confidence Booster at ₹1,999/- Only' : '2 రోజుల ఇంటెన్సివ్ డ్రైవింగ్ కోర్సు ₹1,999/- మాత్రమే'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-body">
              {language === 'en'
                ? 'Ideal for license holders and nervous drivers. Includes highway driving, U-turns, basement parking and tight space navigation.'
                : 'లైసెన్స్ ఉన్నా ట్రాఫిక్‌లో డ్రైవ్ చేయాలంటే భయపడేవారికి అనువైన స్పెషల్ బ్యాచ్. డోర్‌స్టెప్ సర్వీస్ అందుబాటులో ఉంది.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            id="claim-monthly-offer-btn"
            onClick={() => onOpenBooking('intensive-two-day')}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-all hover:scale-105"
          >
            <span>{language === 'en' ? 'Claim Offer ₹1999/-' : 'ఆఫర్ బుక్ చేయండి'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* COMPREHENSIVE TRAINING SERVICES BENTO GRID */}
      <section id="services-bento-section" className="space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase text-blue-600 tracking-wider mb-1 flex items-center gap-1.5">
              <Car className="w-4 h-4" />
              <span>{language === 'en' ? 'Our Core Expertise' : 'మా ప్రత్యేక సేవలు'}</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              {language === 'en' ? 'Comprehensive Training Services' : 'సమగ్ర కార్ డ్రైవింగ్ శిక్షణ సేవలు'}
            </h2>
          </div>

          <button
            id="view-all-programs-btn"
            onClick={() => onNavigate('training')}
            className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-700 flex items-center gap-1 self-start sm:self-auto group"
          >
            <span>{language === 'en' ? 'View all detailed programs' : 'అన్ని ప్రోగ్రామ్‌లను చూడండి'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: One Day Complete Car Driving Training (Span 2 on lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-black">
                  <span className="material-symbols-outlined text-2xl">electric_bolt</span>
                </span>
                <span className="text-[11px] font-black uppercase bg-blue-600 text-white px-2.5 py-1 rounded-full shadow-sm">
                  {language === 'en' ? 'Fast Track' : 'వేగవంతమైన కోర్సు'}
                </span>
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 mb-2">
                {language === 'en' ? 'One Day Complete Car Driving Training' : 'ఒక్క రోజులో Complete Car Driving Training'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {language === 'en'
                  ? 'Intensive 6-8 hour immersion. Master complete clutch bite point, steering calibration, accelerator touch, and city flow in a single focused day.'
                  : 'ఒక్క రోజులోనే క్లచ్ కంట్రోల్, స్టీరింగ్ బ్యాలెన్సింగ్ మరియు సిటీ ట్రాఫిక్ డ్రైవింగ్ పూర్తిగా నేర్చుకోండి.'}
              </p>
              
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'en' ? '6 to 8 hours non-stop practical road time' : '6 నుండి 8 గంటల నిరంతర ప్రాక్టికల్ రోడ్డు సమయం'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'en' ? 'Flyover stops without rolling back' : 'ఫ్లైఓవర్‌పై కారు వెనక్కి వెళ్లకుండా ఆపడం'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 font-bold">{language === 'en' ? 'Duration' : 'వ్యవధి'}</span>
                <div className="font-bold text-xs text-slate-800">{language === 'en' ? '1 Full Day' : '1 పూర్తి రోజు'}</div>
              </div>
              <button
                id="bento-one-day-btn"
                onClick={() => onOpenBooking('one-day-complete')}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                {language === 'en' ? 'Book Now' : 'ఇప్పుడే బుక్ చేయండి'}
              </button>
            </div>
          </div>

          {/* Card 2: Doorstep Pick-up & Drop Service (with Image) */}
          <div className="md:col-span-1 lg:col-span-2 rounded-2xl bg-white border border-slate-200/80 p-0 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group">
            <div className="h-44 w-full relative overflow-hidden bg-slate-900">
              <img
                src={ASSETS.doorstepInstructorWhiteSedan}
                alt="Doorstep pick-up instructor sedan"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded shadow">
                  {language === 'en' ? 'DOORSTEP SERVICE' : 'డోర్‌స్టెప్ సర్వీస్'}
                </span>
                <div className="font-heading font-black text-lg text-white mt-1">
                  {language === 'en' ? 'Pick-up & Drop at Your Gate' : 'మీ ఇంటి వద్దకే పికప్ & డ్రాప్'}
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-600 font-body">
                {language === 'en'
                  ? 'No need to travel to driving schools. Our certified trainer arrives right at your residential gate in Kukatpally and surrounding areas.'
                  : 'డ్రైవింగ్ స్కూల్ కి వెళ్లే అవసరం లేకుండా, మా సీనియర్ ట్రైనర్ నేరుగా మీ ఇంటి ముందుకే వస్తారు.'}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 text-blue-700">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kukatpally, KPHB, Miyapur & more</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Practical Road Driving */}
          <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-black mb-3">
                <span className="material-symbols-outlined text-xl">traffic</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                {language === 'en' ? 'Practical Road Driving' : 'ప్రాక్టికల్ రోడ్డు డ్రైవింగ్'}
              </h4>
              <p className="text-xs text-slate-600 font-body">
                {language === 'en'
                  ? 'Learn real highway, junction, and peak-hour traffic driving without relying on fake ground tracks.'
                  : 'గ్రౌండ్‌లో కాకుండా నేరుగా అసలైన మెయిన్ రోడ్లు మరియు ట్రాఫిక్‌లో డ్రైవింగ్ ప్రాక్టీస్.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{language === 'en' ? 'Real Traffic' : 'నిజమైన రోడ్లు'}</span>
              <span className="font-bold text-slate-900">100% Hands-on</span>
            </div>
          </div>

          {/* Card 4: Reverse Driving Mastery */}
          <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center font-black mb-3">
                <span className="material-symbols-outlined text-xl">u_turn_left</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                {language === 'en' ? 'Reverse Driving Mastery' : 'రివర్స్ డ్రైవింగ్ పర్ఫెక్షన్'}
              </h4>
              <p className="text-xs text-slate-600 font-body">
                {language === 'en'
                  ? 'Master mirror judgment, S-reverse, L-reverse, and backing into narrow apartment lanes.'
                  : 'సైడ్ మిర్రర్స్ ఉపయోగించి రివర్స్ గేర్‌లో కారును సులభంగా నడపడం నేర్చుకోండి.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{language === 'en' ? 'Technique' : 'మెలకువలు'}</span>
              <span className="font-bold text-slate-900">Mirror Formulas</span>
            </div>
          </div>

          {/* Card 5: Precision Parking Formulas */}
          <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-black mb-3">
                <span className="material-symbols-outlined text-xl">local_parking</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                {language === 'en' ? 'Precision Parking' : 'ఖచ్చితమైన పార్కింగ్'}
              </h4>
              <p className="text-xs text-slate-600 font-body">
                {language === 'en'
                  ? 'Parallel, perpendicular, angular, and steep mall basement ramp parking made foolproof.'
                  : 'ప్యారలల్ పార్కింగ్ మరియు మాల్స్ బేస్‌మెంట్ ర్యాంప్ పార్కింగ్ సులభమైన ఫార్ములాలతో.'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{language === 'en' ? '4 Parking Styles' : '4 రకాల పార్కింగ్'}</span>
              <span className="font-bold text-slate-900">100% Accuracy</span>
            </div>
          </div>

          {/* Card 6: Your Own Car Doorstep Option */}
          <div className="rounded-2xl bg-[#000613] text-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-slate-800">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black mb-3 shadow-md">
                <span className="material-symbols-outlined text-xl">key</span>
              </div>
              <h4 className="font-heading font-bold text-base text-white mb-1">
                {language === 'en' ? 'Train in Your Own Car' : 'మీ స్వంత కారులో శిక్షణ'}
              </h4>
              <p className="text-xs text-slate-300 font-body">
                {language === 'en'
                  ? 'Get trained directly in your personal SUV, sedan, or hatchback right outside your apartment.'
                  : 'మీరు కొన్న కారులోనే మీ అపార్ట్మెంట్ వద్దే సీనియర్ ట్రైనర్‌తో శిక్షణ పొందండి.'}
              </p>
            </div>
            <button
              onClick={() => onOpenBooking('doorstep-own-car')}
              className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all text-center shadow-md shadow-blue-600/30"
            >
              {language === 'en' ? 'Select Own Car Training' : 'స్వంత కారు శిక్షణ ఎంచుకోండి'}
            </button>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE ZERO TO HERO SPOTLIGHT */}
      <section id="why-zero-to-hero" className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-blue-400 tracking-wider">
              <Award className="w-4 h-4" />
              <span>{language === 'en' ? 'WHY ZERO TO HERO DRIVING HUB?' : 'జీరో టు హీరో ఎందుకు ప్రత్యేకం?'}</span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white leading-tight">
              {language === 'en'
                ? 'We Don’t Just Teach Gears. We Build Real Road Fearlessness.'
                : 'మేము కేవలం గేర్లు మార్చడం మాత్రమే కాదు, మీలో ఉన్న డ్రైవింగ్ భయాన్ని పోగొడతాము.'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              {language === 'en'
                ? 'Most traditional driving schools keep you on empty grounds or 20 km/h perimeter routes. At Zero to Hero, we take you into real Kukatpally and Hitec City traffic, teach practical mirror-based distance calculations, and give you immediate confidence to drive alone.'
                : 'సాంప్రదాయ డ్రైవింగ్ స్కూల్స్ ఖాళీ గ్రౌండ్‌లో మాత్రమే తిప్పుతాయి. మేము మిమ్మల్ని నేరుగా రియల్ ట్రాఫిక్‌లోకి తీసుకెళ్లి, మిర్రర్స్ ఉపయోగించి సొంతంగా ఎలాంటి సహాయం లేకుండా కారు నడిపే ధైర్యం కలిగిస్తాము.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-sm text-blue-400">{language === 'en' ? 'Certified Patient Trainers' : 'ఓపికైన అనుభవజ్ఞులైన ట్రైనర్లు'}</div>
                <div className="text-xs text-slate-400 mt-1">{language === 'en' ? 'Zero shouting, 100% calm guidance' : 'ఎటువంటి విసుగు లేకుండా ప్రశాంతంగా నేర్పిస్తారు'}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-sm text-blue-400">{language === 'en' ? 'Dual Control Safety' : 'డ్యుయల్ కంట్రోల్ సేఫ్టీ'}</div>
                <div className="text-xs text-slate-400 mt-1">{language === 'en' ? 'Instructor backup brake & clutch' : 'ఇన్‌స్ట్రక్టర్ వద్ద అత్యవసర బ్రేక్ నియంత్రణ'}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl max-w-sm w-full">
              <img
                src={ASSETS.instructorSmilesNavy}
                alt="Smiling student and instructor in car"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-[#000613] text-center">
                <div className="text-xs font-bold text-white">
                  {language === 'en' ? '1-on-1 Personalized Attention' : '1-on-1 వ్యక్తిగత శ్రద్ధ'}
                </div>
                <div className="text-[11px] text-blue-400 mt-0.5">
                  {language === 'en' ? 'Morning 6-9 AM | Evening 7-10 PM' : 'ఉదయం 6-9 AM | సాయంత్రం 7-10 PM'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK INQUIRY & CONTACT STRIP */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-heading font-black text-xl text-slate-900">
            {language === 'en' ? 'Have Questions or Need a Custom Slot?' : 'ఏవైనా సందేహాలు ఉన్నాయా? స్లాట్ కావాలా?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'en'
              ? 'Call our Kukatpally hub directly or send us a WhatsApp message.'
              : 'మా కూకట్‌పల్లి హబ్‌కి నేరుగా కాల్ చేయండి లేదా వాట్సాప్ సందేశం పంపండి.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call: {CONTACT_INFO.primaryPhone}</span>
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20want%20to%20book%20a%20slot`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-2 shadow"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'en' ? 'WhatsApp Now' : 'వాట్సాప్ చేయండి'}</span>
          </a>
        </div>
      </section>

    </div>
  );
};
