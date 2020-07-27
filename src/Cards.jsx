import React from 'react';
import { Card, Button } from 'react-bootstrap';
import shavedave from './assets/shavedave.png';
import wantlistwatch from './assets/wantlistwatch.png';
import node from './assets/node.png';
import html from './assets/html.png';
import opensource from './assets/opensource.png';

export function CssCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={shavedave} />
        <Card.Body>
          <Card.Title style={{ color: '#F92672' }}>CSS</Card.Title>
          <Card.Text>
            Responsive CSS to maintain tournament bracket.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            href="http://www.shavedave.org/"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
          >
            site

          </Button>
          <Button
            href="https://github.com/AaronMullan/Shave-Dave/blob/master/src/App.css"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            code
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export function ReactCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={wantlistwatch} />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
            Hooks, Async API calls to find deals on Discogs.com.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            href="https://wantlist-watch.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
          >
            site
          </Button>
          <Button
            href="https://github.com/AaronMullan/wantlistwatch/blob/master/src/WantedItems.js"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            code

          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export function NodeCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={node} />
        <Card.Body>
          <Card.Title style={{ color: '#AE81FF' }}>
            Node

          </Card.Title>
          <Card.Text>
            Web Scraping, Mongo DB and Express routes for a public API.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            href="https://mult-co-jail-data.netlify.app/developers"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
          >
            site
          </Button>
          <Button
            href="https://github.com/MultCoJailData/MultCo-jail-data-BE/tree/dev/lib"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            code
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export function HTMLCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={html} />
        <Card.Body>
          <Card.Title style={{ color: '#66D9EF' }}>
            HTML
          </Card.Title>
          <Card.Text>
            HTML and some Vanilla Javascript for ASCII art game.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            href="https://aaronmullan.github.io/rockpaper/"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
          >
            site
          </Button>
          <Button
            href="https://github.com/AaronMullan/rockpaper"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            code
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export function OpensourceCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={opensource} />
        <Card.Body>
          <Card.Title style={{ color: '#66D9EF' }}>
            Open Source
          </Card.Title>
          <Card.Text>
            Gatsby, D3 for data visualization for Covid Tracking.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            href="https://covidtracking.com/about-data/visualization-guide"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
          >
            site
          </Button>
          <Button
            href="https://github.com/COVID19Tracking/website"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            code
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export function AboutCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title style={{ color: '#20c997' }}>
            About
          </Card.Title>
          <Card.Text class="about-text">
            Full Stack Developer focused on teamwork, learning, and having fun. In leiu of a traditional summary, please click below for 
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
