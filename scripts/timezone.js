import googlemaps from '@google/maps';
import { response } from 'syncano-server';

import config from '../utils/config';

const { location } = ARGS;

const connection = googlemaps.createClient({
  key: config.googleMapsApiKey
});

connection.timezone({
  location
}, (err, response) => {
  if (err) {
    return setResponse(new HttpResponse(err.status, JSON.stringify(error), 'application/json'));
  }
  return setResponse(new HttpResponse(response.status, JSON.stringify(response.json), 'application/json'));
});
