'use strict';

/* CartoDB Directive */


angular.module('cartodbExampleApp.directives', []).
directive('mapWrapper',['mapId', 'layerUrlId', function(mapId, layerUrlId) {
    return {
      restrict: "A",
      templateUrl: '../app/views/map.html',
      /* Link function loads in the cartodb vis */
      link: function(scope, elm, attrs) {
          
        // use default options if nothing is specified in the attributes
        // $eval is needed to evaluate the observed attribute expression
        var mapOptions = {
          shareable: (attrs.shareable) ? scope.$eval(attrs.shareable) : true, //shareable
          title: (attrs.title) ? scope.$eval(attrs.title) : true, //title
          description: (attrs.description) ? scope.$eval(attrs.description) : true, //description
          searchControl: (attrs.searchControl) ? scope.$eval(attrs.searchControl) : false, //search-control
          zoomControl: (attrs.zoomControl) ? scope.$eval(attrs.zoomControl) : true, //zoom-control
          loaderControl: (attrs.loaderControl) ? scope.$eval(attrs.loaderControl) : true, //loader-control
          center_lat: (attrs.centerLat) ? scope.$eval(attrs.centerLat) : 0, //center-lat
          center_lon: (attrs.centerLon) ? scope.$eval(attrs.centerLon) : 0, //center-lon
          zoom: (attrs.zoom) ? scope.$eval(attrs.zoom) : 3, //zoom
          cartodb_logo: (attrs.cartodbLogo) ? scope.$eval(attrs.cartodbLogo) : true, //cartodb-logo
          infowindow: (attrs.infowindow) ? scope.$eval(attrs.infowindow) : true, //attrs.infowindow
          layer_selector: (attrs.layerSelector) ? scope.$eval(attrs.layerSelector) : true, //layer-selector
          legends: (attrs.legends) ? scope.$eval(attrs.legends) : true, //legends
          https: (attrs.https) ? scope.$eval(attrs.https):  false, //https
          scrollWheel: (attrs.scrollWheel) ? scope.$eval(attrs.scrollWheel): true, //scroll-wheel
          fullscreen: (attrs.fullscreen) ? scope.$eval(attrs.fullscreen) : true //fullscreen
        };

        cartodb.createVis(mapId, layerUrlId, mapOptions)
        .done(function(vis, layers) {
          // Assign map variables to the $scope so we can stuff with them.
          // We must use $apply because the done() callback does not trigger a $digest cycle.
          scope.$apply(function() {
            scope.vis = vis;
            scope.basemap = layers[0];
            scope.mapLayers = layers[1];
          });
        })
        .error(function(err) {
          console.log(err);
        });
      }
  };
}]);