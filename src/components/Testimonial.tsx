import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AIppliance Manager saved me a $200 service call. I fixed my dishwasher in 5 minutes. Absolutely essential.",
    author: "Alex R.",
    location: "Chicago"
  },
  {
    quote: "Game changer for homeowners. I've already used it on my fridge, washer, and HVAC system.",
    author: "Maria S.",
    location: "Austin"
  },
  {
    quote: "It's great not having to keep manuals in a drawer collecting dust. Everything I need is right in the app.",
    author: "James T.",
    location: "Denver"
  },
  {
    quote: "Finally, an app that actually understands what I'm asking. Fixed my dryer's error code in under a minute.",
    author: "Sarah K.",
    location: "Seattle"
  }
];

const Testimonial = () => {
  return (
    <section className="container px-4 py-20 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm shadow-xl animate-fade-in">
            <CardContent className="pt-8 pb-8 text-center">
              <Quote className="h-8 w-8 mx-auto mb-4 text-primary/40" />
              <blockquote className="text-lg md:text-xl font-medium mb-4">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-base text-muted-foreground not-italic">
                — {testimonial.author}, {testimonial.location}
              </cite>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
