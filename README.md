# AngularJS Directive for CartoDB

A simple directive for [Angular](http://angularjs.org) which allows integration of [CartoDB](http://cartodb.com) map visualizations. This directive creates a new visualization at runtime, allowing the most flexibility to set options and manipulate layers from the client.

Follow the steps below to try a fullscreen demo

## Installation

You will need [node.js](http://nodejs.org/).

	$ bower install

Update your visualization layer URL in src/services.js, and run the app at localhost:8000\app\index.html. This is the webserver from the [angular seed app](https://github.com/angular/angular-seed).

	node scripts/web-server.js
	
## Customize

Attributes for the visualization options can be set on the map-wrapper directive in index.html. Otherwise default values are used. 

Refer to the [cartodb docs](http://developers.cartodb.com/documentation/cartodb-js.html#sec-3-1).

| Attribute     	| Default   	|	
| -----------------	| -------------	|
| `shareable`    	| `true` 		|
| `title`     		| `true` 	    |
| `description` 	| `true`     	|
| `search-control` 	| `false`		|
| `zoom-control` 	| `true`   	  	|
| `loader-control` 	| `true`     	|
| `center-lat`    	| `0`			|
| `center-lon`   	| `0`		    |
| `zoom`	 		| `3`     		|
| `cartodb-logo`  	| `true` 		|
| `infowindow`   	| `true`  	    |
| `layer-selector`	| `true`     	|
| `legends`			| `true` 		|
| `https`		   	| `false`   	|
| `scroll-wheel`	| `true`     	|
| `fullscreen`		| `true`		|

	
