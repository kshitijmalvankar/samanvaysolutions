import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Industry {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          loading="lazy"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-primary">
          {industry.title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground text-justify">
          {industry.description}
        </p>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="group/btn w-full border-primary/30 text-primary transition-all hover:bg-primary/5"
        >
          <Link href={industry.href}>
            Learn More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
