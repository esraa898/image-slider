const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".option");
const slides = document.querySelectorAll(".img");

var index = 0;
var size = slides[index].clientWidth;

update();
function update() {
  slider.style.transform ="translateX("+ (-size * index) +"px)";
 options.forEach(option => option.classList.remove("colored"));
  options[index].classList.add("colored"); 
  
}

function slide() {
  slider.style.transtion = "transfoem .3s ease-in-out";
if (index === 6 ){
  index = 0;
}
else if (index ===0 ){
  index ++;}

  update();
}


function btncheck() { 
   	index++;
  slide();
}
function optionfunc(){
   let i = Number(this.getAttribute("option-index"));
   index = i ;
   
  
   slide();
}


buttons.forEach((btn) => btn.addEventListener("click", btncheck));
options.forEach((option) => option.addEventListener("click",optionfunc))
