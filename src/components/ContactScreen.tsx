import React, { useState } from 'react';
import { Language, ScreenType, BookingFormData } from '../types';
import { ASSETS, CONTACT_INFO, TRAINING_PROGRAMS } from '../data/content';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle, 
  Navigation, 
  Calendar, 
  Sparkles, 
  Car, 
  AlertCircle 
} from 'lucide-react';

interface ContactScreenProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: (programId?: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  language,
  onNavigate,
  onOpenBooking
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    programId: 'one-day-complete',
    trainingType: 'hub_car',
    preferredSlot: 'morning',
    preferredDate: '',
    locationArea: 'Kukatpally',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppInquiry = () => {
    const selectedProgram = TRAINING_PROGRAMS.find(p => p.id === formData.programId)?.titleEn || formData.programId;
    const message = `Hello Zero to Hero Driving Hub!%0A%0AName: ${encodeURIComponent(formData.name || 'Learner')}%0APhone: ${encodeURIComponent(formData.phone || '')}%0AProgram: ${encodeURIComponent(selectedProgram)}%0ALocation: ${encodeURIComponent(formData.locationArea)}%0APreferred Slot: ${formData.preferredSlot}%0A%0AI want to book a driving training slot.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div id="contact-screen-root" className="space-y-12 pb-12">
      
      {/* CONTACT HERO */}
      <section id="contact-hero" className="rounded-3xl bg-[#000613] text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-600/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'REACH OUT TO US' : 'మమ్మల్ని సంప్రదించండి'}</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
            {language === 'en' ? 'Get in Touch with Driving Hub' : 'జీరో టు హీరో డ్రైవింగ్ హబ్‌తో మాట్లాడండి'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-body">
            {language === 'en'
              ? 'Visit our Kukatpally hub or request doorstep pick-up across Hyderabad. Our helpline is open 7 days a week from 6 AM to 10 PM.'
              : 'కూకట్‌పల్లిలోని మా హబ్‌ను సందర్శించండి లేదా హైదరాబాద్ అంతటా మీ ఇంటి వద్దకే డోర్‌స్టెప్ ట్రైనింగ్ పొందండి.'}
          </p>
        </div>
      </section>

      {/* TOP 2 CONTACT CARDS (CALL US TODAY & OUR LOCATION) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Call Us Today */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold mb-4">
              <Phone className="w-6 h-6" />
            </div>
            
            <h2 className="font-heading font-black text-2xl text-slate-900 mb-1">
              {language === 'en' ? 'Call Us Today' : 'ఈరోజే కాల్ చేయండి'}
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 font-body">
              {language === 'en'
                ? 'Speak directly with our senior instructors for instant batch allocation & route consultation.'
                : 'స్లాట్ బుకింగ్ మరియు వివరాల కోసం మా సీనియర్ ట్రైనర్లతో నేరుగా మాట్లాడండి.'}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 transition-colors group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">{language === 'en' ? 'Helpline 1 (Primary)' : 'హెల్ప్‌లైన్ 1'}</span>
                  <div className="font-heading font-black text-xl text-slate-900 font-mono mt-0.5">{CONTACT_INFO.primaryPhone}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-blue-600/30">
                  <Phone className="w-4 h-4" />
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.secondaryPhone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 transition-colors group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">{language === 'en' ? 'Helpline 2 (Support)' : 'హెల్ప్‌లైన్ 2'}</span>
                  <div className="font-heading font-black text-xl text-slate-900 font-mono mt-0.5">{CONTACT_INFO.secondaryPhone}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-blue-600/30">
                  <Phone className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{language === 'en' ? CONTACT_INFO.operatingHoursEn : CONTACT_INFO.operatingHoursTe}</span>
          </div>
        </div>

        {/* Card 2: Our Location & WhatsApp */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold mb-4">
              <MapPin className="w-6 h-6" />
            </div>

            <h2 className="font-heading font-black text-2xl text-slate-900 mb-1">
              {language === 'en' ? 'Hub Location' : 'మా హబ్ చిరునామా'}
            </h2>

            <div className="text-xs sm:text-sm text-slate-700 font-medium space-y-1 mt-3">
              <div className="font-heading font-bold text-slate-900">{CONTACT_INFO.locationNameEn}</div>
              <p className="text-slate-600 font-body leading-relaxed">
                {language === 'en' ? CONTACT_INFO.addressEn : CONTACT_INFO.addressTe}
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>{language === 'en' ? 'Get Directions' : 'రూట్ చూడండి'}</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Zero%20to%20Hero%20Driving%20Hub,%20I%20want%20to%20inquire%20about%20driving%20classes`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'en' ? 'WhatsApp Chat' : 'వాట్సాప్ మెసేజ్'}</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Car className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{language === 'en' ? 'Doorstep pickup available in all Hyderabad areas' : 'హైదరాబాద్ అంతటా డోర్‌స్టెప్ సర్వీస్ అందుబాటులో ఉంది'}</span>
          </div>
        </div>

      </section>

      {/* INTERACTIVE BOOKING INQUIRY FORM & MAP SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Slot Booking / Inquiry Form (Span 7) */}
        <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-black uppercase text-blue-600 tracking-wider">
              {language === 'en' ? 'ONLINE RESERVATION' : 'ఆన్‌లైన్ స్లాట్ రిజర్వేషన్'}
            </span>
            <h2 className="font-heading font-black text-2xl text-slate-900 mt-1">
              {language === 'en' ? 'Book Your Driving Slot' : 'మీ డ్రైవింగ్ స్లాట్ బుక్ చేసుకోండి'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {language === 'en'
                ? 'Fill your contact details. Our instructor will call back within 15 minutes to confirm timing.'
                : 'మీ వివరాలను నమోదు చేయండి. మా ట్రైనర్ 15 నిమిషాల్లోపు కాల్ చేసి సమయాన్ని ఖరారు చేస్తారు.'}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-2xl text-emerald-950">
                {language === 'en' ? 'Booking Inquiry Received!' : 'మీ అభ్యర్థన విజయవంతంగా చేరింది!'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900/80 max-w-md mx-auto font-body">
                {language === 'en'
                  ? `Thank you, ${formData.name}! Our senior instructor will call you on ${formData.phone} shortly to finalize the doorstep schedule.`
                  : `ధన్యవాదాలు ${formData.name}! మా సీనియర్ ట్రైనర్ త్వరలోనే ${formData.phone} నంబర్‌కు కాల్ చేసి డోర్‌స్టెప్ సమయాన్ని నిర్ధారిస్తారు.`}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'en' ? 'Confirm Instantly on WhatsApp' : 'వాట్సాప్‌లో తక్షణమే నిర్ధారించండి'}</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-800 text-xs font-bold"
                >
                  {language === 'en' ? 'Submit Another' : 'మరొకటి బుక్ చేయండి'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Your Full Name *' : 'మీ పూర్తి పేరు *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'en' ? 'e.g. Sravan Reddy' : 'ఉదా: శ్రవణ్ రెడ్డి'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Phone Number (Calling / WhatsApp) *' : 'ఫోన్ నంబర్ *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9381643571"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Select Training Program' : 'శిక్షణ ప్రోగ్రామ్'}
                  </label>
                  <select
                    value={formData.programId}
                    onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  >
                    {TRAINING_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {language === 'en' ? prog.titleEn : prog.titleTe} ({language === 'en' ? prog.priceEn : prog.priceTe})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Training Vehicle' : 'శిక్షణ వాహనం'}
                  </label>
                  <select
                    value={formData.trainingType}
                    onChange={(e) => setFormData({ ...formData, trainingType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  >
                    <option value="hub_car">Zero to Hero Training Fleet (Dual-Control)</option>
                    <option value="own_car">My Own Personal Car (Doorstep Trainer)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Preferred Batch Time' : 'అనుకూల సమయం'}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'morning', label: 'Morning (6-9 AM)' },
                      { id: 'evening', label: 'Evening (7-10 PM)' },
                      { id: 'custom', label: 'Custom Timing' }
                    ].map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        onClick={() => setFormData({ ...formData, preferredSlot: slot.id as any })}
                        className={`p-2 rounded-xl border text-center font-semibold transition-all ${
                          formData.preferredSlot === slot.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Your Location in Hyderabad' : 'హైదరాబాద్‌లో మీ ప్రాంతం'}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kukatpally Phase 2 / KPHB / Nizampet"
                    value={formData.locationArea}
                    onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-transform hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Request...' : (language === 'en' ? 'Submit Booking Request' : 'స్లాట్ రిక్వెస్ట్ పంపండి')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* MAP & LOCATION VIEW (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm overflow-hidden space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-black text-base text-slate-900">
                  {language === 'en' ? 'Kukatpally Service Area' : 'కూకట్‌పల్లి సేవా ప్రాంతం'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'en' ? 'Doorstep pickup in 10+ km radius' : '10 కి.మీ పరిధిలో డోర్‌స్టెప్ సేవ'}
                </p>
              </div>
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full">
                Hyderabad Hub
              </span>
            </div>

            {/* Interactive Map Visual */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 border border-slate-200 group">
              <img
                src={ASSETS.mapKukatpally}
                alt="Zero to Hero Kukatpally Map"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>

              {/* Office Location Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000613] text-white px-3 py-1.5 rounded-xl shadow-2xl border border-blue-500/50 flex items-center gap-1.5 animate-bounce">
                <MapPin className="w-4 h-4 fill-blue-500 text-white" />
                <span className="text-xs font-black text-blue-400">ZERO TO HERO HUB</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 pt-1">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="font-bold text-slate-800">Primary Hub:</span>
                <span>Kukatpally Metro Pillar A784</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="font-bold text-slate-800">Coverage Areas:</span>
                <span>KPHB, Miyapur, Nizampet, Madhapur</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-bold text-slate-800">Direct Contact:</span>
                <span className="font-mono font-bold text-slate-900">9381643571</span>
              </div>
            </div>

            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Open in Google Maps' : 'గూగుల్ మ్యాప్స్‌లో చూడండి'}</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};
