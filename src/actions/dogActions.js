import dogAPI from '../services/dogAPI';

export const GET_DOG = 'GET_DOG';
export const getDog = () => ({
  type: GET_DOG,
  payload: dogAPI()
});
