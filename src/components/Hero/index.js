import illustration from "../../Illustration.svg";
import "./hero.css";
import { Title } from "../Title";
import { HiringCTA } from "../CTA/Hiring";

export const Hero = ({ children }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${illustration})`,
      }}
    >
      <div className="hero__content">
        <HiringCTA />
        <Title />
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
        {children}
      </div>
    </div>
  );
};
