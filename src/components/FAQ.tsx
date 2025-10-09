import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I find my appliance manual?",
    answer: "AIppliance Manager finds it for you automatically using the model number. Simply scan the label on your appliance or enter the details manually, and we'll locate the official manual instantly. If we can't download your manual, we will point you to your manufacturer's website where you can download and upload it quickly and easily!",
  },
  {
    question: "What does this blinking error code mean?",
    answer: "Just ask the AI. It can cross-reference the code with the manual to give you an exact answer, along with step-by-step troubleshooting instructions.",
  },
  {
    question: "Is my data private?",
    answer: "Yes. Your appliance data is stored securely on your device and is never shared. We respect your privacy and don't sell or share your information with third parties.",
  },
];

const FAQ = () => {
  return (
    <section className="container px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center">
          Frequently Asked Questions.
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
