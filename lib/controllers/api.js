'use strict';

/**
 * Get awesome things
 */

exports.gallery = function(req, res) {
    res.json({
        'title' : 'C\'est qui le plus fort alors ?',
        'pictures' :
            [{
                'name': 'Naomi',
                'src': '/images/elephant.jpeg',
                'width': 1024,
                'height': 768
            },{
                'name': 'Claudia',
                'src' : '/images/hippopotame.jpg',
                'width': 1024,
                'height': 768
            },{
                'name': 'Carla',
                'src' : '/images/rhinoceros.jpg',
                'width': 800,
                'height': 598
            },{
                'name' : 'Donatella et Cynthia',
                'src' : '/images/MammothVsMastodon.jpg',
                'width': 1024,
                'height': 356
            }]
    });
};