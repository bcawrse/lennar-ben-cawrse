import "./nav.css";
import logo from "../../logo.svg";
import { Login } from "../Login";
import { MobileMenu } from "./MobileMenu";

export const Nav = () => {
  return (
    <header>
      <div className="nav">
        <img className="nav__logo" src={logo} alt="logo" />
        <div className="nav__links">
          <a href="/">Product</a>
          <a href="/">Features</a>
          <a href="/">Marketplace</a>
          <a href="/">Company</a>
        </div>
        <Login className="nav__login" />
      </div>
      <div className="nav__mobile">
        <img className="nav__logo" src={logo} alt="logo" />
        <MobileMenu />
      </div>
    </header>
  );
};
