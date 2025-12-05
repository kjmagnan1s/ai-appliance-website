import React from 'react';
import heroBanner from "@/assets/hero-banner.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import { Sparkles } from 'lucide-react';

const Hero = () => {
  // Image of a clean row of washing machines/appliances, duplicated for seamless loop
  const bgImage = "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">

      {/* Panning Backdrop Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
         <div className="flex w-[200%] h-full animate-pan-image">
            <div className="w-1/2 h-full relative">
                <img
                  src={bgImage}
                  alt="Appliance Sales Floor"
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="w-1/2 h-full relative">
                <img
                  src={bgImage}
                  alt="Appliance Sales Floor Loop"
                  className="w-full h-full object-cover grayscale-[30%]"
                />
            </div>
         </div>

         {/* Overlays for legibility */}
         <div className="absolute inset-0 bg-white/20 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 backdrop-blur-sm mb-8 animate-float border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground shadow-sm">New: Image Recognition for Serial Tags</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">
          Smart help for every appliance. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AIppliance is magic.</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground mb-12 font-medium">
          Stop scrolling through 100-page PDFs. Just ask specific questions like "How do I replace the filter?" or "What does error code F3 mean?"
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.smarthomeai.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={googlePlayBadge} alt="Get it on Google Play" className="h-14" />
          </a>

          <a
            href="https://apps.apple.com/app/aippliance-manager/id6738828940"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={appStoreBadge} alt="Download on the App Store" className="h-14" />
          </a>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src={heroBanner}
            alt="AIppliance Manager app interface showing smart home management"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

          </div>
    </section>
  );
};

export default Hero;
