import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen p-5">
      <section id="home-title-section" className="p-5">
        <h1 className="text-5xl font-bold m-5">INSERT H1</h1>
        <h2 className="text-3xl font-semibold m-5">INSERT H2</h2>
      </section>
      <section id="home-cta" className="p-5">
        <h3 className="text-xl m-5">Subtitle</h3>
        <button
          id="cta-button"
          className="text-xl p-5 bg-red-100 hover:underline"
        >
          Go Here
        </button>
      </section>
    </main>
  );
}
