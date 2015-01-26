$(document).ready(function() {
	$('#linkButton').click(function() {
		var urlValue = $('#linkValue').val();
		var re = /=(\w+)$/;
		var videoID = urlValue.match(re)[1];
		console.log(videoID);
		var startAPi = '<iframe id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/';
  		var endApi = '?enablejsapi=1&origin=http://example.com" frameborder="0"></iframe>';
  		var wholeApi = startAPi + videoID + endApi;
		$('#player').append(wholeApi);
	})
});	
