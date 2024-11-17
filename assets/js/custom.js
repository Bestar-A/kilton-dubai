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
