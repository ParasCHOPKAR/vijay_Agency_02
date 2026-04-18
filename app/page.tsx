"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import AboutHome from "@/components/AboutHome";
import VideoSection from "@/components/VideoSection"; // 🔥 Imported VideoSection
import ProductOverview from "@/components/ProductOverview";
import WhyChoose from "@/components/WhyChoose";
import WhySpecial from "@/components/WhySpecial";
import ProjectGallery from "@/components/ProjectGallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Hero />
      <AboutHome />
      <VideoSection /> 
      <ProductOverview />
      <WhyChoose />
      <WhySpecial />
      <ProjectGallery />
      <Testimonials />
    </main>
  );
}