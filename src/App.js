import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map';
import RandomPic from './components/RandomPic';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="parent">
        <div>
          <h1>Ah, a beautiful picture. </h1>
          <RandomPic />
        </div>

        <div>
          <h1>And What Do You Know! It's Us!</h1>
          <Map />
          <h6>I guess Google really does know all</h6>
        </div>
      </div>
    );
  }
}

export default App;
