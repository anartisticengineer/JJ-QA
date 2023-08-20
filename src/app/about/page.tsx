import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="flex-col justify-items-center max-w-xs min-h-screen p-5">
      <h1 className="text-5xl font-bold m-5">About Me</h1>
      <section id="about-pic">
        <figure>
          <Image src={""} alt="test" className="p-5" />
          <figcaption className="p-5">Test Caption</figcaption>
        </figure>
      </section>
      <section id="about-info" className="flex">
        <article id="about-paragraph" className="p-5">
          <p>About me paragraph</p>
        </article>
        <article id="about-social" className="p-5">
          <h3>About me follow</h3>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
