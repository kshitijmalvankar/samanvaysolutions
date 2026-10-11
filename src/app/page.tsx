"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { VideoModal } from "@/components/video-modal";
import { BackToTop } from "@/components/back-to-top";
import { ParallaxImage } from "@/components/parallax-image";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { LogoMarquee, type MarqueeLogo } from "@/components/logo-marquee";
import { IndustryCard, type Industry } from "@/components/industry-card";

const heroImages = [
  { src: "/industries/industrial.jpg", alt: "Industrial manufacturing facility" },
  { src: "/industries/institutional.jpg", alt: "Institutional campus building" },
  { src: "/industries/healthcare.jpg", alt: "Healthcare facility" },
  { src: "/industries/hospitality.jpg", alt: "Hospitality and residential development" },
];

const clientLogos: MarqueeLogo[] = [
  { src: "/logos/mahindra-hinoday.png", alt: "Mahindra Hinoday", width: 200, height: 129 },
  { src: "/logos/sandvik.png", alt: "Sandvik", width: 1232, height: 224 },
  { src: "/logos/emcure.png", alt: "Emcure Pharma", width: 527, height: 109 },
  { src: "/logos/zs.png", alt: "Zamil Steel", width: 1614, height: 748 },
  { src: "/logos/nbcc.png", alt: "NBCC (India) Limited", width: 541, height: 120 },
  { src: "/logos/iit-hyderabad.png", alt: "IIT Hyderabad", width: 4381, height: 1304 },
  { src: "/logos/sany-heavy.png", alt: "Sany Heavy Industry", width: 396, height: 130 },
  { src: "/logos/ognibene.png", alt: "Ognibene Power", width: 1490, height: 206 },
  { src: "/logos/qh-talbros.png", alt: "QH Talbros", width: 280, height: 53 },
  { src: "/logos/sidbi.png", alt: "SIDBI", width: 435, height: 174 },
  { src: "/logos/garware-bestretch.png", alt: "Garware Bestretch", width: 300, height: 144 },
  { src: "/logos/pmp-drives.png", alt: "PMP Drives", width: 1838, height: 817 },
  { src: "/logos/paranjape-autocast.png", alt: "Paranjape Autocast", width: 217, height: 100 },
  { src: "/logos/oram.png", alt: "Oram BioChem", width: 2548, height: 835 },
  { src: "/logos/prasad-meditech.png", alt: "Prasad Meditech", width: 169, height: 105 },
  { src: "/logos/hodek.png", alt: "Hodek", width: 585, height: 100 },
  { src: "/logos/royal-care-hospital.png", alt: "Royal Care Hospitals", width: 287, height: 82 },
  { src: "/logos/sabari.png", alt: "Sabari Constructions Technologies", width: 855, height: 164 },
];

const industries: Industry[] = [
  {
    title: "Industrial",
    description:
      "Engineering and Project Management Solutions for Manufacturing Facilities, Industrial Parks, Warehouses, and Production Plants.",
    image: "/industries/industrial.jpg",
    href: "/projects?category=industrial",
  },
  {
    title: "Institutional",
    description:
      "Planning and delivering Educational Campuses, Research Centers, Government Facilities, and Public Infrastructure Projects.",
    image: "/industries/institutional.jpg",
    href: "/projects?category=institutional",
  },
  {
    title: "Healthcare",
    description:
      "Designing Hospitals, Medical Colleges, Diagnostic Centers, and Healthcare Facilities with Modern Engineering Standards.",
    image: "/industries/healthcare.jpg",
    href: "/projects?category=healthcare",
  },
  {
    title: "Hospitality & Residential",
    description:
      "Creating Hotels, Resorts, Residential Communities, Villas, and Lifestyle Developments focused on Quality and Functionality.",
    image: "/industries/hospitality.jpg",
    href: "/projects?category=hospitality",
  },
];

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="dQw4w9WgXcQ" // Placeholder ID, replace with actual company video
      />

      <BackToTop />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <HeroSlideshow images={heroImages} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl space-y-8">
            <FadeIn delay={0.1}>
              <Badge className=" -translate-y-16 bg-primary/25 text-white border-primary/40 backdrop-blur-sm px-6 py-2.5 text-sm md:text-base font-medium tracking-wide shadow-lg shadow-black/10">
                Unity &middot; Collaboration &middot; Harmony
              </Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-[32px] md:text-[52px] lg:text-[63px] font-extrabold uppercase tracking-tight text-white leading-[1.15]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Connecting Dots
                </span>
                <br />
                From Idea
                <br />
                To Execution
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-400 text-white px-8 h-12 text-base shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-400/40 hover:scale-[1.02]"
                  >
                    View Our Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div/>
      </section>

      {/* Who We Are - Company Introduction */}
      <section className="relative overflow-hidden bg-background pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          {/* Heading - top, centered */}
          <FadeIn className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 mb-5 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide"
            >
              Who We Are
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Connecting Every Piece,</span>
              <br />
              <span className="text-primary">Creating Complete Solutions.</span>
            </h2>
          </FadeIn>

          {/* Image - middle, framed like a photograph, no card/background */}
          <FadeIn className="relative mx-auto mb-12 max-w-3xl md:mb-16">
            <Image
              src="/dikw-framework.png"
              alt="Data, Information, Knowledge, Insight, Wisdom framework illustrating how Samanvay connects ideas into meaningful execution"
              width={1702}
              height={566}
              className="w-full h-auto rounded-xl border border-border/60 shadow-xl shadow-foreground/10"
            />
          </FadeIn>

          {/* Story - bottom */}
          <FadeIn className="relative mx-auto max-w-3xl">
           
            <div className="relative space-y-4 text-foreground text-base md:text-lg leading-[1.7] font-normal text-justify">
              <p>
                At Samanvay Solutions, we believe that successful projects are not just about construction, they are about connecting the Right People, Ideas, and Resources at the right time.
              </p>
              <p>
                The word Samanvay means Unity, Collaboration, and Harmony, and that philosophy drives everything we do. We act as a strategic partner to our clients, guiding projects from Concept to Completion by integrating multiple stakeholders, disciplines, and processes under one roof.
              </p>
              <p>
               Our expertise spans land Liaisoning, Architectural and Structural Design, MEP Engineering, Interiors, Project Management, BIM and Cost Management, Infrastructure Development, Government Approvals, and assistance in Raising Funds and Business Matchmaking.
              </p>
              <p>
                We serve Industrial, Institutional, Healthcare, Hospitality, and Residential sectors. Whether supporting SMEs, helping Doctors to establish Hospitals, or facilitating Industrial Land acquisition, we provide complete End-to-End solutions that simplify complexity and accelerate success.
              </p>
            </div>
           <div className="mt-8 md:mt-10 flex items-start gap-5">
            <div className="w-1.5 self-stretch bg-primary rounded-full flex-shrink-0" />
            <p className="text-xl md:text-2xl font-semibold italic text-foreground leading-relaxed">
              &ldquo;Samanvay Solutions &mdash;Connecting the dots between Vision and
              Execution.&rdquo;
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-background pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <FadeIn>
              <Badge
                variant="secondary"
                className="mb-4 bg-primary/10 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide text-primary border-primary/20"
              >
                Our Expertise
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Industries We Serve
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
             <p className="text-lg text-foreground">
                Delivering integrated Engineering, Architectural, and Project Management Solutions across diverse sectors.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {industries.map((industry) => (
              <StaggerItem key={industry.title} className="h-full">
                <IndustryCard industry={industry} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="relative overflow-hidden bg-backgroundpt-10 md:pt-14 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
            <FadeIn>
              <Badge
                variant="secondary"
                className="mb-3 bg-primary/10 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide text-primary border-primary/20"
              >
                Our Trusted Clients
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-3 text-[18px] font-bold text-foreground md:text-[21px] lg:text-[26px]">
                Trusted by Industry Leaders
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[15px] text-foreground">
                Building long-term partnerships across Industrial, Healthcare,
                Institutional, Hospitality, and Infrastructure sectors.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.3}>
          <LogoMarquee logos={clientLogos} />
        </FadeIn>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
              Let us be your trusted partner in turning vision into reality.
              Contact us today to discuss your project requirements.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 h-12 text-base shadow-xl transition-all hover:scale-[1.02]"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-orange -600 hover:bg-orange-50 px-8 h-12 text-base shadow-x1 transition-all hover:scale-[1.02]"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
