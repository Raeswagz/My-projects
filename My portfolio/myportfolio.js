///navbar toggle//

const btn = document.querySelector(".toggle");
const links = document.querySelector(".links")


btn.addEventListener("click", function (){
 //console.log(links.classList);
 //if(links.classList.contains("show-links")) {
 	//links.classList.remove("show-links");
 	//}else{
 	//	links.classList.add("show-links");
 	//}
 links.classList.toggle("show-links");	
});


//About Me///
//my info//
const info = [
{
	id: 1,
	img: "./images/B2.jpg",
	text: 
	    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},

{
	id: 2,
	img: "./images/B3.jpg",
	 text:
         "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",

},

{
	id: 3,
	img: "./images/B4.jpg",
	 text:
         "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.", 

},

{
	id: 4,
	img: "./images/B5.jpg",
	 text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",

},

{
	id: 5,
	img: "./images/B6.jpg",
	 text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",

},

]

const colors = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]

//select items
const image = document.getElementById("img");
const text = document.querySelector(".comment");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const aboutMe = document.querySelector(".About-me-holder")

currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function (){
	showInfo();
});

function showInfo(){
	const item = info[currentItem];
	image.src = item.img;
	text.textContent = item.text;

};

function changeColor(){
	eachColor = "#";

	for (let i = 0; i < 6; i++) {
		eachColor += colors[getRandomNumber()];
	}
	console.log(eachColor);
	aboutMe.style.backgroundColor = eachColor;

};

function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
};

//prev and next//
nextBtn.addEventListener("click", function (){
	currentItem++;
	if(currentItem > info.length - 1) {
		currentItem = 0;
	}
	showInfo();
	changeColor();
});

prevBtn.addEventListener("click", function (){
	currentItem--;
	if(currentItem < 0) {
		currentItem = info.length - 1;
	}
	showInfo();
	changeColor();
});


//Resume overlay
const resumeBtn = document.querySelector(".Resume-btn");
const closeBtn = document.querySelector(".close-btn");
const resumeOverlay = document.querySelector(".Resume-overlay");

resumeBtn.addEventListener("click", function (){
	//console.log(resumeOverlay.classList);
	resumeOverlay.classList.add("show-Resume-overlay");

});

closeBtn.addEventListener("click", function (){
	//console.log(resumeOverlay.classList);
	resumeOverlay.classList.remove("show-Resume-overlay");

});

//Projects

//Transversing the DOM
//const projectBtns = document.querySelectorAll(".projects-btn");

//projectBtns.forEach(function (projectBtn) {
//	projectBtn.addEventListener("click", function (e) {
//		const projects = e.currentTarget.parentElement.parentElement;
//		projects.classList.toggle("show-project-text");
//
//		
//

//using selectors inside the element
const projects = document.querySelectorAll(".projects");


projects.forEach(function (project) {
	const projectBtn = project.querySelector(".projects-btn");
	projectBtn.addEventListener("click", function () {
    projects.forEach(function (item) {
		if (item !== project) {
			item.classList.remove("show-project-text");
		}
	});
	
		project.classList.toggle("show-project-text");
	})

});

