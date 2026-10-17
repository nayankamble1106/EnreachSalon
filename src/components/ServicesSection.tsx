import React from "react";
import { Plus } from "lucide-react";
import { SalonService, buildWhatsAppLink } from "../data/salonData";

interface ServicesSectionProps {
  services: SalonService[];
  whatsappNumber: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  whatsappNumber,
}) => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-28" id="services">
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
        {/* Category Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F3CFD2] to-[#F8E4E2] text-[#2C1E18] text-[11.5px] font-extrabold tracking-[0.16em] uppercase shadow-sm">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
          {services.map((svc) => {
            const serviceWaLink = buildWhatsAppLink(
              whatsappNumber,
              `Hi Enreach, I'd like to book an appointment for the ${svc.title} service.`
            );

            return (
              <a
                key={svc.id}
                href={serviceWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-[26px] overflow-hidden aspect-[1/1.12] text-white shadow-md hover:shadow-xl transition-all duration-300 isolate"
                aria-label={`Book ${svc.title} service`}
              >
                {/* Background Image with Hover Scale */}
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover object-top -z-20 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Contrast Overlay */}
                <div
                  className="absolute inset-0 service-card-overlay -z-10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Optional Top Tag */}
                {svc.tag && (
                  <div className="absolute top-5 left-6 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10.5px] font-bold tracking-wider uppercase text-white/90">
                      {svc.tag}
                    </span>
                  </div>
                )}

                {/* Card Bottom Content */}
                <div className="absolute left-6 right-6 bottom-6 sm:left-7 sm:right-7 sm:bottom-7 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[46px] sm:text-[54px] lg:text-[64px] tracking-wide text-white leading-none mb-2">
                      {svc.title}
                    </h3>
                    <p className="m-0 text-sm leading-snug text-[#F6EFE9]/95 max-w-[210px] font-medium">
                      {svc.desc}
                    </p>
                    {svc.price && (
                      <span className="inline-block mt-2 text-xs font-bold text-[#E8B4B8] tracking-wider uppercase">
                        {svc.price}
                      </span>
                    )}
                  </div>

                  {/* Plus Action Button */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#E8B4B8] text-[#2C1E18] flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:rotate-90 group-hover:bg-white">
                    <Plus className="w-5 h-5 stroke-[2.4]" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
