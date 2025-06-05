import React, {useState, useEffect } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

export default function Schedule() {

const [selectedSession, setSelectedSession] = React.useState(null);
// This tracks which type of session the user has selected
const [visible, setVisible] = React.useState(false);
// This tracks whether the session options are visible or not

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
        padding: "40px 0",
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
              <h3 style={{ marginBottom: 16 }}>Individual Sessions</h3>
              <button
                className="session-button"
                onClick={() => setSelectedSession("individual‐math")}
              >
                Math (1:1)
              </button>
              <button
                className="session-button"
                onClick={() => setSelectedSession("individual‐act")}
              >
                ACT Tutoring (1:1)
              </button>
              <button
                className="session-button"
                onClick={() => setSelectedSession("individual‐sat")}
              >
                SAT Tutoring (1:1)
              </button>
            </div>

            {/* Group Sessions Column */}
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
                onClick={() => setSelectedSession("group‐math")}
              >
                Math Study Group
              </button>
              <button
                className="session-button"
                onClick={() => setSelectedSession("group‐act")}
              >
                ACT Prep Group
              </button>
              <button
                className="session-button"
                onClick={() => setSelectedSession("group‐sat")}
              >
                SAT Prep Group
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
          <CalendlyEmbed
            url={
              selectedSession.startsWith("individual")
                ? "https://calendly.com/patrickrileytutoring/individual"
                : "https://calendly.com/patrickrileytutoring/group"
            }
            // apply any inline overrides (e.g. borderRadius)
            style={{ borderRadius: "8px", padding: "0" }}
          />
        </>
      )}
    </main>
  );
}