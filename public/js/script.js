$(document).ready(function(){
    $('.btnState').click(function(){
      $('.hiddens').toggleClass('active')
    });
     });

// icons
    const sunIcon = document.querySelector(".sun")
    const moonIcon = document.querySelector(".moon")

    // Theme variables
    const userTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Toggling icons
  const iconToggle = () =>{
    moonIcon.classList.toggle("hidden")
    sunIcon.classList.toggle("hidden")
  }

// Checking theme
const themeCheck = ()=>{
  if(userTheme === "dark" || (!userTheme && systemTheme)){
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden")
    return;
  }
  sunIcon.classList.add("hidden")
}

// switch theme
const themeSwitch = () =>{
  if(document.documentElement.classList.contains("dark")){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
  }else{
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark")
    iconToggle();
  }
  
}

// button click
sunIcon.addEventListener("click", ()=>{
  themeSwitch()
})
moonIcon.addEventListener("click", ()=>{
  themeSwitch()
})

themeCheck()



document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
	slidesContainer.scrollLeft += slideWidth * 2;
});

prevButton.addEventListener("click", () => {
	slidesContainer.scrollLeft -= slideWidth * 2;
});



const pre = document.querySelector(".hero-img");

document.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

function rotateElement(event, element) {
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y)

  // find the middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  // console.log(middleX, middleY)

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  // console.log(offsetX, offsetY);

  // set rotation
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}


// Preloader screen 
const bounceWrapper = document.querySelector('.loader-body');
window.addEventListener('load', ()=>{
  document.querySelector('.loader-body').classList.add("disappear");
});
function finishedLoading(){
  setTimeout(()=>{
    bounceWrapper.style.display= "none";
  },7000) ; 
}
finishedLoading();