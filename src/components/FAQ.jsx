import React from "react";
import faqData from "../data/faqData";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="faq">
      {faqData.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {faq.question}
            <span className="faq-symbol">{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}
