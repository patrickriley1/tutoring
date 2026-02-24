import React from "react";
import Patrick from "../Patrick.JPG";
import "./Contact.css";

export default function Contact() {
  return (
    <div>

      <div>
        <h1 className="contact-header">Contact Us!</h1>
        <p>Have any questions? Reach out at <a href="mailto:patrickrileytutoring@gmail.com">patrickrileytutoring@gmail.com</a> for more information!</p>
      </div>
    <div className="contact-page">
      <section className="contact-card">
        <img src={Patrick} alt="Patrick Riley" className="contact-photo" />
        <h2 className="contact-name">Patrick Riley</h2>
        <p className="contact-title">Head Tutor</p>
        <p className="contact-row">
          <strong>Phone:</strong>{" "}
          <a href="tel:2392465711" className="contact-link">
            (239) 246-5711
          </a>
        </p>
        <p className="contact-row">
          <strong>Email:</strong>{" "}
          <a href="mailto:patrickrileytutoring@gmail.com" className="contact-link">
            patrickrileytutoring@gmail.com
          </a>
        </p>
        <p className="contact-row contact-row-last">
          <strong>YouTube:</strong>{" "}
          <a
            href="https://www.youtube.com/@patrickrileytutoring"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Patrick Riley Tutoring
          </a>
        </p>
      </section>
    </div>
    </div>

  );
}
