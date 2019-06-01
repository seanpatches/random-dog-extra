import { GET_DOG, PENDING_DOG } from '../actions/dogActions';

const initialState = {
  img: '',
  loading: false
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case GET_DOG:
      return { ...state, img: action.payload, loading: false };
    case PENDING_DOG:
      return { ...state, loading: true };
    default: return state;   
  }
}
