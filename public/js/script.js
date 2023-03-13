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

$(window).scroll(function(){
  var sticky = $('nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});