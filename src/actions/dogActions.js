import dogAPI from '../services/dogAPI';
import { createAction } from 'promise-middleware-redux';

export const [
  getDog,
  GET_DOG,
  PENDING_DOG,
] = createAction('getDog', dogAPI);
