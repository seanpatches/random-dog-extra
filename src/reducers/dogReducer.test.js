import reducer from './dogReducer';
import { GET_DOG, PENDING_DOG } from '../actions/dogActions';
describe('test dog reducer', () => {
  it('handles the get action', () => {
    const initialState = {
      img: '',
      loading: false
    };
    

    const newState = reducer(initialState, {
      type: GET_DOG,
      payload: ['DogImage']
    });

    expect(newState).toEqual({
      loading: false,
      img: ['DogImage'],
    });
  });

  it('handles the pending action', () => {
    const initialState = {
      img: '',
      loading: false
    };

    const newState = reducer(initialState, {
      type: PENDING_DOG,
    });

    expect(newState).toEqual({
      loading: true,
      img: ''
    });

  });
});
