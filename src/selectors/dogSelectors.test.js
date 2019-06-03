import { selectDog, selectDogPending } from './dogSelector';

describe('comment selectors', () => {
  it('gets all comments by post id', () => {
    const state = {
      dog:{ 
        img: 'found'
      }
    };

    expect(selectDog(state)).toEqual('found');
  });

  it('gets all comments by post id', () => {
    const state = {
      dog:{ 
        img: 'found',
        loading: false
      }
    };

    expect(selectDogPending(state)).toBeFalsy();
  });
});
