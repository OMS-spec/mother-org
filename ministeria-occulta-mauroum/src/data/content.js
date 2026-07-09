export const products = [
  {
  id: 'moorish-american-health-manual',
  title: 'Moorish American Health Manual',
  category: 'Publications',
  price: 28,          // default/display price
  priceOptions: [
    { label: 'Digital', price: 8 },
    { label: 'Softcover', price: 17 },
    { label: 'Hardcover', price: 28 },
  ],
  edition: 'First Printing',
  season: 'Archive I',
  description: 'A foundational text recording the culture, principles, and history of the Moorish Science community for members and the public.',
  image: '/assets/persona-01.jpg',
},

  {
    id: 'unity-pin',
    title: 'Unity Emblem Pin',
    category: 'Accessories',
    price: 8,
    edition: 'Standard',
    season: 'Archive I',
    description: 'A small emblem denoting membership and unity, worn by members across the Americas.',
    image: '/assets/persona-03.jpg',
  },
  {
    id: 'community-almanac',
    title: 'Community Almanac 2026',
    category: 'Publications',
    price: 32,
    edition: 'Annual',
    season: 'Archive I',
    description: 'An annual record of temple activity, charitable works, and cultural observances across member communities.',
    image: '/assets/persona-04.jpg',
  },
]

// src/data/content.js
export const services = [
  {
    id: 'membership-orientation',
    title: 'Membership Orientation',
    duration: '60 min',
    price: 0,
    description: 'An introductory session covering the principles, history, and structure of Ministeria Occulta Mauroum for prospective members.',
    calEventTypeId: 6239970, // replace with real id
  },
  {
    id: 'mutual-assistance-consultation',
    title: 'Mutual Assistance Consultation',
    duration: '45 min',
    price: 0,
    description: 'Confidential guidance for members seeking charitable assistance, employment support, or housing referrals.',
    calEventTypeId: 6240007, // replace with real id
  },
  {
    id: 'cultural-education-session',
    title: 'Cultural Education Session',
    duration: '60 min',
    price: 0,
    description: 'A guided study of Moorish science, religion, and culture for members and the general public.',
    calEventTypeId: 6241057, // replace with real id
  },
  {
    id: 'general-reading',
    title: 'General Reading',
    duration: '90 min',
    price: 0,
    description: 'A multifaceted reading aimed to assist in providing insight and guidance for members and the general public.',
    calEventTypeId: 6217315, // replace with real id
  },
]


export const archiveCollections = [
  { id: 'moorish drama', title: 'The Great Moorish Drama', season: 'Records', year: '1927', image: '/assets/archive-01.jpg', description: 'A record of the Moorish Arts and its early observances.' },
  { id: 'advertisment', title: 'Advertisment', season: 'Records', year: '1928', image: '/assets/archive-02.jpg', description: 'An original ad from the Moorish Guide National Newspaper.' },
  { id: 'moorish dance', title: 'Mid-Summer Dance', season: 'Records', year: '1928', image: '/assets/archive-03.jpg', description: 'The Moorish National Business Club, No 2 hosted and event for all to attend.' },
  { id: 'sisters aux', title: 'The Moorish National Sisters Auxiliary', season: 'Records', year: '1929', image: '/assets/archive-04.jpg', description: 'A record from the Moorish Guide National Edition of the organization of the Moorish Natinal Sisters Auxiliary.' },
  { id: 'testimonials', title: 'Testimonials', season: 'Records', year: '1929', image: '/assets/archive-05.jpg', description: 'A historical record of testimonals for products manufactured by the Moorish Manufacturing Corporation.' },
]

