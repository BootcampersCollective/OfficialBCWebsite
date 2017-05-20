var images = ['images/test.jpg', 'images/test2.jpg', 'images/test3.jpg']; 
var counter = 0;
function switchimages(){
	counter++;
	if(counter > images.length-1){ 
		counter = 0;
	}
	console.log(counter);
	$('#caros').fadeOut(1000, function(){ $('#caros').attr("src",images[counter]); })
	$('#caros').fadeIn(1000);
}
setInterval(switchimages, 3000);