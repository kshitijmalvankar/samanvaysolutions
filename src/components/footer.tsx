import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/samanvay-logo.png"
                alt="Samanvay Solutions"
                width={1571}
                height={686}
                className="h-10 w-auto min-w-0 object-contain"
              />
            </Link>
            <p className="text-sm text-foreground leading-relaxed">
              Unity, Collaboration, Harmony. Acting not just as a consultant,
              but as a true partner &mdash; steering and integrating diverse
              verticals through every stage of the project life cycle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                "Project Management",
                "Architectural Design",
                "MEP Design",
                "Infrastructure Development",
                "BIM / Cost Management",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  404, Magnolia Business Center,
                  <br />
                  Baner-Pashan Link Road,
                  <br />
                  Pune, Maharashtra [IN] &ndash; 411021
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:samanvaysolutions2024@gmail.com"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  samanvaysolutions2024@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:projects.samanvay@gmail.com"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  projects.samanvay@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground">
            &copy; {new Date().getFullYear()} Samanvay Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
