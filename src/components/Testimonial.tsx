import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="container px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm shadow-xl animate-fade-in">
          <CardContent className="pt-12 pb-12 text-center">
            <Quote className="h-12 w-12 mx-auto mb-6 text-primary/40" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              "AIppliance Manager saved me a $200 service call. I fixed my dishwasher in 5 minutes. Absolutely essential."
            </blockquote>
            <cite className="text-lg text-muted-foreground not-italic">
              — Alex R., Chicago
            </cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonial;
