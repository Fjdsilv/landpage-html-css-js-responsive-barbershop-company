/*PRELOADER*/
document.body.onload = function(){
  setTimeout(function(){
    var preloader = document.querySelector("#preloader");
    if(!preloader.classList.contains("done")){
      preloader.classList.add("done");
    } 
  }, 2000);
}

/*MENU RESPONSIVE*/
const change_class = document.querySelector(".menu-responsive");
const btn_resp = document.querySelector(".btn-responsive");
btn_resp.addEventListener('click', function(){
    change_class.classList.toggle("toggle");
});
const link_menu = document.querySelector('ul');
link_menu.addEventListener('click', function(){
  change_class.classList.toggle("toggle");
});

/*SLIDER*/
const sliders = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

prev.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

next.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

function prevSlide(){
  if(index === 0){
    index = sliders.length-1;
  }
  else{
    index--;
  }
  changeSlide();
}

function nextSlide(){
  if(index === sliders.length-1){
    index = 0;
  }
  else{
    index++;
  }
  changeSlide();
}

function changeSlide(){
  for(let i = 0; i < sliders.length; i++){
    sliders[i].classList.remove('active');
  }
  sliders[index].classList.add('active');
}

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoPlay, 4000);
}

function autoPlay(){
  nextSlide();
}

let timer = setInterval(autoPlay, 4000);

/*OWL CAROUSEL*/
$(function(){

    $("#customers-t").owlCarousel({

      items:1,
      autoplay:true,
      smartSpeed:700,
      look:true,
      autoPlayHoverPause:true
    });
  });

/*SCROLLREVEAL*/
window.sr = ScrollReveal({
  duration: 1000,
  easing: 'ease',
  mobile: true,
  reset: false,
  viewFactor: 0.4,
});

sr.reveal('.anim_top', {
  distance: '30px',
  origin: 'top',
});
      
sr.reveal('.anim_top2', {
  distance: '70px',
  origin: 'top',
});
   
sr.reveal('.anim_left',{
  distance: '70px',
  origin: 'left',
});

sr.reveal('.anim_right',{
  distance: '70px',
  origin: 'right',
});
      
sr.reveal('.anim_reveal',{

});
