import { Dumbbell, Trophy, Heart, Users, Target } from "lucide-react";
import { GlowingEffect } from "./ui/about";
import { cn } from "../lib/utils";

export function About() {
  return (
    <section className="py-16 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Your Trainer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming lives through personalized fitness journeys for over a
            decade
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Trophy className="h-4 w-4" />}
            title="Certified Excellence"
            description="NASM Certified Personal Trainer with specializations in strength training and sports nutrition."
            image="https://images.unsplash.com/photo-1584464457089-48184c4e2a6f?w=400&h=300&fit=crop"
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Users className="h-4 w-4" />}
            title="500+ Success Stories"
            description="Helped hundreds of clients achieve their fitness goals, from weight loss to competitive athletics."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Dumbbell className="h-4 w-4" />}
            title="Personalized Programs"
            description="Every journey is unique. I create custom workout plans tailored to your goals, fitness level, and lifestyle."
            stats={[
              "10+ Years Experience",
              "Custom Meal Plans",
              "24/7 Support",
            ]}
            featured={true}
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Heart className="h-4 w-4" />}
            title="Holistic Approach"
            description="Fitness is more than just exercise. I focus on mental wellness, nutrition, and sustainable lifestyle changes."
            image="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Target className="h-4 w-4" />}
            title="Your Goals, My Mission"
            description="Whether you're starting your fitness journey or pushing to the next level, I'm here to guide and motivate you every step of the way."
            cta={true}
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  image?: string;
  stats?: string[];
  featured?: boolean;
  cta?: boolean;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  image,
  stats,
  featured,
}: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div
          className={cn(
            "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6",
            featured && "bg-gradient-to-br from-purple-900/20 to-blue-900/20"
          )}
        >
          {image && (
            <div className="absolute inset-0 opacity-10">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>

            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>

              {stats && (
                <div className="pt-4 space-y-2">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-sm text-gray-300">{stat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
