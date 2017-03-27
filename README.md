# syncano-socket-googlemaps

Syncano socket responsible for google maps api intergration.

## Endpoints

Support given API endpoints:

  * Directions
  * Distance
  * Elevation
  * Geocoding
  * Reverse Geocoding
  * Search Place
  * Nearby Places
  * Timezone

## Config

Before you start using you will need to create new project or use existing one in [Google Developer Console](https://developers.google.com/console) and activate all above endpoints for single API key.

Then please update your `utils/config.js` file with them, like show below:

```
export default {
  'googleMapsApiKey': '<YOUR_GOOGLEMAPS_API_KEY>',
  'unitSystem': 'metric' // or imperial
};
```

Also some endpoints have option to return values in given unit system, if you want change it from `mertric` to `imperial` change the `unitSystem` variable.
