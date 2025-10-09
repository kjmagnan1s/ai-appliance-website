import { Card, CardContent } from "@/components/ui/card";
import { Camera, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Scan Your Appliance",
    description: "Add any appliance in seconds by scanning its model number.",
  },
  {
    icon: MessageCircle,
    title: "Get Instant Answers",
    description: "Ask any question and get information directly from the manual.",
  },
  {
    icon: Sparkles,
    title: "Stay Ahead of Issues",
    description: "Receive proactive maintenance reminders to keep things running smoothly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="container px-4 py-20 md:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center">
          Effortless Appliance Care in Three Steps.
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
