import dashboardImg from "@/assets/screenshot-dashboard.png";
import chatImg from "@/assets/screenshot-chat.png";
import addImg from "@/assets/screenshot-add.png";

const screenshots = [
  { src: dashboardImg, alt: "My Home Dashboard", label: "My Home Dashboard" },
  { src: chatImg, alt: "AI Chat Interface", label: "AI Chat" },
  { src: addImg, alt: "Add Appliance", label: "Appliance Library" },
];

const UIShowcase = () => {
  return (
    <section className="container px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center">
          A Glimpse Inside.
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg transition-all group-hover:shadow-2xl group-hover:scale-[1.02]">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-4 text-center text-lg font-medium text-muted-foreground">
                {screenshot.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
