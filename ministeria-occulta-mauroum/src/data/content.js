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
    duration: 'Varies',
    price: 88,
    description: 'Reserve a place at an upcoming temple ceremony or observance.',
    calEventTypeId: 6217315, // replace with real id
  },
]


export const archiveCollections = [
  { id: 'module', title: 'Module', season: 'Records', year: '2020', image: '/assets/archive-01.jpg' },
  { id: 'seoulsoul', title: 'Seoulsoul', season: 'Records', year: '2018', image: '/assets/archive-02.jpg' },
  { id: 'juunjset', title: 'Founding Session', season: 'Records', year: '2022', image: '/assets/archive-03.jpg' },
  { id: 'skin', title: 'Skin', season: 'Records', year: '2018', image: '/assets/archive-04.jpg' },
  { id: 'lapped', title: 'Lapped', season: 'Records', year: '2018', image: '/assets/archive-05.jpg' },
]
