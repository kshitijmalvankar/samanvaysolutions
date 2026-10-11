"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    height?: string; // e.g., "120%"
}

export function ParallaxImage({
    src,
    alt,
    className,
    height = "120%",
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <div
            ref={ref}
            className={cn("relative overflow-hidden w-full h-full", className)}
        >
            <motion.div
                style={{ y, height }}
                className="absolute top-0 left-0 w-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
        </div>
    );
}
