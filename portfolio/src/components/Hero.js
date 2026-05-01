import React from "react";
import '../styles/hero.css';
import Typewriter from "./Typewriter";
import Header from "./Header";

const ROLES = ["Web Developer", "Full Stack Engineer", "React Developer"];

export default function Hero() {
    return (
        <div className="hero" id="about">
            <div className="hero-intro">
                <h1>Cameron<br />McRae</h1>
                <h2>
                    <Typewriter
                        words={ROLES}
                        typeSpeed={75}
                        deleteSpeed={40}
                        pauseTime={1800}
                    />
                </h2>
                <p className="hero-tagline">
                    I craft accessible, polished digital experiences for the web.
                </p>
                <div className="hero-status">
                    <span className="status-dot" />
                    <span>Available for opportunities</span>
                </div>
            </div>

            <Header />
        </div>
    );
}
