import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GridSystem from './GridSystem';

let el = document.getElementById('react-app');
let index = (
  <React.StrictMode>
    <GridSystem />
  </React.StrictMode>
);

ReactDOM.render(index, el);