import React, {useState, useEffect } from "react";
import CalendlyEmbed from "./CalendlyEmbed";
import { useNavigate } from "react-router-dom";

export default function Schedule() {

const [selectedSession, setSelectedSession] = React.useState(null);
// This tracks which type of session the user has selected
const [visible, setVisible] = React.useState(false);
// This tracks whether the session options are visible or not
const navigate = useNavigate();
const calendlyUrls = {
  "individual-math": "https://calendly.com/patrickrileytutoring/1-hour-session-virtual",
  "individual-act": "https://calendly.com/patrickrileytutoring/30min",
  "individual-sat": "https://calendly.com/patrickrileytutoring/2-hour-session",
  "individual-online-sat": "https://calendly.com/patrickrileytutoring/online-sat-session",
  "individual-online-act": "https://calendly.com/patrickrileytutoring/online-act-session",
  "individual-online-math": "https://calendly.com/patrickrileytutoring/online-math-session",
  "upcoming-group-sessions": "https://calendly.com/patrickrileytutoring/upcoming-group-sessions",
}
useEffect(() => {
    const tid = setTimeout(() => {
        setVisible(true);
    }, 10);
    return () => clearTimeout(tid);
}, []);

return (
    <main
      className={`schedule-page fade-in ${visible ? "visible" : ""}`}
      style={{
        padding: "0px 0",
        color: "#FFFFFC",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!selectedSession && (
        <>
          <h2 style={{ marginBottom: 24 }}>Choose a Session Type</h2>
          <div
            className="session-grid"
            style={{
              display: "flex",
              gap: "24px",
              maxWidth: 800,
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Individual Sessions Column */}
            <div
              className="column"
              style={{
                flex: 1,
                minWidth: 280,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: 16 }}>In-Person Sessions</h3>
              <button
                className="session-button"
                onClick={() => setSelectedSession("individual-math")}
              >
                Math Tutoring
              </button>
              <button
                className="session-button"
                onClick={() => setSelectedSession("individual-act")}
              >
                ACT Tutoring
              </button>
              <button
                className="session-button"
                onClick={() => setSelectedSession("individual-sat")}
              >
                SAT Tutoring
              </button>
            </div>

            <div
              className="column"
              style={{
                flex: 1,
                minWidth: 280,
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                alignItems: "center",
                }}>
                <h3 style={{ marginBottom: 8 }}>Online Sessions</h3>
                <button
                  className="session-button"
                  onClick={() => setSelectedSession("individual-online-act")}
                >
                    Online ACT Tutoring
                </button>
                <button
                  className="session-button"
                  onClick={() => setSelectedSession("individual-online-sat")} 
                >
                    Online SAT Tutoring
                </button>
                <button
                  className="session-button"
                  onClick={() => setSelectedSession("individual-online-math")}
                >
                    Online Math Tutoring
                </button>
                                <p style={{ marginTop: 16 }}>
                  All online sessions are conducted via Zoom.
                </p>
            </div>
                        <div
              className="column"
              style={{
                flex: 1,
                minWidth: 280,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: 16 }}>Group Sessions</h3>
              <button
                className="session-button"
                onClick={() => navigate("/schedule/group")}
              >
                Upcoming Group Sessions
              </button>
            </div>

          </div>
        </>
      )}

      {selectedSession && (
        <>
          <button
            className="back-button"
            onClick={() => setSelectedSession(null)}
            style={{
              alignSelf: "flex-start",
              margin: "0 0 24px 36px",
              background: "transparent",
              border: "none",
              color: "#0A58FF",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
          ← Back
        </button>
        {/* You can pass a custom Calendly URL per session type if needed */}
        <div
          style={{
            width: "100%",      
            maxWidth: 900,     
            margin: "0 auto",   
            padding: "0 16px",  
            boxSizing: "border-box",
          }}>
          <CalendlyEmbed
            url={calendlyUrls[selectedSession] || "https://calendly.com/patrickrileytutoring/default"}
          />
        </div>
        <p>If the page is blank, please refresh the page.</p>
      </>
    )}
    </main>
  );
}