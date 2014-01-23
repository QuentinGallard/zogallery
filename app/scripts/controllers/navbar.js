'use strict';

angular.module('zogalleryApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
        'title': 'Gallery',
        'link' : '/gallery'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
