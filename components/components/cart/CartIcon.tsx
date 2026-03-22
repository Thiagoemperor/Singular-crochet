"use client";

import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import CartDrawer from "./CartDrawer";

export default function CartIcon() {
  const items = useCartStore((state: any) => state.items);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => {
          console.log("click carrito");
          setOpen(true);
        }}
      >
        <span className="text-2xl">🛒</span>

        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#8a5a6e] text-white text-xs px-2 py-1 rounded-full">
            {items.length}
          </span>
        )}
      </div>

      {open && <CartDrawer open={open} setOpen={setOpen} />}
    </>
  );
}
