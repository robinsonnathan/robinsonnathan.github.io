import axios from 'axios';
import {photoApi} from '../apiKeys';

const initialState = {
  photoUrl: '',
  photoCreditName: '',
  photoCreditUrl: '',
  photoLocation: '',
  loading: true,
  failed: false
}

const PHOTOSTATUS = 'PHOTOSTATUS';

export default function reducer(state = initialState, action) {
  console.log(action.type)

  switch (action.type) {
    case PHOTOSTATUS + '_PENDING':
      console.log("Pending Promise")
      return {loading: true}

    case PHOTOSTATUS + '_FULFILLED':
      return {photoUrl: action.payload.urls.small,
        photoCreditName: action.payload.user.name,
        photoCreditUrl: action.payload.user.links.html,
        photoLocation: action.payload.user.location,
        loading: false}

    case PHOTOSTATUS + '_REJECTED':
      return {failed: true}

    default:
      return state;
  }
}

export function getPhoto() {
  const url = `https://api.unsplash.com/photos/random/?client_id=${photoApi}`
  const promise = axios.get(url).then(response => response.data);
  return {type: PHOTOSTATUS, payload: promise}
}
