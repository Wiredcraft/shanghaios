$ = require('jquery');

// **Very** simple one liner to illustrate adding JS
$('a[href="'+ window.location.href +'"]').addClass('active');

// var map = mapbox.auto('map', 'examples.map-vyofok3q');


// Create map
var layer = mapbox.layer().id('tmcw.map-2f4ad161');
var map = mapbox.map('location', layer, null, []);
map.centerzoom({ lat: 31.230393 , lon: 121.473704 }, 12);
