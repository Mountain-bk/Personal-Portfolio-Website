
//Lists//
const lightColors = [" ", "blue", "orange", "gold", "red"]

const darkColors = ["dark-theme", "dark-theme bluedark", "dark-theme orangedark", "dark-theme golddark", "dark-theme reddark"]

const mainItem = [...document.getElementsByClassName("mainItem")]

const sections = [...document.getElementsByTagName("section")]

const navLink = [...document.getElementsByClassName("nav-link")]

const darkItems = [...document.getElementsByClassName("darkItems")]

//Toggle Dark Mode Light Mode//
const checkbox = document.querySelector(".darkLightSwitch");
checkbox.addEventListener("change", function(){
  document.body.classList.toggle("dark-theme");
});

//Change Background Color when Scroll Down//
window.addEventListener("scroll", function(){
  changeBackgroundColor(document.body.className);
})

//Fade Contents and Change Background Color when Scroll Down//
const items = document.querySelectorAll(".animation")
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if (entry.intersectionRatio > 0){
      entry.target.classList.add("appear");
    } else{
      entry.target.classList.remove("appear");
    }
  })
})

items.forEach(item => {
  observer.observe(item);
})

//Scroll Down when click Nav//
for (var i = 0; navLink.length > i; i++){
  navLink[i].addEventListener("click", function(){
    scrollDown(this.className);
  })
}

//Function List//

function changeBackgroundColor(key){
  for (i=0; mainItem.length > i; i++){
    var scrollTop = window.pageYOffset
    if (scrollTop <= mainItem[i].offsetTop){
      if (key == "dark-theme" || key == "dark-theme bluedark" || key == "dark-theme orangedark" || key == "dark-theme golddark" || key == "dark-theme reddark"){
        document.body.className = darkColors[i]
        break
      } else{
        document.body.className = lightColors[i]
        break
      }
    }
  }
}


function scrollDown(key){
  if (key == "a nav-link" || key == "a nav-link dark"){
    window.scrollTo({top: sections[1].offsetTop, behavior: "smooth"});
  } else if (key == "b nav-link" || key == "b nav-link dark"){
    window.scrollTo({top: sections[2].offsetTop, behavior: "smooth"});
  } else if (key == "c nav-link" || key == "c nav-link dark"){
    window.scrollTo({top: sections[3].offsetTop, behavior: "smooth"});
  } else if (key == "d nav-link" || key == "d nav-link dark"){
    window.scrollTo({top: sections[4].offsetTop, behavior: "smooth"});
  }
}



//Go to Link when Click Button//
function goTwitter(){
  open("https://twitter.com/home","_blank");
}
function goFacebook(){
  open("https://www.facebook.com/ryo.yamamoto.1042", "_blank");
}
function goLinkedin(){
  open("https://www.linkedin.com/in/ryo-yamamoto-9190591a7/", "_blank");
}
function goGmail(){
  open("mailto:ryochaaaan0414@gmail.com", "_blank");
}
function goCV(){
  open("CV-Ryo Yamamoto.pdf", "_blank");
}
