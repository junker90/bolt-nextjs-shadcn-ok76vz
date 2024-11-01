import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-full bg-primary/10 p-3">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Our Location</h3>
            <p className="text-sm text-muted-foreground">
              123 Business Street
              <br />
              New York, NY 10001
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-full bg-primary/10 p-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-sm text-muted-foreground">
              contact@webnextgen.shop
              <br />
              support@webnextgen.shop
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-full bg-primary/10 p-3">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm text-muted-foreground">
              +1 (555) 123-4567
              <br />
              Mon-Fri 9am-6pm EST
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}