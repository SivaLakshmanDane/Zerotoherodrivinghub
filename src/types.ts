export type Language = 'en' | 'te';

export type ScreenType = 'home' | 'about' | 'training' | 'contact' | 'gallery' | 'offers';

export interface TrainingProgram {
  id: string;
  titleEn: string;
  titleTe: string;
  badgeEn?: string;
  badgeTe?: string;
  priceEn: string;
  priceTe: string;
  durationEn: string;
  durationTe: string;
  descriptionEn: string;
  descriptionTe: string;
  featuresEn: string[];
  featuresTe: string[];
  icon: string;
  highlight?: boolean;
  image?: string;
}

export interface FAQItem {
  questionEn: string;
  questionTe: string;
  answerEn: string;
  answerTe: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
  imageUrl: string;
  tagEn: string;
  tagTe: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  programId: string;
  trainingType: 'hub_car' | 'own_car';
  preferredSlot: 'morning' | 'evening' | 'custom';
  preferredDate: string;
  locationArea: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  nameEn: string;
  nameTe: string;
  locationEn: string;
  locationTe: string;
  rating: number;
  commentEn: string;
  commentTe: string;
  carLearnedEn: string;
  carLearnedTe: string;
  date: string;
}
