import React from 'react';
import {
  CardDeck,
} from 'react-bootstrap';
import {
  TypescriptCard, CssCard, NodeCard, HTMLCard, OpensourceCard, JavascriptCard, JestCard, GatsbyCard,
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
              <TypescriptCard />
              <GatsbyCard />
            </CardDeck>

            <CardDeck>
              <OpensourceCard />
              {/* <ReactCard /> */}
              <CssCard />
            </CardDeck>

            <CardDeck>
              <HTMLCard />
              <JavascriptCard />
            </CardDeck>

            <CardDeck>
              <JestCard />
              <NodeCard />
            </CardDeck>
          </div>
        </div>
        <Footsie />

      </div>
    </>
  );
}

export default App;
