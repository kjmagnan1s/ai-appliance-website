import screenshotChat from "@/assets/screenshot-chat.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import { Star, Shield, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="download" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Background: Warm gradient with subtle shapes */}
      <div className="absolute inset-0 z-0">
        {/* Base warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,30%,97%)] via-[hsl(45,25%,95%)] to-[hsl(38,30%,93%)]" />

        {/* Subtle floating shapes for depth */}
        <div
          className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-gentle"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-32 left-[5%] w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float-gentle"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="text-center lg:text-left">
            {/* Eyebrow Badge with animated ping */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Now with AI image recognition</span>
            </div>

            {/* Headline - shorter, action-oriented */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Stop Googling.<br />
              <span className="text-primary">Just Ask.</span>
            </h1>

            {/* Subheadline - concrete value prop */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Scan any appliance. Get instant answers from the manual.
              Skip the $200 service call.
            </p>

            {/* CTA Badges with glow effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
              {/* Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.smarthomeai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                {/* Badge with lift effect */}
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="relative h-14 sm:h-16 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
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
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                {/* Badge with lift effect */}
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="relative h-14 sm:h-16 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
                />
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-semibold text-foreground">4.5+</span>
                <span>rating</span>
              </span>
              <span className="w-px h-4 bg-border hidden sm:block" />
              <span>
                <span className="font-semibold text-foreground">1,000+</span> downloads
              </span>
              <span className="w-px h-4 bg-border hidden sm:block" />
              <span className="font-semibold text-foreground">Free</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" /> No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> Privacy first
              </span>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-[280px] sm:max-w-[320px]">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-[60px] blur-3xl opacity-60" />

              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[40px] p-2 shadow-2xl">
                <img
                  src={screenshotChat}
                  alt="AIppliance chat interface showing instant appliance help"
                  className="rounded-[32px] w-full"
                />
              </div>

              {/* Floating query bubble - left */}
              <div
                className="absolute -left-4 sm:-left-12 top-1/4 bg-card rounded-xl p-3 shadow-lg border border-border animate-float-gentle max-w-[160px]"
                style={{ animationDelay: '0s' }}
              >
                <p className="text-sm font-medium text-foreground">"How do I clean the filter?"</p>
              </div>

              {/* Floating response bubble - right */}
              <div
                className="absolute -right-2 sm:-right-8 bottom-1/3 bg-primary text-primary-foreground rounded-xl p-3 shadow-lg animate-float-gentle max-w-[140px]"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="text-sm font-medium">Found in 2 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
