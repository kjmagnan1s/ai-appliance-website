import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";
import googlePlayIcon from "@/assets/google-play-icon.png";
import { Search, Sparkles } from 'lucide-react';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const fullText = "e.g. Samsung RF28 Refrigerator...";

  // Image of a clean row of washing machines/appliances, duplicated for seamless loop
  const bgImage = "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2000&auto=format&fit=crop";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setPlaceholderText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">

      {/* Panning Backdrop Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
         <div className="flex w-[200%] h-full animate-pan-image">
            <div className="w-1/2 h-full relative">
                <img
                  src={bgImage}
                  alt="Appliance Sales Floor"
                  className="w-full h-full object-cover grayscale-[30%]"
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
         <div className="absolute inset-0 bg-white/70 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white z-10"></div>
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

        <div className="max-w-xl mx-auto relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <form onSubmit={handleSubmit} className="relative flex items-center bg-background/90 backdrop-blur-md rounded-xl p-2 shadow-lg border">
             <div className="pl-4 text-muted-foreground">
                <Search className="w-6 h-6" />
             </div>
             <input
                type="text"
                className="flex-1 bg-transparent border-none focus:ring-0 text-foreground placeholder-muted-foreground text-lg px-4 py-3 w-full focus:outline-none"
                placeholder={placeholderText}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
             <button
               type="submit"
               className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-lg"
             >
               Search
             </button>
          </form>
        </div>

        <Button
          asChild
          size="lg"
          className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 animate-fade-in gap-2"
          style={{ animationDelay: "0.2s" }}
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

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src={heroBanner}
            alt="AIppliance Manager app interface showing smart home management"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Social Proof / Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-border pt-10 bg-background/50 backdrop-blur-sm rounded-3xl mx-auto max-w-4xl">
           {[
             { label: 'Manuals Indexed', value: '2M+' },
             { label: 'Brands Supported', value: '500+' },
             { label: 'AI Accuracy', value: '99%' },
             { label: 'Happy Users', value: '50k' },
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center p-2">
               <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
               <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
