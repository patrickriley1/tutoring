import React from "react";
import { useNavigate } from "react-router-dom";

export default function Algebra1Resources() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Algebra 1 Resources</h2>
        <div className="flex justify-center">
            <div>
                <h3>Systems of Equations:</h3>
                <h4>Practice Problems -</h4>
                <div className="mt-4">
                    <a
                        href="/Resources/SystemsofEquationsPractice.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                    >
                        SystemsofEquationsPractice.pdf
                    </a>
                </div>
                <h4>Video -</h4>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/f17fR57EUA0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        </div>
    );
}