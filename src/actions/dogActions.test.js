import { getDog, GET_DOG } from './dogActions';


describe('getDog actions', () => {
  it('makes a getDog action', () => {
    expect(getDog(0, 'My Comment')).toEqual({
      type: GET_DOG,
      payload: { postId: 0, comment: 'My Comment' }
    });
  });
});
