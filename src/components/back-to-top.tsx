"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";

const emptySubscribe = () => () => {};

// Returns false on the server and during the initial client render (avoiding a
// hydration mismatch), then true once mounted in the browser.
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // template.tsx animates the page with a Framer Motion transform, which creates
  // a new containing block for any `position: fixed` descendant. Rendering into
  // document.body via a portal escapes that wrapper so this stays truly
  // fixed to the browser viewport instead of drifting with the page transform.
  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-110 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 ${
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-2 scale-90 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>,
    document.body
  );
}
