import React, { useState } from "react";
import { Sparkles, Menu, X, Settings2 } from "lucide-react";
import { SalonInfo, buildWhatsAppLink } from "../data/salonData";

interface NavbarProps {
  salonInfo: SalonInfo;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ salonInfo, onOpenCustomizer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waLink = buildWhatsAppLink(
    salonInfo.whatsappNumber,
    salonInfo.defaultWhatsAppMessage
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative z-30 pt-6 pb-4 md:pt-7 md:pb-5">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex flex-col leading-none select-none"
          aria-label={`${salonInfo.name} ${salonInfo.tagline} — Home`}
        >
          <span className="font-brand font-bold text-2xl md:text-[30px] tracking-[0.14em] uppercase transition-colors group-hover:text-[#DE8F98]">
            {salonInfo.name}
          </span>
          <span className="font-script text-xl md:text-[24px] text-[#DE8F98] -mt-1 md:-mt-1.5 ml-6 md:ml-8 font-normal">
            {salonInfo.tagline}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-12 text-[12.5px] font-extrabold tracking-[0.14em] uppercase" aria-label="Primary">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="py-2.5 px-0.5 text-[#2C1E18]/85 hover:text-[#DE8F98] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DE8F98] hover:after:w-full after:transition-all"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="py-2.5 px-0.5 text-[#2C1E18]/85 hover:text-[#DE8F98] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DE8F98] hover:after:w-full after:transition-all"
          >
            Services
          </a>
          <a
            href="#transformations"
            onClick={(e) => handleNavClick(e, "#transformations")}
            className="py-2.5 px-0.5 text-[#2C1E18]/85 hover:text-[#DE8F98] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DE8F98] hover:after:w-full after:transition-all"
          >
            Before & After
          </a>
          <a
            href="#looks"
            onClick={(e) => handleNavClick(e, "#looks")}
            className="py-2.5 px-0.5 text-[#2C1E18]/85 hover:text-[#DE8F98] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DE8F98] hover:after:w-full after:transition-all"
          >
            Looks
          </a>
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, "#visit")}
            className="py-2.5 px-0.5 text-[#2C1E18]/85 hover:text-[#DE8F98] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DE8F98] hover:after:w-full after:transition-all"
          >
            About & Visit
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Quick Customizer Toggle Button */}
          <button
            onClick={onOpenCustomizer}
            title="Update salon services, images & details"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#5E4A41] hover:text-[#2C1E18] bg-[#F6EFE9] border border-[#2C1E18]/20 rounded-full hover:border-[#2C1E18]/50 hover:bg-white/60 transition-all shadow-sm"
          >
            <Settings2 className="w-3.5 h-3.5 text-[#DE8F98]" />
            <span className="hidden sm:inline">Customize</span>
          </button>

          {/* Book Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-pink hidden md:inline-flex shadow-sm hover:shadow-md"
          >
            <span>Book your look</span>
            <Sparkles className="w-3.5 h-3.5 text-[#DE8F98]" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-[#2C1E18]/30 flex items-center justify-center text-[#2C1E18] hover:bg-[#2C1E18]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 pb-5 border-t border-[#2C1E18]/10 flex flex-col gap-1.5 animate-fadeIn">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="py-3 px-2 text-sm font-bold tracking-widest uppercase border-b border-[#2C1E18]/8 text-[#2C1E18] hover:text-[#DE8F98]"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="py-3 px-2 text-sm font-bold tracking-widest uppercase border-b border-[#2C1E18]/8 text-[#2C1E18] hover:text-[#DE8F98]"
          >
            Services
          </a>
          <a
            href="#transformations"
            onClick={(e) => handleNavClick(e, "#transformations")}
            className="py-3 px-2 text-sm font-bold tracking-widest uppercase border-b border-[#2C1E18]/8 text-[#2C1E18] hover:text-[#DE8F98]"
          >
            Before & After
          </a>
          <a
            href="#looks"
            onClick={(e) => handleNavClick(e, "#looks")}
            className="py-3 px-2 text-sm font-bold tracking-widest uppercase border-b border-[#2C1E18]/8 text-[#2C1E18] hover:text-[#DE8F98]"
          >
            Looks Gallery
          </a>
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, "#visit")}
            className="py-3 px-2 text-sm font-bold tracking-widest uppercase border-b border-[#2C1E18]/8 text-[#2C1E18] hover:text-[#DE8F98]"
          >
            About & Visit
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-pink w-full mt-3 text-center justify-center"
          >
            Book your look on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};
