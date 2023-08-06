import "./nav.css";
import logo from "../../logo.svg";
import { Login } from "../Login";

export const Nav = () => {
  return (
    <header className="nav">
      <img className="nav__logo" src={logo} alt="logo" />
      <div className="nav__links">
        <a href="/">Product</a>
        <a href="/">Features</a>
        <a href="/">Marketplace</a>
        <a href="/">Company</a>
      </div>
      <Login className="nav__login" />
    </header>
  );
};
