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

// $(window).scroll(function(){
//   var sticky = $('nav'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });

// Getting the images
const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
// How many images seen on the page
const perView = 2.3
let totalScroll = 0
const delay = 3000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(delay)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 30
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '.3s'
}