import React, { useEffect, useRef } from "react";

const CalendlyEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    // If script already exists, don't add it again
    if (!document.querySelector("#calendly-widget-script")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
  );
};

export default CalendlyEmbed;
