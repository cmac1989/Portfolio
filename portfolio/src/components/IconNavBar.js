import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/iconNavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

export default function IconNavBar() {
    return (
        <div className="icon-nav-bar">
            <a
                href="https://www.linkedin.com/in/cameronmcrae1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://github.com/cmac1989"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
}
