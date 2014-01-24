'use strict';

angular.module('zogalleryApp')
    .controller('GalleryCtrl', function ($scope, $http) {
        $http.get('/api/gallery').success(function(gallery) {
            $scope.title = gallery.title;
            $scope.pictures = gallery.pictures;
        });
    });
