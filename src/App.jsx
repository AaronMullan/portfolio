import React from 'react';
import {
  CardDeck,
} from 'react-bootstrap';
import {
  CssCard, ReactCard, NodeCard, HTMLCard, OpensourceCard, JavascriptCard, JestCard, PHPCard, GatsbyCard,
} from './Cards';
import Header from './Header';
import Hero from './Hero';
import Footsie from './Footsie';

function App() {
  return (
    <>
      <div className="App">

        <div className="title-container">
          <Header />
        </div>
        <div className="body">
          <div>
            <Hero />
          </div>
          <div className="deck-container">
            <CardDeck>
              <ReactCard />
              <GatsbyCard />
            </CardDeck>

            <CardDeck>
              <CssCard />
              <HTMLCard />
            </CardDeck>

            <CardDeck>
              <OpensourceCard />
              <JavascriptCard />
            </CardDeck>
            
            <CardDeck>
              <JestCard />
              <NodeCard />
            </CardDeck>
            <CardDeck>
              <PHPCard />
            </CardDeck>
          </div>
        </div>
        <Footsie />

      </div>
    </>
  );
}

export default App;
