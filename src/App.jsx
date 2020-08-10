import React from 'react';
import {
  CardDeck, Container,
} from 'react-bootstrap';
import {
  CssCard, ReactCard, NodeCard, HTMLCard, OpensourceCard, JavascriptCard, JestCard, PHPCard,
} from './Cards';
import Header from './Header';
import Hero from './Hero';
import Footsie from './Footsie';

function App() {
  return (
    <>
      <div className="App">

        <div className="body">

          <div className="title-container">
            <Header />
          </div>
          <Hero />
          <CardDeck>
            <JavascriptCard />
            <ReactCard />
            <CssCard />
            <HTMLCard />
          </CardDeck>
          <Container className="spacer" />
          <CardDeck>
            <NodeCard />
            <OpensourceCard />
            <JestCard />
            <PHPCard />
          </CardDeck>
          <Footsie />
        </div>

      </div>
    </>
  );
}

export default App;
