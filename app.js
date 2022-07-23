const outer = document.querySelector(".outer");
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener('click', () => {
	outer.classList.toggle("dark-bg");
	h1.classList.toggle("dark-heading");
	btn.classList.toggle("dark-btn");
})