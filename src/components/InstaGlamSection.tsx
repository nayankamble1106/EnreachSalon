import React from "react";
import { Instagram } from "lucide-react";
import { GlamLook } from "../data/salonData";

interface InstaGlamSectionProps {
  glamLooks: GlamLook[];
  instagramUrl: string;
  onSelectLook: (index: number) => void;
}

export const InstaGlamSection: React.FC<InstaGlamSectionProps> = ({
  glamLooks,
  instagramUrl,
  onSelectLook,
}) => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-28" id="looks">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)] gap-8 lg:gap-10 items-center">
          {/* Left Column: Title & Social CTA */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-display text-[38px] sm:text-[46px] lg:text-[54px] tracking-wide text-[#1C130E] leading-none m-0">
                Instagram
              </h2>
              <svg
                className="w-3.5 h-3.5 text-[#4A1521] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
              </svg>
            </div>

            <p className="mt-1 mb-5 text-[14px] sm:text-[15px] leading-snug text-[#5E4A41] font-medium">
              Fresh looks from our studio.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-pink min-h-[44px] px-6 text-xs inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>

          {/* Right Column: 5 Gallery Cards */}
          <div className="flex lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scroll-smooth snap-x snap-mandatory -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
            {glamLooks.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => onSelectLook(idx)}
                className="group relative flex-none w-[68%] max-w-[280px] lg:w-auto lg:max-w-none snap-start aspect-[3/4.3] rounded-[20px] overflow-hidden bg-[#E6D3CB] text-left p-0 border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DE8F98] shadow-sm hover:shadow-md transition-shadow"
                aria-label={`Preview look: ${look.title}`}
              >
                {/* Photo */}
                <img
                  src={look.img}
                  alt={look.title}
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Optional Pill Tag */}
                {look.pill && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-[10px] font-extrabold tracking-wider uppercase shadow-sm">
                    {look.pill}
                  </span>
                )}

                {/* Subtle Hover Gradient & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-bold text-sm leading-tight drop-shadow-sm">
                      {look.title}
                    </p>
                    <span className="text-[11px] text-[#E8B4B8] font-semibold">
                      Click to inspect
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
