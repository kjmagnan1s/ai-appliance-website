import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="AIppliance Manager Logo" className="h-10 w-10 rounded-lg" />
          <span className="text-lg font-semibold" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>AIppliance Manager</span>
        </Link>

        <a
          href="#download"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Free
        </a>
      </div>
    </header>
  );
};

export default Header;
