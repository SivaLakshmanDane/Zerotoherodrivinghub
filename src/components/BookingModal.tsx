import React, { useState, useEffect } from 'react';
import { Language, BookingFormData } from '../types';
import { CONTACT_INFO, TRAINING_PROGRAMS } from '../data/content';
import { X, CheckCircle, Calendar, MessageSquare, Phone, Send, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialProgramId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language,
  initialProgramId
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    programId: initialProgramId || 'one-day-complete',
    trainingType: 'hub_car',
    preferredSlot: 'morning',
    preferredDate: '',
    locationArea: 'Kukatpally',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProgramId) {
      setFormData(prev => ({ ...prev, programId: initialProgramId }));
    }
  }, [initialProgramId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSuccess(true);
  };

  const handleWhatsAppBooking = () => {
    const selectedProgram = TRAINING_PROGRAMS.find(p => p.id === formData.programId)?.titleEn || formData.programId;
    const msg = `Hi Zero to Hero Driving Hub!%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Learner')}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Selected Program:* ${encodeURIComponent(selectedProgram)}%0A*Vehicle:* ${formData.trainingType === 'own_car' ? 'My Own Car' : 'Hub Car'}%0A*Batch:* ${formData.preferredSlot}%0A*Location:* ${encodeURIComponent(formData.locationArea)}%0A%0APlease confirm my booking slot.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div id="booking-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000613]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <h3 className="font-heading font-black text-2xl text-slate-900">
              {language === 'en' ? 'Slot Request Confirmed!' : 'స్లాట్ రిక్వెస్ట్ చేరింది!'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-body max-w-sm mx-auto">
              {language === 'en'
                ? `Thank you, ${formData.name}. Our Kukatpally senior instructor will call you at ${formData.phone} within 15 minutes.`
                : `ధన్యవాదాలు ${formData.name}. మా సీనియర్ ఇన్‌స్ట్రక్టర్ 15 నిమిషాల్లోపు ${formData.phone} కు కాల్ చేస్తారు.`}
            </p>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'en' ? 'Open & Confirm on WhatsApp' : 'వాట్సాప్‌లో కన్ఫర్మ్ చేయండి'}</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs"
              >
                {language === 'en' ? 'Close Window' : 'విండో మూసివేయండి'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-black uppercase bg-blue-600 text-white px-2.5 py-0.5 rounded-md shadow-sm">
                {language === 'en' ? 'DOORSTEP DRIVING HUB' : 'డోర్‌స్టెప్ డ్రైవింగ్ హబ్'}
              </span>
              <h3 className="font-heading font-black text-2xl text-slate-900 mt-2">
                {language === 'en' ? 'Reserve Your Training Slot' : 'మీ శిక్షణ స్లాట్‌ను బుక్ చేయండి'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'en' ? 'Choose program, vehicle, and your preferred timings.' : 'మీకు నచ్చిన కోర్సు, వాహనం మరియు సమయాన్ని ఎంచుకోండి.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'en' ? 'Full Name *' : 'పూర్తి పేరు *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'en' ? 'e.g. Rahul Sharma' : 'ఉదా: రాహుల్ శర్మ'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'en' ? 'Phone Number *' : 'ఫోన్ నంబర్ *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9381643571"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-blue-600 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'en' ? 'Select Program' : 'కోర్సు ఎంచుకోండి'}
                </label>
                <select
                  value={formData.programId}
                  onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 bg-slate-50"
                >
                  {TRAINING_PROGRAMS.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {language === 'en' ? prog.titleEn : prog.titleTe} ({prog.priceEn})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Vehicle' : 'వాహనం'}
                  </label>
                  <select
                    value={formData.trainingType}
                    onChange={(e) => setFormData({ ...formData, trainingType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50"
                  >
                    <option value="hub_car">Hub Dual-Control</option>
                    <option value="own_car">My Own Car</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {language === 'en' ? 'Timing Batch' : 'సమయం'}
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50"
                  >
                    <option value="morning">Morning (6-9 AM)</option>
                    <option value="evening">Evening (7-10 PM)</option>
                    <option value="custom">Custom Timing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {language === 'en' ? 'Pickup Location in Hyderabad' : 'పికప్ లొకేషన్'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kukatpally, KPHB Phase 4"
                  value={formData.locationArea}
                  onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-transform hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Submit Booking' : 'బుకింగ్ పంపండి'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
