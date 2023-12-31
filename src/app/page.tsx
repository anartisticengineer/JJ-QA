import CTAButton from "@/components/ctabutton";

export default function Home() {
  return (
    <main className="flex min-h-screen p-5">
      <section id="home-title-section" className="p-5">
        <h1 className="text-5xl font-bold m-5">INSERT H1</h1>
        <h2 className="text-3xl font-semibold m-5">INSERT H2</h2>
      </section>
      <section id="home-cta" className="p-5">
        <h3 className="text-xl m-5">Subtitle</h3>
        <CTAButton labelName="Go Here" isSubmit={false} />
      </section>
    </main>
  );
}
