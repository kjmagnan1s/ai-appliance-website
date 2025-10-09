import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AIppliance Manager Logo" className="h-10 w-10 rounded-lg" />
          <span className="text-lg font-bold">AIppliance Manager</span>
        </div>
        
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Get on Google Play
        </Button>
      </div>
    </header>
  );
};

export default Header;
