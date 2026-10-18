import React from "react";
import { X, Trash2, MessageCircle, Sparkles } from "lucide-react";
import { ServiceItem, buildWhatsAppLink } from "../data/salonData";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: ServiceItem[];
  onRemoveFromCart: (itemName: string) => void;
  whatsappNumber: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveFromCart,
  whatsappNumber,
}) => {
  if (!isOpen) return null;

  const estimatedTotal = cart.reduce((sum, item) => sum + (item.numericPrice || 0), 0);
  
  const checkoutUrl = buildWhatsAppLink(
    whatsappNumber,
    `Hi Enreach Salon, I want to book the following services:\n\n` +
      cart.map((i, idx) => `${idx + 1}. ${i.name}`).join("\n") +
      `\n\nSalon Address: Jatpura Gate, Near Gulwade Hospital, Bazar Ward, Chandrapur, Maharashtra`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Appointment Cart"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#2C1E18]/75 backdrop-blur-sm cursor-pointer transition-opacity"
        aria-hidden="true"
      />

      {/* Cart Dialog */}
      <div className="relative w-full max-w-lg max-h-[85vh] overflow-hidden rounded-[28px] bg-white border border-[#2C1E18]/15 shadow-2xl flex flex-col z-10 text-[#2C1E18]">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-100 bg-[#FBF5F0] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8B4B8]/40 text-[#2C1E18] text-[10.5px] font-extrabold tracking-widest uppercase mb-1">
              <Sparkles className="w-3 h-3 text-[#DE8F98]" />
              <span>Appointment Cart</span>
            </div>
            <h3 className="font-display text-2xl text-[#2C1E18] tracking-wide m-0">
              Selected Services ({cart.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#2C1E18] hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3 max-h-[42vh]">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-sm font-medium">Your cart is empty.</p>
              <p className="text-xs text-gray-400 mt-1">Tap '+' on any service card in the menu to add services.</p>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="p-3.5 rounded-2xl bg-[#F9FAFB] border border-gray-200 flex items-center justify-between gap-3"
              >
                <div className="min-w-0 pr-2">
                  <h4 className="font-bold text-sm text-[#2C1E18] truncate m-0">{item.name}</h4>
                  {item.subText && <span className="text-xs text-gray-500">{item.subText}</span>}
                </div>

                <button
                  onClick={() => onRemoveFromCart(item.name)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-red-500 hover:bg-red-50 flex items-center justify-center shrink-0 transition-colors"
                  aria-label={`Remove ${item.name}`}
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        <div className="p-6 bg-[#FBF5F0] border-t border-gray-100 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
            >
              Continue Browsing
            </button>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`pill pill-pink w-full sm:w-auto flex-1 justify-center text-xs py-3.5 gap-2 shadow-lg ${
                cart.length === 0 ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Appointment / Checkout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
