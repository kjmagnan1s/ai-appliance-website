import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "AIppliance Manager saved me a $200 service call. I fixed my dishwasher in 5 minutes. Absolutely essential.",
    author: "Alex R., Chicago"
  },
  {
    text: "I love how convenient it is to get step-by-step instructions AND a YouTube video right in the app. It's like having a repair expert in my pocket.",
    author: "Sarah M., Seattle"
  },
  {
    text: "Finally, all my appliances in one place! No more hunting through drawers for different manuals. This app is a game changer.",
    author: "Michael T., Austin"
  },
  {
    text: "The last thing you want to do when an appliance breaks is look for the manual. This app has everything I need instantly.",
    author: "Jennifer L., Boston"
  },
  {
    text: "As a property manager with 12 rental homes, this app is invaluable. All appliances for each property in one place. I can respond to tenants with instructions and videos immediately, which has saved me countless expensive service call-outs.",
    author: "David K., Property Manager, Denver"
  },
  {
    text: "My washing machine started making a weird noise at 9 PM. Found the troubleshooting guide in seconds and fixed it myself. No waiting for a repair person!",
    author: "Rachel W., Portland"
  },
  {
    text: "The error code lookup is genius. My oven displayed 'F10' and I had no idea what it meant. The app explained it and showed me how to reset it. Problem solved!",
    author: "Tom H., Miami"
  },
  {
    text: "I'm not tech-savvy, but this app makes it so easy. Just snap a photo of the serial number and everything loads automatically. Brilliant!",
    author: "Margaret S., Phoenix"
  },
  {
    text: "Saved my Thanksgiving! My refrigerator stopped cooling the night before and the app walked me through diagnosing a simple fix. Turkey was saved!",
    author: "Carlos R., San Diego"
  },
  {
    text: "As a first-time homeowner, I was overwhelmed with all the appliance manuals. This app organized everything and makes maintenance schedules so easy to follow.",
    author: "Emily P., Nashville"
  },
  {
    text: "The video tutorials are incredibly helpful. I'm a visual learner and seeing someone actually do the repair made all the difference. Fixed my dryer vent in 15 minutes!",
    author: "James B., Atlanta"
  }
];

const Testimonial = () => {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container px-4 md:px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thousands of homeowners and property managers who are saving time and money
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(var(--gradient-from))] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(var(--gradient-to))] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll-testimonials">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-1-${index}`}
              className="flex-shrink-0 w-[400px] mx-4 border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="pt-8 pb-8">
                <Quote className="h-8 w-8 mb-4 text-primary/40" />
                <blockquote className="text-lg font-medium mb-4 min-h-[120px]">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic font-semibold">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}

          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-2-${index}`}
              className="flex-shrink-0 w-[400px] mx-4 border-primary/20 bg-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="pt-8 pb-8">
                <Quote className="h-8 w-8 mb-4 text-primary/40" />
                <blockquote className="text-lg font-medium mb-4 min-h-[120px]">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic font-semibold">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
