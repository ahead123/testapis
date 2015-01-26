var express = require('express'),
	request = require('request'),
	app = express();

// "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	
});
