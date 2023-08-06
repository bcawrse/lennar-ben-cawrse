import { useState } from "react";
import "./mobileMenu.css";
import logo from "../../logo.svg";

import { FaBars } from "@react-icons/all-files/fa/FaBars";
import close from "../../close.svg";

export const MobileMenu = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="mobile-menu">
      <FaBars className="mobile-menu__icon" onClick={toggleActive} />
      {active && <MobileMenuOpen toggleActive={toggleActive} />}
    </div>
  );
};

const MobileMenuOpen = ({ toggleActive }) => {
  return (
    <div className="mobile-menu-open">
      <div className="mobile-menu__container">
        <div className="mobile-menu__header">
          <a href="/" alt="home">
            <img className="nav__logo" src={logo} alt="logo" />
          </a>
          <div className="mobile-menu__header__close">
            <img src={close} alt="close menu" onClick={toggleActive} />
          </div>
        </div>
        <div className="mobile-menu__links">
          <a href="/">Product</a>
          <a href="/">Features</a>
          <a href="/">Marketplace</a>
          <a href="/">Company</a>
        </div>

        <div className="mobile-menu__login">
          <a className="btn btn--primary" href="/">
            Start free trial
          </a>
          <span className="mobile-menu__login__copy">
            Existing customer? <a href="/">Log in</a>
          </span>
        </div>
      </div>
    </div>
  );
};
