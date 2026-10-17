import React, { useEffect } from "react";
import { X, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { GlamLook, buildWhatsAppLink } from "../data/salonData";

interface LookPreviewModalProps {
  look: GlamLook;
  whatsappNumber: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LookPreviewModal: React.FC<LookPreviewModalProps> = ({
  look,
  whatsappNumber,
  onClose,
  onPrev,
  onNext,
}) => {
  // Handle ESC and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const bookLink = buildWhatsAppLink(
    whatsappNumber,
    `Hi Enreach, I love the "${look.title}" look from your studio gallery and would like to book it!`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview look: ${look.title}`}
    >
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#2C1E18]/60 backdrop-blur-xl transition-opacity duration-300 cursor-zoom-out"
        aria-hidden="true"
      />

      {/* Glassmorphic Container */}
      <div className="relative w-full max-w-[920px] max-h-[90vh] overflow-y-auto lg:overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#F6EFE9]/20 backdrop-blur-2xl border border-white/40 shadow-[0_30px_90px_rgba(20,10,6,0.55)] text-white z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F6EFE9] text-[#2C1E18] hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
          aria-label="Close preview"
        >
          <X className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Left: Image Container */}
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-[#E6D3CB]">
          <img
            src={look.img}
            alt={look.title}
            className="w-full h-full object-cover object-[center_top]"
          />
        </div>

        {/* Right: Look Details */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 gap-5">
          {/* Category Chip */}
          <span className="self-start px-3.5 py-1.5 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-xs font-extrabold tracking-widest uppercase shadow-sm">
            {look.tag || "Signature Style"}
          </span>

          {/* Title in Anton */}
          <h3 className="font-display text-[42px] sm:text-[54px] lg:text-[62px] text-white leading-[0.95] tracking-wide m-0">
            {look.title}
          </h3>

          {/* Note */}
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium m-0">
            {look.note}
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-pink self-start inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book this look</span>
            </a>
          </div>

          {/* Previous / Next Nav */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/20">
            <span className="text-xs text-white/75 font-semibold uppercase tracking-wider mr-2">
              Browse looks:
            </span>
            <button
              onClick={onPrev}
              className="w-10 h-10 rounded-full border border-white/50 bg-white/10 hover:bg-white hover:text-[#2C1E18] text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Previous look"
              title="Previous (Left arrow)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-full border border-white/50 bg-white/10 hover:bg-white hover:text-[#2C1E18] text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Next look"
              title="Next (Right arrow)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
