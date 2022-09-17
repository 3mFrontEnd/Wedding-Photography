// this part is for hamburger menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const sideNav = document.getElementById("sideNav");

sideNav.style.right == "-200px"
menuBtn.onclick =function(){
if(sideNav.style.right == "-200px"){
sideNav.style.right = "0"
menu.src = "./images/close.png";
}
else{
    sideNav.style.right = "-200px"
    menu.src = "./images/menu.png";
}
}


// for scrolling the page
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500,
	speedAsDuration: true
});