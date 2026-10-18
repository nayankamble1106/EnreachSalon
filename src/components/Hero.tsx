import React from "react";
import { ArrowRight } from "lucide-react";
import { SalonInfo } from "../data/salonData";

interface HeroProps {
  salonInfo: SalonInfo;
  heroImage: string;
  onOpenServicesModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ heroImage, onOpenServicesModal }) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-14 md:pb-20 lg:pb-0" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] min-h-[500px] lg:min-h-[580px] xl:min-h-[640px] items-stretch gap-8 lg:gap-0">
        {/* Left: Copy & CTA */}
        <div className="flex flex-col justify-center z-10 py-6 lg:py-12 pr-0 lg:pr-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12px] md:text-[12.5px] font-bold tracking-[0.16em] uppercase text-[#5E4A41] mb-4 md:mb-6">
            <span>Welcome to Enreach</span>
            <svg
              className="w-3 h-3 text-[#DE8F98] animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
            </svg>
          </div>

          {/* Heading in Anton */}
          <h1 className="font-display text-[64px] sm:text-[76px] md:text-[96px] lg:text-[92px] xl:text-[116px] 2xl:text-[128px] tracking-[0.015em] text-[#2C1E18] leading-[0.94] m-0">
            Your Hair.
            <br />
            <span className="text-[#DE8F98]">Your Era.</span>
          </h1>

          {/* Subheading */}
          <div className="mt-6 md:mt-7 mb-8 md:mb-10 text-[12.5px] md:text-[13.5px] font-bold tracking-[0.2em] uppercase text-[#5E4A41]">
            Cut. Color. Confidence.
          </div>

          {/* CTA Button -> Opens Full Services Modal per instruction */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenServicesModal}
              className="pill pill-dark inline-flex items-center justify-center gap-3 text-sm py-4 px-8 group cursor-pointer"
            >
              <span>Book your look</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center text-xs font-extrabold uppercase tracking-widest text-[#5E4A41] hover:text-[#2C1E18] py-3 px-5 transition-colors"
            >
              Explore Services ↓
            </a>
          </div>
        </div>

        {/* Right: Hero Imagery with Left Mask & Badge */}
        <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0 lg:-mr-[calc(max(40px,(100vw-1320px)/2))]">
          {/* Main Photo container */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl lg:rounded-none">
            <img
              src={heroImage}
              alt="Luxury hair styling at Enreach Unisex Saloon"
              className="w-full h-full object-cover object-[60%_20%] lg:[mask-image:linear-gradient(to_right,transparent_0,#000_24%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_24%)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Circular Rotating Badge */}
          <div
            className="absolute right-5 bottom-5 sm:right-8 sm:bottom-8 lg:right-12 lg:bottom-12 w-[110px] h-[110px] sm:w-[132px] sm:h-[132px] rounded-full bg-[#2C1E18]/55 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-center pointer-events-none select-none z-20"
            role="img"
            aria-label="Trending looks this season"
          >
            {/* Spinning Curved Text SVG */}
            <svg
              className="absolute inset-0 w-full h-full badge-rotate"
              viewBox="0 0 140 140"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="badgePath"
                  d="M70,70 m-53,0 a53,53 0 1,1 106,0 a53,53 0 1,1 -106,0"
                />
              </defs>
              <text
                fill="#F6EFE9"
                fontFamily="Manrope, sans-serif"
                fontSize="10.5"
                fontWeight="700"
                letterSpacing="3.2"
              >
                <textPath href="#badgePath">
                  TRENDING · THIS SEASON · TRENDING · THIS SEASON ·
                </textPath>
              </text>
            </svg>

            {/* Pink Inner Core */}
            <div className="relative w-16 h-16 sm:w-[76px] sm:h-[76px] rounded-full bg-[#E8B4B8] flex items-center justify-center text-center font-display text-base sm:text-[19px] leading-tight text-[#2C1E18] shadow-inner">
              New
              <br />
              Looks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
