import googlemaps from '@google/maps';
import { response } from 'syncano-server';

import config from '../utils/config';

const { origin, destination } = ARGS;

const connection = googlemaps.createClient({
  key: config.googleMapsApiKey
});

connection.distanceMatrix({
  origins: origin,
  destinations: destination,
  units: config.unitSystem
}, (err, response) => {
  if (err) {
    return setResponse(new HttpResponse(err.status, JSON.stringify(error), 'application/json'));
  }
  return setResponse(new HttpResponse(response.status, JSON.stringify(response.json), 'application/json'));
});
