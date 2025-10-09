import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import UIShowcase from "@/components/UIShowcase";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonial />
        <UIShowcase />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
