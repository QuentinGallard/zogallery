'use strict';

angular.module('zogalleryApp')
    .controller('GalleryCtrl', ['$scope', '$http', function ($scope, $http) {
        //Todo put this in a service
        $http.get('/api/gallery').success(function(gallery) {
            $scope.title = gallery.title;
            $scope.pictures = gallery.pictures;
        });
    }]);
