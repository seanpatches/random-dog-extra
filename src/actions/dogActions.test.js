import { getDog, GET_DOG } from './dogActions';

jest.mock('../services/dogAPI');

describe('getDog actions', () => {
  it('makes a getDog action', () => {
    expect(getDog()).toEqual({
      type: GET_DOG,
      payload: expect.any(Promise),
      fulfilledType: 'getDog_FULFILLED',
      pendingType: 'getDog_PENDING',
      rejectedType: 'getDog_REJECTED',
    });
  });
});
