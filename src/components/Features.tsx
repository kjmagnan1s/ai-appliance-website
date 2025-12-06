import { Card, CardContent } from "@/components/ui/card";
import { MessagesSquare, Video, Home, Bell } from "lucide-react";

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
    icon: Bell,
    title: "Maintenance Reminders (coming soon!)",
    description: "Get timely alerts for filter changes, cleanings, and regular maintenance tasks.",
  },
];

const Features = () => {
  return (
    <section className="container px-6 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl md:text-5xl lg:text-6xl">
          Everything You Need for a Smarter Home.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-10 pb-8 px-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl md:text-3xl">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
