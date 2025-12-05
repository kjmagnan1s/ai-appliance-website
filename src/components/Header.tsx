import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="AIppliance Manager Logo" className="h-10 w-10 rounded-lg" />
          <span className="text-lg font-bold">AIppliance Manager</span>
        </Link>

        <div className="flex gap-2 items-center">
          <a href="https://play.google.com/store/apps/details?id=com.smarthomeai.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10" />
          </a>

          <a href="https://apps.apple.com/app/aippliance-manager/id6738828940" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={appStoreBadge} alt="Download on the App Store" className="h-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
