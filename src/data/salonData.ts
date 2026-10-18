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
    img: "/images/file_00000000638c8211ab2783ef25089369.png",
    objectPosition: "center top",
    categoryFilter: "Hair Cut",
  },
  {
    id: "color",
    title: "Color",
    price: "",
    tag: "Colour",
    img: "/images/file_000000001bd482118002ed725d4c2cf5.png",
    objectPosition: "center 30%",
    categoryFilter: "Colour",
  },
  {
    id: "grooming",
    title: "Grooming",
    price: "",
    tag: "Treatments",
    img: "/images/file_00000000f8c4821192c11186d037f1e5.png",
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
    before: "/images/file_00000000ddd8821181c9d092861c9cea.png",
    after: "/images/file_00000000a0f882119dccf1626b0648f1.png",
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
      { name: "Special Care Haircut", price: "₹500" },
      { name: "Haircut", price: "₹250 - ₹450", subText: "Graduate · Senior · Expert" },
      { name: "Creative Hair Cut", price: "₹400 - ₹600", subText: "Senior · Master Stylist" },
      { name: "Haircut Boy", price: "₹200" },
      { name: "Girls Haircut", price: "₹300" },
      { name: "Beard Trimming", price: "₹150" },
      { name: "Moustache Styling", price: "₹100" },
      { name: "Back / Front Hair Trimming", price: "₹150" },
    ],
  },
  {
    category: "Hair Wash",
    items: [
      { name: "Hair Wash", price: "₹250 - ₹500", subText: "Classic · Advanced · Luxury" },
      { name: "Keratin Wash", price: "₹450" },
      { name: "Blow Dry", price: "₹350" },
      { name: "Hair Styling", price: "₹500" },
      { name: "Head Massage", price: "₹400" },
    ],
  },
  {
    category: "Colour",
    items: [
      { name: "Touch up", price: "₹1000" },
      { name: "Touch up (Ammonia Free)", price: "₹1200" },
      { name: "Beard Colouring", price: "₹400" },
      { name: "Global Colouring", price: "₹2500 - ₹4500", subText: "Upto Neck · Shoulder · Waist" },
      { name: "Hair Strip Colour", price: "₹350" },
      { name: "Balayage Colour", price: "₹4500+" },
      { name: "Weaving Colour", price: "₹4000+" },
      { name: "Crazy Colour", price: "₹600" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Keratin Treatment", price: "₹3500 - ₹7000", subText: "Neck · Shoulder · Waist" },
      { name: "Butore Treatment", price: "₹4000 - ₹8000", subText: "Neck · Shoulder · Waist" },
      { name: "Floraactive Treatment", price: "₹4500 - ₹8500", subText: "Neck · Shoulder · Waist" },
      { name: "Texture (Smoothing / Rebonding)", price: "₹3500 - ₹6500", subText: "Below Neck · Shoulder · Waist" },
      { name: "Ironing / Tongs / Iron Curls", price: "₹600" },
      { name: "Hair Spa (Regular)", price: "₹800" },
      { name: "Keratin Spa", price: "₹1500" },
      { name: "Anti Dandruff Treatment", price: "₹1200" },
      { name: "Anti Hairfall Treatment", price: "₹1200" },
      { name: "Nanoplastia", price: "₹5000+" },
    ],
  },
  {
    category: "Waxing / Facials",
    items: [
      { name: "Clean up", price: "₹800" },
      { name: "Fruit Clean up", price: "₹1000" },
      { name: "Clean up + D-tan", price: "₹1200" },
      { name: "O3 Clean up", price: "₹1500" },
      { name: "Cheryl's Clean up", price: "₹1300" },
      { name: "O3 Icecream Clean up", price: "₹2000" },
      { name: "Liposoluble Wax", price: "₹600+", subText: "Full Arms · Half Arms · Full Legs · Underarms" },
      { name: "Roll On Wax", price: "₹500+", subText: "Single Cartridge · Two Cartridges" },
      { name: "Sugar Wax", price: "₹400+", subText: "Full Arms · Half Arms · Full Legs · Underarms" },
      { name: "Express Cleanup", price: "₹900", subText: "Age Revival · Anti-Aging Hydrating · Anti-Pigmentation" },
      { name: "Threading", price: "₹50+", subText: "Eyebrow · Jawline · Chin · Forehead" },
      { name: "Fruit Facial / O3 Whitening", price: "₹1800" },
      { name: "Skin Polishing", price: "₹2500", subText: "Body Scrub · Gold · Luxury" },
      { name: "Hydra Facial", price: "₹3500" },
      { name: "Bridal Facial", price: "₹4500", subText: "O3 Bridal · O2C2 · Snowy · BB Glow" },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "O3 Icecream Manicure / Pedicure", price: "₹2000" },
      { name: "Manicure / Pedicure", price: "₹700 - ₹1800", subText: "Regular · Crystal · Luxury" },
      { name: "Touch up Makeup", price: "₹1500" },
      { name: "Saree Draping", price: "₹600" },
      { name: "Party Makeup", price: "₹2500" },
      { name: "Bridal Makeup / HD Makeup", price: "₹8000+" },
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
  cart.forEach((item) => {
    text += `- ${item.name}${item.price ? ` [${item.price}]` : ""}${item.subText ? ` (${item.subText})` : ""}\n`;
  });
  text += `\nPlease confirm my booking slot!`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
