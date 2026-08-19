import { TrainingProgram, FAQItem, GalleryItem, Testimonial } from '../types';

export const ASSETS = {
  heroSteeringNavy: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV3mOVM0DGyn_robUYF5qk0XHhq3mVuHXA2HlJir9wRxpbuZuOvbFLOMcOuEgPYAK4hQe5CsNMqU5kwxLAN9EOla5XK7HE_5BmxAEfM80GNxXWN_4Sc8DaeXQVioVPYJ0yJQ2LPJwzLCiXc1-3uZ5HxqfEb18pl5QrZCrFzq-8LBYqOEoWVlyDPDpvDF2sEgb2m0VgaJa1I8zDiC_w878zQgTGtqdl6lGy_tyhtoC2DXZkCsV7E5Aryw",
  heroSteeringVivid: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBBCYGO03q1IQ4tZlx4xskVqHv95PKkRFpdVLizZbMrh0GjDsnZh4O46nnxmkNGcUiJQNYEl4BBbWviFGtvzk7zyMPQUPowi0Pth5IbaIAuOckO2exLSd6NWBhTA8TLxz_jfZl1Q5FY83qG-DjUj85eScAJVCumeWXvB95OtlIOnx9KV8wjDUq11F4AAPkA0Ol7e96b5ltheYJMOHxROCR4I2SnNW1f3-H_glrQhj4oIlMfqfSLoUKOw",
  heroSteeringDashboard: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSymt1cEYBzjjzSqwecZiolWSzSXtjSkPX6FfPLwRDtwbZpSjMAO1hmfh0SOiIzN7k9JrD4DXaqlL5kFBCT5UOoHdpCIfv2mnWTTZoa9zbU3rfsGFFIOrFVx-GsJIS2wkSaDElG13hpP7p7j0X-zblbvYwCW0NJCGQzSBPlsnsSb1kmqoEbpFwnTUCEYI5Py_pRp1QzPTtQqvXMWtw_5vJCBZLIp1dW_vb4k6v4QmWgt60IBT-kVHSEg",
  heroSteeringDark: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQq4FgYodOq_ajbnUSCNpI-FJlCIpFPyYE419YE6-bI4s5nCPocLGSMlsJTh-6YwUHGcUR8pVqhohd-ium2o48AEhWoCfznfa91_YiC5U-xRIdawNaisZG67n7M8DsJVSwB8wc96NMF5FLUSxB7jOo0PNejivIdoYDsyOCqOcciEYXsihMPY5_B30jpBExMHZ8RAU-wnCLlvBBZv8c0U2tvgMoYAliuJkV4Ipof9xyolvmQ7rlsBn3gQ",
  doorstepInstructorWhiteSedan: "https://lh3.googleusercontent.com/aida-public/AB6AXuC50M5ZxVQO-KMUcNe7cfc5Vp2SR82ipYka7Bm2UOLSjkrXk4hBCaawMrijaP1x0rH2QTUzUTLD1gLoV7HH0sJth1RvFhNOuEeHwtYHhj7-fwns9oUWryZ_0ksZ4fjb5dvqQZ9Dre1QbA8UVkwz-B-wsRsUQHj1R_dvAdQCE3dbbIXLI7bw-VJy0vdFilArx0TZSiTkOcgHX3cwoTgqNqALkBaSeuWoxU994piaxap_7i05SZdTh0xm-A",
  instructorSmilesNavy: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFwcEMW0IggwF8x2mYcKsZiqMlXHjwwXNtbXOMl2xYBQ-cRMTxe_z9582Nner4HjHnQgNzF77mLAMSSeqnMpbp7HlUemEFt6A90gt0UlO-cz8WSPfWZ35jfFdC6dBzKxL1GdpD83JpwX8qCvl6XVfyQVKvDq05Udbyqpc8CXMGU_Z10y1KvYbRlwQhWgy-qPlDMlBCdAyseGRImI9GvYh3zVD4Mt7OkAn-4D0gKRSzq-zc3QY4pVqYgg",
  oneDayPerspectiveCockpit: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVwP1g4UXCv_XKWCqiBlqvjln0C_KQp_M0pgUguBcpea4ti5v55xFnfyOFVkA-Y0yZTZ8QH5rOjk4lpZNctKzTqLCVF3NmIW6JMEIs_fASfn7mBBeGX-37i_8Bi5Ryvtm-Ed4RlF0Kjx9ZyqNg8962Yms9esObGv2mZUnXpVCEgPpc2Nn8vZIlH5wHnLBqzWKoUqcG0hmememqLjIzEFQkJAr6wW-p89HFTk-uGyB5dsOvf3MrnOHtfw",
  galleryCarParked: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5C1O1017166CVZI-HPiiK3OLWqaOQexClZM77fxBx60jFBxz9S4P1FO3DNK3bTYuazeqe9x6v3uZIg0UfNHWKJD7vHGRTZwYfvwVVa1ipSoIWmcUGBy61VyyCYz0xnyjaLt5nOILZL3tn3RA0pWMPREWb0tvZYQ1Zt5RXgc7J9dxoMQhj-cf3vZEbWSdpJofzmeloyZ8r_LtZw0Uj9G7PPhjcAXBaP3-UWKWolyGMM0aJ1JeIg3q3MQ",
  gallerySteeringHands: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwHSy4PBXEtWk7pkwIJox0PNOfsZVNJ2KXUayZ1shrLIWU7ynT9c1VhfqkjmI0XGbhelvKmwxJrehj0YIWRgRzmdWEGMOdTJsi4FIf_aiLuw95uLTjI1-bV2uZHNZ_kkwCBGab-xIC4d_3kjcWzWxkxtEuckBHv154fhojR8vKGtxoHoHIXUjKuhQfNW0wsBVuBh6gcah5YgO204Iwrd6ys2wStRiSRLOizWpoo8X2Q6FzWEGZG9QGlw",
  galleryHappyLicenseStudent: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVd9qU3zF7UaxBufJP4VcRsYzQ_aEke1nQuoOFssQO5e4Vv8StDKSWxlZRmphb3sjurO6R6qtWr3ubawuS86RjA3jrBqwhVPdIfepxJtCFEIKcse448ZBXGWoHUTnT2kA9bJkpa5MULdT9D5ESTAVODAzfcuaeKfK3rW6lE6WHbK4Md8MEdIPnxA49PuiFUkLVjWXOT0HIpv6sBhFRg7VHk_-00ZHdYqYFYrdM0aV05_urrdRaDMnujQ",
  galleryBackseatNavigating: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT8A_jKQQjMbi1kTQWXZiGPoh4oHkRi5cb5ByR2pUfJJ-C8X8o7Vijf6Zsv3xlitrdkFV88xUQbEWFFUA4j8Nlpz__E1zOtvo7FfsmBCFZ-AcK5q-4ZC5NCJFpY8o1bFMz3MAuew1H1IbDQXN55kfX5YH7nhvrIykcO0WTP4ZUSsgTs9raQP5xYMaK_EKgxjj-VQPkBN-zBHdKFaHqvq5K79DWeHRBiib_kD2oWqOlyJTzIc2mKE7t-w",
  mapKukatpally: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeQX02ZFCg3zLLp3L3UoQwv8Y59GW24dtDpK8Dd6NmAxb9oiXelvmr2zAN-4LS0PjYJYi0cEJQtx1KQL_ipfOiJg_zaWy3j6xim5tjvCGiJmzPMLeXb3C4PlB1Dr1SmhK6enkfZ6KYb9iRf0LfMUZVf7ykdwERTfx9fJ-MlrGA-KcmL11C1wICByDMto2-c3RgIfMJJgAcPzmM5sH-MLzjzmRsuZZrib3ghkm5_fThF3AFSAjdTihX-A"
};

export const CONTACT_INFO = {
  primaryPhone: "9381643571",
  secondaryPhone: "9110371419",
  whatsappNumber: "919381643571",
  email: "zerotoherodrivinghub@gmail.com",
  locationNameEn: "Kukatpally, Hyderabad",
  locationNameTe: "కూకట్‌పల్లి, హైదరాబాద్",
  addressEn: "Flat 204, Metro Pillar A784, Main Road, Kukatpally, Hyderabad - 500072, Telangana",
  addressTe: "ఫ్లాట్ 204, మెట్రో పిల్లర్ A784, మెయిన్ రోడ్, కూకట్‌పల్లి, హైదరాబాద్ - 500072",
  googleMapsUrl: "https://maps.google.com/?q=Kukatpally+Hyderabad+Telangana",
  operatingHoursEn: "Mon - Sun: 06:00 AM - 10:00 PM",
  operatingHoursTe: "సోమ - ఆది: ఉదయం 6:00 - రాత్రి 10:00"
};

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "one-day-complete",
    titleEn: "One Day Complete Practical Car Driving Training",
    titleTe: "ఒక్క రోజులో Complete Practical Car Driving Training",
    badgeEn: "SIGNATURE FAST TRACK",
    badgeTe: "ప్రత్యేక వేగవంతమైన శిక్షణ",
    priceEn: "₹3,499",
    priceTe: "₹3,499",
    durationEn: "Full Day (6-8 Hours Intensive)",
    durationTe: "పూర్తి రోజు (6-8 గంటలు)",
    descriptionEn: "Comprehensive, single-day crash course covering steering alignment, clutch-brake synchronization, live traffic navigation, reverse steering, and hill-hold technique.",
    descriptionTe: "స్టీరింగ్ కంట్రోల్, ట్రాఫిక్ డ్రైవింగ్, రివర్స్ గేర్ టెక్నిక్స్ మరియు పార్కింగ్ పూర్తిగా నేర్పించే ఏకైక సమగ్ర వన్-డే ప్రాక్టికల్ కోర్సు.",
    featuresEn: [
      "Real traffic navigation in peak hours",
      "Clutch control & hill start maneuvers",
      "Reverse driving & 4 types of parking",
      "Doorstep pick-up and drop included",
      "Option to train in your own personal car"
    ],
    featuresTe: [
      "పీక్ అవర్స్ ట్రాఫిక్‌లో రియల్ డ్రైవింగ్ ప్రాక్టీస్",
      "క్లచ్ కంట్రోల్ & ఫ్లైఓవర్ / హిల్ స్టార్ట్ టెక్నిక్స్",
      "రివర్స్ డ్రైవింగ్ & 4 రకాల ప్యారలల్ పార్కింగ్",
      "డోర్‌స్టెప్ పిక్-అప్ & డ్రాప్ సౌకర్యం",
      "మీ స్వంత కారులో శిక్షణ పొందే అవకాశం"
    ],
    icon: "directions_car",
    highlight: true,
    image: ASSETS.oneDayPerspectiveCockpit
  },
  {
    id: "intensive-two-day",
    titleEn: "2-Day Intensive Confidence Booster",
    titleTe: "2 రోజుల ఇంటెన్సివ్ డ్రైవింగ్ ప్రోగ్రామ్",
    badgeEn: "SPECIAL OFFER ₹1999/-",
    badgeTe: "ప్రత్యేక ఆఫర్ ₹1999/-",
    priceEn: "₹1,999",
    priceTe: "₹1,999",
    durationEn: "2 Days (3 Hours/Day)",
    durationTe: "2 రోజులు (రోజుకు 3 గంటలు)",
    descriptionEn: "Designed for beginners who know basics or have a license but struggle with fear in heavy traffic, signals, and tight basement parking.",
    descriptionTe: "లైసెన్స్ ఉన్నా ట్రాఫిక్‌లో భయపడేవారికి, బేస్‌మెంట్ పార్కింగ్ మరియు రోడ్ కాన్ఫిడెన్స్ పెంచే అత్యుత్తమ బడ్జెట్ కోర్సు.",
    featuresEn: [
      "Highway & main road lane switching",
      "Tight street & market maneuvers",
      "Basement & perpendicular parking",
      "Mirror calibration & blindspot mastery",
      "Dedicated senior instructor"
    ],
    featuresTe: [
      "హైవే & మెయిన్ రోడ్డు లైన్ చేంజ్ ప్రాక్టీస్",
      "సన్నని సందులు మరియు మార్కెట్లలో డ్రైవింగ్",
      "బేస్‌మెంట్ & ప్యారలల్ పార్కింగ్ పర్ఫెక్షన్",
      "మిర్రర్ అడ్జస్ట్మెంట్ & బ్లైండ్‌స్పాట్ అవేర్‌నెస్",
      "అనుభవజ్ఞులైన సీనియర్ ట్రైనర్ మార్గదర్శకత్వం"
    ],
    icon: "local_police",
    highlight: true,
    image: ASSETS.heroSteeringVivid
  },
  {
    id: "hourly-refresher",
    titleEn: "Hourly Refresher & Custom Modules",
    titleTe: "గంటల ప్రాతిపదికన కస్టమ్ శిక్షణ",
    badgeEn: "FLEXIBLE TIMINGS",
    badgeTe: "ఫ్లెక్సిబుల్ సమయాలు",
    priceEn: "₹499 / hr",
    priceTe: "₹499 / గంటకు",
    durationEn: "Pay-as-you-go (1-10 Hours)",
    durationTe: "మీ అవసరాన్ని బట్టి (1-10 గంటలు)",
    descriptionEn: "Target specific weak points such as U-turns, parallel parking, flyover stops, night driving, or specific routes between your home and office.",
    descriptionTe: "కేవలం యూ-టర్న్స్, ప్యారలల్ పార్కింగ్, ఫ్లైఓవర్ ఆపడం, లేదా నైట్ డ్రైవింగ్ వంటి ప్రత్యేక అంశాలపై దృష్టి పెట్టడానికి అనువైనది.",
    featuresEn: [
      "Choose your own training route",
      "Morning 6 AM to 9 AM slots available",
      "Evening 7 PM to 10 PM slots available",
      "Manual and Automatic gear systems",
      "No long-term commitments"
    ],
    featuresTe: [
      "మీ ఇల్లు నుండి ఆఫీస్ వరకు రూట్ ప్రాక్టీస్",
      "ఉదయం 6 AM - 9 AM స్లాట్స్ అందుబాటులో ఉన్నాయి",
      "సాయంత్రం 7 PM - 10 PM స్లాట్స్ అందుబాటులో ఉన్నాయి",
      "మాన్యువల్ మరియు ఆటోమేటిక్ గేర్ కార్లు",
      "అవసరమైనన్ని గంటలు మాత్రమే నేర్చుకోండి"
    ],
    icon: "schedule",
    highlight: false,
    image: ASSETS.gallerySteeringHands
  },
  {
    id: "ladies-special",
    titleEn: "Ladies Special Dedicated Batch",
    titleTe: "మహిళల ప్రత్యేక డ్రైవింగ్ బ్యాచ్",
    badgeEn: "SAFE & PATIENT",
    badgeTe: "సురక్షితమైన & ఓపికైన శిక్షణ",
    priceEn: "₹2,499",
    priceTe: "₹2,499",
    durationEn: "3 Days Flexible Slots",
    durationTe: "3 రోజులు ఫ్లెక్సిబుల్ సమయం",
    descriptionEn: "100% patient, calm, non-judgmental environment focused on building anxiety-free independent driving skills for women.",
    descriptionTe: "మహిళలకు ఎటువంటి భయం లేకుండా, అత్యంత ఓపికతో డ్రైవింగ్ నేర్పించే సురక్షితమైన మరియు స్నేహపూర్వక వాతావరణం.",
    featuresEn: [
      "Calm & supportive certified instructors",
      "Drop to and pick-up from your home",
      "Kids school route & supermarket practice",
      "Emergency tire puncture & bonnet basics",
      "Special weekend batches"
    ],
    featuresTe: [
      "ఓపికతో నేర్పించే సర్టిఫైడ్ ఇన్‌స్ట్రక్టర్లు",
      "మీ ఇంటి వద్దకే వచ్చి పికప్ మరియు డ్రాప్",
      "స్కూల్ & సూపర్ మార్కెట్ రూట్స్ స్పెషల్ ప్రాక్టీస్",
      "ఎమర్జెన్సీ టైర్ పంక్చర్ & బోనెట్ బేసిక్స్",
      "వీకెండ్ ప్రత్యేక బ్యాచులు"
    ],
    icon: "shield",
    highlight: false,
    image: ASSETS.instructorSmilesNavy
  },
  {
    id: "doorstep-own-car",
    titleEn: "Doorstep Training in Your Own Car",
    titleTe: "మీ స్వంత కారులో డోర్‌స్టెప్ శిక్షణ",
    badgeEn: "DOORSTEP SERVICE",
    badgeTe: "డోర్‌స్టెప్ సర్వీస్",
    priceEn: "₹1,799",
    priceTe: "₹1,799",
    durationEn: "2-3 Days Hands-on",
    durationTe: "2-3 రోజులు ప్రాక్టికల్",
    descriptionEn: "Master the exact dimensions, clutch bite point, and turning radius of your own vehicle right outside your doorstep.",
    descriptionTe: "మీరు కొనుగోలు చేసిన కారు కొలతలు, క్లచ్ అడ్జస్ట్మెంట్ మరియు స్టీరింగ్ టర్నింగ్ మీ ఇంటి దగ్గరే నేర్చుకోండి.",
    featuresEn: [
      "Trainer arrives at your exact apartment/villa",
      "Basement parking ramp practice in your own parking slot",
      "Custom GPS navigation training",
      "SUV, Sedan, Hatchback & EV compatibility",
      "Zero vehicle modification needed"
    ],
    featuresTe: [
      "ట్రైనర్ నేరుగా మీ అపార్ట్మెంట్/ఇంటి వద్దకే వస్తారు",
      "మీ స్వంత పార్కింగ్ స్లాట్‌లో రివర్స్ & ర్యాంప్ ప్రాక్టీస్",
      "జిపిఎస్ నావిగేషన్ ఆధారిత రూట్ డ్రైవింగ్",
      "SUV, సెడాన్, హ్యాచ్‌బ్యాక్ & ఎలక్ట్రిక్ కార్లకు అనుకూలం",
      "మీ కారుకి ఎటువంటి డ్యామేజ్ లేకుండా సురక్షిత గైడెన్స్"
    ],
    icon: "home_pin",
    highlight: false,
    image: ASSETS.doorstepInstructorWhiteSedan
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    titleEn: "Dual-Control Professional Fleet",
    titleTe: "డ్యుయల్ కంట్రోల్ సేఫ్టీ కార్ల ఫ్లీట్",
    subtitleEn: "Modern certified training vehicles equipped with instructor dual controls",
    subtitleTe: "ఇన్‌స్ట్రక్టర్ డ్యుయల్ కంట్రోల్స్ కలిగిన ఆధునిక శిక్షణ వాహనాలు",
    imageUrl: ASSETS.galleryCarParked,
    tagEn: "Training Fleet",
    tagTe: "శిక్షణ కార్లు"
  },
  {
    id: "g2",
    titleEn: "Real Highway & Flyover Mastery",
    titleTe: "హైవే & ఫ్లైఓవర్ ట్రాఫిక్ డ్రైవింగ్",
    subtitleEn: "High-speed lane management and controlled braking on Hyderabad outer ring road",
    subtitleTe: "హైదరాబాద్ రోడ్లపై హై స్పీడ్ లేన్ కంట్రోల్ మరియు సేఫ్ బ్రేకింగ్",
    imageUrl: ASSETS.gallerySteeringHands,
    tagEn: "Practical Road",
    tagTe: "రోడ్డు డ్రైవింగ్"
  },
  {
    id: "g3",
    titleEn: "Zero Fear, 100% Success Stories",
    titleTe: "భయం పోగొట్టుకుని లైసెన్స్ సాధించిన విద్యార్థులు",
    subtitleEn: "Hundreds of confident graduates passing RTO test with flying colors",
    subtitleTe: "వందలాది మంది ధైర్యంగా స్వయంగా డ్రైవింగ్ చేస్తూ సంతృప్తి చెందారు",
    imageUrl: ASSETS.galleryHappyLicenseStudent,
    tagEn: "Student Success",
    tagTe: "సక్సెస్ స్టోరీస్"
  },
  {
    id: "g4",
    titleEn: "Peak Hour City Traffic Sessions",
    titleTe: "రద్దీ వేళల్లో నగర ట్రాఫిక్ శిక్షణ",
    subtitleEn: "Navigating Kukatpally, Madhapur, and Hitec City junctions with calm confidence",
    subtitleTe: "కూకట్‌పల్లి మరియు హైటెక్ సిటీ జంక్షన్లలో ప్రశాంతంగా డ్రైవింగ్ నేర్పించడం",
    imageUrl: ASSETS.galleryBackseatNavigating,
    tagEn: "City Traffic",
    tagTe: "ట్రాఫిక్ నావిగేషన్"
  },
  {
    id: "g5",
    titleEn: "Doorstep Trainer Arrival",
    titleTe: "ఇంటి వద్దకే అనుభవజ్ఞులైన ట్రైనర్",
    subtitleEn: "Punctual, certified instructor arriving right at your residential gate",
    subtitleTe: "సమయానికి మీ ఇంటి ముందుకు వచ్చే అనుభవజ్ఞులైన ట్రైనర్లు",
    imageUrl: ASSETS.doorstepInstructorWhiteSedan,
    tagEn: "Doorstep Service",
    tagTe: "డోర్‌స్టెప్ సేవ"
  },
  {
    id: "g6",
    titleEn: "1-on-1 Patient Mentorship",
    titleTe: "వ్యక్తిగత ఓపికైన గైడెన్స్",
    subtitleEn: "Friendly atmosphere where mistakes are gently corrected in real-time",
    subtitleTe: "ఎటువంటి ఒత్తిడి లేకుండా సులభంగా డ్రైవింగ్ మెలకువలు నేర్చుకోండి",
    imageUrl: ASSETS.instructorSmilesNavy,
    tagEn: "Mentorship",
    tagTe: "వ్యక్తిగత శిక్షణ"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    questionEn: "Can I really learn complete driving in Just One Day?",
    questionTe: "నిజంగా ఒక్క రోజులోనే పూర్తి డ్రైవింగ్ నేర్చుకోవచ్చా?",
    answerEn: "Yes! Our signature 'One Day Complete Practical Car Driving Training' is an intensive 6 to 8-hour hands-on immersion. We eliminate unnecessary theory and focus 100% on muscle memory: clutch-accelerator synchronization, steering control, lane sense, parking algorithms, and heavy traffic handling. By the end of the day, you will be driving on main roads independently.",
    answerTe: "ఖచ్చితంగా అవును! మా సిగ్నేచర్ 'వన్ డే కంప్లీట్ ప్రాక్టికల్ కార్ డ్రైవింగ్ ట్రైనింగ్' 6 నుండి 8 గంటల ఇంటెన్సివ్ ప్రాక్టీస్ ప్రోగ్రామ్. అనవసరమైన థియరీ లేకుండా నేరుగా క్లచ్, గేర్, స్టీరింగ్, బేస్‌మెంట్ పార్కింగ్ మరియు ట్రాఫిక్ డ్రైవింగ్ నేర్పిస్తాము. సాయంత్రానికల్లా మీరు సొంతంగా మెయిన్ రోడ్డుపై కారు నడపగలరు."
  },
  {
    category: "Timings",
    questionEn: "What are the available morning and evening batches?",
    questionTe: "ఉదయం మరియు సాయంత్రం ఏ సమయాల్లో బ్యాచులు ఉన్నాయి?",
    answerEn: "We operate 7 days a week with flexible timings. Popular slots are Morning 06:00 AM - 09:00 AM (ideal for peaceful empty road practice & basics) and Evening 07:00 PM - 10:00 PM (ideal for night headlights and working professionals). Custom timing slots are also available on request.",
    answerTe: "వారంలో 7 రోజులు ఫ్లెక్సిబుల్ సమయాలు ఉంటాయి. ఉదయం 6:00 AM - 9:00 AM (ఖాళీ రోడ్లపై ప్రాక్టీస్ కోసం) మరియు సాయంత్రం 7:00 PM - 10:00 PM (ఉద్యోగుల కోసం & నైట్ డ్రైవింగ్ కోసం). మీ వీలును బట్టి కస్టమ్ సమయాలను కూడా ఎంచుకోవచ్చు."
  },
  {
    category: "Doorstep",
    questionEn: "Do you offer Doorstep Pick-up and Drop in Kukatpally & Hyderabad?",
    questionTe: "కూకట్‌పల్లి మరియు హైదరాబాద్ అంతటా ఇంటి వద్దకే పికప్ సేవ ఉందా?",
    answerEn: "Yes, our certified instructors will arrive directly at your home or apartment gate in Kukatpally, KPHB, Nizampet, Miyapur, Pragathi Nagar, Madhapur, and surrounding areas. You can train in our dual-control car or your own personal car.",
    answerTe: "అవును, కూకట్‌పల్లి, కెపిహెచ్‌బి, నిజాంపేట్, మియాపూర్, ప్రగతి నగర్, మాదాపూర్ తదితర ప్రాంతాలలో మీ ఇంటి ముంగిటికే ట్రైనర్ వస్తారు. మా కారులో లేదా మీ స్వంత కారులో శిక్షణ తీసుకోవచ్చు."
  },
  {
    category: "Vehicles",
    questionEn: "Can I get trained in my own car (Manual / Automatic / SUV)?",
    questionTe: "నా స్వంత కారులో (మాన్యువల్ / ఆటోమేటిక్ / SUV) ట్రైనింగ్ తీసుకోవచ్చా?",
    answerEn: "Absolutely! Learning in your own car is the most effective way to understand its exact dimensions, clutch engagement point, and dashboard controls. We provide training for all vehicle types including Manual, AMT, CVT, DSG, SUVs, and Electric Vehicles.",
    answerTe: "తప్పకుండా! మీ స్వంత కారులో నేర్చుకోవడం వల్ల మీ కారు కొలతలు, క్లచ్ బైట్ పాయింట్ మరియు గేర్ షిఫ్టింగ్ సులభంగా అర్థమవుతుంది. మాన్యువల్, ఆటోమేటిక్ మరియు ఎలక్ట్రిక్ కార్లకు ప్రత్యేక శిక్షణ ఇస్తాము."
  },
  {
    category: "Safety",
    questionEn: "What if I make a mistake while driving in traffic?",
    questionTe: "ట్రాఫిక్‌లో డ్రైవ్ చేస్తున్నప్పుడు పొరపాటు జరిగితే ప్రమాదం ఉండదా?",
    answerEn: "Zero risk! Our training vehicles are equipped with RTO-approved dual-control safety pedals (dual brake, dual clutch, and dual accelerator). The senior instructor seated beside you has full override capability to stop or assist the vehicle at any millisecond.",
    answerTe: "ఎటువంటి భయం అవసరం లేదు! మా శిక్షణ వాహనాల్లో ఇన్‌స్ట్రక్టర్ వైపు కూడా డ్యుయల్ బ్రేక్ మరియు క్లచ్ కంట్రోల్స్ ఉంటాయి. ఏ క్షణమైనా కారును సురక్షితంగా ఆపడానికి ఇన్‌స్ట్రక్టర్ పర్యవేక్షణ ఉంటుంది."
  },
  {
    category: "Pricing",
    questionEn: "How do I claim the ₹1999/- Special Monthly Offer?",
    questionTe: "₹1999/- ప్రత్యేక ఆఫర్‌ను ఎలా పొందాలి?",
    answerEn: "You can click 'Claim Offer' on this site or call/WhatsApp us directly at 9381643571 or 9110371419. Mention the 2-Day Confidence Booster offer during slot reservation. Slots are allocated on a first-come, first-served basis.",
    answerTe: "ఈ వెబ్‌సైట్‌లోని 'Claim Offer' బటన్ నొక్కడం ద్వారా లేదా 9381643571 / 9110371419 నంబర్లకు వాట్సాప్/కాల్ చేయడం ద్వారా తక్షణమే మీ స్లాట్‌ను బుక్ చేసుకోవచ్చు."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    nameEn: "Sravan Reddy",
    nameTe: "శ్రవణ్ రెడ్డి",
    locationEn: "KPHB Colony Phase 4",
    locationTe: "కెపిహెచ్‌బి కాలనీ ఫేజ్ 4",
    rating: 5,
    commentEn: "I had a license for 3 years but was terrified of driving in Hyderabad traffic. Just 1 day of intensive practical training with Zero to Hero gave me complete confidence. Now driving daily to Hitec City without any fear!",
    commentTe: "3 ఏళ్లుగా లైసెన్స్ ఉన్నా ట్రాఫిక్‌లో కారు నడపాలంటే భయపడేవాడిని. జీరో టు హీరో 1-డే ట్రైనింగ్‌తో నా భయం పూర్తిగా పోయింది. ఇప్పుడు రోజూ ఆఫీస్‌కు నేనే డ్రైవ్ చేసుకుని వెళ్తున్నాను!",
    carLearnedEn: "Hyundai Creta",
    carLearnedTe: "హ్యుందాయ్ క్రెటా",
    date: "February 2026"
  },
  {
    id: "t2",
    nameEn: "Deepika V.",
    nameTe: "దీపికా వి.",
    locationEn: "Nizampet Road",
    locationTe: "నిజాంపేట్ రోడ్",
    rating: 5,
    commentEn: "The doorstep pickup made it so convenient. The instructor was exceptionally patient and explained steering judgment and parallel parking with easy mental formulas. Highly recommend the ladies batch!",
    commentTe: "మా ఇంటి ముంగిటికే వచ్చి పికప్ చేసుకోవడం చాలా హెల్ప్ అయింది. ట్రైనర్ చాలా ఓపికగా ప్యారలల్ పార్కింగ్ మెలకువలు నేర్పించారు. లేడీస్ కి బెస్ట్ డ్రైవింగ్ స్కూల్!",
    carLearnedEn: "Maruti Swift",
    carLearnedTe: "మారుతి స్విఫ్ట్",
    date: "January 2026"
  },
  {
    id: "t3",
    nameEn: "Praveen Kumar",
    nameTe: "ప్రవీణ్ కుమార్",
    locationEn: "Kukatpally Housing Board",
    locationTe: "కూకట్‌పల్లి",
    rating: 5,
    commentEn: "Took the ₹1999 2-Day intensive package on my new Kia Seltos. Learned basement ramp starts and flyover bumper-to-bumper clutch control. Best driving investment in Hyderabad!",
    commentTe: "నా కొత్త కియా సెల్టోస్ కారులో ₹1999 2-డేస్ ప్యాకేజ్ తీసుకున్నాను. బేస్‌మెంట్ ర్యాంప్ మరియు ఫ్లైఓవర్ ట్రాఫిక్ కంట్రోల్ బాగా నేర్పించారు. సూపర్ ఎక్స్‌పీరియన్స్!",
    carLearnedEn: "Kia Seltos",
    carLearnedTe: "కియా సెల్టోస్",
    date: "January 2026"
  }
];

export const STATS = [
  { valueEn: "3,500+", valueTe: "3,500+", labelEn: "Confident Drivers Trained", labelTe: "శిక్షణ పొందిన విద్యార్థులు" },
  { valueEn: "100%", valueTe: "100%", labelEn: "Practical Road Training", labelTe: "ప్రాక్టికల్ రోడ్డు శిక్షణ" },
  { valueEn: "4.9 ★", valueTe: "4.9 ★", labelEn: "Google Rating in Hyderabad", labelTe: "గూగుల్ రేటింగ్" },
  { valueEn: "1 Day", valueTe: "1 రోజు", labelEn: "Fast Track Transformation", labelTe: "వేగవంతమైన నేర్చుకోవడం" }
];
