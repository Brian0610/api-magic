$(document).ready(function(){

	$(function(){
		$.getJSON('www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
			console.log(data); 
		})
	})	


}); 