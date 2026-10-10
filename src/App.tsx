import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Plants from "@/components/Plants";
import Services from "@/components/Services";
import GardenArt from "@/components/GardenArt";
import WhyUs from "@/components/WhyUs";
import Transformation from "@/components/Transformation";
import Guides from "@/components/Guides";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { initMotion, refreshReveals } from "@/lib/motion";

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    // Wait for the first paint so above-the-fold elements animate in
    // rather than appearing already-revealed.
    const raf = requestAnimationFrame(() => {
      cleanup = initMotion(setActive);
    });
    // Catch anything that settles a tick later (web fonts / late layout).
    const t = window.setTimeout(refreshReveals, 450);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <a className="sr-only-focusable" href="#main">
        Skip to content
      </a>

      <div className="scroll-progress" aria-hidden="true" />

      <Header active={active} />

      <main id="main">
        <Hero />
        <Intro />
        <Plants />
        <Services />
        <GardenArt />
        <WhyUs />
        <Transformation />
        <Guides />
        <Testimonials />
        <Visit />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
