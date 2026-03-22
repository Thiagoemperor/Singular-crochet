"use client";
import CartIcon from "../cart/CartIcon";
export default function Navbar() {
  const openInstagram = () => {
    window.open("https://instagram.com/singular.crochet", "_blank");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
  <h1>🧶 Singular Crochet</h1>

  <div className="flex items-center gap-4">
    <button
      onClick={() =>
        window.open("https://instagram.com/singular.crochet", "_blank")
      }
      className="bg-[#8a5a6e] text-white px-4 py-2 rounded-full"
    >
      Seguinos
    </button>

    <CartIcon />
  </div>
</nav>
  );
}
