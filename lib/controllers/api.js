'use strict';

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};

exports.gallery = function(req, res) {
    res.json([
        {
            'name': 'Elephant',
            'src': '/images/elephant.jpeg'
        },{
            'name': 'Hippopotame',
            'src' : '/images/hippopotame.jpg'
        },{
            'name': 'Rhinoceros',
            'src' : '/images/rhinoceros.jpg'
        },{
            'name' : 'Mammouth vs Mastodon',
            'src' : '/images/MammothVsMastodon.jpg'
        }
    ]);
};