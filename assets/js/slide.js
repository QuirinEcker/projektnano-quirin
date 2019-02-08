let status = 0;
setTimeout(display, 100);

document.getElementById("leftButton").onClick = function() {
	slideLeft();
}

document.getElementById("rightButton").onClick = function() {
	slideRight();
}

//document.html.body.addEventListener("load", display);

function slideLeft() {
	let slideShowNews = document.getElementsByClassName("slideshow-news");
	status--;
	
	if(status < 0) {
		status = slideShowNews.length - 1;
	}
	
	display();
}

function slideRight() {
	let slideShowNews = document.getElementsByClassName("slideshow-news");
	status++;
	
	if(status > slideShowNews.length - 1) {
		status = 0;
	}
	
	display();
}

function display() {
	let slideShowNews = document.getElementsByClassName("slideshow-news")
	
	for(let i = 0; i < slideShowNews.length; i++) {
		if(i === status) {
			slideShowNews[i].style.display = "block";
		} else {
			slideShowNews[i].style.display = "none";
		}
	}
}