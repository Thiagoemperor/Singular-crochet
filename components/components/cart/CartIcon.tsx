"use client";

import { useState } from "react";

export default function CartIcon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="text-3xl cursor-pointer"
        onClick={() => {
          alert("click anda");
          setOpen(true);
        }}
      >
        🛒
      </div>

      {open && (
        <div className="fixed top-0 right-0 w-80 h-full bg-red-500 z-[9999]">
          <p className="text-white p-4">SE ABRIÓ 🔥</p>
        </div>
      )}
    </>
  );
}
