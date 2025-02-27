import React from 'react';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';

export default function Header() {
  return (
    <div className="header">
      <h1 className="text-secondary">Aaron Mullan: Developer</h1>
      <div className="icon-container">
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/aaron-mullan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="linkedin-icon" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://github.com/AaronMullan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
