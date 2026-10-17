import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowLeftRight } from "lucide-react";
import { TransformationLook } from "../data/salonData";

interface BeforeAfterSectionProps {
  transformations: TransformationLook[];
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  transformations,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100

  const activeLook = transformations[currentIdx] || transformations[0];
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : transformations.length - 1));
    setSliderPos(50);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < transformations.length - 1 ? prev + 1 : 0));
    setSliderPos(50);
  };

  return (
    <section className="pt-20 md:pt-24 lg:pt-28" id="transformations">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)_120px] gap-8 lg:gap-10 items-center">
          {/* Left Column: Title & Text */}
          <div>
            <div className="flex items-start gap-2">
              <h2 className="font-display text-[44px] sm:text-[52px] lg:text-[64px] tracking-wide text-[#2C1E18] leading-[0.95]">
                Before &amp;
                <br />
                After
              </h2>
              <svg
                className="w-3.5 h-3.5 text-[#DE8F98] mt-2 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
              </svg>
            </div>

            <p className="mt-4 mb-6 text-[15px] sm:text-[16px] leading-relaxed text-[#5E4A41] font-medium">
              Real transformations.
              <br />
              Real confidence.
            </p>

            <div className="space-y-3">
              <a
                href="#looks"
                className="pill pill-dark min-h-[44px] px-6 text-xs inline-flex items-center gap-2"
              >
                <span>See more looks</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Transformation metadata summary */}
              <div className="pt-3 border-t border-[#2C1E18]/10 text-xs text-[#5E4A41]">
                <span className="font-bold text-[#2C1E18] block mb-0.5">
                  {activeLook.title}
                </span>
                <span className="text-[#DE8F98] font-bold uppercase tracking-wider block mb-1">
                  {activeLook.category}
                </span>
                <p className="text-[#5E4A41]/90 leading-normal line-clamp-2">
                  {activeLook.description}
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Interactive Split Comparison Stage */}
          <div className="relative aspect-[4/4.8] sm:aspect-[16/10] lg:aspect-[16/9.6] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#E6D3CB] select-none shadow-lg">
            {/* Layer 1: AFTER image (Base layer) */}
            <div className="absolute inset-0">
              <img
                src={activeLook.after}
                alt={`After: ${activeLook.title}`}
                className="w-full h-full object-cover object-[center_25%]"
                draggable={false}
              />
            </div>

            {/* Layer 2: BEFORE image (Clipped layer) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: `inset(0 ${(100 - sliderPos).toFixed(2)}% 0 0)`,
              }}
            >
              <img
                src={activeLook.before}
                alt={`Before: ${activeLook.title}`}
                className="w-full h-full object-cover object-[center_25%]"
                draggable={false}
              />
            </div>

            {/* Pill Labels */}
            <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-[10.5px] font-extrabold tracking-widest uppercase shadow-md pointer-events-none">
              Before
            </span>
            <span className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-[10.5px] font-extrabold tracking-widest uppercase shadow-md pointer-events-none">
              After
            </span>

            {/* Interactive invisible range input overlay */}
            <input
              type="range"
              min={0}
              max={100}
              step={0.5}
              value={sliderPos}
              onChange={(e) => setSliderPos(parseFloat(e.target.value))}
              aria-label="Drag slider to compare before and after transformations"
              className="ba-slider-input absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize m-0 p-0"
            />

            {/* Visual Divider Handle & Center Knob */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#F6EFE9] z-20 pointer-events-none shadow-[0_0_14px_rgba(0,0,0,0.35)] -ml-[1px]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F6EFE9] text-[#2C1E18] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C1E18]" />
              </div>
            </div>
          </div>

          {/* Right Column: Pager & Controls */}
          <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-5">
            {/* Look count */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.14em] text-[#2C1E18]">
              <span>{pad(currentIdx + 1)}</span>
              <i className="w-8 h-[1.5px] bg-[#2C1E18]" aria-hidden="true" />
              <span className="text-[#5E4A41]">{pad(transformations.length)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-[1.5px] border-[#2C1E18] bg-transparent text-[#2C1E18] flex items-center justify-center hover:bg-[#2C1E18] hover:text-[#F6EFE9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                aria-label="Previous transformation"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-[1.5px] border-[#2C1E18] bg-transparent text-[#2C1E18] flex items-center justify-center hover:bg-[#2C1E18] hover:text-[#F6EFE9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                aria-label="Next transformation"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
