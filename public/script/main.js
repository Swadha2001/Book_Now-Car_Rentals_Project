let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("bx-x");
	navbar.classList.remove("active");
};

const sr = ScrollReveal({
	distance: "60px",
	duration: 900,
	delay: 70,
	reset: true,
});

sr.reveal(".text", { delay: 30, origin: "top" });
sr.reveal(".form-container form", { delay: 150, origin: "left" });
sr.reveal(".heading", { delay: 150, origin: "top" });
sr.reveal(".ride-container .box", { delay: 150, origin: "top" });
sr.reveal(".services-container .box", { delay: 150, origin: "top" });
sr.reveal(".about-container", { delay: 150, origin: "top" });
sr.reveal(".reviews-container", { delay: 150, origin: "top" });
sr.reveal(".newsletter .box", { delay: 150, origin: "bottom" });
