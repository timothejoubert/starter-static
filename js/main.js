
/* menu */ 
var btn = document.querySelector(".burger");
var nav = document.getElementsByTagName("nav")[0];

btn.addEventListener("click", () => {
	nav.classList.toggle("open");
})