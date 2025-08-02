import { About } from "./About";
import { Contact } from "./Contact";
import { GallerySection } from "./Gallery";
import { AuroraBackgroundDemo } from "./HeroAurora";
import Navbar from "./Navbar";
import { Pricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { MetamorphosisSection } from "./Transformations";
import WhyMeSectionDemo from "./ui/whyme";
import { TrainingVideosSection } from "./VideoSection";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with proper spacing for fixed navbar */}
      <div className="relative">
        <AuroraBackgroundDemo />
      </div>

      {/* Other sections */}
      <About />
      <WhyMeSectionDemo />
      <GallerySection />
      <TrainingVideosSection />
      <MetamorphosisSection />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
}
