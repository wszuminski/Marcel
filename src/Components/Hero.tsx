import { About } from "./About";
import { Contact } from "./Contact";
import Footer from "./Footer";
import { GallerySection } from "./Gallery";
import Navbar from "./Navbar";
import ParallaxDemo from "./ParallaxHero";
import { Pricing } from "./Pricing";
import ReelsSection from "./Reels";
import Testimonials from "./Testimonials";
import { MetamorphosisSection } from "./Transformations";
import WhyMeSectionDemo from "./ui/whyme";
// import { VSLSection } from "./VideoSection";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <ParallaxDemo />
      <ReelsSection />
      {/* <VSLSection /> */}

      <About />
      <WhyMeSectionDemo />
      <GallerySection />
      <MetamorphosisSection />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
