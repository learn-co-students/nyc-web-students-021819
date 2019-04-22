import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <div>
    <App >
      <div style={{color: "red"}}>
        HELLO
      </div>
    </App>
    <App>
      <h1 style={{color: "blue"}}>
        SECOND
      </h1>
    </App>
  </div>
  , document.getElementById('root'));