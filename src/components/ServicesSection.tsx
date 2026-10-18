import React from "react";
import { Plus, ArrowRight } from "lucide-react";
import { SalonService } from "../data/salonData";

interface ServicesSectionProps {
  services: SalonService[];
  whatsappNumber: string;
  onOpenAllServices: (category?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onOpenAllServices,
}) => {
  return (
    <section className="pt-10 md:pt-14 lg:pt-16" id="services">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
        {/* Header & Category Chip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F3CFD2] to-[#F8E4E2] text-[#2C1E18] text-[11.5px] font-extrabold tracking-[0.16em] uppercase shadow-sm mb-3">
              <span>Our Services</span>
              <svg
                className="w-2.5 h-2.5 text-[#DE8F98]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
              </svg>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1C130E] tracking-wide m-0">
              Signature Treatments
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2.5">
            <p className="text-xs sm:text-sm text-[#5E4A41] max-w-sm m-0 sm:text-right">
              Engineered styling, bespoke color alchemy, and restorative scalp therapies.
            </p>
            <button
              onClick={() => onOpenAllServices("Hair Cut")}
              className="bg-[#1C130E] text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition shadow-md text-xs sm:text-[13px] tracking-wider uppercase cursor-pointer group mt-1"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Services Grid (Prices and durations removed per instructions, showing Title, Price badge, and '+' button) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            return (
              <div
                key={svc.id}
                onClick={() => onOpenAllServices(svc.categoryFilter)}
                className="group relative block rounded-[26px] overflow-hidden aspect-[1/1.12] text-white shadow-md hover:shadow-2xl transition-all duration-300 isolate cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View ${svc.title} services in menu`}
              >
                {/* Background Image with Exact Object-Position & Hover Scale */}
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{ objectPosition: svc.objectPosition }}
                  className="absolute inset-0 w-full h-full object-cover -z-20 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Contrast Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Optional Top Tag */}
                {svc.tag && (
                  <div className="absolute top-5 left-6 z-10">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10.5px] font-bold tracking-wider uppercase text-white/95 shadow-sm">
                      {svc.tag}
                    </span>
                  </div>
                )}

                {/* Card Bottom Content (Title + Price badge on left, Plus button on right) */}
                <div className="absolute left-6 right-6 bottom-6 sm:left-7 sm:right-7 sm:bottom-7 flex items-end justify-between gap-4 z-10">
                  <div className="flex flex-col items-start gap-1.5">
                    <h3 className="font-display text-[46px] sm:text-[54px] lg:text-[62px] tracking-wide text-white leading-none m-0 drop-shadow-sm">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Plus Action Button */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#E8B4B8] text-[#2C1E18] flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:rotate-90 group-hover:bg-white">
                    <Plus className="w-5 h-5 stroke-[2.4]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Luxury "VIEW ALL SERVICES" CTA Button */}
        <div className="mt-12 text-center flex justify-center">
          <button
            onClick={() => onOpenAllServices("Hair Cut")}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#2C1E18] text-[#F6EFE9] text-xs sm:text-sm font-extrabold tracking-[0.16em] uppercase shadow-lg hover:shadow-2xl hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 border border-[#E8B4B8]/30 cursor-pointer"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-[#DE8F98] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
