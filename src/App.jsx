import React from 'react';
import {
  CardDeck,
} from 'react-bootstrap';
import {
  TypescriptCard, CssCard, ReactCard, NodeCard, HTMLCard, OpensourceCard, JavascriptCard, JestCard, PHPCard, GatsbyCard,
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
              <TypescriptCard/>
              <GatsbyCard />
            </CardDeck>

            <CardDeck>
              <ReactCard />
              <CssCard />
            </CardDeck>

            <CardDeck>
              <OpensourceCard />
              <HTMLCard />
            </CardDeck>
            
            <CardDeck>
              <JestCard />
              <NodeCard />
            </CardDeck>
            <CardDeck>
              <JavascriptCard />
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
