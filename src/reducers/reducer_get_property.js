import { PROPERTY_DATA, SINGLEPAGE_DATA } from '../actions/get_property';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'PROPERTY_DATA') {
    return action.payload.data.items;
  }

  if (action.type === 'SINGLEPAGE_DATA') {
    return action.payload.data;
  }

  return state;
};
