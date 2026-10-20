import sculptHome from '../assets/projects/sculpt-pilates-club.jpeg';
import sculptMenu from '../assets/projects/sculpt-menu.jpeg';
import sculptPackage from '../assets/projects/sculpt-package.jpeg';
import sculptProfile from '../assets/projects/sculpt-profile.jpeg';
import sculptSchedule from '../assets/projects/sculpt-schedule.jpeg';

export const projectCaseStudies = {
  sculpt: {
    number: '01', eyebrow: 'Doha, Qatar · Production app', name: 'SCULPT Pilates Club',
    title: 'Move with purpose.', type: 'Cross-platform mobile app',
    platform: 'React Native · iOS & Android', accent: 'terracotta',
    summary: 'SCULPT Pilates Club gives members one calm place to discover classes, book sessions, manage packages, view their schedule, and stay connected with the studio.',
    tags: ['Class booking', 'Memberships', 'Payments', 'Push updates'],
    gallery: [
      [sculptHome, 'Member home'], [sculptSchedule, 'Class schedule'], [sculptMenu, 'Studio menu'],
      [sculptPackage, 'Membership package'], [sculptProfile, 'Member profile'],
    ],
    outcomes: [['Discover & book', 'Browse classes by date, see trainers and remaining spots, then book and manage reservations with confidence.'], ['Manage membership', 'Purchase packages, view active plans, use offers or coupons, and handle profile and payment-related flows.'], ['Stay connected', 'Bring together schedules, push notifications, campaign banners, studio announcements, and calendar reminders.']],
    features: ['Date-based class discovery', 'Trainer details and remaining spots', 'Packages, offers, coupons, and payments', 'Profile, wallet, and saved-card flows', 'Push updates and studio announcements', 'Calendar integration for planned sessions'],
    architectureTitle: 'Built for the studio.', architectureEmphasis: 'Prepared for the real world.',
    architecture: 'Modular screens, reusable components, persisted sessions, and environment-aware configuration support a reliable member experience. Android and iOS release workflows keep every delivery production-ready.',
    stack: [['Mobile framework', 'React Native'], ['Navigation', 'React Navigation'], ['State & storage', 'Redux, Persist & AsyncStorage'], ['Notifications', 'Firebase Cloud Messaging'], ['Release delivery', 'Google Play & TestFlight']],
    contributionTitle: 'From feature to release.', contribution: 'AuraDev maintained the product experience, improved Android navigation, strengthened API states, and prepared dependable Android and iOS releases.'
  },
  stayzy: {
    number: '02', eyebrow: 'Property technology · Development-stage platform', name: 'StayZy',
    title: 'One place to find your next home.', type: 'Property marketplace & management',
    platform: 'Next.js · Spring Boot · PostgreSQL', accent: 'sage',
    summary: 'StayZy helps people discover, compare, enquire about, book, and manage properties while giving administrators practical control of listings and operations.',
    tags: ['Property search', 'Bookings', 'Viewings', 'Admin operations'],
    outcomes: [['Explore & compare', 'Search by city, type, price, bedrooms, area, deposit, availability, and listing type.'], ['Book & view', 'Request viewings, choose available slots, track statuses, and book rental stays with confidence.'], ['Operate with control', 'Manage listings, users, bookings, blocked dates, reviews, reports, and enquiries.']],
    features: ['Advanced rental and sale filters', 'Property galleries, maps, and comparisons', 'Viewing request and status tracking', 'Calendar-based rental availability', 'Saved searches and matching alerts', 'Review and moderation workflows'],
    architectureTitle: 'Marketplace logic.', architectureEmphasis: 'Handled carefully.',
    architecture: 'Role-based access protects administrative work. Availability, viewing, review, and reporting rules create dependable workflows for both customers and property teams.',
    stack: [['Frontend', 'Next.js, React & TypeScript'], ['Backend', 'Java & Spring Boot'], ['Database', 'PostgreSQL'], ['Authentication', 'JWT & HTTP-only cookies'], ['Real-time updates', 'Server-Sent Events']],
    contributionTitle: 'A foundation for what comes next.', contribution: 'AuraDev designed and developed a practical property platform that is ready to grow with payments, communications, deployment, testing, and production hardening.'
  },
  pearl: {
    number: '03', eyebrow: 'Qatar · Luxury fragrance commerce', name: 'Pearl & Oud',
    title: 'Fragrance, considered.', type: 'Luxury e-commerce platform',
    platform: 'Storefront · payments · operations', accent: 'plum',
    summary: 'Pearl & Oud pairs a premium fragrance storefront with practical operations for inventory, orders, promotions, suppliers, expenses, and customer management.',
    tags: ['Catalogue', 'Payments', 'Inventory', 'Admin'],
    outcomes: [['Shop beautifully', 'Editorial browsing, collections, fragrance notes, variants, wishlists, reviews, and a responsive checkout.'], ['Pay with confidence', 'Guest browsing, login at checkout, cash on delivery, and secure card-payment recovery.'], ['Run the business', 'Manage products, pricing, stock, orders, shipments, suppliers, expenses, profit, and notifications.']],
    features: ['Editorial product discovery', 'Fragrance notes and product variants', 'Wishlist and review journeys', 'Responsive bag and checkout', 'Payment and delivery control', 'Operations dashboards'],
    architectureTitle: 'Premium experience.', architectureEmphasis: 'Complete control.',
    architecture: 'The platform combines a refined customer journey with tools for managing product data, stock, payments, promotions, suppliers, and financial tracking.',
    stack: [['Frontend', 'React & Laravel'], ['Commerce', 'Catalogue & checkout'], ['Payments', 'SkipCash'], ['Operations', 'Inventory & order management']],
    contributionTitle: 'Luxury, made operational.', contribution: 'AuraDev shaped both the customer-facing commerce experience and the back-office tools needed to run it day to day.'
  },
  mercantile: {
    number: '04', eyebrow: 'Retail technology · Commerce operations', name: 'Mercantile',
    title: 'One connected system for retail.', type: 'Multi-tenant ERP & point-of-sale platform',
    platform: 'Next.js · React · Spring Boot · PostgreSQL', accent: 'forest',
    summary: 'Mercantile connects point-of-sale billing, inventory, purchasing, suppliers, customers, analytics, tax configuration, and administration in one operational platform.',
    tags: ['POS billing', 'Connected inventory', 'Procurement', 'Role-based operations'],
    liveUrl: 'https://mercantile.auradev.in',
    outcomes: [['Sell with speed', 'Search or scan products, attach customers, hold bills, and complete payments quickly.'], ['Control stock accurately', 'Sales, purchases, and adjustments create clear inventory movement records.'], ['Operate with visibility', 'Dashboards, sales history, GST controls, low-stock signals, and permissions support confident decisions.']],
    features: ['Barcode and SKU product search', 'Cash, UPI, card, split-payment, and credit flows', 'Tax, supplier, and reorder-level controls', 'Draft-to-paid purchase workflows', 'Receipts, exports, and audit activity', 'Operational dashboards'],
    architectureTitle: 'Business logic.', architectureEmphasis: 'Built to stay connected.',
    architecture: 'Multi-tenant boundaries separate every business context. Backend-enforced authentication, permissions, validation, tax rules, inventory movements, and audits keep operations reliable.',
    stack: [['Frontend', 'Next.js, React & TypeScript'], ['Styling & data', 'Tailwind CSS & TanStack Query'], ['Backend', 'Spring Boot & Java'], ['Security', 'JWT & role permissions'], ['Database', 'PostgreSQL & Flyway']],
    contributionTitle: 'Operations, clearer by design.', contribution: 'AuraDev designed and developed Mercantile’s product experience and technical foundation, from checkout interactions to backend business rules and reporting.'
  }
};
