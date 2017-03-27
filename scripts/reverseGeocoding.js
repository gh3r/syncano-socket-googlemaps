import googlemaps from '@google/maps';
import { response } from 'syncano-server';

import config from '../utils/config';

const { latitude, longitude } = ARGS;

const connection = googlemaps.createClient({
  key: config.googleMapsApiKey
});

connection.reverseGeocode({
  latlng: { latitude, longitude }
}, (err, response) => {
  if (err) {
    return setResponse(new HttpResponse(err.status, JSON.stringify(error), 'application/json'));
  }
  const addresses = response.json.results.map((result) => result.formatted_address);

  return setResponse(new HttpResponse(response.status, JSON.stringify(addresses), 'application/json'));
})
