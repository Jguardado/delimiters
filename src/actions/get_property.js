import axios from 'axios';

export const PROPERTY_DATA = 'PROPERTY_DATA';
export const SINGLEPAGE_DATA = 'SINGLEPAGE_DATA';

export function getPropertyData(propertyName) {
  const request = axios.get('/property' + propertyName);

  return {
    type: PROPERTY_DATA,
    payload: request,
  };
}

export function getSinglePage(country) {
  const request = axios.get('/country' + country);

  return {
    type: SINGLEPAGE_DATA,
    payload: request,
  };

}
