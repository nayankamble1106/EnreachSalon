import React from "react";
import { Sparkles, MessageCircle } from "lucide-react";
import { ServiceItem } from "../data/salonData";

interface StickyCartBarProps {
  cart: ServiceItem[];
  onOpenCart: () => void;
}

export const StickyCartBar: React.FC<StickyCartBarProps> = ({ cart, onOpenCart }) => {
  if (cart.length === 0) return null;

  const totalCost = cart.reduce((sum, item) => sum + (item.numericPrice || 0), 0);

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-bounce-in">
      <div
        onClick={onOpenCart}
        className="cursor-pointer p-4 rounded-2xl bg-[#2C1E18] text-white border border-[#E8B4B8]/40 shadow-[0_12px_35px_rgba(20,10,6,0.4)] flex items-center justify-between gap-4 transition-transform hover:scale-[1.02]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8B4B8] text-[#2C1E18] font-display text-base flex items-center justify-center shrink-0">
            {cart.length}
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-tight m-0">Appointment Cart</h4>
            <p className="text-xs text-[#E8B4B8] m-0 font-medium">Est. Total: ~₹{totalCost} onwards</p>
          </div>
        </div>

        <button className="px-5 py-2 rounded-full bg-[#E8B4B8] text-[#2C1E18] text-xs font-extrabold uppercase tracking-wider shadow-xs hover:bg-white transition-colors">
          View Cart →
        </button>
      </div>
    </div>
  );
};
