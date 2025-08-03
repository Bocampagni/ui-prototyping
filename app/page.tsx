"use client";
import Image from "next/image";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles"
import { LavaLamp } from "@/components/ui/fluid-blob";
import { Header } from "@/components/ui/navbar";
import { GradientButton } from "@/components/ui/gradient-button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import SignIn from "@/app/something";
import { Pricing1 } from "@/components/ui/pricing-1";
import { OrbitingCirclesDemo } from "./bento";
import { BentoGridDemo } from "@/bento2";
import { WaitlistForm } from "@/components/ui/waitlist-form-1";

import Pricing from "@/components/ui/pricing-component";

function DemoOne() {
  return <Pricing />;
}


const DemoTwo = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <WaitlistForm />
    </div>
  );
};


export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-5xl flex justify-center">
        <Header />
      </div>
      <div className="h-screen w-screen flex flex-col justify-center items-center relative">
        <LavaLamp />
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap">
          Build AI You Can Trust.
        </h1>
        <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed">
          Guardrail ensures your GenAI system is predictable, aligned, and compliant — without sacrificing performance.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <OrbitingCirclesDemo />
      </div>
      <div className="flex justify-center items-center mt-10">
        <BentoGridDemo />
      </div>
      <DemoOne />
      <SignIn />
    </>
  );
}
