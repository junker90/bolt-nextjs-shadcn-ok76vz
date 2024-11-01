import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { services } from "@/lib/services";
import { features } from "@/lib/features";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-24 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Advanced SEO & AI Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Boost your online presence with cutting-edge SEO, analytics, and AI-powered solutions. 
            Transform your digital marketing strategy with WebNextGen.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Choose WebNextGen</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our comprehensive approach to digital success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                Read Our Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive digital solutions to grow your business
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Let's discuss how WebNextGen can help you achieve your digital marketing goals.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="mt-8"
            asChild
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}