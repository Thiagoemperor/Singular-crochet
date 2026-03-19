import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="p-10 text-center">
        <h1 className="text-4xl font-light">
          Piezas <span className="italic text-[#8a5a6e]">únicas</span> tejidas a mano
        </h1>
        <p className="mt-4 text-gray-600">
          Cada pieza está hecha con amor 💖
        </p>
      </section>
    </main>
  );
}
