import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { TransformationLook } from "../data/salonData";

interface BeforeAfterSectionProps {
  transformations: TransformationLook[];
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  transformations,
}) => {
  const activeLook = transformations[0] || {
    id: "keratin-smoothing",
    title: "Intense Keratin Smoothing & Gloss Treatment",
    category: "Keratin & Shine Transformation",
    description: "Transformed dry, un-styled frizzy hair into mirror-like, silky straight hair with radiant shine and long-lasting frizz control.",
    before: "/images/file_00000000ddd8821181c9d092861c9cea.png",
    after: "/images/file_00000000a0f882119dccf1626b0648f1.png",
  };

  return (
    <section className="pt-20 md:pt-24 lg:pt-28" id="transformations">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F3CFD2] to-[#F8E4E2] text-[#2C1E18] text-[11.5px] font-extrabold tracking-[0.16em] uppercase shadow-sm mb-3">
              <span>Before &amp; After</span>
              <Sparkles className="w-3 h-3 text-[#DE8F98]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#2C1E18] tracking-wide m-0">
              Real Transformations
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5E4A41] max-w-sm m-0">
            {activeLook.title} — {activeLook.description}
          </p>
        </div>

        {/* Static 2-Column Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* BEFORE CARD */}
          <div className="relative rounded-[28px] overflow-hidden bg-[#E6D3CB] aspect-[4/4.5] shadow-lg border border-white/40 group">
            <img
              src={activeLook.before}
              alt="Before keratin smoothing treatment"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-xs font-extrabold tracking-widest uppercase shadow-md">
              Before
            </span>
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="text-xs font-bold text-[#E8B4B8] uppercase tracking-wider block mb-1">
                Initial State
              </span>
              <p className="text-sm font-medium m-0 opacity-90">
                Dry, frizzy and un-styled hair texture prior to salon treatment.
              </p>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="relative rounded-[28px] overflow-hidden bg-[#E6D3CB] aspect-[4/4.5] shadow-lg border border-white/40 group">
            <img
              src={activeLook.after}
              alt="After keratin smoothing treatment"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-xs font-extrabold tracking-widest uppercase shadow-md">
              After
            </span>
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="text-xs font-bold text-[#E8B4B8] uppercase tracking-wider block mb-1">
                Final Result
              </span>
              <p className="text-sm font-medium m-0 opacity-90">
                Smooth, glossy straight hair with mirror-like shine and perfect finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
