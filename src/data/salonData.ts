/**
 * Enreach Unisex Saloon Data Model
 * Updated with official contact numbers (7020678366 | 8806767186) and price/duration removed per instructions.
 */

export interface ServiceItem {
  id?: string;
  name: string;
  price?: string;
  numericPrice?: number;
  duration?: string;
  subText?: string;
  category?: string;
}

export interface ServiceMenuCategory {
  category: string;
  items: ServiceItem[];
}

export interface SalonService {
  id: string;
  title: string;
  img: string;
  price: string;
  tag: string;
  objectPosition: string;
  categoryFilter: string;
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
  secondaryPhone: string;
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
  address: "Jatpura Gate, Near Gulwade Hospital, Bazar Ward",
  city: "Chandrapur, Maharashtra",
  phone: "+917020678366",
  secondaryPhone: "+918806767186",
  displayPhone: "+91 70206 78366 | +91 88067 67186",
  email: "contact@enreachsaloon.com",
  hours: "Monday – Sunday: 9:30 AM – 9:00 PM",
  whatsappNumber: "917020678366",
  defaultWhatsAppMessage: "Hi Enreach Salon, I want to book an appointment!",
  instagramUrl: "https://www.instagram.com/en_reachh_unisex_saloon?cplk=bDFwMmczOWJ1MW1h",
  facebookUrl: "https://www.facebook.com/share/17vNpzKWLR/",
};

export const heroMediaImage = "/images/hero-banner.jpeg";

export const initialServices: SalonService[] = [
  {
    id: "cut",
    title: "Cut",
    price: "",
    tag: "Hair Cut",
    img: "/images/Screenshot 2026-10-17 220758.png",
    objectPosition: "center top",
    categoryFilter: "Hair Cut",
  },
  {
    id: "color",
    title: "Color",
    price: "",
    tag: "Colour",
    img: "/images/Screenshot 2026-10-17 220743.png",
    objectPosition: "center 30%",
    categoryFilter: "Colour",
  },
  {
    id: "grooming",
    title: "Grooming",
    price: "",
    tag: "Treatments",
    img: "/images/Screenshot 2026-10-17 220729.png",
    objectPosition: "center center",
    categoryFilter: "Treatments",
  },
];

export const initialTransformations: TransformationLook[] = [
  {
    id: "keratin-smoothing",
    title: "Intense Keratin Smoothing & Gloss Treatment",
    category: "Keratin & Shine Transformation",
    description: "Transformed dry, un-styled frizzy hair into mirror-like, silky straight hair with radiant shine and long-lasting frizz control.",
    before: "/images/Screenshot 2026-10-17 223006.png",
    after: "/images/Screenshot 2026-10-17 222932.png",
  },
];

export const initialGlamLooks: GlamLook[] = [
  {
    id: "silk-leopard-back",
    title: "Silk Straight",
    pill: "Trending",
    tag: "Glass Hair Finish",
    note: "Ultra-long straight hair with pin-straight silk alignment and reflective shine.",
    img: "/images/41b8e193-ec7a-4974-a54c-f58859bfea72.jpg",
  },
  {
    id: "leopard-front-smile",
    title: "Signature Smooth",
    pill: "Client Favorite",
    tag: "Smooth & Polish",
    note: "Lightweight, silky smooth front styling with soft face framing and zero flyaways.",
    img: "/images/32cc2526-035f-4798-8fa7-90fdf4702000.jpg",
  },
  {
    id: "layer-cut-white",
    title: "Feather Layers",
    pill: "Popular",
    tag: "Layer Cut & Volume",
    note: "Bouncy multi-tiered layers creating effortless body and movement around the collarbones.",
    img: "/images/aa132ae6-83c4-48a9-9bfb-bd0c512bc980.jpg",
  },
  {
    id: "blue-sweater-waves",
    title: "Soft Velvet Waves",
    pill: "New Look",
    tag: "Dimensional Wave",
    note: "Sweeping curtain bangs blended into soft cascading waves with subtle warm highlights.",
    img: "/images/28f82dd7-cd63-4552-80a6-5c297d503818.jpg",
  },
  {
    id: "salon-straight-back",
    title: "Keratin Mirror Finish",
    pill: "Transformation",
    tag: "Keratin Treatment",
    note: "Deep nourishing keratin salon treatment delivering flawless pin-straight smoothness.",
    img: "/images/63b791ca-9218-4fbc-b46f-8f08e275d8de.jpg",
  },
];

/**
 * COMPLETE SALON SERVICE MENU TARIFF (Prices and Durations removed per instructions)
 */
export const fullServicesCatalog: ServiceMenuCategory[] = [
  {
    category: "Hair Cut",
    items: [
      { name: "Special Care Haircut" },
      { name: "Haircut", subText: "Graduate · Senior · Expert" },
      { name: "Creative Hair Cut", subText: "Senior · Master Stylist" },
      { name: "Haircut Boy" },
      { name: "Girls Haircut" },
      { name: "Beard Trimming" },
      { name: "Moustache Styling" },
      { name: "Back / Front Hair Trimming" },
    ],
  },
  {
    category: "Hair Wash",
    items: [
      { name: "Hair Wash", subText: "Classic · Advanced · Luxury" },
      { name: "Keratin Wash" },
      { name: "Blow Dry" },
      { name: "Hair Styling" },
      { name: "Head Massage" },
    ],
  },
  {
    category: "Colour",
    items: [
      { name: "Touch up" },
      { name: "Touch up (Ammonia Free)" },
      { name: "Beard Colouring" },
      { name: "Global Colouring", subText: "Upto Neck · Shoulder · Waist" },
      { name: "Hair Strip Colour" },
      { name: "Balayage Colour" },
      { name: "Weaving Colour" },
      { name: "Crazy Colour" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Keratin Treatment", subText: "Neck · Shoulder · Waist" },
      { name: "Butore Treatment", subText: "Neck · Shoulder · Waist" },
      { name: "Floraactive Treatment", subText: "Neck · Shoulder · Waist" },
      { name: "Texture (Smoothing / Rebonding)", subText: "Below Neck · Shoulder · Waist" },
      { name: "Ironing / Tongs / Iron Curls" },
      { name: "Hair Spa (Regular)" },
      { name: "Keratin Spa" },
      { name: "Anti Dandruff Treatment" },
      { name: "Anti Hairfall Treatment" },
      { name: "Nanoplastia" },
    ],
  },
  {
    category: "Waxing / Facials",
    items: [
      { name: "Liposoluble Wax", subText: "Full Arms · Half Arms · Full Legs · Underarms" },
      { name: "Roll On Wax", subText: "Single Cartridge · Two Cartridges" },
      { name: "Sugar Wax", subText: "Full Arms · Half Arms · Full Legs · Underarms" },
      { name: "Express Cleanup", subText: "Age Revival · Anti-Aging Hydrating · Anti-Pigmentation" },
      { name: "Threading (Eyebrow / Jawline / Chin / Forehead)" },
      { name: "Fruit Facial / O3 Whitening" },
      { name: "Skin Polishing (Body Scrub / Gold / Luxury)" },
      { name: "Hydra Facial" },
      { name: "Bridal Facial (O3 Bridal / O2C2 / Snowy / BB Glow)" },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "Manicure / Pedicure (Regular / Crystal / Luxury)" },
      { name: "Touch up Makeup" },
      { name: "Saree Draping" },
      { name: "Party Makeup" },
      { name: "Bridal Makeup / HD Makeup" },
    ],
  },
];

export interface AppointmentDetails {
  name: string;
  phone: string;
  date: string;
  time: string;
}

export function buildWhatsAppAppointmentMessage(
  phone: string,
  cart: ServiceItem[],
  details: AppointmentDetails
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  let text = `Hi Enreach Unisex Saloon! 👋\n\n`;
  text += `I would like to book an appointment. Here are my details:\n\n`;
  text += `👤 Name: ${details.name}\n`;
  text += `📞 Phone: ${details.phone}\n`;
  text += `📅 Date: ${details.date}\n`;
  text += `⏰ Time: ${details.time}\n\n`;
  text += `✂️ Selected Services:\n`;
  cart.forEach((item, idx) => {
    text += `- ${item.name}${item.subText ? ` (${item.subText})` : ""}\n`;
  });
  text += `\nPlease confirm my booking slot!`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
