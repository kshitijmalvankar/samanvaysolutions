"use client";
import {
  Building2,
  GraduationCap,
  Heart,
  Hotel,
  ArrowRight,
  MapPin,
  Ruler,
  IndianRupee,
  CheckCircle2,
  ChevronDown,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion";
import { ExpandableCard } from "@/components/expandable-card";
import { ParallaxImage } from "@/components/parallax-image";
const industrialProjects = [
  
{
  title: "COFICAB",
  category: "Industrial",
  status: "ongoing",
  description: "Ongoing industrial project",
  image: "/projects/coficab.png",
  src: "/projects/coficab.png",
  thumbnailSrc: "/projects/coficab.png",
},

  {
    title: "PMP Drive Systems Co. Ltd.",
    category: "Industrial",
    description:
      "Architectural, Structural, MEP Design, and Engineering Services",
    area: "6.50 Acres",
    image: "/projects/pmp-drives.png",
    src: "/projects/pmp-drives.png",
    thumbnailSrc: "/projects/pmp-drives.png",
  },
  
  {
    title: "Mahindra Hinoday Ltd., Urse Pune",
    category: "Industrial",
    description:
      "Complete Turnkey Services including Engineering Design and Construction",
    area: "45 Acres",
    image: "/projects/mahindra-hinoday.png",
    src: "/projects/mahindra-hinoday.png",
    thumbnailSrc: "/projects/mahindra-hinoday.png",
  },
  
{
  title: "Dynapac",
  category: "Industrial",
  status: "ongoing",
  description: "Ongoing industrial project",
  image: "/projects/dynapac.gif",
  src: "/projects/dynapac.gif",
  thumbnailSrc: "/projects/dynapac.gif",
},

  {
    title: "Daimler Chrysler, Pune",
    category: "Industrial",
    cost: "",
    description:
      "Architectural, Structural, Engineering Project Management Services and MEP Design Services",
    area: "66,000 Sq.m.",
    image: "/projects/daimler-chrysler-pune.jpg",
    src: "/projects/daimler-chrysler-pune.jpg",
    thumbnailSrc: "/projects/daimler-chrysler-pune.jpg",
  },
  {
    title: "Paranjape Autocast Pvt. Ltd.",
    category: "Industrial",
    description:
      "Complete Architectural, Engineering Design for integrated industrial facility",
    area: "",
    image: "/projects/paranjape-autocast.jpg",
    src: "/projects/paranjape-autocast.jpg",
    thumbnailSrc: "/projects/paranjape-autocast.jpg",
  },
  
{
  title: "Paranjape (Satara)",
  category: "Industrial",
  status: "ongoing",
  description: "Ongoing industrial project at Satara",
  image: "/projects/paranjape-autocast.jpg",
  src: "/projects/paranjape-autocast.jpg",
  thumbnailSrc: "/projects/paranjape-autocast.jpg",
},
{
  title: "Paranjape (Shirwal)",
  category: "Industrial",
  status: "ongoing",
  description: "Ongoing industrial project at Shirwal",
  image: "/projects/paranjape-autocast.jpg",
  src: "/projects/paranjape-autocast.jpg",
  thumbnailSrc: "/projects/paranjape-autocast.jpg",
},

  {
    title: "Emcure Pharmaceuticals Ltd",
    category: "Industrial",
    description:
      "Complete Architectural, Engineering Design for integrated industrial facility",
    area: "",
    image: "/projects/emcure-pharmaceuticals.webp",
    src: "/projects/emcure-pharmaceuticals.webp",
    thumbnailSrc: "/projects/emcure-pharmaceuticals.webp",
  },
  {
    title: "QH Talbros Ltd",
    category: "Industrial",
    description:
      "Architectural, Structural, Engineering and MEP Design Services",
    area: "3,400 Sqm",
    image: "/projects/qh-talbros.png",
    src: "/projects/qh-talbros.png",
    thumbnailSrc: "/projects/qh-talbros.png",
  },
  {
    title: "Wave Suspension System India Pvt. Ltd",
    category: "Industrial",
    description: "Design Engineering Services",
    area: "64,000 Sq. Ft.",
    image: "/projects/wave-suspension.jpg",
    src: "/projects/wave-suspension.jpg",
    thumbnailSrc: "/projects/wave-suspension.jpg",
  },
  {
    title: "Zamil-steel",
    category: "Industrial",
    description:
      "Complete Architectural, Engineering Design for integrated industrial facility",
    area: "3,890 Sqm",
    image:
      "/projects/zamil-steel.jpg",
    src: "/projects/zamil-steel.jpg",
    thumbnailSrc: "/projects/zamil-steel.jpg",
  },
  {
    title: "Minda Industries Ltd., Pune",
    category: "Industrial",
    cost: "",
    description:
      "Architectural, Structural, Engineering and MEP Design Services",
    area: "",
    image: "/projects/minda-industries-pune.png",
    src: "/projects/minda-industries-pune.png",
    thumbnailSrc: "/projects/minda-industries-pune.png",
  },
  {
    title: "Sany Heavy Industries",
    category: "Industrial",
    description: "Design Engineering Services",
    area: "",
    image: "/projects/sany-heavy-industries.webp",
    src: "/projects/sany-heavy-industries.webp",
    thumbnailSrc: "/projects/sany-heavy-industries.webp",
  },
  {
    title: "Ognibene India Pvt. Ltd.",
    category: "Industrial",
    description:
      "Architectural, Structural, Engineering Project Management and MEP Design Services",
    area: "",
    image: "/projects/ognibene-india.jpg",
    src: "/projects/ognibene-india.jpg",
    thumbnailSrc: "/projects/ognibene-india.jpg",

  },
  
{
  title: "HODEK",
  category: "Industrial",
  status: "ongoing",
  description: "Ongoing industrial project",
  image: "/projects/hodek.jpg",
  src: "/projects/hodek.jpg",
  thumbnailSrc: "/projects/hodek.jpg",
},



  {
    title: "Garware Bestretch Ltd.",
    category: "Industrial",
    description: "Architectural, Engineering Design and Construction",
    area: "",
    image: "/projects/garware-bestretch.png",
    src: "/projects/garware-bestretch.png",
    thumbnailSrc: "/projects/garware-bestretch.png",
  },
  {
    title: "Bosch Chassis India Ltd.",
    category: "Industrial",
    description: "Architectural, Engineering Design and Construction",
    area: "",
    image: "/projects/bosch-chassis-india.jpg",
    src: "/projects/bosch-chassis-india.jpg",
    thumbnailSrc: "/projects/bosch-chassis-india.jpg",
  },
  {
    title: "Mahafeed Specialty Fertilizers",
    category: "Industrial",
    description: "Complete Engineering Design and Construction",
    image: "/projects/mahafeed-fertilizers.webp",
    src: "/projects/mahafeed-fertilizers.webp",
    thumbnailSrc: "/projects/mahafeed-fertilizers.webp",
  },
  {
    title: "Sandvik Asia Pvt. Ltd., Chiplun",
    category: "Industrial",
    description: "Complete Engineering Design and Construction",
    area: "",
    image: "/projects/sandvik-asia-chiplun.jpg",
    src: "/projects/sandvik-asia-chiplun.jpg",
    thumbnailSrc: "/projects/sandvik-asia-chiplun.jpg",
  },
  {
    title: "Prasad Medi-Tech",
    category: "Industrial",
    description:
      "Complete Architectural, Civil and Utilities Engineering Services and Construction",
    area: "",
    image: "/projects/prasad-medi-tech.png",
    src: "/projects/prasad-medi-tech.png",
    thumbnailSrc: "/projects/prasad-medi-tech.png",
  },
  {
    title: "Fukoku India Pvt. Ltd.",
    category: "Industrial",
    description: "Architectural, Engineering Design and Construction",
    area: "",
    image: "/projects/fukoku-india.png",
    src: "/projects/fukoku-india.png",
    thumbnailSrc: "/projects/fukoku-india.png",
  },
];
const institutionalProjects = [
  {
    title: "IIT Hyderabad — Boys & Girls Hostel (Phase I)",
    category: "Institutional",
    description:
      "10 blocks, 1920 rooms, 6 floors — GRIHA Certified Green Building",
    area: "6,13,548 Sq.Ft.",
    highlight: "GRIHA Certified",
    image: "/projects/iit-hyderabad-hostel.jpeg",
    src: "/projects/iit-hyderabad-hostel.jpeg",
    thumbnailSrc: "/projects/iit-hyderabad-hostel.jpeg",
  },
  {
    title: "IIT Hyderabad — International Guest House",
    category: "Institutional",
    description: "200 rooms, complete architectural and interior design",
    area: "2,90,628 Sq.Ft.",
    highlight: "GRIHA Certified",
    image: "/projects/iit-hyderabad-guest-house.jpg",
    src: "/projects/iit-hyderabad-guest-house.jpg",
  },
  {
    title: "IIT Hyderabad — Sports Complex",
    category: "Institutional",
    description: "Capacity 2,000–3,000, full architectural and structural design",
    area: "2,69,100 Sq.Ft.",
    highlight: "GRIHA Certified",
    image: "/projects/iit-hyderabad-sports-complex.jpg",
    src: "/projects/iit-hyderabad-sports-complex.jpg",
  },
  {
    title: "IIT Hyderabad — Research Center",
    category: "Institutional",
    description: "For Nihon Sekkei Inc. — Research facility",
    area: "1,20,518 Sq.Ft.",
    highlight: "GRIHA Certified",
    image: "/projects/iit-hyderabad-research-center.jpg",
    src: "/projects/iit-hyderabad-research-center.jpg",
  },
  {
    title: "IIT Hyderabad — Convention Centre",
    category: "Institutional",
    description: "For Nihon Sekkei Inc. — Convention & conference facility",
    area: "1,93,344 Sq.Ft.",
    highlight: "GRIHA Certified",
    image: "/projects/iit-hyderabad-convention-centre.jpg",
    src: "/projects/iit-hyderabad-convention-centre.jpg",
  },
  {
    title: "IIT Hyderabad — Dining Hall",
    category: "Institutional",
    description: "2 floors, complete architectural and engineering design",
    area: "37,674 Sq.Ft.",
    highlight: "GRIHA Certified",
    image: "/projects/iit-hyderabad-dining-hall.jpg",
    src: "/projects/iit-hyderabad-dining-hall.jpg",
  },
  {
    title: "IIT Kanpur — Research Complex",
    category: "Institutional",
    description:
      "1 Basement + 5 Floors including conference, library, canteen, and brand space",
    area: "29,210 Sq.m.",
    highlight: "Proposal",
    image: "/projects/iit-kanpur.jpg",
    src: "/projects/iit-kanpur.jpg",
  },
  {
    title: "Residence Facility at Nava Raipur",
    category: "Institutional",
    description: "Residential facility proposal with complete site planning at Atal Nagar, Chhattisgarh",
    area: "",
    highlight: "Proposal",
    image: "/projects/residence-nava-raipur.jpg",
    src: "/projects/residence-nava-raipur.jpg",
  },
];
const healthcareProjects = [
  {
    title: "Royal Care Super Speciality Hospital",
    category: "Healthcare",
    location: "Neelambur, Tamil Nadu",
    description:
      "210-bed tertiary care hospital (Phase I) expandable to 750 beds. Completed in 14 months. IGBC certified. Features 9 OTs, radiology, cardiology, neurology, ICU, dialysis, lab, blood bank, and 24×7 pharmacy.",
    area: "Phase I: 20,000 sq.m. | Phase II: 16,000 sq.m.",
    highlight: "IGBC Certified",
    image: "/projects/royal-care-super-speciality-hospital.jpg",
    src: "/projects/royal-care-super-speciality-hospital.jpg",
  },
  {
  title: "Aranyaka",
  category: "Healthcare",
  status: "ongoing",
  description: "Ongoing project at Aranyaka, Bhimashankar",
  image: "/projects/aranyaka.jpeg",
  src: "/projects/aranyaka.jpeg",
  thumbnailSrc: "/projects/aranyaka.jpeg",
},
  {
    title: "Royal Care , Oncology Building",
    category: "Healthcare",
    location: "Neelambur, Tamil Nadu",
    description:
      "100-bed oncology facility with 9 OTs, PET CT, chemo ward, 38 deluxe rooms, and 24×7 pharmacy.",
    area: "5,800 Sq.m.",
    highlight: "Phase II",
    image: "/projects/royal-care-oncology-building.png",
    src: "/projects/royal-care-oncology-building.png",
  },
  {
  title: "GEMS Hospital",
  category: "Hospitality",
  status: "ongoing",
  description: "Ongoing hospital project",
  image: "/projects/gems-hospital.png",
  src: "/projects/gems-hospital.png",
  thumbnailSrc: "/projects/gems-hospital.png",
},
  {
    title: "Royal Care City Hospital",
    category: "Healthcare",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Conversion of nursing home into a 40-bed super speciality hospital. Completed in just 3 months with OPD, radiology, cardiology, neurology, 3 OTs, ICU, lab, and pharmacy.",
    area: "2,136 Sq.m.",
    highlight: "3-Month Delivery",
    image:
      "/projects/royal-care-super-speciality-hospital.jpg",
    src: "/projects/royal-care-super-speciality-hospital.jpg",
  },
 
  {
    title: "Medi City Project",
    category: "Healthcare",
    location: "Shibsagar, Assam",
    description:
      "Proposed 45-acre medical city including medical college, nursing college, hospital, residential cluster, and sports complex.",
    area: "45 Acres",
    highlight: "Proposal",
    image: "/projects/medi-city-project.jpg",
    src: "/projects/medi-city-project.jpg",
  },
  {
  title: "Deenanath Mangeshkar Hospital and Research Center",
  category: "Hospitality",
  status: "ongoing",
  description: "Inhouse planning member Architect ",
  image: "/projects/deenanath-mangeshkar-hospital.jpg",
  src: "/projects/deenanath-mangeshkar-hospital.jpg",
  thumbnailSrc: "/projects/deenanath-mangeshkar-hospital.jpg",
},
];
const hospitalityProjects = [
  {
    title: "Resort at Bhasgaon, Kamshet Pune",
    category: "Hospitality",
    description:
      "A serene resort featuring viewing pavilion offering framed panoramic views of the lake and surrounding hills.",
    services: "Architectural Design | Engineering Design",
    image: "/projects/resort-at-bhasgaon.jpg",
    src: "/projects/resort-at-bhasgaon.jpg",
  },
   {
  title: "Salasar",
  category: "Hospitality",
  status: "ongoing",
  description: "Ongoing project at Salasar",
  image: "/projects/salasar.jpeg",
  src: "/projects/salasar.jpeg",
  thumbnailSrc: "/projects/salasar.jpeg",
},
  {
    title: "Kamshet Highland ,Uskan Lake",
    category: "Hospitality",
    description:
      "Modern resort with swimming pool, luxurious ambiance, warm minimalist interiors emphasizing comfort and natural connection.",
    services: "Architectural Design | Engineering Design",
    image: "/projects/kamshet-highland-uskan-lake.jpg",
    src: "/projects/kamshet-highland-uskan-lake.jpg",
  },
  
{
  title: "SIDBI",
  category: "Hospitality",
  status: "ongoing",
  description: "Ongoing project for SIDBI",
  image: "/projects/sidbi.jpg",
  src: "/projects/sidbi.jpg",
  thumbnailSrc: "/projects/sidbi.jpg",
},

  {
    title: "Trikaya Retreat, Govitri, Kamshet",
    category: "Hospitality",
    description:
      "Hilltop residence with sloping red-tiled roof, stone masonry, and climbing vegetation creating organic connection with nature.",
    services: "Architectural Design | Engineering Design",
    image: "/projects/trikaya-retreat-kamshet.jpg",
    src: "/projects/trikaya-retreat-kamshet.jpg",
  },
  {
    title: "Farm House, Panchgani",
    category: "Hospitality",
    description:
      "Ongoing farmhouse project with comprehensive architectural and engineering services blending with the scenic surroundings.",
    services: "Architectural Design | Engineering Design",
    image: "/projects/farm-house-panchgani.jpg",
    src: "/projects/farm-house-panchgani.jpg",
  },
];
type ProjectStatusLabel = "ongoing" | "completed" | "proposal";
type StatusFilter = "all" | "ongoing" | "completed";
type Category = "all" | "industrial" | "institutional" | "healthcare" | "hospitality";

// Projects marked as proposals stay visible in All Projects, but not in Completed Projects.
// There are currently no ongoing projects; add status: "ongoing" to a project when needed.
const getProjectStatus = (project: any): ProjectStatusLabel => {
  if (project.status === "ongoing") return "ongoing";
  if (String(project.highlight ?? "").toLowerCase() === "proposal") return "proposal";
  return "completed";
};

const allProjects = [
  ...industrialProjects,
  ...institutionalProjects,
  ...healthcareProjects,
  ...hospitalityProjects,
].map((project) => ({
  ...project,
  status: getProjectStatus(project),
}));

const categories: { id: Category; icon: typeof Building2; label: string }[] = [
  { id: "all", icon: Building2, label: "All Projects" },
  { id: "industrial", icon: Building2, label: "Industrial" },
  { id: "institutional", icon: GraduationCap, label: "Institutional" },
  { id: "healthcare", icon: Heart, label: "Healthcare" },
  { id: "hospitality", icon: Hotel, label: "Hospitality & Housings" },
];

const statusOptions: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "ongoing", label: "Ongoing Projects" },
  { id: "completed", label: "Previous Experiences" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("all");
  const [openStatusMenu, setOpenStatusMenu] = useState<Category | null>(null);
  const statusFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (statusFilterRef.current && !statusFilterRef.current.contains(event.target as Node)) {
        setOpenStatusMenu(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const filteredProjects = useMemo(() => {
    let projects = activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category.toLowerCase() === activeCategory);

    if (activeStatus !== "all") {
      projects = projects.filter((project) => project.status === activeStatus);
    }

    return projects.map((project) => ({
      ...project,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(project as any).cost && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <IndianRupee className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Estimated Cost</p>
                  <p className="font-semibold text-foreground">INR {(project as any).cost}</p>
                </div>
              </div>
            )}
            {(project as any).area && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Ruler className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Total Area</p>
                  <p className="font-semibold text-foreground">{(project as any).area}</p>
                </div>
              </div>
            )}
            {(project as any).location && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{(project as any).location}</p>
                </div>
              </div>
            )}
            {(project as any).highlight && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Highlight</p>
                  <p className="font-semibold text-foreground">{(project as any).highlight}</p>
                </div>
              </div>
            )}
            {(project as any).services && (
              <div className="sm:col-span-2">
                <h4 className="text-sm font-semibold mb-2">Services Provided:</h4>
                <div className="flex flex-wrap gap-2">
                  {(project as any).services.split("|").map((s: string, i: number) => (
                    <Badge key={i} variant="secondary" className="text-xs">{s.trim()}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
      ctaText: "Enquire Now",
      ctaLink: "/contact",
    }));
  }, [activeCategory, activeStatus]);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=800&fit=crop"
            alt="Projects"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <Badge className="-translate-y-10 bg-orange-600/20 text-orange-300 border-orange-500/30 backdrop-blur-sm mb-4 px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide">
                Our Portfolio
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Projects That Define{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Excellence
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore our diverse portfolio spanning Industrial Facilities,
                Educational Campuses, Healthcare Institutions, and Luxury
                Hospitality projects across India.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="py-6 bg-background/95 border-b sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={statusFilterRef} className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const isMenuOpen = openStatusMenu === cat.id;

              if (cat.id === "all") {
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveStatus("all");
                      setOpenStatusMenu(null);
                    }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-card text-foreground border border-border hover:border-primary/50 hover:text-primary hover:shadow-md"
                    }`}
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </button>
                );
              }

              return (
                <div key={cat.id} className="relative">
                  <div
                    className={`inline-flex items-center rounded-full border text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setActiveStatus("all");
                        setOpenStatusMenu(null);
                      }}
                      className="inline-flex items-center gap-2 rounded-l-full py-2.5 pl-5 pr-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <cat.icon className="h-4 w-4" />
                      {cat.label}
                    </button>
                    <button
                      type="button"
                      aria-label={`Filter ${cat.label} projects by status`}
                      aria-haspopup="menu"
                      aria-expanded={isMenuOpen}
                      onClick={() => { 
                        
                        setOpenStatusMenu((current) => current === cat.id ? null : cat.id);
                      }}
                      className="inline-flex items-center justify-center rounded-r-full py-2.5 pl-1 pr-4 transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {isMenuOpen && (
                    <div
                      role="menu"
                      aria-label={`${cat.label} project status`}
                      className="absolute left-0 top-full z-[60] mt-2 w-[240px] min-w-[240px] rounded-xl border border-border bg-background p-1.5 shadow-xl"

                    >
                      {statusOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setActiveCategory(cat.id);
                            setActiveStatus(option.id);
                            setOpenStatusMenu(null);
                          }}
                          className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left whitespace-nowrap text-sm transition-colors ${

                            activeStatus === option.id
                              ? "bg-primary/10 font-semibold text-primary"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                            {activeStatus === option.id && <Check className="h-4 w-4" />}
                          </span>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Projects Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProjects.length > 0 ? (
            <ExpandableCard items={filteredProjects} />
          ) : (
            <div className="mx-auto max-w-xl py-16 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Hotel className="h-6 w-6" />
              </div>
              <h2 className="mb-2 text-2xl font-semibold text-foreground">
                {activeStatus === "ongoing" ? "No Ongoing Projects Yet" : "No Projects Found"}
              </h2>
              <p className="text-foreground/70">
                {activeStatus === "ongoing"
                  ? "There are currently no ongoing projects to display. Please check back for updates."
                  : "No projects match this selection right now."}
              </p>
            </div>
          )}
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop"
            alt="Construction"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700/95 to-orange-600/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
              We&apos;d love to hear about your project. Let our team of experts
              help you bring your vision to Life.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-muted/20 px-8 h-12 text-base shadow-xl transition-all hover:scale-[1.02]"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
