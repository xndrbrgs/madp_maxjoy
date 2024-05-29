"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Parallax from "@/components/Parallax/Parallax";
import Growth from "@/components/Growth/Growth";
import SVGPath from "@/components/Growth/SVGPath";
import ImgScale from "@/components/FlamingJune/ImgScale";
import Figure from "@/components/FlamingJune/Figure";
import Pose from "@/components/FlamingJune/Pose";
import MuseumPicture from "@/components/MuseumPicture/MuseumPicture";
import Collections from "@/components/Collections/Collections";

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
    <main>
      <Header />
      <Hero />
      {/* <Parallax /> */}
      <Growth />
      {/* <ImgScale /> */}
      <Figure />
      <MuseumPicture />
      <Collections />
    </main>
  );
}
