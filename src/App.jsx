import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resources from "./resources";
import ActResources from "./Resources/actResources";
import Algebra1Resources from "./Resources/algebra1Resources";
import Patrick from "./Patrick.JPG";
import "./index.css";
import "./App.css";

function Home() {
  return (
    <main style={{ margin: '0 auto', padding: '0 0', textAlign: 'center' }}>
      <h2 style={{ color: '#FFFFFC' }}>Math, Science, ACT, and SAT Tutoring</h2>
      <div id="bio-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto 36px auto", // centers and adds spacing
        boxSizing: "border-box",
        padding: "0 16px"
      }}>
        <p style={{ color: '#FFFFFC' }}>
          Welcome to Southwest Florida Tutoring! Our team is committed to helping students overcome challenges 
          and reach their full potential. Whether you're struggling with math, science, or preparing for the ACT or SAT,
          we offer personalized tutoring sessions tailored to your needs. With competitive rates and flexible scheduling, 
          we're here to help you succeed in your academic goals. We look forward to working with you!
        </p>

      </div>
      <a
        className="cta-btn"
        href="/contact"
        style={{
          display: "inline-block", // This makes the link look like a button
          background: "#0A58FF", // Color of the button
          color: "#FFFFFC", //Text color
          padding: "16px 36px", // Padding around the text, makes the size of the button
          borderRadius: 8,
          fontWeight: 700, // Makes the text bold
          textDecoration: "none",
          fontSize: "1.2em",
          marginTop: 24,
          transition: "box-shadow 0.3s, background 0.3s, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        Book Your First Session!
      </a>
      <div>
        <h3 style={{ color: '#FFFFFC', marginBottom: 16, paddingRight: 16}}>Subjects Offered:</h3>
        <ul className='subjects-list' style={{
          display: 'inline-block',
          textAlign: 'left',
          color: '#FFFFFC',
          lineHeight: 1.7,
          fontSize: '1.1em',
          margin: 0,
        }}>
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
      <div>
        <h3 style={{ color: '#FFFFFC', marginBottom: 16}}>Frequently Asked Questions</h3>
      </div>
      <FAQ />
    </main>
  );
}

function Contact() {
  return (
    <main
      style={{
        padding: "24px 16px 64px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 560,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 16,
          padding: "24px 20px",
          color: "#FFFFFC",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <img
          src={Patrick}
          alt="Patrick Riley"
          style={{
            width: 240,
            height: 160,
            borderRadius: 10,
            objectFit: "cover",
            marginBottom: 16,
          }}
        />
        <h2 style={{ margin: "0 0 4px 0" }}>Patrick Riley</h2>
        <p style={{ margin: "0 0 20px 0", color: "#b9d0ff", fontWeight: 600 }}>
          Head Tutor
        </p>
        <p style={{ margin: "8px 0" }}>
          <strong>Phone:</strong>{" "}
          <a href="tel:2392465711" style={{ color: "#8fb4ff" }}>
            (239) 246-5711
          </a>
        </p>
        <p style={{ margin: "8px 0" }}>
          <strong>Email:</strong>{" "}
          <a href="mailto:patrickrileytutoring@gmail.com" style={{ color: "#8fb4ff" }}>
            patrickrileytutoring@gmail.com
          </a>
        </p>
        <p style={{ margin: "8px 0 0 0" }}>
          <strong>YouTube:</strong>{" "}
          <a
            href="https://www.youtube.com/@patrickrileytutoring"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#8fb4ff" }}
          >
            Patrick Riley Tutoring
          </a>
        </p>
      </section>
    </main>
  );
}


function App() {
  return (
    <><Router>
      <div
        style={{
          minHeight: '100vh',
          background: '#191919',
          color: '#FFFFFC',
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              background: '#191919',
              padding: '32px 0 12px',
            }}>
            <div>
              <h1 style={{ marginTop: 0, }}>
                <span style={{ color: '#FFFFFC' }}>Southwest Florida </span>
                <span style={{ color: '#0A58FF' }}>Tutoring</span>
              </h1>
            </div>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                <li style={{ display: 'inline', marginRight: 16 }}>
                  <Link to="/" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ display: 'inline', marginRight: 16 }}>
                  <Link to="/contact" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Contact</Link>
                </li>
                <li style={{ display: 'inline' }}>
                  <Link to="/resources" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Resources</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* This is where the different pages are rendered */}
          <div style={{ padding: '8px 0 40px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/act" element={< ActResources />} />
              <Route path="/resources/sat" element={< satResources />} />
              <Route path="/resources/algebra1" element={< Algebra1Resources />} />
              <Route path="/resources/geometry" element={< geometryResources />} />
              <Route path="/resources/algebra2" element={< algebra2Resources />} />
              <Route path="/resources/precalculus" element={< precalculusResources />} />
              <Route path="/resources/calculus" element={< calculusResources />} />
              <Route path="/resources/chemistry" element={< chemistryResources />} />
              <Route path="/resources/physics" element={< physicsResources />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router><Analytics /></>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] =React.useState(null);

  return (
    <div style={{
      maxWidth: 600,
      margin: "48px auto 0 auto",
      textAlign: "left",
      color: "#FFFFFC"
    }}>
      {faqData.map((faq, idx) => (
        <div key={idx} style={{
          borderBottom: "1px solid #333",
          marginBottom: 8,
          paddingBottom: 8
        }}>
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              background: "none",
              border: "none",
              color: "#FFFFFC",
              fontSize: "1.1em",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              padding: "12px 0",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            {faq.question}
            <span style={{ fontSize: "1.3em" }}>{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div style={{
              padding: "8px 0 0 0",
              color: "#e0e0e0",
              fontWeight: 400
            }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const faqData = [
  {
    question: "Where do you offer tutoring?",
    answer: "For one-on-one sessions, we offer in-person tutoring in the Fort Myers/Estero area (location of your choice - student's house, public library, etc.) and online sessions via Zoom.",
  },
  {
    question: "What length of session do you recommend?",
    answer: "It depends. For most subjects, 1 hour per week is sufficient, but that depends on a variety of factors, such as the difficulty of the subject, the urgency of improvement and others. We recommend starting with 1 hour per week for most subjects, and then we can adjust as needed.",
  },
  {
    question: "What are your rates?",
    answer: "Our rates are a flat rate of $50/hr for online sessions, and in-person session rates vary based on location.",
  },
  {
    question: "How do I schedule a session?",
    answer: "Just click the 'Book Your First Session' button or visit the Contact page to get started to contact us about getting started!",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that life can be unpredictable. If you need to cancel/reschedule, please try to give at least 24 hours' notice. Same-day cancellations will be charged a flat fee of $15. No-shows will be charged the full session rate.",
  }
];


export default App;
