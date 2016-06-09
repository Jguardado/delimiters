import { combineReducers } from 'redux';
import PropertyData from './reducer_get_property';
import { PROPERTY_DATA } from '../actions/get_property';

const rootReducer = combineReducers({
  propertyData: PropertyData,
});

export default rootReducer;
