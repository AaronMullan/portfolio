import React from 'react';
import {
  CardDeck, Container,
} from 'react-bootstrap';
import {
  CssCard, ReactCard, NodeCard, HTMLCard, OpensourceCard, AboutCard,
} from './Cards';
import Header from './Header';

function App() {
  return (
    <>
      <div className="App">

        <div className="body">

          <div className="title-container">
            <Header />
          </div>
          <CardDeck>
            <ReactCard />
            <CssCard />
            <NodeCard />
          </CardDeck>
          <Container className="spacer" />
          <CardDeck>
            <HTMLCard />
            <OpensourceCard />
            <AboutCard />
          </CardDeck>
        </div>

      </div>
    </>
  );
}

export default App;
