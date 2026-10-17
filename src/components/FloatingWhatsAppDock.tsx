import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { SalonInfo, buildWhatsAppLink } from "../data/salonData";

interface FloatingWhatsAppDockProps {
  salonInfo: SalonInfo;
}

export const FloatingWhatsAppDock: React.FC<FloatingWhatsAppDockProps> = ({
  salonInfo,
}) => {
  const waLink = buildWhatsAppLink(
    salonInfo.whatsappNumber,
    salonInfo.defaultWhatsAppMessage
  );

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-[560px] flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-2.5 pl-5 sm:pl-6 rounded-full bg-[#2C1E18]/85 backdrop-blur-xl border border-[#E8B4B8]/40 shadow-[0_16px_45px_rgba(20,10,6,0.38)] text-[#F6EFE9] transition-transform duration-300 hover:scale-[1.01]">
        {/* Left Status & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DE8F98] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DE8F98]" />
          </span>
          <div className="truncate text-xs sm:text-[13.5px] font-bold leading-tight">
            <span>Ready for your new look?</span>
            <small className="hidden sm:block text-[11.5px] font-medium text-[#F6EFE9]/75 truncate mt-0.5">
              Book your slot directly on WhatsApp
            </small>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Direct Phone Call */}
          <a
            href={`tel:${salonInfo.phone}`}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:bg-white/10 transition-colors"
            title="Call the salon"
            aria-label="Call salon"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp Book Now */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-pink min-h-[42px] sm:min-h-[46px] px-4 sm:px-6 text-xs sm:text-[12.5px] gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current hidden xs:inline" />
            <span>Book now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
