import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './Map';
import RandomPic from './RandomPic';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey Look!  It's Us!</h1>
        <Map />

        <h1>Ah, and a beautiful picture.  What a day!</h1>
        <RandomPic />
      </div>
    );
  }
}

export default App;
