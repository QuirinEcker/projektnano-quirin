document.getElementById("leftButton").onClick = function() {
	slideLeft();
}

document.getElementById("rightButton").onClick = function() {
	slideRight();
}

function slideLeft() {
	let slideShowNews = document.getElementsByClassName("slideshow-news")
	let status = 0;
	
	for(let i = 0; i < slideShowNews.length; i++ ) {
		if(i == status) {
			slideShowNews[i].style.display = "block";
		} else {
			slideShowNews[i].style.display = "none";
		}
	}
	
	if(status == 0) {
		status = slideShowNews.length;
	} else {
		status--;
	}
}

function slideRight() {
}