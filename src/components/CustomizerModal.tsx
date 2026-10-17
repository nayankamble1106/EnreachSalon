import React, { useState } from "react";
import { X, RotateCcw, Check, Copy, Image as ImageIcon, Sparkles, MapPin, Scissors, Layers } from "lucide-react";
import {
  SalonInfo,
  SalonService,
  TransformationLook,
  GlamLook,
  initialSalonInfo,
  initialServices,
  initialTransformations,
  initialGlamLooks,
  heroMediaImage,
} from "../data/salonData";

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  salonInfo: SalonInfo;
  setSalonInfo: React.Dispatch<React.SetStateAction<SalonInfo>>;
  heroImage: string;
  setHeroImage: (url: string) => void;
  services: SalonService[];
  setServices: React.Dispatch<React.SetStateAction<SalonService[]>>;
  transformations: TransformationLook[];
  setTransformations: React.Dispatch<React.SetStateAction<TransformationLook[]>>;
  glamLooks: GlamLook[];
  setGlamLooks: React.Dispatch<React.SetStateAction<GlamLook[]>>;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  salonInfo,
  setSalonInfo,
  heroImage,
  setHeroImage,
  services,
  setServices,
  transformations,
  setTransformations,
  glamLooks,
  setGlamLooks,
}) => {
  const [activeTab, setActiveTab] = useState<"general" | "hero" | "services" | "transformations" | "looks">("general");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleResetDefaults = () => {
    if (window.confirm("Reset all images, services, and salon details back to default?")) {
      setSalonInfo(initialSalonInfo);
      setHeroImage(heroMediaImage);
      setServices(initialServices);
      setTransformations(initialTransformations);
      setGlamLooks(initialGlamLooks);
    }
  };

  const copyConfigSnippet = () => {
    const config = {
      salonInfo,
      heroImage,
      services,
      transformations,
      glamLooks,
    };
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Salon Customizer"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#2C1E18]/70 backdrop-blur-md cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-3xl bg-[#F6EFE9] border border-[#2C1E18]/15 shadow-2xl flex flex-col z-10 text-[#2C1E18]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#2C1E18]/10 flex items-center justify-between bg-[#FBF5F0]">
          <div>
            <h3 className="font-brand font-bold text-xl sm:text-2xl tracking-wide m-0">
              Update Salon Content &amp; Images
            </h3>
            <p className="text-xs text-[#5E4A41] m-0 mt-0.5">
              Easily update services, photos, before/after transformations, and booking info.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#2C1E18]/20 flex items-center justify-center text-[#2C1E18] hover:bg-[#2C1E18]/5 transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-[#2C1E18]/10 px-6 bg-[#FBF5F0]/60 gap-1 text-xs font-bold tracking-wider uppercase">
          <button
            onClick={() => setActiveTab("general")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === "general"
                ? "border-[#DE8F98] text-[#2C1E18]"
                : "border-transparent text-[#5E4A41] hover:text-[#2C1E18]"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#DE8F98]" />
            Salon Details
          </button>
          <button
            onClick={() => setActiveTab("hero")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === "hero"
                ? "border-[#DE8F98] text-[#2C1E18]"
                : "border-transparent text-[#5E4A41] hover:text-[#2C1E18]"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#DE8F98]" />
            Hero Banner
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === "services"
                ? "border-[#DE8F98] text-[#2C1E18]"
                : "border-transparent text-[#5E4A41] hover:text-[#2C1E18]"
            }`}
          >
            <Scissors className="w-3.5 h-3.5 text-[#DE8F98]" />
            Services ({services.length})
          </button>
          <button
            onClick={() => setActiveTab("transformations")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === "transformations"
                ? "border-[#DE8F98] text-[#2C1E18]"
                : "border-transparent text-[#5E4A41] hover:text-[#2C1E18]"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#DE8F98]" />
            Before &amp; After
          </button>
          <button
            onClick={() => setActiveTab("looks")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === "looks"
                ? "border-[#DE8F98] text-[#2C1E18]"
                : "border-transparent text-[#5E4A41] hover:text-[#2C1E18]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DE8F98]" />
            Insta Looks ({glamLooks.length})
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* GENERAL TAB */}
          {activeTab === "general" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Salon Brand Name
                </label>
                <input
                  type="text"
                  value={salonInfo.name}
                  onChange={(e) => setSalonInfo({ ...salonInfo, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Tagline (Cursive)
                </label>
                <input
                  type="text"
                  value={salonInfo.tagline}
                  onChange={(e) => setSalonInfo({ ...salonInfo, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={salonInfo.address}
                  onChange={(e) => setSalonInfo({ ...salonInfo, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  City &amp; State
                </label>
                <input
                  type="text"
                  value={salonInfo.city}
                  onChange={(e) => setSalonInfo({ ...salonInfo, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Phone (Dialer)
                </label>
                <input
                  type="text"
                  value={salonInfo.phone}
                  onChange={(e) => setSalonInfo({ ...salonInfo, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  WhatsApp Number (with country code, e.g. 919876543210)
                </label>
                <input
                  type="text"
                  value={salonInfo.whatsappNumber}
                  onChange={(e) => setSalonInfo({ ...salonInfo, whatsappNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Opening Hours
                </label>
                <input
                  type="text"
                  value={salonInfo.hours}
                  onChange={(e) => setSalonInfo({ ...salonInfo, hours: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Default WhatsApp Booking Message
                </label>
                <input
                  type="text"
                  value={salonInfo.defaultWhatsAppMessage}
                  onChange={(e) => setSalonInfo({ ...salonInfo, defaultWhatsAppMessage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>
            </div>
          )}

          {/* HERO BANNER TAB */}
          {activeTab === "hero" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-1">
                  Hero Image URL
                </label>
                <input
                  type="text"
                  value={heroImage}
                  onChange={(e) => setHeroImage(e.target.value)}
                  placeholder="Paste custom image URL..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#2C1E18]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#5E4A41] mb-2">
                  Image Live Preview:
                </span>
                <div className="relative h-64 rounded-2xl overflow-hidden bg-[#E6D3CB] border border-[#2C1E18]/10">
                  <img src={heroImage} alt="Hero Preview" className="w-full h-full object-cover object-[60%_20%]" />
                </div>
              </div>
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === "services" && (
            <div className="space-y-5">
              {services.map((svc, idx) => (
                <div key={svc.id} className="p-4 rounded-2xl bg-white border border-[#2C1E18]/10 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#DE8F98]">
                      Service #{idx + 1}
                    </span>
                    <span className="text-xs text-[#5E4A41] font-semibold">{svc.price}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Service Title
                      </label>
                      <input
                        type="text"
                        value={svc.title}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx] = { ...updated[idx], title: e.target.value };
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm focus:outline-none focus:ring-1 focus:ring-[#DE8F98]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Price Tag (optional)
                      </label>
                      <input
                        type="text"
                        value={svc.price || ""}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx] = { ...updated[idx], price: e.target.value };
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm focus:outline-none focus:ring-1 focus:ring-[#DE8F98]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Description
                      </label>
                      <input
                        type="text"
                        value={svc.desc}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx] = { ...updated[idx], desc: e.target.value };
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm focus:outline-none focus:ring-1 focus:ring-[#DE8F98]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={svc.img}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx] = { ...updated[idx], img: e.target.value };
                          setServices(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm focus:outline-none focus:ring-1 focus:ring-[#DE8F98]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TRANSFORMATIONS TAB */}
          {activeTab === "transformations" && (
            <div className="space-y-6">
              {transformations.map((item, idx) => (
                <div key={item.id} className="p-4 rounded-2xl bg-white border border-[#2C1E18]/10 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#DE8F98]">
                      Transformation #{idx + 1}: {item.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = [...transformations];
                          updated[idx] = { ...updated[idx], title: e.target.value };
                          setTransformations(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) => {
                          const updated = [...transformations];
                          updated[idx] = { ...updated[idx], category: e.target.value };
                          setTransformations(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Before Image URL
                      </label>
                      <input
                        type="text"
                        value={item.before}
                        onChange={(e) => {
                          const updated = [...transformations];
                          updated[idx] = { ...updated[idx], before: e.target.value };
                          setTransformations(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        After Image URL
                      </label>
                      <input
                        type="text"
                        value={item.after}
                        onChange={(e) => {
                          const updated = [...transformations];
                          updated[idx] = { ...updated[idx], after: e.target.value };
                          setTransformations(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INSTA LOOKS TAB */}
          {activeTab === "looks" && (
            <div className="space-y-4">
              {glamLooks.map((look, idx) => (
                <div key={look.id} className="p-4 rounded-2xl bg-white border border-[#2C1E18]/10 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#DE8F98]">
                      Look #{idx + 1}: {look.title}
                    </span>
                    {look.pill && <span className="text-[10px] px-2 py-0.5 rounded bg-[#E8B4B8] font-bold">{look.pill}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={look.title}
                        onChange={(e) => {
                          const updated = [...glamLooks];
                          updated[idx] = { ...updated[idx], title: e.target.value };
                          setGlamLooks(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Badge Pill (e.g. Trending, New look, or blank)
                      </label>
                      <input
                        type="text"
                        value={look.pill || ""}
                        onChange={(e) => {
                          const updated = [...glamLooks];
                          updated[idx] = { ...updated[idx], pill: e.target.value };
                          setGlamLooks(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Description / Note
                      </label>
                      <input
                        type="text"
                        value={look.note}
                        onChange={(e) => {
                          const updated = [...glamLooks];
                          updated[idx] = { ...updated[idx], note: e.target.value };
                          setGlamLooks(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase text-[#5E4A41] mb-1">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={look.img}
                        onChange={(e) => {
                          const updated = [...glamLooks];
                          updated[idx] = { ...updated[idx], img: e.target.value };
                          setGlamLooks(updated);
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#2C1E18]/20 text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#FBF5F0] border-t border-[#2C1E18]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#5E4A41] hover:text-[#2C1E18] bg-transparent border border-[#2C1E18]/20 rounded-full hover:bg-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>
            <button
              onClick={copyConfigSnippet}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#5E4A41] hover:text-[#2C1E18] bg-transparent border border-[#2C1E18]/20 rounded-full hover:bg-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied JSON!" : "Copy JSON"}
            </button>
          </div>

          <button
            onClick={onClose}
            className="pill pill-dark min-h-[40px] px-6 text-xs"
          >
            Done Editing
          </button>
        </div>
      </div>
    </div>
  );
};
