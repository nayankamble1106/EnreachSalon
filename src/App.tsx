/**
 * Enreach Unisex Saloon - Luxury Hair & Style Studio
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
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

  return (
    <div className="min-h-screen bg-[#F6EFE9] text-[#2C1E18] font-sans-body relative overflow-x-clip selection:bg-[#E8B4B8] selection:text-[#2C1E18]">
      {/* Top Hero Section Container with subtle luxury gradient */}
      <div className="bg-gradient-to-b from-[#EBD8CF] via-[#F2E4DC] to-[#F6EFE9]">
        <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 xl:px-10">
          {/* Header Navigation */}
          <Navbar
            salonInfo={salonInfo}
            onOpenCustomizer={() => setIsCustomizerOpen(true)}
          />

          {/* Hero Section */}
          <Hero
            salonInfo={salonInfo}
            heroImage={heroImage}
          />
        </div>
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Services Section */}
        <ServicesSection
          services={services}
          whatsappNumber={salonInfo.whatsappNumber}
        />

        {/* Before & After Interactive Transformations Section */}
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

      {/* Footer Section */}
      <Footer salonInfo={salonInfo} />

      {/* Pinned Floating WhatsApp Quick Booking Dock */}
      <FloatingWhatsAppDock salonInfo={salonInfo} />

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
