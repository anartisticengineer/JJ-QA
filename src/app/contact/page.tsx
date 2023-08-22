import ContactForm from "@/components/form/contactform";

const ContactPage = () => {
  return (
    <main className="flex-col min-h-screen p-5">
      <h1 className="text-5xl font-bold m-5">Contact</h1>
      <ContactForm />
      <article id="contact-other">
        <h3>Other Contact Info</h3>
      </article>
    </main>
  );
};

export default ContactPage;
