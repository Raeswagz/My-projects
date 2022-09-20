///navbar toggle//

const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".link-container");


toggle.addEventListener("click", function (){
 //console.log(links.classList);
 //if(links.classList.contains("show-links")) {
 	//links.classList.remove("show-links");
 	//}else{
 	//	links.classList.add("show-links");
 	//}
 //links.classList.toggle("show-links");	
 const linksHeight = links.getBoundingClientRect().height;
 const linksContainerHeight = linksContainer.getBoundingClientRect().height;
 if (linksHeight === 0) {
  links.style.height = `${linksContainerHeight}px`;
 }
 else{
  links.style.height = 0;
 }
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

///menu
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const sectionCenter = document.querySelector(".section-center");
const menuButtons = document.querySelectorAll(".menu-btn");

//initial loading
window.addEventListener("DOMContentLoaded", function () {
   displayMenuItems(menu);
});

menuButtons.forEach(function (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    //console.log(e.currentTarget.dataset.id);
    const btnCategory = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if(menuItem.category === btnCategory) {
        return menuItem;
        //console.log(menuItem.category);
      }  
    }) 
    
    if(btnCategory === "all"){
       displayMenuItems(menu);
    } 
    else{
      displayMenuItems(menuCategory);
    }
  })
  
})

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
		return  `<article class="item-container">
              <div class="item-image-container">
                <img src=${item.img} class="item-photo"  alt=${item.title}>
              </div>
              <div class="item-info">
               <header>
                 <h4>${item.title}</h4>
                 <h4 class="price">$${item.price}</h4>
                 <button class="buy-btn">Buy</button>
               </header>
               <p class="item-text">
               ${item.desc}
               </p>
              </div>
              <!-----overlay-->
             <div class="product-overlay">
              <div class="product-message-holder">
              <header class="product-message-header">
                <h2>Contact Us</h2>
                <button class="product-close-btn">
                  <i class="bi bi-x"></i>
                </button>
              </header>
                <button class="contact-us-btns">
                  <i class="bi bi-whatsapp"></i>
                  <i class="bi bi-telephone" <a></i>
                </button>
              </div>
            </div>
            <!--end of overlay-->
            </article>`;
	});

	displayMenu = displayMenu.join("");
	//console.log(displayMenu);

	sectionCenter.innerHTML = displayMenu;



//contact information
const buyBtns = document.querySelectorAll(".buy-btn");
const productCloseBtn = document.querySelector(".product-close-btn");
const productOverlay = document.querySelector(".product-overlay");


    
      
buyBtns.forEach(function (buyBtn) {
  buyBtn.addEventListener("click", function (e) {
    productOverlay.classList.add("show-product-overlay");
    console.log(e.currentTarget.classList);
  }); 
}); 

productCloseBtn.addEventListener("click", function () {
  productOverlay.classList.remove("show-product-overlay");
});

} 

//video controller

const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener("click", function () {
  if(!switchBtn.classList.contains("slide")){
    switchBtn.classList.add("slide")
    video.pause();
  } 
  else{
    switchBtn.classList.remove("slide")
    video.play();
  }
});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
})

//copyright date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear(
);

//fixed nav and top link
const nav = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
if (scrollHeight > navHeight){
  nav.classList.add("fixed-nav");
}
else {
  nav.classList.remove("fixed-nav");
}

if (scrollHeight > 800) {
  topLink.classList.add("show-top-link");
}
else {
  topLink.classList.remove("show-top-link");
}
// console.log(scrollHeight);
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    //calculate the height
    const navHeight = nav.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (navHeight > 82){
      position = position + linksHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    links.style.height = 0;
  })
});

//history
const history = document.querySelector('.history-section');
const historyBtns = document.querySelectorAll(".history-btn");
const historyMsgs = document.querySelectorAll(".history-message");

history.addEventListener("click", function (e) {
  console.log(e.target.dataset.id)
  const id = e.target.dataset.id;
  if(id){
    //buttons
  historyBtns.forEach(function (historyBtn) {
    historyBtn.classList.remove("active");
    e.target.classList.add("active");
  })
  //messages
  historyMsgs.forEach(function (historyMsg){
    historyMsg.classList.remove("active");
    const element = document.getElementById(id);
    element.classList.add("active");
    //console.log(element.classList);
  }) 
  }
});



//birthday countdown
/*const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const birthdayUpdate = document.querySelector(".birthday-update");
const countdowns = document.querySelectorAll(".countdown-format h2");
const countdownHolder = document.querySelector(".countdown-holder");

const birthday = new Date(2022, 8, 19, 0, 0, 0);
//console.log(birthdayDate);
const birthdayYear = birthday.getFullYear();
const birthdayMonth = months[birthday.getMonth()];
const birthdayDay = weekdays[birthday.getDay()];
const birthdayDate = birthday.getDate();
const birthdayHour = birthday.getHours();
const birthdayMins = birthday.getMinutes();
const birthdaySecs = birthday.getSeconds();

birthdayUpdate.textContent = `${birthdayDay}, ${birthdayDate}th ${birthdayMonth}, ${birthdayYear} is the day!!!`
 
const futureTime = birthday.getTime();
//console.log(futureTime);


//calculate remaining time in milliseconds
function getRemainingTime () {
  const today = new Date().getTime();
//console.log(today);
  const time = futureTime - today;
  //console.log(time);
  //1s = 1000ms
  //60s = 1min
  //60mins = 1h
  //24h = 1day
  //values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute= 60 * 1000;
  const oneSec = 1000;
  //remaining time
  let remainingDay = Math.floor(time / oneDay);
  let remainingHour = Math.floor((time % oneDay) / oneHour);
  let remainingMin = Math.floor((time % oneHour) / oneMinute);
  let remainingSec = Math.floor((time % oneMinute) / oneSec);

function format (countdown) {
 if (countdown < 10) {
  return (countdown = `0${countdown}`);
 } 
 else{
  return countdown;
 }
 
}

  const values = [remainingDay, remainingHour, remainingMin, remainingSec];
  countdowns.forEach(function(countdown, index){
    countdown.innerHTML = format(values[index]);
  });

  if (time < 0) {
    clearInterval(reader);
    countdownHolder.innerHTML = `<h2 class="expired">Happy birthday, dude!!!</h2>`
  }
}




//set countdown reader
let reader = setInterval(getRemainingTime, 1000);
console.log(reader)

getRemainingTime();*/


//birthday countdown
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



const daysTag = document.querySelector(".days-tag");
const hoursTag = document.querySelector(".hours-tag");
const minsTag = document.querySelector(".mins-tag");
const secsTag = document.querySelector(".secs-tag");

const birthdayUpdate = document.querySelector(".birthday-update");
const countdownHolder = document.querySelector(".countdown-holder");

const birthday = new Date(2022, 8, 19, 0, 0, 0);
//console.log(birthdayDate);
const birthdayYear = birthday.getFullYear();
const birthdayMonth = months[birthday.getMonth()];
const birthdayDay = weekdays[birthday.getDay()];
const birthdayDate = birthday.getDate();
const birthdayHour = birthday.getHours();
const birthdayMins = birthday.getMinutes();
const birthdaySecs = birthday.getSeconds();

birthdayUpdate.textContent = `${birthdayDay}, ${birthdayDate}th ${birthdayMonth}, ${birthdayYear} is the day!!!`
 
const futureTime = birthday.getTime();
//console.log(futureTime);


//calculate remaining time in milliseconds
function getRemainingTime () {
  const today = new Date().getTime();
//console.log(today);
  const time = futureTime - today;
  //console.log(time);
  //1s = 1000ms
  //60s = 1min
  //60mins = 1h
  //24h = 1day
  //values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute= 60 * 1000;
  const oneSec = 1000;
  //remaining time
  let remainingDay = Math.floor(time / oneDay);
  let remainingHour = Math.floor((time % oneDay) / oneHour);
  let remainingMin = Math.floor((time % oneHour) / oneMinute);
  let remainingSec = Math.floor((time % oneMinute) / oneSec);

 

 
 function zero (item){
  if (item < 10) {
    return  (item = `0${item}`);
  }
  else{
    return item;
  }
 }

 daysTag.textContent = zero(remainingDay);
 hoursTag.textContent = zero(remainingHour);
 minsTag.textContent = zero(remainingMin);
 secsTag.textContent = zero(remainingSec);

 
  if (time < 0) {
    clearInterval(reader);
    countdownHolder.innerHTML = `<h2 class="expired">Happy birthday, dude!!!</h2>`
  }
}

//set countdown reader
let reader = setInterval(getRemainingTime, 1000);
console.log(reader)

getRemainingTime();


//generate paragraphs
const paragraph = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

const form = document.querySelector(".paragraph-form");
const amount = document.getElementById("amount");
const paragraphBtn = document.querySelector(".paragraph-button");
const paragraphArticle = document.querySelector(".paragraph");

form.addEventListener("submit", function(e){
  e.preventDefault();
  //console.log("hello");

  const value =  parseInt(amount.value);
  const randomParagraph = Math.floor(Math.random() * paragraph.length);
  
  if (isNaN(value) || value < 0 || value > 9) {
    paragraphArticle.innerHTML = `<p>${paragraph[randomParagraph]}</p>`
  }
  else{
    let tempParagraph = paragraph.slice(0, value);
    //console.log(tempParagraph)
    tempParagraph = tempParagraph.map(function (item){
      return `<p>${item}</p>`
    })
    .join("");
    paragraphArticle.innerHTML = tempParagraph;
   
  }
});


//grocery
//***SELECT ITEMS ****/
const alertContainer = document.querySelector(".alert-container");
const groceryAlert = document.querySelector(".alert");
const groceryForm = document.querySelector(".grocery-form");
const groceryItem = document.getElementById("grocery-item");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit option
let editElement;
let editFlag = false;
let editID = "";

//****EVENT LISTENERS****/
//submit form
groceryForm.addEventListener("submit", addItem);
//clear items
clearBtn.addEventListener("click", clearItems);
//load items
window.addEventListener("DOMContentLoaded", setupItems);

//******FUNCTIONS****/
function addItem(e){
  e.preventDefault();
  const groceryValue = groceryItem.value;
  const id = new Date().getTime().toString();
  if(groceryValue && !editFlag){
    createListItem(id, groceryValue);
   //display alert
   displayAlert(`${groceryValue} added to your shopping list`, "success");
   //show container
   groceryContainer.classList.add("show-grocery-container");
   //add to local storage
   addToLocalStorage(id, groceryValue);
   //set back to default
   setBackToDefault();

  }
  else if(groceryValue && editFlag){
    editElement.innerHTML = groceryValue; 
    displayAlert("Item edited.", "success");
    //edit local storage
    editLocalStorage (editID, groceryValue);
    setBackToDefault();
  }
  else{
    displayAlert("Please enter value", "danger" )

  }
}

//display alert
function displayAlert(text, action){
  alertContainer.classList.add("show-alert-container");
  groceryAlert.textContent = text;
  groceryAlert.classList.add(`alert-${action}`);

  //remove alert
  setTimeout(function () {
    alertContainer.classList.remove("show-alert-container");
    groceryAlert.textContent = "";
    groceryAlert.classList.remove(`alert-${action}`);
  }, 1000);
}

//delete function
function deleteItem (e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  groceryList.removeChild(element);
  if (groceryList.children.length < 1) {
   groceryContainer.classList.remove("show-grocery-container");
    console.log(groceryList.children.length)
  }
  displayAlert("Item deleted.", "success");
  setBackToDefault();
  //remove from local storage
  removeFromLocalStorage(id);
}

//edit function
function editItem (e) {
  const element = e.currentTarget.parentElement.parentElement;
// set edit item
editElement = e.currentTarget.parentElement.previousElementSibling;
// set form value
groceryItem.value = editElement.innerHTML;
editFlag = true;
editID = element.dataset.id;
submitBtn.textContent = "Edit";
}


// set back to default
function setBackToDefault() {
  groceryItem.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

//clear items 
function clearItems (){
  const groceryArticles = document.querySelectorAll(".grocery-article");

if (groceryArticles.length > 0) {
    groceryArticles.forEach(function (groceryArticle) {
    groceryList.removeChild(groceryArticle);
  });
}
groceryContainer.classList.remove("show-grocery-container");
displayAlert("List is cleared.", "success");
setBackToDefault();
localStorage.removeItem("groceryList"); 
};
//******LOCAL STORAGE****/
function addToLocalStorage(id, value) {
  const grocery = {id:id, value:value};
  //console.log(grocery);
  let items = getLocalStorage()
  console.log(items);
  items.push(grocery); 
  localStorage.setItem("groceryList", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
   
  });
  localStorage.setItem("groceryList", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function(item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("groceryList", JSON.stringify(items));
}

function getLocalStorage() {
 return localStorage.getItem("groceryList")
  ? JSON.parse(localStorage.getItem("groceryList"))
  : [];
}
//localStorage API
//setItem
//getItem
//removeItem
//save as strings
//localStorage.setItem("yam", JSON.stringify(["item", "item2"]));
//const yams = JSON.parse(localStorage.getItem("yam"));
//console.log(yams)
//localStorage.removeItem("yam");
//******SETUP ITEMS*****/
function setupItems () {
  let items = getLocalStorage();
  if (items.length > 0) {
   items.forEach(function (item) {
    createListItem(item.id, item.value)
   })
   groceryContainer.classList.add("show-grocery-container");
  }
};

function createListItem(id, groceryValue){
  const element = document.createElement("article");
    //add class
    element.classList.add("grocery-article");
    //add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="grocery-title">${groceryValue}</p>
    <div class="grocery-btn-container">
    <!-- edit btn -->
      <button type="button" class="edit-btn">
       <i class="bi bi-pencil-square"></i>
      </button>
    <!-- delete btn -->
     <button type="button" class="delete-btn">
       <i class="bi bi-trash"></i>
     </button>
   </div>`;
   const deleteBtn = element.querySelector(".delete-btn");
   const editBtn = element.querySelector(".edit-btn");
   deleteBtn.addEventListener("click", deleteItem);
   editBtn.addEventListener("click", editItem);

   //append child
   groceryList.appendChild(element);
}




