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
    <section className="container px-6 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl md:text-5xl lg:text-6xl">
          Effortless Appliance Care in Three Steps.
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-10 pb-8 text-center px-8">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl md:text-3xl">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
