"use client";
import React from "react";
import { Header } from "@/components/ui/navbar";
import { BentoGridDemo } from "@/bento2";
import Pricing from "@/components/ui/pricing-component";
import { Footerdemo } from "@/components/ui/footer-section";
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup"
import { Features } from "@/components/blocks/features-8"
import IntegrationsSection from "@/integration";
import { LoginForm } from '@/components/login-form'
import GradientHero from "@/hero";
import Page from "@/dash";

function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}

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
      <GradientHero />
      <IntegrationsSection />
      <div className="flex justify-center items-center mt-10">
        <BentoGridDemo />
      </div>
      <Page /> {/* Added Page component here */}
      <Demo />
      <DemoOne />
      <LoginPage />
      <Footer />
    </>
  );
}
