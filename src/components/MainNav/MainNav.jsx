// Components
import Button from "../Button/Button";

// Assets
import mistralLogo from "../../assets/logoMistral.svg";
import flagUK from "../../assets/flagUK.png";
import iconMenu from "../../assets/iconMenu.png";

const MainNav = () => {
  return (
    <div className="main-nav bg-mistralBeige flex items-center justify-between px-4 py-3 lg:py-4 antialiased">
      <a href="/">
        <img className="h-[29px]" src={mistralLogo} alt="Mistral AI Logo" />
      </a>
      <div className="nav-right flex items-center gap-4 md:gap-6 text-sm">
        <div className="links hidden sm:flex gap-4 md:gap-7">
          <a href="solutions" className="hover:text-mistralOrange">Solutions</a>
          <a href="documentation" className="hover:text-mistralOrange">Documentation</a>
          <a href="news" className="hover:text-mistralOrange">News</a>
          <a href="pricing" className="hover:text-mistralOrange">Pricing</a>
        </div>
        <img className="h-[20px] w-[32px]" src={flagUK} alt="United Kingdom flag" />
        <Button classProps="hidden sm:block" text="Log In" />
        <img className="h-[29px] sm:hidden" src={iconMenu} alt="Click to open navigation menu" />
      </div>
    </div>
  )
};

export default MainNav;
