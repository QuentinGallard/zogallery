'use strict';

angular.module('zogalleryApp')
  .controller('NavbarCtrl', ['$scope','$location', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Gallery',
      'link': '/'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
