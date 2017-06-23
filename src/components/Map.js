import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gMapsApi} from '../apiKeys'


export default class Map extends Component{
  render(){
    return(
      <iframe className="map" src={`//www.google.com/maps/embed/v1/place?q=560+S+100+W+St,+Provo,+UT+84601
      &zoom=15
      &key=${gMapsApi}`}>
      </iframe>
    )
  }


}
