import { Card, CardContent } from "@/components/ui/card";
import { MessagesSquare, Video, Home, WifiOff } from "lucide-react";

const features = [
  {
    icon: MessagesSquare,
    title: "Conversational AI Help",
    description: "Chat with your appliances' manuals to find what you need without endless scrolling.",
  },
  {
    icon: Video,
    title: "Visual Answers & Guides",
    description: "Get links to helpful video tutorials for common troubleshooting and repairs.",
  },
  {
    icon: Home,
    title: "Multi-Room Management",
    description: "Organize all your appliances by room, across multiple properties.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "Access crucial information even when your internet is down.",
  },
];

const Features = () => {
  return (
    <section className="container px-4 py-20 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center">
          Everything You Need for a Smarter Home.
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
