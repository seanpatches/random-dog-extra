import { GET_DOG } from '../actions/dogActions';

export default function reducer(state = {}, action){
  switch(action.type){
    case GET_DOG:
      return { ...state, img: action.payload };  
    default: return state;   
  }
}
