import "./hiringCTA.css";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";

export const HiringCTA = () => {
  return (
    <div className="hiring-cta">
      <span className="hiring-cta__pill">We're hiring</span>
      <span className="hiring-cta__copy">Visit our careers page</span>
      <FaAngleRight className="hiring-cta__icon" />
    </div>
  );
};
