import React from 'react';
import { Card, Button } from 'react-bootstrap';
import shavedave from './assets/shavedave.png';
import wantlistwatch from './assets/wantlistwatch.png';

export function CssCard() {
  return (
    <>
      <Card
        style={{ width: '18rem' }}
      >
        <Card.Img variant="top" src={shavedave} />
        <Card.Body>
          <Card.Title>CSS</Card.Title>
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
      <Card
        style={{ width: '18rem' }}
      >
        <Card.Img variant="top" src={wantlistwatch} />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
            Hooks, Async API calls and web scraping to find deals on Discogs.com
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
      <Card
        style={{ width: '18rem' }}
      >
        <Card.Img variant="top" src={wantlistwatch} />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
            Hooks, Async API calls and web scraping to find deals on Discogs.com
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