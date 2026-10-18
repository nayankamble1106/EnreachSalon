import React, { useState, useEffect } from "react";
import { X, Search, Plus, Check, MessageCircle, Sparkles } from "lucide-react";
import { fullServicesCatalog, ServiceItem, AppointmentDetails, buildWhatsAppAppointmentMessage } from "../data/salonData";

interface AllServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  initialCategoryFilter?: string;
}

export const AllServicesModal: React.FC<AllServicesModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber,
  initialCategoryFilter = "Hair Cut",
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(initialCategoryFilter);
  const [filterGender, setFilterGender] = useState<"Women" | "Men">("Women");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Cart state
  const [cart, setCart] = useState<ServiceItem[]>([]);
  // Checkout form state
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState<AppointmentDetails>({
    name: "",
    phone: "",
    date: "",
    time: "11:00 AM",
  });

  useEffect(() => {
    if (initialCategoryFilter) {
      setSelectedCat(initialCategoryFilter);
    }
  }, [initialCategoryFilter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCheckoutForm) setShowCheckoutForm(false);
        else onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, showCheckoutForm]);

  if (!isOpen) return null;

  const categories = fullServicesCatalog.map((c) => c.category);

  const filteredCatalog = fullServicesCatalog
    .filter((catGroup) => {
      if (selectedCat !== "All" && catGroup.category !== selectedCat && !searchQuery) {
        return false;
      }
      return true;
    })
    .map((catGroup) => {
      const items = catGroup.items.filter((item) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchCat = catGroup.category.toLowerCase().includes(q);
          const matchSub = item.subText?.toLowerCase().includes(q) || false;
          if (!matchName && !matchCat && !matchSub) return false;
        }

        if (filterGender === "Women") {
          return !item.name.toLowerCase().includes("male") && !item.name.toLowerCase().includes("beard") && !item.name.toLowerCase().includes("moustache") && !item.name.toLowerCase().includes("boy");
        } else {
          return item.name.toLowerCase().includes("male") || item.name.toLowerCase().includes("beard") || item.name.toLowerCase().includes("moustache") || item.name.toLowerCase().includes("boy") || item.price?.includes("Male");
        }
      });
      return { ...catGroup, items };
    })
    .filter((catGroup) => catGroup.items.length > 0);

  const isInCart = (name: string) => cart.some((i) => i.name === name);

  const handleAddToCart = (item: ServiceItem) => {
    if (!isInCart(item.name)) {
      setCart((prev) => [...prev, item]);
    }
  };

  const handleRemoveFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in your name, phone number, and preferred date.");
      return;
    }
    const url = buildWhatsAppAppointmentMessage(whatsappNumber, cart, formData);
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Enrich Services Menu & Cart"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl h-full sm:h-[92vh] sm:rounded-[28px] overflow-hidden bg-white shadow-2xl flex flex-col z-10 text-[#2C1E18]">
        
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-30 bg-white border-b border-[#E5E7EB] px-5 py-4 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (showCheckoutForm) setShowCheckoutForm(false);
                else onClose();
              }}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-[#2C1E18] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
            <span className="font-brand font-bold text-lg tracking-wide">
              {showCheckoutForm ? "Complete Appointment Details" : "Enreach Menu & Cart"}
            </span>
          </div>

          {!showCheckoutForm && (
            <div className="flex items-center bg-[#F3F4F6] rounded-full p-1 text-xs font-bold">
              <button
                onClick={() => setFilterGender("Women")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  filterGender === "Women"
                    ? "bg-white text-[#2C1E18] shadow-xs"
                    : "text-gray-500 hover:text-[#2C1E18]"
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setFilterGender("Men")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  filterGender === "Men"
                    ? "bg-white text-[#2C1E18] shadow-xs"
                    : "text-gray-500 hover:text-[#2C1E18]"
                }`}
              >
                Men
              </button>
            </div>
          )}
        </div>

        {/* VIEW MODE: CATALOG LISTING */}
        {!showCheckoutForm ? (
          <>
            {/* Search Bar */}
            <div className="px-5 py-3 bg-white border-b border-[#E5E7EB]/60">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 'Haircut', 'Waxing', 'Keratin'..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#F3F4F6] text-sm text-[#2C1E18] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-bold text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Horizontal Category Scroll Chips */}
            {!searchQuery && (
              <div className="flex overflow-x-auto gap-2 px-5 py-3 bg-white border-b border-[#E5E7EB] scrollbar-none shrink-0">
                {categories.map((cat) => {
                  const isSelected = selectedCat === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCat(cat)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all ${
                        isSelected
                          ? "bg-[#2C1E18] text-white shadow-xs"
                          : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-250"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Scrollable Service Cards List (Prices and durations removed per instructions) */}
            <div className="p-5 overflow-y-auto flex-1 space-y-6 bg-white pb-24">
              {filteredCatalog.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  <p className="text-sm font-medium">No services match your search criteria.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedCat("Hair Cut"); }}
                    className="mt-2 text-xs font-bold text-[#DE8F98] underline"
                  >
                    Reset search
                  </button>
                </div>
              ) : (
                filteredCatalog.map((catGroup) => (
                  <div key={catGroup.category} className="space-y-3">
                    <h3 className="font-bold text-lg text-[#2C1E18] tracking-tight pt-1 pb-1">
                      {catGroup.category}
                    </h3>

                    <div className="space-y-3">
                      {catGroup.items.map((item) => {
                        const added = isInCart(item.name);

                        return (
                          <div
                            key={item.name}
                            className={`p-4 rounded-2xl bg-white border transition-all flex items-center justify-between gap-4 shadow-2xs group ${
                              added ? "border-[#DE8F98] bg-[#FDF8F8]" : "border-[#E5E7EB] hover:border-gray-300"
                            }`}
                          >
                            <div className="flex flex-col gap-1 min-w-0 pr-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-bold text-sm sm:text-base text-[#1C130E] tracking-tight m-0">
                                  {item.name}
                                </h4>
                                {item.price && (
                                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F7F4EF] border border-[#1C130E]/15 text-xs font-bold text-[#1C130E]">
                                    {item.price}
                                  </span>
                                )}
                              </div>

                              {item.subText && (
                                <span className="text-xs text-gray-500 font-medium">
                                  {item.subText}
                                </span>
                              )}
                            </div>

                            {/* Circular '+' Button */}
                            <button
                              onClick={() => {
                                if (added) {
                                  handleRemoveFromCart(item.name);
                                } else {
                                  handleAddToCart(item);
                                }
                              }}
                              className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all shadow-2xs ${
                                added
                                  ? "bg-[#E8B4B8] text-[#2C1E18] border-[#DE8F98]"
                                  : "border-[#E5E7EB] bg-white text-[#2C1E18] hover:bg-[#2C1E18] hover:text-white"
                              }`}
                              aria-label={added ? `Remove ${item.name}` : `Add ${item.name}`}
                              title={added ? "Added (Click to remove)" : "Add to Cart"}
                            >
                              {added ? <Check className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.2]" />}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Bar: Cart Summary & Checkout Trigger */}
            <div className="absolute bottom-0 left-0 right-0 p-4 px-5 bg-white border-t border-[#E5E7EB] flex items-center justify-between gap-3 shadow-lg z-20">
              <div className="text-xs font-bold text-gray-700">
                {cart.length === 0 ? (
                  <span className="text-gray-400 font-normal">No services selected yet. Tap '+' to add.</span>
                ) : (
                  <span>{cart.length} service(s) selected in cart</span>
                )}
              </div>
              <button
                onClick={() => {
                  if (cart.length === 0) {
                    alert("Please select at least one service to proceed.");
                    return;
                  }
                  setShowCheckoutForm(true);
                }}
                className={`px-6 py-2.5 rounded-full bg-[#2C1E18] text-white font-bold uppercase tracking-wider text-xs shadow-md ${
                  cart.length === 0 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                Proceed to Checkout ({cart.length})
              </button>
            </div>
          </>
        ) : (
          /* VIEW MODE: APPOINTMENT DETAILS FORM & WHATSAPP CHECKOUT */
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-white">
            <div className="p-4 rounded-2xl bg-[#FBF5F0] border border-[#E8B4B8]/40 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DE8F98]">
                Selected Services ({cart.length})
              </span>
              <ul className="text-xs space-y-1 text-gray-700 font-medium max-h-28 overflow-y-auto">
                {cart.map((s) => (
                  <li key={s.name} className="flex items-center justify-between">
                    <span>• {s.name}{s.price ? ` (${s.price})` : ""}</span>
                    <button
                      onClick={() => handleRemoveFromCart(s.name)}
                      className="text-red-500 hover:underline text-[10px]"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  👤 Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  📞 Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    📅 Preferred Booking Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    ⏰ Preferred Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DE8F98]"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="px-6 py-3 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50"
                >
                  Back to Menu
                </button>

                <button
                  type="submit"
                  className="pill pill-pink flex-1 justify-center text-xs py-4 gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Confirm &amp; Send to WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
