import React from "react";

import "./SplashFooter.css";

/*********************************************************************************************************************************/

export default function SplashFooter() {
  return (
    <div id="sp-ft-container">
      <div id="splash-footer-container">
        <div id="splash-footer-list">
          <a
            className="splash-footer-content"
            href="https://github.com/sonajasani"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="splash-footer-content"
            href="https://github.com/sonajasani/Music-Storm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
}
