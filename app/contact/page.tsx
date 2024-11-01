import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";

export const metadata: Metadata = {
  title: "Contact Us | WebNextGen",
  description: "Get in touch with us for SEO, Analytics, and AI solutions",
};

export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or want to work together? Get in touch with us.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}