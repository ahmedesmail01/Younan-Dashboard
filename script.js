const btn = document.getElementById("btn");
const search = document.querySelector(".bx-search-alt");
const sidebar = document.getElementById("sidebar");

btn.onclick = () => {
	sidebar.classList.toggle("active");
};

search.onclick = () => {
	sidebar.classList.toggle("active");
};

/* bubbles script */
document.addEventListener("DOMContentLoaded", () => {
	const interBubble = document.querySelector(".interactive");
	let curX = 0;
	let curY = 0;
	let tgX = 0;
	let tgY = 0;

	function move() {
		curX += (tgX - curX) / 20;
		curY += (tgY - curY) / 20;
		interBubble.style.transform = `translate(${Math.round(
			curX
		)}px, ${Math.round(curY)}px)`;
		requestAnimationFrame(() => {
			move();
		});
	}

	window.addEventListener("mousemove", (event) => {
		tgX = event.clientX;
		tgY = event.clientY;
	});

	move();
});
