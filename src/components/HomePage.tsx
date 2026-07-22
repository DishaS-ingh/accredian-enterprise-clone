"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Edge from "@/components/sections/Edge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import CatFramework from "@/components/sections/CatFramework";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Clients from "@/components/sections/Clients";
import EnquiryModal from "@/components/sections/EnquiryModal";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar openModal={() => setOpen(true)} />

      <Hero openModal={() => setOpen(true)} />

      <Stats />
      <Clients />
      <Edge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CatFramework />
      <HowItWorks />

      <FAQ openModal={() => setOpen(true)} />

      <Testimonials />

      <Contact openModal={() => setOpen(true)} />

      <Footer />

      <EnquiryModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}