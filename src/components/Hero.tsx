import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

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
        
        <Button 
          size="lg" 
          className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 animate-fade-in gap-2"
          style={{ animationDelay: "0.2s" }}
        >
          <Smartphone className="h-5 w-5" />
          Get it on Google Play
        </Button>
        
        <div className="mt-16 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-2xl bg-card/50 backdrop-blur-sm p-8 shadow-2xl border border-border/50">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="h-20 w-20 mx-auto text-primary/60 mb-4" />
                <p className="text-muted-foreground">Your appliances, intelligently managed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
