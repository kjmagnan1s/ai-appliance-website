import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">AIppliance Manager</h3>
            <p className="text-sm text-muted-foreground">
              Empowering homeowners with AI-powered appliance management. 
              Keep your home running smoothly with instant access to manuals, 
              troubleshooting, and maintenance tips.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AIppliance Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;