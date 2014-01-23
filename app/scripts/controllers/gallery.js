'use strict';

angular.module('zogalleryApp')
    .controller('GalleryCtrl', function ($scope) {

        $scope.title = 'C\'est qui le plus fort ?';

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
    });
