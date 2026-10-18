/**
 * Enreach Unisex Saloon - Luxury Hair & Style Studio
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { AllServicesModal } from "./components/AllServicesModal";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { InstaGlamSection } from "./components/InstaGlamSection";
import { LookPreviewModal } from "./components/LookPreviewModal";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppDock } from "./components/FloatingWhatsAppDock";
import { CustomizerModal } from "./components/CustomizerModal";

import {
  initialSalonInfo,
  initialServices,
  initialTransformations,
  initialGlamLooks,
  heroMediaImage,
  SalonInfo,
  SalonService,
  TransformationLook,
  GlamLook,
} from "./data/salonData";

export default function App() {
  // Configurable state
  const [salonInfo, setSalonInfo] = useState<SalonInfo>(initialSalonInfo);
  const [heroImage, setHeroImage] = useState<string>(heroMediaImage);
  const [services, setServices] = useState<SalonService[]>(initialServices);
  const [transformations, setTransformations] = useState<TransformationLook[]>(initialTransformations);
  const [glamLooks, setGlamLooks] = useState<GlamLook[]>(initialGlamLooks);

  // Modal look preview state (-1 means closed)
  const [activeGlamIdx, setActiveGlamIdx] = useState<number>(-1);

  // Full service menu modal state & category filter
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("Hair Cut");

  // Customizer modal state
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const activeLook = activeGlamIdx >= 0 ? glamLooks[activeGlamIdx] : null;

  const handlePrevGlam = () => {
    setActiveGlamIdx((prev) =>
      prev > 0 ? prev - 1 : glamLooks.length - 1
    );
  };

  const handleNextGlam = () => {
    setActiveGlamIdx((prev) =>
      prev < glamLooks.length - 1 ? prev + 1 : 0
    );
  };

  const handleOpenAllServices = (category = "Hair Cut") => {
    setSelectedServiceCategory(category);
    setIsAllServicesOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6EFE9] text-[#2C1E18] font-sans-body relative overflow-x-clip selection:bg-[#E8B4B8] selection:text-[#2C1E18]">
      {/* Top Hero Section Container with subtle luxury gradient */}
      <div className="bg-gradient-to-b from-[#EBD8CF] via-[#F2E4DC] to-[#F6EFE9]">
        <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
          {/* Header Navigation (Removed unwanted settings/filter icon) */}
          <Navbar
            salonInfo={salonInfo}
            onOpenServicesModal={() => handleOpenAllServices("Hair Cut")}
          />

          {/* Hero Section */}
          <Hero
            salonInfo={salonInfo}
            heroImage={heroImage}
            onOpenServicesModal={() => handleOpenAllServices("Hair Cut")}
          />
        </div>
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Services Section with Image Positioning and "View All Services" Button */}
        <ServicesSection
          services={services}
          whatsappNumber={salonInfo.whatsappNumber}
          onOpenAllServices={handleOpenAllServices}
        />

        {/* Before & After Static 2-Column Comparison Grid */}
        <BeforeAfterSection
          transformations={transformations}
        />

        {/* Insta Glam Studio Looks Section */}
        <InstaGlamSection
          glamLooks={glamLooks}
          instagramUrl={salonInfo.instagramUrl}
          onSelectLook={(idx) => setActiveGlamIdx(idx)}
        />
      </main>

      {/* Footer Section (Displaying 7020678366 | 8806767186) */}
      <Footer salonInfo={salonInfo} />

      {/* Pinned Floating WhatsApp Quick Booking Dock */}
      <FloatingWhatsAppDock salonInfo={salonInfo} />

      {/* Full Services Menu Modal & Appointment Booking Checkout Form */}
      <AllServicesModal
        isOpen={isAllServicesOpen}
        onClose={() => setIsAllServicesOpen(false)}
        whatsappNumber={salonInfo.whatsappNumber}
        initialCategoryFilter={selectedServiceCategory}
      />

      {/* Glassmorphic Look Preview Dialog */}
      {activeLook && (
        <LookPreviewModal
          look={activeLook}
          whatsappNumber={salonInfo.whatsappNumber}
          onClose={() => setActiveGlamIdx(-1)}
          onPrev={handlePrevGlam}
          onNext={handleNextGlam}
        />
      )}

      {/* Easy Customizer Modal for next steps */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        salonInfo={salonInfo}
        setSalonInfo={setSalonInfo}
        heroImage={heroImage}
        setHeroImage={setHeroImage}
        services={services}
        setServices={setServices}
        transformations={transformations}
        setTransformations={setTransformations}
        glamLooks={glamLooks}
        setGlamLooks={setGlamLooks}
      />
    </div>
  );
}
