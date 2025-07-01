import React from "react";
import { useNavigate } from "react-router-dom";

export default function ActResources() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>ACT Resources</h2>
            <div className="flex justify-center">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dWN_LZkQtOA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
