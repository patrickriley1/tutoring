import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResourcesPage() {
    const navigate = useNavigate();

    return (
        <main className="text-center mt-20 text-white">
            <div className="resourceColumn">
                <div className="testPrep">
                    <h3>Test Prep Resources</h3>
                    <button
                        onClick={() => navigate("/resources/act")}
                        className="resourceButton"
                    >
                        ACT Prep Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/sat")}
                        className="resourceButton"
                    >
                        SAT Prep Resources
                    </button>
                </div>
                <div className="math">
                    <h3>Math Resources</h3>
                    <button
                        onClick={() => navigate("/resources/algebra1")}
                        className="resourceButton"
                    >
                        Algebra 1 Resources
                    </button>
                    <button   
                        onClick={() => navigate("/resources/geometry")}
                        className="resourceButton"
                    >
                        Geometry Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/algebra2")}
                        className="resourceButton"
                    >
                        Algebra 2 Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/precalculus")}
                        className="resourceButton"
                    >
                        Precalculus Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/calculus")}
                        className="resourceButton"
                    >
                        Calculus Resources
                    </button>
                </div>
                <div className="science">
                    <h3>Science Resources</h3>
                    <button
                        onClick={() => navigate("/resources/chemistry")}
                        className="resourceButton"
                    >
                        Chemistry Resources
                    </button>
                    <button
                        onClick={() => navigate("/resources/physics")}
                        className="resourceButton"
                    >
                        Physics Resources
                    </button>
                </div>

            </div>
        </main>
    );
}

