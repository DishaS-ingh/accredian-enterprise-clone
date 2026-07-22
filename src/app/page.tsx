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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <Edge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CatFramework />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}