import { FETCH_POSTS, FETCH_POST } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
  }

  return state;
}