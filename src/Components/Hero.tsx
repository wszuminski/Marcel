import { About } from "./About";
import { AuroraBackgroundDemo } from "./HeroAurora";
import Navbar from "./Navbar";
import WhyMeSectionDemo from "./ui/whyme";

export function Hero() {
  return (
    <div>
      <Navbar />
      <AuroraBackgroundDemo />
      <About />
      <WhyMeSectionDemo />
    </div>
  );
}
