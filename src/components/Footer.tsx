import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SalonInfo, buildWhatsAppLink } from "../data/salonData";

interface FooterProps {
  salonInfo: SalonInfo;
}

export const Footer: React.FC<FooterProps> = ({ salonInfo }) => {
  const waLink = buildWhatsAppLink(
    salonInfo.whatsappNumber,
    salonInfo.defaultWhatsAppMessage
  );

  return (
    <footer className="mt-24 md:mt-28 bg-[#2C1E18] text-[#F6EFE9] pt-16 pb-28 md:pb-20" id="visit">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex flex-col leading-none mb-5 select-none">
              <span className="font-brand font-bold text-2xl md:text-3xl tracking-[0.14em] uppercase text-white">
                {salonInfo.name}
              </span>
              <span className="font-script text-xl md:text-2xl text-[#E8B4B8] -mt-1 ml-6">
                {salonInfo.tagline}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#F6EFE9]/80 max-w-[280px]">
              Beauty • Style • Confidence | Your beauty. Our passion.
            </p>
          </div>

          {/* Col 2: Location */}
          <div>
            <h4 className="text-[11.5px] font-extrabold tracking-[0.18em] uppercase text-[#E8B4B8] mb-4">
              Visit Us
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E8B4B8] shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed text-[#F6EFE9]/85 m-0">
                {salonInfo.address}
                <br />
                {salonInfo.city}
              </p>
            </div>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="text-[11.5px] font-extrabold tracking-[0.18em] uppercase text-[#E8B4B8] mb-4">
              Contact & Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F6EFE9]/85">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="hover:text-[#DE8F98] transition-colors">
                  {salonInfo.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                <a href={`mailto:${salonInfo.email}`} className="hover:text-[#DE8F98] transition-colors">
                  {salonInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E8B4B8] shrink-0 mt-0.5" />
                <span>{salonInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Social Channels */}
          <div>
            <h4 className="text-[11.5px] font-extrabold tracking-[0.18em] uppercase text-[#E8B4B8] mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={salonInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#E8B4B8] hover:text-[#2C1E18] hover:border-[#E8B4B8] transition-all"
                aria-label="Follow Enreach on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={salonInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#E8B4B8] hover:text-[#2C1E18] hover:border-[#E8B4B8] transition-all"
                aria-label="Follow Enreach on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#E8B4B8] hover:text-[#2C1E18] hover:border-[#E8B4B8] transition-all"
                aria-label="Chat with Enreach on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Base Bar */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6EFE9]/70">
          <span>© {new Date().getFullYear()} Enreach Unisex Saloon. All rights reserved.</span>
          <span className="tracking-widest uppercase font-semibold text-[#DE8F98]">
            Chandrapur, Maharashtra
          </span>
        </div>
      </div>
    </footer>
  );
};
