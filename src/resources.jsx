import React from "react";
import { useNavigate } from "react-router-dom";
import "./resources.css";

export default function ResourcesPage() {
    const navigate = useNavigate();

    return (
        <main className="resource-page">
            <div className="resource-column">
                <div className="resource-section first">
                    <h3>Test Prep Resources</h3>
                    <button
                        onClick={() => navigate("/resources/act")}
                        className="resource-button"
                    >
                        ACT Prep Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/sat")}
                        className="resource-button"
                    >
                        SAT Prep Resources
                    </button>
                </div>
                <div className="resource-section">
                    <h3>Math Resources</h3>
                    <button
                        onClick={() => navigate("/resources/algebra1")}
                        className="resource-button"
                    >
                        Algebra 1 Resources
                    </button>
                    <button   
                        onClick={() => navigate("/resources/geometry")}
                        className="resource-button"
                    >
                        Geometry Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/algebra2")}
                        className="resource-button"
                    >
                        Algebra 2 Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/precalculus")}
                        className="resource-button"
                    >
                        Precalculus Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/calculus")}
                        className="resource-button"
                    >
                        Calculus Resources
                    </button>
                </div>
                <div className="resource-section">
                    <h3>Science Resources</h3>
                    <button
                        onClick={() => navigate("/resources/chemistry")}
                        className="resource-button"
                    >
                        Chemistry Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/physics")}
                        className="resource-button"
                    >
                        Physics Resources
                    </button>
                </div>

            </div>
        </main>
    );
}
