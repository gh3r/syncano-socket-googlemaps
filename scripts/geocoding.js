import googlemaps from '@google/maps';
import { response } from 'syncano-server';

import config from '../utils/config';

const { address } = ARGS;

const connection = googlemaps.createClient({
  key: config.googleMapsApiKey
});

connection.geocode({
  address
}, (err, response) => {
  if (err) {
    return setResponse(new HttpResponse(err.status, JSON.stringify(error), 'application/json'));
  }
  return setResponse(new HttpResponse(response.status, JSON.stringify(response.json.results[0].geometry.location), 'application/json'));
})
