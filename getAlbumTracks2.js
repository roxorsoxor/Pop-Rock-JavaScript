// JavaScript Document
$(document).ready(function(){
	$.ajax({
		url: "https://api.spotify.com/v1/albums/2tivwwko3vqzzICWw3G9oB/tracks?limit=20&market=US",
		dataType: 'json',
		success: function(results){
			$.each(results.items, function (key, val){
				console.log(val.name + ' = ' + val.id);
			})

			/* console.log(results); */
		}
	});
});

/* $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
*/