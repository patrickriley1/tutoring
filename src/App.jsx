import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resources from "./resources";
import ActResources from "./Resources/actResources";
import Algebra1Resources from "./Resources/algebra1Resources";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./index.css";
import "./App.css";

function App() {
  return (
    <><Router>
      <div className="app-shell">
        <div className="app-container">
          <header className="app-header">
            <div>
              <h1 className="app-title">
                <span className="app-title-primary">Southwest Florida </span>
                <span className="app-title-accent">Tutoring</span>
              </h1>
            </div>
            <nav>
              <ul className="app-nav-list">
                <li className="app-nav-item">
                  <Link to="/" className="navlist app-nav-link">Home</Link>
                </li>
                <li className="app-nav-item">
                  <Link to="/contact" className="navlist app-nav-link">Contact</Link>
                </li>
                <li className="app-nav-item app-nav-item-last">
                  <Link to="/resources" className="navlist app-nav-link">Resources</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="app-route-content">
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

export default App;
