import { PROPERTY_DATA, SINGLEPAGE_DATA } from '../actions/get_property';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'PROPERTY_DATA') {
    // console.log(action.payload.data.items);
    //this will need to be changed to ction.payload.data once I figure out the api call
    return action.payload.data.items;
  }

  if (action.type === 'SINGLEPAGE_DATA') {
    console.log(action.payload.data.main);
    return action.payload.data;
  }

  return state;
};
