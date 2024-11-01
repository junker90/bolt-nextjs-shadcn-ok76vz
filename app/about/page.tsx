import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">About Us</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Welcome to webnexthen.shop, your trusted destination for quality products and exceptional shopping experience. 
            We strive to provide our customers with the best selection of products at competitive prices.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-8">
            Founded in 2024, webnexthen.shop has grown from a small online store to a comprehensive e-commerce platform. 
            Our commitment to customer satisfaction and quality service has helped us build a loyal customer base and establish 
            ourselves as a reliable online shopping destination.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-8">
            Our mission is to make quality products accessible to everyone while providing an exceptional shopping experience. 
            We carefully curate our product selection and work with trusted suppliers to ensure that every item meets our high standards.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+48 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>contact@webnexthen.shop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Warsaw, Poland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <span>Mon-Fri: 9:00 - 17:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <ul className="space-y-2">
                  <li>✓ Quality guaranteed products</li>
                  <li>✓ Fast and reliable shipping</li>
                  <li>✓ Secure payment methods</li>
                  <li>✓ Excellent customer service</li>
                  <li>✓ Easy returns policy</li>
                  <li>✓ Best price guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Customer Satisfaction: We put our customers first and strive to exceed their expectations.</li>
            <li>Quality: We maintain high standards for all our products and services.</li>
            <li>Integrity: We conduct our business with honesty and transparency.</li>
            <li>Innovation: We continuously improve our platform and services.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}