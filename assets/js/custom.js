const toggleElements = document.querySelectorAll(".btn-toggle");

toggleElements.forEach((elem) => {
	elem.addEventListener("click", () => {
		const targetElem = document.querySelector(elem.dataset.target);
		if (targetElem.classList.contains("active")) {
			targetElem.classList.remove("active");
			elem.classList.remove("opened");
		} else {
			targetElem.classList.add("active");
			elem.classList.add("opened");
		}
	});
});

const hoverElements = document.querySelectorAll(".btn-hover");

hoverElements.forEach((elem) => {
	elem.addEventListener("mouseenter", () => {
		const targetElem = document.querySelector(elem.dataset.target);
		targetElem.classList.add("active");
	});
	elem.addEventListener("mouseleave", () => {
		const targetElem = document.querySelector(elem.dataset.target);
		targetElem.classList.remove("active");
	});
});

const turnElements = document.querySelectorAll(".animate-turn");
let currentTurn = -1;

const updateTurn = (currentTurn) => {
	turnElements.forEach((elem) => elem.classList.remove("show"));
	turnElements[currentTurn].classList.add("show");
};

document.addEventListener("DOMContentLoaded", () => {
	const turnRound = () => {
		currentTurn++;
		currentTurn %= 4;
		updateTurn(currentTurn);
		setTimeout(turnRound, 5000);
	};
	turnRound();
});

const youtubeSliderItems = document.querySelectorAll("#youtube-slider-content .slide-item");

youtubeSliderItems.forEach((item) => {
	item.addEventListener("mouseover", () => {
		youtubeSliderItems.forEach((i) => i.classList.remove("slide-show"));
		item.classList.add("slide-show");
	});
});
