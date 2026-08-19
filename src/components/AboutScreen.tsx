import React, { useState } from 'react';
import { Language, ScreenType, GalleryItem } from '../types';
import { ASSETS, FAQS, GALLERY_ITEMS, TESTIMONIALS, STATS } from '../data/content';
import { 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Car, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Users, 
  Star, 
  Clock, 
  Calendar, 
  ArrowRight,
  Eye
} from 'lucide-react';

interface AboutScreenProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: (programId?: string) => void;
  onOpenImage: (item: GalleryItem) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  language,
  onNavigate,
  onOpenBooking,
  onOpenImage
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Timings', 'Doorstep', 'Vehicles', 'Safety', 'Pricing'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === selectedCategory);

  return (
    <div id="about-screen-root" className="space-y-12 pb-12">
      
      {/* MISSION & ABOUT HERO SECTION */}
      <section id="about-mission-hero" className="rounded-3xl bg-[#000613] text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#001f3f] rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'OUR PHILOSOPHY & STORY' : 'మా లక్ష్యం & ప్రయాణం'}</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
            {language === 'en'
              ? 'Transforming Beginners into Confident, Fearless Drivers.'
              : 'ప్రారంభ దశ నుండి ధైర్యవంతమైన డ్రైవర్లుగా తీర్చిదిద్దడమే మా ధ్యేయం.'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            {language === 'en'
              ? 'Founded in Kukatpally, Hyderabad, Zero to Hero Driving Hub was built on a simple truth: real driving confidence isn’t learned in empty grounds or boring theory classrooms—it is forged in real city traffic with supportive, patient mentors.'
              : 'కూకట్‌పల్లిలో ప్రారంభమైన జీరో టు హీరో డ్రైవింగ్ హబ్, వేలాది మందికి డ్రైవింగ్ పట్ల ఉన్న భయాన్ని పోగొట్టి, రోడ్డుపై ధైర్యంగా కారు నడిపే సామర్థ్యాన్ని విజయవంతంగా అందిస్తోంది.'}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>{language === 'en' ? 'Government & RTO Standards' : 'ప్రభుత్వ RTO నిబంధనల ప్రకారం శిక్షణ'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>{language === 'en' ? 'Dual-Pedal Safety Systems' : 'డ్యుయల్ పెడల్ సేఫ్టీ సిస్టమ్స్'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE ZERO TO HERO ADVANTAGE: 3-CARD BENTO */}
      <section id="advantage-bento" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-black uppercase text-blue-600 tracking-wider">
            {language === 'en' ? 'THE ZERO TO HERO ADVANTAGE' : 'మా ప్రత్యేక ప్రయోజనాలు'}
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            {language === 'en' ? 'Why Learners in Hyderabad Trust Us' : 'హైదరాబాద్‌లో వేలాది మంది మమ్మల్ని ఎందుకు ఎంచుకుంటారు?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Doorstep Pick-up */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-black">
                <span className="material-symbols-outlined text-2xl">home_pin</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                {language === 'en' ? 'Doorstep Pick-up & Drop' : 'డోర్‌స్టెప్ పికప్ & డ్రాప్'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {language === 'en'
                  ? 'We value your schedule. Trainers arrive right at your residential gate in Kukatpally, KPHB, Nizampet, and neighboring localities.'
                  : 'మీ సమయాన్ని ఆదా చేస్తూ, ట్రైనర్లు నేరుగా మీ ఇంటి ముంగిటికే వస్తారు. కూకట్‌పల్లి, KPHB మరియు పరిసర ప్రాంతాలలో అందుబాటులో ఉంది.'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-700 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Kukatpally, KPHB, Nizampet, Miyapur</span>
            </div>
          </div>

          {/* Card 2: 100% Practical Road Training */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-900 flex items-center justify-center font-black">
                <span className="material-symbols-outlined text-2xl">route</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                {language === 'en' ? '100% Practical Road Driving' : '100% ప్రాక్టికల్ రోడ్డు డ్రైవింగ్'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {language === 'en'
                  ? 'No artificial ground circles. We take you into live traffic, flyovers, U-turn intersections, and tight basement parking right from day one.'
                  : 'గ్రౌండ్‌లో కాకుండా నేరుగా నిజమైన ట్రాఫిక్ రోడ్లు, ఫ్లైఓవర్లు మరియు మాల్స్ బేస్‌మెంట్లలో డ్రైవింగ్ నేర్పిస్తాము.'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-sky-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Real Hyderabad road conditions</span>
            </div>
          </div>

          {/* Card 3: Confidence & Patient Mentorship */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center font-black">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                {language === 'en' ? 'Patient, Calm Mentorship' : 'ఓపికైన అనుభవజ్ఞులైన ట్రైనర్లు'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {language === 'en'
                  ? 'Our trainers are hand-picked for their patience. Special ladies batches and customized fear-reduction driving drills.'
                  : 'ఎటువంటి విసుగు లేకుండా ఎంతో ఓపికతో నేర్పిస్తారు. మహిళలకు ప్రత్యేక సురక్షిత బ్యాచులు ఉన్నాయి.'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-700 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Anxiety-free learning</span>
            </div>
          </div>

        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section id="testimonials-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase text-blue-600 tracking-wider mb-1">
              {language === 'en' ? 'REAL EXPERIENCES' : 'విద్యార్థుల అభిప్రాయాలు'}
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              {language === 'en' ? 'What Our Students Say' : 'మా వద్ద నేర్చుకున్న వారి మాటల్లో...'}
            </h2>
          </div>
          <div className="flex items-center gap-1 text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
            <span>4.9 / 5.0 Rating (350+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-blue-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic font-body leading-relaxed">
                  "{language === 'en' ? t.commentEn : t.commentTe}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-slate-900">
                    {language === 'en' ? t.nameEn : t.nameTe}
                  </div>
                  <div className="text-xs text-slate-500">
                    {language === 'en' ? t.locationEn : t.locationTe}
                  </div>
                </div>
                <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  {language === 'en' ? t.carLearnedEn : t.carLearnedTe}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY TEASER SECTION */}
      <section id="gallery-teaser" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-black uppercase text-blue-600 tracking-wider mb-1">
              {language === 'en' ? 'PHOTO GALLERY' : 'శిక్షణ గ్యాలరీ'}
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              {language === 'en' ? 'Life on the Road with Zero to Hero' : 'జీరో టు హీరో శిక్షణ ఫోటోలు'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-700 flex items-center gap-1"
          >
            <span>{language === 'en' ? 'View Full Gallery' : 'అన్ని ఫోటోలు చూడండి'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-video cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-black uppercase bg-blue-600 text-white px-2 py-0.5 rounded shadow">
                  {language === 'en' ? item.tagEn : item.tagTe}
                </span>
                <div className="font-bold text-sm text-white mt-1 group-hover:text-blue-400 transition-colors">
                  {language === 'en' ? item.titleEn : item.titleTe}
                </div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPREHENSIVE FAQ ACCORDION SECTION */}
      <section id="faq-section" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-black uppercase text-blue-600 tracking-wider">
            {language === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'తరచుగా అడిగే ప్రశ్నలు'}
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            {language === 'en' ? 'Got Questions? We Have Answers.' : 'మీ సందేహాలకు మా సమాధానాలు'}
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#000613] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-white border-slate-300 shadow-md'
                    : 'bg-white/70 border-slate-200 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-mono shrink-0">
                      {index + 1}
                    </span>
                    <span>{language === 'en' ? faq.questionEn : faq.questionTe}</span>
                  </span>
                  <div className={`p-1 rounded-full text-slate-400 shrink-0 ${isOpen ? 'bg-slate-100 text-slate-900' : ''}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-body border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{language === 'en' ? faq.answerEn : faq.answerTe}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CALL TO ACTION CARD */}
      <section className="rounded-3xl bg-gradient-to-br from-[#000613] via-[#001f3f] to-[#000613] text-white p-8 sm:p-10 text-center relative overflow-hidden shadow-xl border border-blue-500/30">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md shadow-blue-600/30">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>{language === 'en' ? 'START YOUR JOURNEY TODAY' : 'ఇప్పుడే ప్రారంభించండి'}</span>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
            {language === 'en'
              ? 'Ready to Drive Confidently in Hyderabad Traffic?'
              : 'హైదరాబాద్ రోడ్లపై ధైర్యంగా డ్రైవ్ చేయడానికి సిద్ధంగా ఉన్నారా?'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'en'
              ? 'Book your slot now with doorstep pick-up in Kukatpally. Choose morning or evening batch.'
              : 'కూకట్‌పల్లి మరియు హైదరాబాద్ అంతటా డోర్‌స్టెప్ సర్వీస్. మీ వీలును బట్టి మార్నింగ్ లేదా ఈవెనింగ్ బ్యాచ్ ఎంచుకోండి.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-transform hover:scale-105"
            >
              {language === 'en' ? 'Book Training Slot' : 'స్లాట్ బుక్ చేయండి'}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              {language === 'en' ? 'View Contact Info' : 'హెల్ప్‌లైన్ నంబర్లు'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
