import React, {Component} from 'react';
import {getPhoto} from './redux/reducer';
import { connect } from 'react-redux'

class RandomPic extends Component {
  render() {
    return(
      <img src="https://images.unsplash.com/photo-1486868018400-960892a825f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=2b44ce1e6e59c69ab0f90badbd07a618" alt="Random Picture">
      </img>
    )
  }
}

export default connect(null, {getPhoto} )(RandomPic);


//// TODO: Implement API calls for truly random pictures:
//// https://api.unsplash.com/photos/random/?client_id=$apiKey
