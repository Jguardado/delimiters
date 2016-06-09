import axios from 'axios';

export const PROPERTY_DATA = 'PROPERTY_DATA';
export const SINGLEPAGE_DATA = 'SINGLEPAGE_DATA';

export function getPropertyData(propertyName) {
  //I will be adding the property name here
  console.log('example string /property' + propertyName);
  const request = axios.get('/property' + propertyName);

  return {
    type: PROPERTY_DATA,
    payload: request,
  };
}

export function getSinglePage(country) {
  console.log('example string /country' + country);
  const request = axios.get('/country' + country);
  console.log('getting our request', request);
  return {
    type: SINGLEPAGE_DATA,
    payload: request,
  };

}
