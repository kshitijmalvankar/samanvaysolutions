    "use client";

    import React, { useEffect, useId, useRef, useState } from "react";
    import { AnimatePresence, motion } from "framer-motion";
    import { useOutsideClick } from "@/hooks/use-outside-click";
    import { X } from "lucide-react";
    import { cn } from "@/lib/utils";

    interface ExpandableCardProps {
        items: {
            title: string;
            description: string;
            content: React.ReactNode;
            ctaText?: string;
            ctaLink?: string;
            src?: string;
            thumbnailSrc?: string;
            icon?: React.ElementType;
            boldDescription?: boolean;
        }[];
    }

    import { createPortal } from "react-dom";

    export function ExpandableCard({ items }: ExpandableCardProps) {
        const [active, setActive] = useState<(typeof items)[number] | boolean | null>(
            null
        );
        const ref = useRef<HTMLDivElement>(null);
        const id = useId();
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        useEffect(() => {
            function onKeyDown(event: KeyboardEvent) {
                if (event.key === "Escape") {
                    setActive(false);
                }
            }

            if (active && typeof active === "object") {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }

            window.addEventListener("keydown", onKeyDown);
            return () => window.removeEventListener("keydown", onKeyDown);
        }, [active]);

        useOutsideClick(ref, () => setActive(null));

        return (
            <>
                {mounted && createPortal(
                    <AnimatePresence>
                        {active && typeof active === "object" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 dark:bg-black/60 h-full w-full z-10"
                            />
                        )}
                    </AnimatePresence>,
                    document.body
                )}
                {mounted && createPortal(
                    <AnimatePresence>
                        {active && typeof active === "object" ? (
                            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-10"
                                    onClick={() => setActive(null)}
                                >
                                    <X className="h-4 w-4 text-black" />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[500px] h-[85vh] flex flex-col bg-white dark:bg-card dark:border-border dark:border sm:rounded-3xl overflow-hidden"
                                >
                                    {/* Fixed image header - does not scroll */}
                                    <motion.div
                                        layoutId={`image-${active.title}-${id}`}
                                        className="flex-shrink-0"
                                    >
                                        {active.src ? (
                                            <img
                                                src={active.src}
                                                alt={active.title}
                                                className={
                                                    active.thumbnailSrc
                                                        ? "w-full h-48 sm:h-56 shrink-0 bg-white p-4 object-contain"
                                                        : "w-full h-80 shrink-0 sm:rounded-t-lg object-cover object-center"
                                            }
                                        />
                                        ) : active.icon ? (
                                            <div className="w-full h-40 bg-muted flex items-center justify-center sm:rounded-tr-lg sm:rounded-tl-lg">
                                                <active.icon className="h-16 w-16 text-primary" />
                                            </div>
                                        ) : (
                                            <div className="w-full h-40 bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center sm:rounded-tr-lg sm:rounded-tl-lg">
                                                <span className="text-6xl">✨</span>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Everything below the image is the single scroll region, at every breakpoint */}
                                    <div
                                        className="flex-1 min-h-0 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                        onWheel={(e) => {
                                            e.currentTarget.scrollTop += e.deltaY;
                                        }}
                                    >
                                        <div className="flex justify-between items-start p-4">
                                            <div>
                                                <motion.h3
                                                    layoutId={`title-${active.title}-${id}`}
                                                    className="font-bold text-black dark:text-white text-base"
                                                >
                                                    {active.title}
                                                </motion.h3>
                                                <motion.p
                                                    layoutId={`description-${active.title}-${id}`}
                                                    className={cn(
                                                        "text-black dark:text-white text-base",
                                                        active.boldDescription && "text-black dark:text-white"
                                                    )}
                                                >
                                                    {active.description}
                                                </motion.p>
                                            </div>
                                        </div>
                                        <div className="pt-1 relative px-4 pb-8">
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-black dark:text-white text-xs md:text-sm lg:text-base flex flex-col items-start gap-4"
                                            >
                                                {active.content}
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>,
                    document.body
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    {items.map((item, index) => (
                        <motion.div
                            layoutId={`card-${item.title}-${id}`}
                            key={`card-${item.title}-${id}`}
                            onClick={() => setActive(item)}
                            className="p-4 flex flex-col justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors"
                        >
                            <div className="flex gap-4 flex-col items-center">
                            <motion.div
                            layoutId={`image-${item.title}-${id}`}
                            className="h-40 w-40 rounded-lg overflow-hidden"
                                >
                                    {item.thumbnailSrc || item.src ? (
                                        <img
                                            src={item.thumbnailSrc ?? item.src}
                                            alt={item.title}
                                            className={
                                                item.thumbnailSrc
                                                ? "h-full w-full bg-white p-3 object-contain"
                                                : "h-full w-full object-cover object-center"
    }
                                        />
                                    ) : item.icon ? (
                                        <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center">
                                            <item.icon className="h-8 w-8 text-primary" />
                                        </div>
                                    ) : (
                                        <div className="h-40 w-40 rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                                            <span className="text-4xl">✨</span>
                                        </div>
                                    )}
                                </motion.div>
                                <div className="text-center">
                                    <motion.h3
                                        layoutId={`title-${item.title}-${id}`}
                                        className="font-medium text-neutral-800 dark:text-neutral-200"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${item.title}-${id}`}
                                        className={cn(
                                            "text-black dark:text-white text-sm mt-2 line-clamp-3",
                                            item.boldDescription && "font-semibold black dark:text-white"
                                        )}
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </>
        );
    }

    export const CloseIcon = () => {
        return (
            <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-black"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </motion.svg>
        );  
    };