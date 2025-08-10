//@ts-nocheck
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector(
      "[data-parallax-layers]"
    );

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`
          ),
          {
            yPercent: layerObj.yPercent,
            ease: "none",
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Parallax Section */}
      <section ref={parallaxRef} className="relative h-[150vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div data-parallax-layers className="relative h-full w-full">
            {/* Background layers */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
              loading="eager"
              data-parallax-layer="1"
              alt="Background layer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              loading="eager"
              data-parallax-layer="2"
              alt="Middle layer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Title */}
            <div
              data-parallax-layer="3"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Trener personalny
                  </div>
                </div>

                {/* Name */}
                <h2 className="text-5xl md:text-9xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Marcel Kaczmarski
                  </span>
                </h2>
              </div>
            </div>

            {/* Foreground layer */}
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              data-parallax-layer="4"
              alt="Foreground layer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
