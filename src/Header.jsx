import React from 'react';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';

export default function Header() {
  return (
    <div className="header">
      <h1 className="text-secondary">Aaron Mullan: Developer</h1>
      <div className="icon-container">
        <div>
          <a
            href="https://www.linkedin.com/in/aaron-mullan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="linkedin-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/AaronMullan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="github-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/AaronCMullan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
