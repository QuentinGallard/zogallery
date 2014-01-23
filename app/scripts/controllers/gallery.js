'use strict';

angular.module('zogalleryApp')
    .controller('GalleryCtrl', function ($scope) {
        $scope.pictures = [{
            'name': 'Elephant',
            'src': '/images/elephant.jpeg'
        },{
            'name': 'Hippopotame',
            'src' : '/images/hippopotame.jpg'
        },{
            'name': 'Rhinoceros',
            'src' : '/images/rhinoceros.jpg'
        }];

        console.log($scope.pictures);
    });
