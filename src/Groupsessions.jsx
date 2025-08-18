// src/GroupSessions.jsx
import React from "react";


export default function GroupSessions() {
  const dates = [
  ];

  return (
    <main
      style={{
        padding: "40px 16px",
        color: "#FFFFFC",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  // ← center everything in this column
      }}
    >
      <h2>Upcoming Group Sessions</h2>
      <p>Click a date to reserve your spot:</p>

      {/* ← this wrapper will center its children and give them vertical spacing */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",  // ← center buttons
          gap: "16px",
          marginTop: 24,
        }}
      >
        {dates.map((d) => (
          <button
            className="session-button"
            key={d}
            style={{
              background: "#0A58FF",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: 8,
              fontSize: "1em",
              cursor: "pointer",
              width: 240,         // or whatever width you like
            }}
          >
            {d}
          </button>
        ))}
      </div>
    </main>
  );
}
