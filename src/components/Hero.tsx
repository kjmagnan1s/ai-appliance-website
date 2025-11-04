import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";
import googlePlayIcon from "@/assets/google-play-icon.png";
import appStoreIcon from "@/assets/app-store-icon.svg";

const Hero = () => {
  return (
    <section className="container px-4 py-20 md:py-32 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 animate-fade-in">
          Smart help for every appliance.
        </h1>
        
        <p className="mb-8 text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Instant answers, maintenance tips, and troubleshooting—all powered by AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 gap-2"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.smarthomeai.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlayIcon} alt="Google Play" className="h-6 w-6" />
              Get it on Google Play
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 gap-2"
          >
            <a
              href="https://apps.apple.com/app/aippliance-manager/id6738828940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appStoreIcon} alt="App Store" className="h-6 w-6" />
              Download on App Store
            </a>
          </Button>
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
