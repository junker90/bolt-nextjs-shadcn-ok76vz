import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export function FeatureCard({ title, description, icon: Icon, link }: FeatureCardProps) {
  return (
    <Link href={link}>
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
          <div className="rounded-full bg-primary/10 p-3 w-fit">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
    </Link>
  );
}