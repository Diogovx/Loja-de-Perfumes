let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let bg = document.querySelector("#carrousel");

  let dot1 = document.getElementById("dot1");
  let dot2 = document.getElementById("dot2");
  let dot3 = document.getElementById("dot3");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (slideIndex == 2) {
    bg.style.background = "#BF84A5";
    dot2.style.background = "#fff";
    dot1.style.background = "#CCC2BA";
    dot3.style.background = "#CCC2BA";
  }
  if (slideIndex == 3) {
    bg.style.background = "#BF4E4E";
    dot3.style.background = "#fff";
    dot2.style.background = "#CCC2BA";
    dot1.style.background = "#CCC2BA";
  }
  if (slideIndex == 1) {
    bg.style.background = "#BF7A80";
    dot1.style.background = "#fff";
    dot2.style.background = "#CCC2BA";
    dot3.style.background = "#CCC2BA";
  }
  if (slideIndex != 1) {
    prev.style.display = "flex";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  //dots[slideIndex -1].className += 'active';
}

let prev = document.querySelector("#prev");

let next = document.querySelector("#next");

prev.onclick = () => {
  plusSlides(-1);
};
next.onclick = () => {
  plusSlides(1);
};



const first = document.querySelector('#first');
const second = document.querySelector('#second');
const last = document.querySelector('#last');
const firstDot = document.querySelector('#firstDot');
const lastDot = document.querySelector('#lastDot');

firstDot.onclick = ()=>{
    nextDot(1);
}
lastDot.onclick = ()=>{
    nextDot(2);
}

function nextDot(x){
    if(x == 2){
        first.style.display = 'none';
        second.style.display = 'none';
        last.style.display = 'flex';
        lastDot.style.background = '#fff';
        firstDot.style.background = '#CCC2BA';
    }
    if(x == 1){
        first.style.display = 'flex';
        second.style.display = 'flex';
        last.style.display = 'none';
        firstDot.style.background = '#fff';
        lastDot.style.background = '#CCC2BA';
    }
}