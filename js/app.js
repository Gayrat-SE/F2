// sidebar
const menu_toggler = document.querySelector('.menu-toggler');
const sidebar = document.querySelector('.sidebar');

menu_toggler.addEventListener('click', () => {
    menu_toggler.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})



// slider

const carouselSlide=document.querySelector('.mySwiper');
const carouselImages=document.querySelectorAll('.mySwiper img');

// Buttons
const prevBtn=document.querySelector('.mslider-prev');
const nextBtn=document.querySelector('.mslider-next');

// Counter
let counter=1;
const size=carouselImages[0].clientWidth;
carouselslide.style.transform='translateX(+(-size counter)+px)';
// Button Listeners
nextBtn.addEventListener('click',()=>{
    if(counter>=carouselImages.length-1){
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX(+(-size counter)+px)';
});
prevBtn.addEventListener('click',()=>{
    if(counter<=0)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translateX(+(-size counter)+px)';
});


carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id==='lastClone'){
        carouselSlide.style.transition = "none";
        counter=carouselImages.length-2;
        carouselSlide.style.transform='translateX(+(-size counter)+px)';
    }
    if(carouselImages[counter].id==='firstClone'){
        carouselSlide.style.transition = "none";
        counter=carouselImages.length-counter;
        carouselSlide.style.transform='translateX(+(-size counter)+px)';
    }
});

