import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/products/ProductCard";
import { products } from "../lib/products";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="p-10">
        <h1 className="text-4xl font-light mb-6">
          Productos destacados
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
