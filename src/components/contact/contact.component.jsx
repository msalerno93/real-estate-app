// contact form maybe a little header
import emailjs from "@emailjs/browser";
import "./contact.styles.scss";

import ADDRESS from "../../houseinfo.json";
import AGENT from "../../realtors.json";
import { useState } from "react";

const Banner = () => {
  return <p className="contact-banner-message">Your Message Was Sent Successfully!</p>;
};

const ContactUsCard = () => {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "real_estate_application",
        "template_kyjqdfc",
        e.target,
        "2_tHFC_kkOHg_drnC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div>
      <form className="contact-us-form-container" onSubmit={sendEmail}>
        <div>{result ? <Banner /> : null}</div>

        <label className="label">
          Name:
          <input className="text-input" type="text" name="name" />
        </label>
        <label className="label">
          Email Address:
          <input className="text-input" type="email" name="email" />
        </label>
        <label className="label">
          Phone Number:
          <input className="text-input" type="text" name="phone" />
        </label>
        <label className="label">
          Listing Address:
          <select className="text-input" name="address" type="text">
            {ADDRESS.map((add) => {
              return (
                <option key={add.id} value={add.address}>
                  {add.address}
                </option>
              );
            })}
          </select>
        </label>
        <label className="label">
          Listing Agent:
          <select className="text-input" name="agent" type="text">
            {AGENT.map((agent) => {
              return (
                <option key={agent.id} value={agent.name}>
                  {agent.name}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsCard;
