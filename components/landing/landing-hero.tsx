"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-primary">
          <TypewriterComponent
            options={{
              strings: [
                "Producers.",
                "Actors.",
                "Recruters."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-muted-foreground">
        Select best fitted actor for your file role using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/explore" : "/sign-up"}>
          <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start For Free
          </Button>
        </Link>
      </div>
      <div className="text-muted-foreground text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};