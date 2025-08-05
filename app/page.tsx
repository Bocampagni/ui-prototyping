"use client";
import React from "react";
import { Header } from "@/components/ui/navbar";
import { BentoGridDemo } from "@/bento2";
import Pricing from "@/components/ui/pricing-component";
import { Footerdemo } from "@/components/ui/footer-section";
import { CTASection } from "@/components/blocks/cta-with-rectangle"

import { HeroWithMockup } from "@/components/blocks/hero-with-mockup"

import { Features } from "@/components/blocks/features-8"
import IntegrationsSection from "@/integration";

export const Demo = () => {
    return <Features />
}

export function HeroDemo() {
  return (
    <HeroWithMockup
      title="Build AI-powered apps you can trust"
      description="Guardrail is a platform that helps you build AI applications that are predictable, aligned, and compliant, without sacrificing performance."
      primaryCta={{
        text: "Start Building",
        href: "/signup",
      }}
      secondaryCta={{
        text: "View on GitHub",
        href: "https://github.com/bocampagni/guardrail",
      }}
      mockupImage={{
        alt: "AI Platform Dashboard",
        width: 1248,
        height: 765,
        src: "https://www.launchuicomponents.com/app-light.png"
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

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-5xl flex justify-center">
        <Header />
      </div>
      <HeroDemo />
      <IntegrationsSection />
      <div className="flex justify-center items-center mt-10">
        <BentoGridDemo />
      </div>
      <Demo />
      <DemoOne />
      <Footer />
    </>
  );
}
