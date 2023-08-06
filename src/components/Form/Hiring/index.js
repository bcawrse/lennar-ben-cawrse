import "./hiringForm.css";
import { useState } from "react";

export const HiringForm = () => {
  // TODO: submission & email client-side validation
  const [email, setEmail] = useState("");

  return (
    <div className="hiring-form">
      <form>
        <div className="hiring-form__flex">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            className="btn btn--primary"
            type="button"
            value="Start free trial"
          />
        </div>
      </form>
      <p className="hiring-form__copy">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our{" "}
        <a className="hiring-form__copy__link" href="/">
          terms or service
        </a>
        .
      </p>
    </div>
  );
};
