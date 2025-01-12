import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./LandingPage.css";
import ImageGenerator from "./ImageGenerator";

export default function LandingPage() {
  return (
    <Router>
      <Routes>
        {/* Define Route for the Landing Page */}
        <Route
          path="/"
          element={
            <div className="landing-page">
              <header className="landing-header">
                <h1>
                  AI IMAGE <span>GENERATOR</span>
                </h1>
                <p>Transform your imagination into reality with AI-powered image generation.</p>
                {/* Use Link for navigation */}
                <Link to="/image-generator" className="cta-button">Get Started</Link>
              </header>

              <section className="features">
                <div className="feature">
                  <h2>Unlimited Creativity</h2>
                  <p>Describe anything and let AI create a stunning image just for you.</p>
                </div>
                <div className="feature">
                  <h2>High Quality</h2>
                  <p>Generate images with exceptional clarity and detail.</p>
                </div>
                <div className="feature">
                  <h2>Instant Results</h2>
                  <p>Receive your generated image within seconds.</p>
                </div>
              </section>

              <section className="image-gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                  {Array.from({ length: 24 }, (_, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={require(`../Assets/GridImages/img (${index + 1}).png`)}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section id="generate" className="image-generator-section">
                <h2>Try It Now!</h2>
                <p>Enter your imagination and watch it come to life.</p>
                {/* Use Link for navigation */}
                <Link to="/image-generator" className="generate-button">Generate an Image</Link>
              </section>

              <footer className="footer">
                <p>© 2024 AI Image Generator. All rights reserved.</p>
              </footer>
            </div>
          }
        />

        {/* Define Route for the Image Generator */}
        <Route path="/image-generator" element={<ImageGenerator />} />
      </Routes>
    </Router>
  );
}
