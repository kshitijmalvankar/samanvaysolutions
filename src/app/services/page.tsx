"use client";

import Image from "next/image";
import {
  HardHat,
  Building2,
  Ruler,
  Lightbulb,
  ShieldCheck,
  Landmark,
  FileCheck,
  Droplets,
  PaintBucket,
  MapPin,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { ExpandableCard } from "@/components/expandable-card";
import { ParallaxImage } from "@/components/parallax-image";

const services = [
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "End-to-End project management ensuring strategic alignment, timely delivery, and quality across all project phases. We act as the captain at the helm, coordinating all stakeholders and verticals.",
    content: (
      <div className="space-y-4">
        <p>
          Our project management approach is holistic and proactive. We take full responsibility for the project's success, managing every detail from inception to completion.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Schedule & Timeline Management",
            "Stakeholder Coordination",
            "Quality Assurance & Control",
            "Risk Management & Mitigation",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/project-management.jpg",
    ctaText: "Get Started",
    ctaLink: "/contact",
  },
  {
    icon: Building2,
    title: "Architectural & Structural Design",
    description:
      "Comprehensive Architectural and structural design Solutions for Industrial, Institutional, Commercial, and Residential Projects. From concept to detailed drawings.",
    content: (
      <div className="space-y-4">
        <p>
          We combine aesthetic vision with structural integrity. Our designs are not just visually appealing but also optimized for functionality, safety, and sustainability.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Conceptual & Schematic Design",
            "Detailed Architectural Drawings",
            "Structural Analysis & Design",
            "3D Visualization & Rendering",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/architectural-structural-design.jpg",
    ctaText: "View Portfolio",
    ctaLink: "/projects",
  },
  {
    icon: Ruler,
    title: "MEP Design",
    description:
      "Expert Mechanical, Electrical, and Plumbing systems design ensuring Optimal Building Performance, Energy Efficiency, and ccupant comfort.",
    content: (
      <div className="space-y-4">
        <p>
          Our MEP solutions are designed to be efficient, reliable, and sustainable. We ensure that all systems work in harmony to create a comfortable and safe environment.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "HVAC System Design",
            "Electrical Distribution Planning",
            "Plumbing & Drainage Systems",
            "Energy Efficiency Optimization",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/mep-design.jpg",
    ctaText: "Contact Us",
    ctaLink: "/contact",
  },
  {
    icon: Lightbulb,
    title: "BIM / Cost Management",
    description:
      "Advanced Building Information Modeling and cost management services for precise project planning, clash detection, and budget optimization.",
    content: (
      <div className="space-y-4">
        <p>
          We leverage cutting-edge BIM technology to visualize projects before they are built, reducing errors and saving costs. Our cost management ensures financial transparency.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "3D/4D/5D BIM Modeling",
            "Clash Detection & Resolution",
            "Cost Estimation & Budgeting",
            "Quantity Surveying",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/bim-cost-management.jpg",
    ctaText: "Learn More",
    ctaLink: "/contact",
  },
  {
    icon: ShieldCheck,
    title: "Fire Fighting & Safety",
    description:
      "Complete fire protection and safety systems design to ensure regulatory compliance and maximum occupant safety across all building types.",
    content: (
      <div className="space-y-4">
        <p>
          Safety is non-negotiable. We design robust fire protection systems that strictly adhere to all safety codes and standards, protecting lives and property.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Fire Detection & Alarm Systems",
            "Sprinkler System Design",
            "Evacuation Planning",
            "Safety Compliance Audits",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/fire-fighting-safety.jpg",
    ctaText: "Ensure Safety",
    ctaLink: "/contact",
  },
  {
    icon: Landmark,
    title: "Infrastructure Development / Execution",
    description:
      "Large-scale Infrastructure Development and Execution with a focus on Sustainability, Quality, and Timely completion of civil works.",
    content: (
      <div className="space-y-4">
        <p>
          We have the expertise to handle complex infrastructure projects. Our focus is on delivering high-quality civil works that stand the test of time.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Site Development & Earthwork",
            "Road & Utility Infrastructure",
            "Civil Construction Management",
            "Quality Control & Testing",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/Infrastructure_Development_Execution.jpg",
    ctaText: "View Projects",
    ctaLink: "/projects",
  },
  {
    icon: MapPin,
    title: "Land Liasoning",
    description:
      "Expert land liaison services to navigate complex regulatory requirements, land acquisition processes, and governmental coordination.",
    content: (
      <div className="space-y-4">
        <p>
          Navigating land regulations can be challenging. We simplify the process by handling all liaison activities, ensuring smooth acquisition and compliance.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Land Acquisition Support",
            "Regulatory Compliance",
            "Title Verification",
            "Liaison With Authorities",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/land-liasoning.jpg",
    ctaText: "Consult Us",
    ctaLink: "/contact",
  },
  {
    icon: FileCheck,
    title: "Government Approvals",
    description:
      "End-to-End support for obtaining all necessary Government approvals, permits, and certifications for construction projects.",
    content: (
      <div className="space-y-4">
        <p>
          We streamline the approval process, leveraging our network and knowledge to obtain all necessary permits efficiently, preventing project delays.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Building Permits & NOCs",
            "Environmental Clearances",
            "Fire Department Approvals",
            "Occupancy Certificates",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/government-approvals.jpg",
    ctaText: "Get Approvals",
    ctaLink: "/contact",
  },
  {
    icon: Droplets,
    title: "ETP & Water Treatment Systems",
    description:
      "Design and implementation of effluent treatment plants (ETP) and water treatment systems ensuring environmental compliance.",
    content: (
      <div className="space-y-4">
        <p>
          We are committed to environmental sustainability. Our water treatment solutions ensure compliance with regulations and promote responsible resource management.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "ETP Design & Installation",
            "Water Treatment Plants",
            "Recycling & Reuse Systems",
            "Environmental Compliance",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/etp-water-treatment.jpg",
    ctaText: "Learn More",
    ctaLink: "/services",
  },
  {
    icon: PaintBucket,
    title: "Interiors & Landscape",
    description:
      "Complete interior design and landscape architecture services, creating spaces that are functional, aesthetic, and aligned with the project vision.",
    content: (
      <div className="space-y-4">
        <p>
          We create spaces that inspire. Our interior and landscape designs blend aesthetics with functionality to create environments that enhance well-being and productivity.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Interior Space Planning",
            "Material Selection & Finishes",
            "Landscape Architecture",
            "Hardscape & Softscape Design",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/interior-and-landscape.jpeg",
    ctaText: "View Gallery",
    ctaLink: "/projects",
  },
  {
    icon: ClipboardCheck,
    title: "Redevelopment & Feasibility Studies",
    description:
      "Comprehensive redevelopment planning and feasibility studies to evaluate project viability, optimize returns, and guide investment decisions.",
    content: (
      <div className="space-y-4">
        <p>
          We help you make informed investment decisions. Our feasibility studies provide a clear picture of project viability, risks, and potential returns.
        </p>
        <h4 className="font-semibold text-foreground">Key Features:</h4>
        <ul className="space-y-2">
          {[
            "Feasibility Analysis",
            "Redevelopment Planning",
            "Market & Financial Assessment",
            "Regulatory Review",
          ].map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ),
    src: "/services/redevelopment-feasibility.jpg",
    ctaText: "Start Analysis",
    ctaLink: "/contact",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Deep dive into project requirements, constraints, and client vision to establish clear objectives.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Develop comprehensive project plans with timelines, budgets, and resource allocation strategies.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Coordinate all verticals and stakeholders to deliver quality work on schedule and within budget.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Ensure seamless handover with complete documentation and post-project support.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop"
            alt="Engineering services"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <Badge className=" -translate-y-8 bg-orange-600/20 text-orange-300 border-orange-500/30 backdrop-blur-sm mb-4 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide">
                Our Services
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                End-to-End{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Engineering Solutions
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed">
                From Land Acquisition to final handover, we provide Comprehensive
                Services across every stage of the Project life cycle
                ensuring Quality, Compliance, and Timely Delivery.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ExpandableCard items={services} />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide">
                Our Approach
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Work
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg">
                A systematic approach that ensures every project is delivered
                with precision and excellence.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="group relative cursor-default">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />

                    <div className="absolute bottom-3 left-3">
                      <span className="text-4xl font-bold text-primary/80">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
            alt="Office"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700/95 to-orange-600/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
              Every project is unique. Let&apos;s discuss your requirements and
              craft a tailored solution that meets your specific needs.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-muted/20 px-8 h-12 text-base shadow-xl transition-all hover:scale-[1.02]"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
