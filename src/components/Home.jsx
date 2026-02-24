import React from "react";
import FAQ from "./FAQ";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <h2 className="home-heading">Math, Science, ACT, and SAT Tutoring</h2>
      <div className="home-bio">
        <p className="home-bio-text">
          Welcome to Southwest Florida Tutoring! Our team is committed to helping students overcome
          challenges and reach their full potential. Whether you're struggling with math, science,
          or preparing for the ACT or SAT, we offer personalized tutoring sessions tailored to your
          needs. With competitive rates and flexible scheduling, we're here to help you succeed in
          your academic goals. We look forward to working with you!
        </p>
      </div>
      <a className="cta-btn home-cta-btn" href="/contact">
        Book Your First Session!
      </a>
      <div className="home-subjects-section">
        <h3 className="home-subjects-heading">Subjects Offered:</h3>
        <ul className="subjects-list home-subjects-list">
          <li>Pre-Algebra</li>
          <li>Algebra I & II</li>
          <li>Geometry</li>
          <li>Trigonometry</li>
          <li>Pre-Calculus</li>
          <li>Calculus</li>
          <li>ACT Preparation</li>
          <li>SAT Preparation</li>
          <li>Chemistry</li>
          <li>Physics</li>
          <li>Biology</li>
        </ul>
      </div>
      <div className="home-faq-heading-wrap">
        <h3 className="home-faq-heading">Frequently Asked Questions</h3>
      </div>
      <FAQ />
    </main>
  );
}
