"use client";

import { useCartStore } from "@/store/cartStore";

export default function ProductCard({ product }: any) {
  const addToCart = useCartStore((state: any) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded-3xl shadow">
      <div className="h-40 bg-gray-100 rounded-xl mb-4" />

      <h3 className="font-medium">{product.name}</h3>

      <p className="text-sm text-gray-500">
        ${product.price.toLocaleString("es-AR")}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-[#8a5a6e] text-white py-2 rounded-full"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
