function navHoverOn(numberOfElement) {
	let hoverBlocks = document.getElementsByClassName("hoverPoint");

	hoverBlocks[numberOfElement].style.transform = "scale(0.8,1)";
}

function navHoverOff(numberOfElement) {
	let hoverBlocks = document.getElementsByClassName("hoverPoint");

	hoverBlocks[numberOfElement].style.transform = "scale(0,1)";
}
