var images = ['./images/placeholderLogo.png','./images/eventImage1.jpg', './images/eventImage2.jpg', './images/placeholderLogo.png'];
var counter = 0;
function switchImages () {
	if(counter < images.length-1) {

		counter++

		for ( image in images ) {
			$('#logo').attr("src",images[counter]);
		}
	}
}

function placeholder () {
		$('#logo').hover(setInterval(switchImages,3000));
	};

placeholder();
