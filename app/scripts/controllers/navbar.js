'use strict';

angular.module('zogalleryApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Gallery',
      'link': '/'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
