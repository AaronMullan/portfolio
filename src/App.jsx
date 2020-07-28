import React from 'react';
import {
  CardDeck, Container,
} from 'react-bootstrap';
import {
  CssCard, ReactCard, NodeCard, HTMLCard, OpensourceCard, JavascriptCard,
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
          </CardDeck>
          <Container className="spacer" />
          <CardDeck>
            <NodeCard />
            <HTMLCard />
            <OpensourceCard />
          </CardDeck>
          <Footsie />
        </div>

      </div>
    </>
  );
}

export default App;
