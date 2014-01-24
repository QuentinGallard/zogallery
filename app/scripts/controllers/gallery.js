'use strict';

angular.module('zogalleryApp')
    .controller('GalleryCtrl', function ($scope, $http) {
        $scope.title = 'C\'est qui le plus fort ?';
        $http.get('/api/gallery').success(function(pictures) {
            $scope.pictures = pictures;
        });
    });
