import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Text from 'markov-chains-text';
import _ from 'lodash';
import sampleText from './sampleText';

import './App.css';

function App() {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);

  const fakeText = new Text(sampleText);
  const paragraph = _.times(4, (i) => fakeText.makeSentence(i));
  // (i) => Math.pow(2, i)
  console.log(paragraph);
  return (
    <>
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={1}>Option 1</ToggleButton>
        <ToggleButton value={2}>Option 2</ToggleButton>
        <ToggleButton value={3}>Option 3</ToggleButton>
      </ToggleButtonGroup>
      <h1>Please enjoy this custom</h1>
      <h3>toggle options above for a fresh semi-coherent paragraph</h3>
      { 1 && (

      <p>{paragraph.join()}</p>
      )}
    </>
  );
}

export default App;
