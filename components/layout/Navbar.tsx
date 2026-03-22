"use client";
import CartIcon from "../cart/CartIcon";
export default function Navbar() {
  const openInstagram = () => {
    window.open("https://instagram.com/singular.crochet", "_blank");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="font-semibold">🧶 Singular Crochet</h1>

      <button
        onClick={openInstagram}
        className="bg-[#8a5a6e] text-white px-4 py-2 rounded-full"
      >
        Seguinos
      </button>
    </nav>
  );
}
