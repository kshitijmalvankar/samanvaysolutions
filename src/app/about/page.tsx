"use client";

import Image from "next/image";
import {
  Target,
  Handshake,
  Eye,
  Building2,
  Users,
  Award,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { ExpandableCard } from "@/components/expandable-card";
import { ParallaxImage } from "@/components/parallax-image";

const values = [
  {
    icon: Target,
    title: "Strategic Alignment",
    
    description:
      "Ensuring every project element aligns with the overarching vision and objectives from concept to completion.",
    boldDescription: true,
    content: (
      <div className="space-y-4">
        <p>
          Strategic alignment is the cornerstone of our project management philosophy. We don't just execute tasks; we ensure that every action contributes to the broader goals of the project and the organization.
        </p>
        <p>
          From the initial feasibility study to the final handover, we constantly evaluate decisions against the strategic objectives of cost, quality, and timeline, ensuring a result that truly serves your business needs.
        </p>
      </div>
    ),
    src: "/projects/strategic alignment.jpeg",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description:
      "We act not just as consultants, but as genuine partners, deeply invested in the success of every project.",
    boldDescription: true,
    content: (
      <div className="space-y-4">
        <p>
          We believe that the best results come from true collaboration. As your partners, we take ownership of the project's success, sharing in the challenges and the triumphs.
        </p>
        <p>
          Our team integrates seamlessly with yours, providing transparent communication, proactive problem-solving, and a shared commitment to excellence. We represent your interests at every turn.
        </p>
      </div>
    ),
    src: "/projects/True Partnership.jpeg",
  },
  {
    icon: Eye,
    title: "Cohesive Vision",
    description:
      "Preserving a unified vision across all verticals, ensuring harmony between design, engineering, and execution.",
    boldDescription: true,
    content: (
      <div className="space-y-4">
        <p>
          A project involves many moving parts and diverse disciplines. Our role is to ensure that the original vision is never lost in translation.
        </p>
        <p>
          By coordinating between architects, engineers, contractors, and stakeholders, we maintain a cohesive thread that runs through the entire project lifecycle, ensuring the final outcome is exactly what was envisioned.
        </p>
      </div>
    ),
    src: "/projects/Cohesive Vision.jpeg",
  },
];

const associates = [
  {
    title: "Strudcom Consultants Pvt. Ltd.",
    description: "Structural Design & Consultancy",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-medium">
          <Building2 className="h-4 w-4" />
          <span>Pune, India</span>
        </div>
        <p>
          Experts in structural design and consultancy since last 8 decades. Specializes in providing structural stability certificates and detailing for residential and commercial buildings.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
          <li>Structural Stability Certification</li>
          <li>Detailed Structural Analysis</li>
          <li>Residential & Commercial Projects</li>
        </ul>
      </div>
    ),
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
  },
  {
    title: "Electromech Engineers Associates (EMEA)",
    description: "MEP Systems Design",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-medium">
          <Building2 className="h-4 w-4" />
          <span>India</span>
        </div>
        <p>
          Engineering consultancy firm providing comprehensive in-house consultancy services in the design of Mechanical, Electrical, and Plumbing (MEP) systems.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
          <li>Mechanical System Design</li>
          <li>Electrical Load Calculations</li>
          <li>Plumbing & Sanitary Engineering</li>
        </ul>
      </div>
    ),
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    title: "Precon India Consulting",
    description: "Pre-Construction Services",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-medium">
          <Building2 className="h-4 w-4" />
          <span>India</span>
        </div>
        <p>
          A pioneering pre-construction service provider helping General Contractors, Developers, Architects and Project Management Consultants.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
          <li>Cost Estimation & Budgeting</li>
          <li>Tender Management</li>
          <li>Contract Administration</li>
        </ul>
      </div>
    ),
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
  },
  {
    title: "Purplebox Neoterics Pvt. Ltd.",
    description: "Design Solutions",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-medium">
          <Building2 className="h-4 w-4" />
          <span>India</span>
        </div>
        <p>
          Founded to provide a one-stop solution for all design needs, delivering timeless and fresh aesthetics for high-scale residential, commercial, and development projects.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
          <li>Interior Design</li>
          <li>Architectural Planning</li>
          <li>Landscape Design</li>
        </ul>
      </div>
    ),
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
  },
];

const specialties = [
  {
    icon: Building2,
    title: "Industrial",
    description:
      "Manufacturing Facilities, Warehouses, and Integrated Industrial complexes for Leading corporations.",
    image: "/industries/industrial.jpg",
    content: (
      <div className="space-y-4">
        <p>
          We deliver robust and efficient industrial infrastructure designed to meet the rigorous demands of modern manufacturing and logistics.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Manufacturing Plants & Assembly Lines</li>
          <li>Warehousing & Logistics Parks</li>
          <li>Industrial Parks & SEZs</li>
          <li>Process Engineering Facilities</li>
        </ul>
      </div>
    ),
    src: "/industries/industrial.jpg",
  },
  {
    icon: GraduationCap,
    title: "Institutional",
    description:
      "Educational Campuses, Research Centers, and Government Facilities with green building certifications.",
    image: "/industries/institutional.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Creating inspiring spaces for learning and innovation. Our institutional projects focus on sustainability, functionality, and creating an environment conducive to growth.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>University Campuses & Schools</li>
          <li>Research & Development Centers</li>
          <li>Training Facilities</li>
          <li>Government Buildings</li>
        </ul>
      </div>
    ),
    src: "/industries/institutional.jpg",
  },
  {
    icon: Users,
    title: "Healthcare",
    description:
      "State-of-the-art Hospitals, Medical Colleges, and Healthcare Facilities with Modern Medical Infrastructure.",
    image: "/industries/healthcare.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Healthcare Infrastructure requires specialized knowledge and precision. We design and build facilities that prioritize patient care, operational efficiency, and medical technology integration.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Multi-specialty Hospitals</li>
          <li>Medical Colleges & Nursing Homes</li>
          <li>Diagnostic Centers</li>
          <li>Pharma Research Facilities</li>
        </ul>
      </div>
    ),
    src: "/industries/healthcare.jpg",
  },
  {
    icon: Award,
    title: "Hospitality & Residential",
    description:
      "Luxury resorts, farm houses, and residential projects blending architecture with nature.",
    image: "/industries/hospitality.jpg",
    content: (
      <div className="space-y-4">
        <p>
          We create spaces that offer comfort, luxury, and a connection to nature. Our hospitality and residential projects are designed to provide unique and memorable experiences.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Luxury Resorts & Hotels</li>
          <li>Premium Residential Complexes</li>
          <li>Farmhouses & Private Villas</li>
          <li>Clubhouses & Recreational Facilities</li>
        </ul>
      </div>
    ),
    src: "/industries/hospitality.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop"
            alt="About Samanvay"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <Badge className="-translate-y-8 bg-orange-600/20 text-orange-300 border-orange-500/30 backdrop-blur-sm mb-4 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide">
                About Us
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Samanvay
                </span>{" "}
                (समन्वय)
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">
                  Co-ordination, Harmony, Synchronization.
                </strong>{" "}
                Bringing different elements together in a balanced and unified
                way.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Coordination between people & systems",
                  "Harmony in actions & relationships",
                  "Integration of ideas & efforts",
                ].map((text) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-gray-200"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {text}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
        
      </section>

      {/* Company Overview */}
      <section className="pt-10 pb-8 md:pt-14 md:pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide"
                >
                  Company Overview
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  A Captain at the Helm
                </h2>
                <div className="space-y-4 text foreground leading-relaxed">
                  <p className="text-lg">
                    Samanvay acts not just as a consultant, but as a{" "}
                    <strong className="text-foreground">true partner</strong> to
                    the client. A Captain at the Helm, steering and integrating
                    diverse verticals through every stage of the project life
                    cycle.
                  </p>
                  <p className="text-lg">
                    We ensure Strategic Alignment, Foster meaningful
                    Collaboration, and preserve a{" "}<strong>Cohesive Vision</strong> from concept to
                    completion.
                  </p>
                  <p className="text-lg">
                    Our approach brings together the best expertise across
                    Architectural Design, Structural Engineering, MEP Systems,
                    Project Management, and more all under one{" "}<strong>Cohesive Umbrella</strong>
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <ExpandableCard items={values} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="-translate-y-8 py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide"
              >
                Our Specialities
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sectors We Serve
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-foreground text-lg">
                We bring deep domain expertise across four key sectors,
                Delivering tailored solutions for each.
              </p>
            </FadeIn>
          </div>

          <ExpandableCard items={specialties} />
        </div>

      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
            alt="Modern building"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700/95 to-orange-600/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Partner with Samanvay
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
              Experience the power of true partnership. Let us bring
              Coordination, Harmony, and Synchronization to your next project.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-muted/20 px-8 h-12 text-base shadow-xl transition-all hover:scale-[1.02]"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
