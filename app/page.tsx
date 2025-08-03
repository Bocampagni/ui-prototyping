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
import { Footerdemo } from "@/components/ui/footer-section";
import { CTASection } from "@/components/blocks/cta-with-rectangle"
import { Component } from "@/components/ui/orb";

const Orb = () => {
  return (
  
    <div className="w-screen h-screen bg-black overflow-hidden"> 

      <Component
        hoverIntensity={0.1}    
        rotateOnHover={true}
        hue={240}               
        forceHoverState={false}
      />
    </div>
  );
};

function CTADemo() {
  return (
    <CTASection
      badge={{
        text: "Get started"
      }}
      title="Start building with Guardrail"
      description="Get started with Guardrail and build your security workflow in minutes."
      action={{
        text: "Get Started",
        href: "/docs",
        variant: "default"
      }}
    />
  )
}

function Footer() {
  return (
    <div className="block">
      <Footerdemo />
    </div>
  );
}

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
      <Orb />
      <div className="h-screen w-screen flex flex-col justify-center items-center relative">
        <LavaLamp />
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap">
          Build AI You Can Trust.
        </h1>
        <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed">
          Guardrail ensures your GenAI system is predictable, aligned, and compliant — without sacrificing performance.
        </p>
      </div>
      <CTADemo />
      <div className="flex justify-center items-center mt-10">
        <OrbitingCirclesDemo />
      </div>
      <div className="flex justify-center items-center mt-10">
        <BentoGridDemo />
      </div>
      <DemoOne />
      <SignIn />
      <Footer />
    </>
  );
}
