import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialsCards from "@/components/TestimonialsCards";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] 
    "
    >
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs/>
      <TestimonialsCards />
    </main>
  );
}
