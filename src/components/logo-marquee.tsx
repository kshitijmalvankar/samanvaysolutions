"use client";

import Image from "next/image";

export interface MarqueeLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function LogoChip({ logo }: { logo: MarqueeLogo }) {
  return (
    <div className="group/logo flex h-[90px] md:h-[100px] w-[180px] md:w-[200px] flex-shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card/70 p-[16px] md:p-[18px] shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-full w-full">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="200px"
          className="object-contain transition-all duration-300 group-hover/logo:brightness-110"
        />
      </div>
    </div>
  );
}

function MarqueeRow({
  logos,
  direction,
  duration,
  className,
}: {
  logos: MarqueeLogo[];
  direction: "left" | "right";
  duration: number;
  className?: string;
}) {
  // Duplicate the track so the loop restarts with no visible jump.
  const track = [...logos, ...logos];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`marquee-row relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className || ""}`}
    >
      <div
        className={`flex w-max items-center gap-5 md:gap-6 ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((logo, i) => (
          <div key={`${logo.alt}-${i}`} aria-hidden={i >= logos.length}>
            <LogoChip logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({ logos }: { logos: MarqueeLogo[] }) {
  const mid = Math.ceil(logos.length / 2);
  const rowA = logos.slice(0, mid);
  const rowB = logos.slice(mid);

  return (
    <div>
      {/* Real list for screen readers; the animated rows below are decorative duplicates */}
      <ul className="sr-only">
        {logos.map((logo) => (
          <li key={logo.alt}>{logo.alt}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="space-y-4 md:space-y-6">
        <MarqueeRow logos={rowA} direction="right" duration={42} />
        <MarqueeRow
          logos={rowB}
          direction="left"
          duration={48}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
