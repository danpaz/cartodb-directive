'use strict';

/* services.js */


var servicesModule = angular.module('cartodbExampleApp.services', []);

servicesModule.value('mapId', 'map'); //DOM element ID where map is to be loaded. $('#map') here
servicesModule.value('layerUrlId', 'YOUR_LAYER_URL'); //url of the vizjson object