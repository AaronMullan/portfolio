import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';

export default function Header() {
  // const [value, setValue] = useState([1, 3]);
  // const handleChange = (val) => setValue(val);
  return (
    <div className="header">

      {/* <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={2}>React</ToggleButton>
        <ToggleButton variant="danger" value={3}>CSS</ToggleButton>
        <ToggleButton variant="info" value={4}>Node</ToggleButton>
        <ToggleButton variant="secondary" value={1}>HTML</ToggleButton>
      </ToggleButtonGroup> */}
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
