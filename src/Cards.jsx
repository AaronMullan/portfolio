import React from 'react';
import {
  Card, Button, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import shavedave from './assets/shavedave.png';
import wantlistwatch from './assets/wantlistwatch.png';
import node from './assets/node.png';
import html from './assets/html.png';
import opensource from './assets/opensource.png';
import javascript from './assets/javascript.png';
import jest from './assets/jest.png';
import php from './assets/php.png';

function reactTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      App for finding users the best deals on items in the Discogs.com Marketplace. Use your own username, or borrow mine: aaroncmullan.
    </Tooltip>
  );
}

export function ReactCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={reactTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
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
      </OverlayTrigger>
    </>
  );
}
function cssTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      Site and scoreboard for a fundraising event to benefit restaurant workers effected by Covid-19 in Baltimore, MD.
    </Tooltip>
  );
}
export function CssCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={cssTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={shavedave} />
          <Card.Body>
            <Card.Title style={{ color: '#F92672' }}>CSS</Card.Title>
            <Card.Text>
              Responsive CSS to maintain tournament bracket.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="https://shave-dave.netlify.app/"
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
      </OverlayTrigger>
    </>
  );
}
function nodeTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      Public API for data about detentions in Multnomah County, OR utilizing info scraped from the County Sheriff&apos;s website.
    </Tooltip>
  );
}
export function NodeCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={nodeTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
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
      </OverlayTrigger>
    </>
  );
}
function htmlTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      Rock-paper-scissors game with homemade sound effects and artificial unintelligence.
    </Tooltip>
  );
}
export function HTMLCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={htmlTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={html} />
          <Card.Body>
            <Card.Title style={{ color: '#FD971F' }}>
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
      </OverlayTrigger>
    </>
  );
}

function openSourceTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      Open source project to track and visualize Covid-19 testing data in the USA.
    </Tooltip>
  );
}

export function OpensourceCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={openSourceTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={opensource} />
          <Card.Body>
            <Card.Title style={{ color: '#E6DB74' }}>
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
      </OverlayTrigger>
    </>
  );
}
function javascriptTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      JavaScript-based synthesizer app featuring MIDI and keyboard support, an unlimited effects chain, and real-time waveform visualization.
    </Tooltip>
  );
}
export function JavascriptCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={javascriptTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={javascript} />
          <Card.Body>
            <Card.Title style={{ color: '#E6DB74' }}>
              Javascript
            </Card.Title>
            <Card.Text>
              Web Audio API to make a browser-based synthesizer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="https://whateversynth.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
            >
              site
            </Button>
            <Button
              href="https://github.com/whateverSynth/whateverSynth-frontend"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              code
            </Button>
          </Card.Footer>
        </Card>
      </OverlayTrigger>
    </>
  );
}
function jestTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      Jest coverage of 79.7% on an Express/Node/MongoDB backend for cataloging a record collection.
    </Tooltip>
  );
}
export function JestCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={jestTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={jest} />
          <Card.Body>
            <Card.Title>
              Jest
            </Card.Title>
            <Card.Text>
              Jest coverage on database routes and models.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="https://github.com/AaronMullan/record-database/tree/master/lib/models"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
            >
              models
            </Button>
            <Button
              href="https://github.com/AaronMullan/record-database/tree/master/__tests__"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              routes
            </Button>
          </Card.Footer>
        </Card>
      </OverlayTrigger>
    </>
  );
}
function phpTooltip(props) {
  return (
    <Tooltip id="react-tooltip" {...props}>
      {/* eslint-disable-next-line max-len */}
      A shallow dive into the Laravel framework.
    </Tooltip>
  );
}
export function PHPCard() {
  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={phpTooltip}
      >
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={php} />
          <Card.Body>
            <Card.Title style={{ color: '#F92672' }}>PHP</Card.Title>
            <Card.Text>
              PHP with Laravel for quickie band site.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="https://phpgoof.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
            >
              site
            </Button>
            <Button
              href="https://github.com/AaronMullan/phptallfirs"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              code
            </Button>
          </Card.Footer>
        </Card>
      </OverlayTrigger>
    </>
  );
}
