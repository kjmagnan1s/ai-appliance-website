import screenshotChat from "@/assets/screenshot-chat.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import { Star, Shield } from 'lucide-react';

const Hero = () => {
  // Panning background image
  const bgImage = "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2000&auto=format&fit=crop";

  return (
    <section id="download" className="relative min-h-screen flex items-center overflow-hidden">
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
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Overlays for legibility - warm tinted */}
        <div className="absolute inset-0 bg-[hsl(45,30%,97%)]/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(45,30%,97%)]/50 via-transparent to-[hsl(45,30%,97%)]/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(45,30%,97%)]/40 via-transparent to-[hsl(45,30%,97%)]/40 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="text-center lg:text-left">
            {/* Eyebrow Badge with animated ping */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/15 border border-secondary/30 mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-base font-medium text-foreground">Now with AI image recognition</span>
            </div>

            {/* Headline - BIGGER */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-[1.05]">
              Stop Googling.<br />
              <span className="text-primary">Just Ask.</span>
            </h1>

            {/* Subheadline - BIGGER */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Scan any appliance. Get instant answers from the manual.
              Skip the $200 service call.
            </p>

            {/* CTA Badges with glow effect - BIGGER */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-8">
              {/* Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.smarthomeai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                {/* Badge with lift effect */}
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="relative h-16 sm:h-[72px] transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-xl group-hover:drop-shadow-2xl"
                />
              </a>

              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/app/aippliance-manager/id6738828940"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                {/* Badge with lift effect */}
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="relative h-16 sm:h-[72px] transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-xl group-hover:drop-shadow-2xl"
                />
              </a>
            </div>

            {/* Social Proof Strip - BIGGER */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start text-base text-muted-foreground mb-5">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-semibold text-foreground text-lg">4.5+</span>
                <span>rating</span>
              </span>
              <span className="w-px h-5 bg-border hidden sm:block" />
              <span>
                <span className="font-semibold text-foreground text-lg">1,000+</span> downloads
              </span>
              <span className="w-px h-5 bg-border hidden sm:block" />
              <span className="font-semibold text-foreground text-lg">Free to Download</span>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-wrap items-center gap-5 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> No credit card required
              </span>
            </div>
          </div>

          {/* Right Column: Phone Mockup - BIGGER */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[420px]">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-10 bg-gradient-to-br from-primary/25 via-secondary/15 to-primary/25 rounded-[80px] blur-3xl opacity-70" />

              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[48px] p-3 shadow-2xl">
                <img
                  src={screenshotChat}
                  alt="AIppliance chat interface showing instant appliance help"
                  className="rounded-[40px] w-full"
                />
              </div>

              {/* Floating query bubble - left - BIGGER */}
              <div
                className="absolute -left-6 sm:-left-16 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float-gentle"
                style={{ animationDelay: '0s' }}
              >
                <p className="text-base font-medium text-foreground whitespace-nowrap">"How do I clean the filter?"</p>
              </div>

              {/* Floating response bubble - right - BIGGER */}
              <div
                className="absolute -right-4 sm:-right-12 bottom-1/3 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl animate-float-gentle"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="text-base font-semibold whitespace-nowrap">Found in 2 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
