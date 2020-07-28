import React from 'react';
import {
  CardDeck, Container,
} from 'react-bootstrap';
import {
  CssCard, ReactCard, NodeCard, HTMLCard, OpensourceCard, JavascriptCard,
} from './Cards';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <>
      <div className="App">

        <div className="body">

          <div className="title-container">
            <Header />
          </div>
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
          <Hero />
        </div>

      </div>
    </>
  );
}

export default App;
