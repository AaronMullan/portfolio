/* eslint-disable max-len */
import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Hero() {
  return (
    <Jumbotron>
      <p>

        {' '}
        <span className="hello">Hello, World!  </span>
        I am a Software Developer currently focused on the Front End, in a tech stack of Gatsby / React / GraphQL / Theme UI / Typescript, which we used to build
        {' '}
        <a
          href="https://www.sprinklr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sprinklr.com
        </a>
        .
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Previous to coding, I worked as an Audio Engineer, primarily for the band
        {' '}
        <span className="lighter">Sonic Youth</span>
        , managing their studio and doing live sound. I engineered or performed at over 1,000 concerts, and earned over
        {' '}
        <a
          href="https://www.discogs.com/artist/265506-Aaron-Mullan"
          target="_blank"
          rel="noopener noreferrer"
        >
          120 recording credits
        </a>
        . Publications include articles in industry-leading magazine
        {' '}
        <a
          href="https://tapeop.com/articles/by/aaron-mullan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tape Op
        </a>
        {' '}
        , as well as in
        {' '}
        <a
          href="https://www.vice.com/en_us/article/jmde8k/fuckin-v12n3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vice
        </a>
        , and composing and mixing credits include the NSFW
        {' '}
        <a
          href="https://www.youtube.com/watch?v=wa3kaK1MH90"
          target="_blank"
          rel="noopener noreferrer"
        >
          Viceland
        </a>
        {' '}
        cable network.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;These days bring the passion for craftsmanship and collaboration that made me successful in that field to software development. I have a relentless curiosity tempered by an ability to focus on the task at hand. An uncanny dedication to teamwork forged by years on the road and in the studio has given me the ability to communicate with all stakeholders to develop a vision and translate that into an inspiring and technically excellent product.
      </p>
    </Jumbotron>
  );
}
