import React, {Component} from 'react';


export default class Map extends Component{
  render(){
    return(
      <iframe className="map" src="//www.google.com/maps/embed/v1/place?q=560+S+100+W+St,+Provo,+UT+84601
      &zoom=15
      &key=AIzaSyC61eVKXJ8O9-UVh-5UCpFGRWteUOUMA-0">
      </iframe>
    )
  }


}
