import { Metadata } from "next";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | WebNextGen",
  description: "Comprehensive SEO, Analytics, and AI solutions for your business",
};

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover how our comprehensive suite of digital solutions can transform your online presence
          and drive business growth.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-muted-foreground">
          Let's discuss how we can help you achieve your digital marketing goals.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}