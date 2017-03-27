import googlemaps from '@google/maps';
import { response } from 'syncano-server';

import config from '../utils/config';

const { starting_point, destination } = ARGS;

const connection = googlemaps.createClient({
  key: config.googleMapsApiKey
});

connection.directions({
  origin: starting_point,
  destination: destination,
  units: config.unitSystem
}, (err, response) => {
  if (err) {
    return setResponse(new HttpResponse(err.status, JSON.stringify(error), 'application/json'));
  }
  return setResponse(new HttpResponse(response.status, JSON.stringify(response.json), 'application/json'));
});
