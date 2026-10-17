/**
 * Enreach Unisex Saloon Data Model
 * 
 * Bound with custom high-resolution salon images:
 * - Hero Banner: Soft champagne wide landscape model photo
 * - Services: Cut (bob side profile), Color (wavy blonde/highlighted), Style (dark wavy brunette)
 * - Before & After: Straight brown hair (Before) vs Styled wavy bouncy hair (After)
 */

export interface SalonService {
  id: string;
  title: string;
  desc: string;
  img: string;
  price?: string;
  tag?: string;
}

export interface TransformationLook {
  id: string;
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
}

export interface GlamLook {
  id: string;
  title: string;
  pill?: string;
  tag: string;
  note: string;
  img: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  phone: string;
  displayPhone: string;
  email: string;
  hours: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  instagramUrl: string;
  facebookUrl: string;
}

export const initialSalonInfo: SalonInfo = {
  name: "Enreach",
  tagline: "Unisex Saloon",
  address: "Civil Lines, Near Gandhi Chowk",
  city: "Chandrapur, Maharashtra",
  phone: "+919876543210",
  displayPhone: "+91 98765 43210",
  email: "contact@enreachsaloon.com",
  hours: "Monday – Sunday: 10:00 AM – 9:00 PM",
  whatsappNumber: "919876543210",
  defaultWhatsAppMessage: "Hi Enreach, I would like to book an appointment for a new look!",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
};

/**
 * 1. HERO SECTION BANNER IMAGE
 * Wide/landscape model photo with soft champagne background
 */
export const heroMediaImage = "/images/hero-banner.jpeg";

/**
 * 2. OUR SERVICES CARDS
 * - CUT: Short bob hairstyle side-profile photo
 * - COLOR: Wavy blonde / highlighted hair photo
 * - STYLE: Dark wavy brunette hair portrait photo
 */
export const initialServices: SalonService[] = [
  {
    id: "cut",
    title: "Cut",
    desc: "Precision cuts and tailored bobs that define your features.",
    price: "From ₹350",
    tag: "Signature Cuts",
    img: "/images/service-cut.jpeg",
  },
  {
    id: "color",
    title: "Color",
    desc: "Rich, radiant dimensional color and sun-kissed balayage.",
    price: "From ₹1,499",
    tag: "Balayage & Global",
    img: "/images/service-color.jpeg",
  },
  {
    id: "style",
    title: "Style",
    desc: "Bouncy blowouts, glossy waves & effortless red-carpet styling.",
    price: "From ₹450",
    tag: "Volumizing & Waves",
    img: "/images/service-style.jpeg",
  },
];

/**
 * 3. BEFORE & AFTER TRANSFORMATION SLIDER
 * - BEFORE: Straight brown hair front-facing portrait
 * - AFTER: Styled wavy bouncy hair front-facing portrait
 */
export const initialTransformations: TransformationLook[] = [
  {
    id: "look-1",
    title: "Signature Balayage & Bouncy Waves",
    category: "Color & Styling Transformation",
    description: "Transformed flat, straight brown hair into luminous dimensional honey balayage with voluminous, bouncy waves.",
    before: "/images/before-transformation.jpeg",
    after: "/images/after-transformation.jpeg",
  },
  {
    id: "look-2",
    title: "Dimensional Brunette to Honey Glow",
    category: "Balayage Transformation",
    description: "Lifted natural dark roots with face-framing lightened ribbons, root melt, and a blowout finish.",
    before: "/images/service-style.jpeg",
    after: "/images/service-color.jpeg",
  },
  {
    id: "look-3",
    title: "Textured Face-Framing Bob Cut",
    category: "Precision Cut & Texture",
    description: "Tailored side-profile bob cut with soft textured waves, enhancing jawline definition.",
    before: "/images/before-transformation.jpeg",
    after: "/images/service-cut.jpeg",
  },
];

/**
 * INSTA GLAM STUDIO GALLERY
 * Showcasing the custom salon photography
 */
export const initialGlamLooks: GlamLook[] = [
  {
    id: "honey-balayage",
    title: "Honey Balayage",
    pill: "Trending",
    tag: "Trending Color",
    note: "Sun-kissed, multi-tonal golden ribbons with soft movement and long-lasting shine.",
    img: "/images/service-color.jpeg",
  },
  {
    id: "chic-bob",
    title: "Textured Bob",
    pill: "Signature",
    tag: "Precision Cut",
    note: "A sharp yet softly textured wavy bob with effortless side-profile volume.",
    img: "/images/service-cut.jpeg",
  },
  {
    id: "velvet-brunette",
    title: "Velvet Brunette",
    pill: "New look",
    tag: "Color & Blowout",
    note: "Deep espresso and rich mocha undertones with cascading silky waves.",
    img: "/images/service-style.jpeg",
  },
  {
    id: "bouncy-blowout",
    title: "Bouncy Waves",
    pill: "Client Favorite",
    tag: "Style & Glow",
    note: "Lived-in, glamorous face-framing blowout designed for all-day volume.",
    img: "/images/after-transformation.jpeg",
  },
  {
    id: "champagne-glam",
    title: "Champagne Glow",
    pill: "Editorial",
    tag: "Signature Look",
    note: "Effortless, tousled brunette with soft luminous highlights and natural texture.",
    img: "/images/hero-banner.jpeg",
  },
];

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
