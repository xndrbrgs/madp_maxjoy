"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Parallax from "@/components/Parallax/Parallax";
import Growth from "@/components/Growth/Growth";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="max-w-[1440px] mx-auto">
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Parallax /> */}
      <Growth />
    </main>
  );
}
