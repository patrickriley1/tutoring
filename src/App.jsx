import React from "react";
import { Analytics } from "@vercel/analytics/react";
import CalendlyEmbed from "./CalendlyEmbed";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { colors } from '@mui/material'
import Schedule from "./schedule";
import Patrick from "./Patrick.JPG";
import Patrick1 from "./Patrick1.JPG";
import Resources from "./resources";
import ActResources from "./Resources/actResources";
import Algebra1Resources from "./Resources/algebra1Resources";

function Home() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 0', textAlign: 'center' }}>
      <h2 style={{ color: '#FFFFFC' }}>Math, ACT, and SAT Tutoring</h2>
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
          Welcome! I'm Patrick Riley, a tutor specializing in math, ACT, and SAT preparation.
          I won salutatorian of my high school class at Southwest Florida Christian Academy, and I currently attend Florida Gulf Coast University, where I am studying Software Engineering.
          I have been tutoring since my high school days, and I learned methods of preparing for standardized tests that helped me score a 34 on the ACT.
          I have a passion for teaching, and I love seeing students excel! Whether you're struggling with algebra, learning geometry for the first time, or preparing for the ACT or SAT, I'm here to help you succeed! Book a session today!
        </p>
        <img src={Patrick} alt="Photo of me" id="photoPatrick" style={{
          width: "280px",
          maxWidth: "40vw",
          height: "auto",
          borderRadius: "18px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.15)"
        }} />
      </div>
      <a
        className="cta-btn"
        href="/schedule"
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
      <div style={{ margin: '32px 0' }}>
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
    <main style={{ padding: '0 0', textAlign: 'center', color: '#FFFFFC' }}>
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would like to discuss tutoring options, feel free to reach out!
      </p>
      <p>Email: <a href="mailto:patrickrileytutoring@gmail.com" >patrickrileytutoring@gmail.com</a></p>
      <p>Phone: <a href="tel:2392465711">239-246-5711</a></p>
      <p>Youtube: <a href="https://www.youtube.com/@patrickrileytutoring">https://www.youtube.com/@patrickrileytutoring</a></p>
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
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: 36,
            borderRadius: 18,
            fontFamily: 'sans-serif',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <div>
              <h1 style={{ marginTop: 0, }}>
                <span style={{ color: '#FFFFFC' }}>Patrick Riley </span>
                <span style={{ color: '#0A58FF' }}>Tutoring</span>
              </h1>
            </div>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                <li style={{ display: 'inline', marginRight: 16 }}>
                  <Link to="/" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ display: 'inline', marginRight: 16 }}>
                  <Link to="/schedule" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Schedule</Link>
                </li>
                <li style={{ display: 'inline', marginRight: 16 }}>
                  <Link to="/contact" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Contact</Link>
                </li>
                <li style={{ display: 'inline' }}>
                  <Link to="/resources" className="navlist" style={{ color: '#FFFFFC', textDecoration: 'none' }}>Resources</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* This is where the different pages are rendered */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
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
    answer: "For one-on-one sessions, I offer in-person tutoring in the Fort Myers area (location of your choice - student's house, public library, etc.) and online sessions via Zoom. For group sessions, we will typically meet at Southwest Florida Christian Academy (3750 Colonial Blvd), but I can also arrange online sessions if needed.",
  },
  {
    question: "What length of session do you recommend?",
    answer: "I'd say it depends. For most subjects, 1 hour per week is sufficient, but that depends on a variety of factors, such as the difficulty of the subject, the urgency of improvement and others. I recommend starting with 1 hour per week for most subjects, and then we can adjust as needed.",
  },
  {
    question: "What are your rates?",
    answer: "My rates are $50/hr for in-person individual sessions ($40/hr for virtual) and $30/hr per student for group sessions.",
  },
  {
    question: "How do I schedule a session?",
    answer: "Just click the 'Book Your First Session' button or visit the Schedule page. Choose an available time and you'll get a confirmation email!",
  },
  {
    question: "What is your cancellation policy?",
    answer: "I understand that life can be unpredictable. If you need to cancel/reschedule, please try to give at least 24 hours' notice. Same-day cancellations will be charged a flat fee of $15. No-shows will be charged the full session rate.",
  }
];


export default App;
