$('.nav-stack').click(function(){ // On nav-stack click - add class of active to landing page
    $('.landing').toggleClass('active') // This pushes the window down 
})



var $container = $("html,body"); // current view
var $scrollToFeatures = $('.features'); // target scroll
var $scrollToGallery = $('.gallery'); // target scroll
var $scrollToArticle = $('.articles'); // target scroll
 
$('.features-item').click(function(){
    $container.animate({scrollTop: $scrollToFeatures.offset().top - 30}); // Scroll to .features but offset by 30 pixels
    $('.landing').removeClass('active') // This pushes the window down 
});

$('.gallery-item').click(function(){
    $container.animate({scrollTop: $scrollToGallery.offset().top}); 
    $('.landing').removeClass('active') // This pushes the window down 
});

$('.article-item').click(function(){
    $container.animate({scrollTop: $scrollToArticle.offset().top}); 
    $('.landing').removeClass('active') // This pushes the window down 
});


window.addEventListener("scroll", ()=> { // When you scroll down, close the nav menu
    const scroll = Math.ceil(this.scrollY);  

    if (scroll > 125) { // Once you exceed 150, remove the class of active from the landing page
        $('.landing').removeClass('active') 
    }
});















const images = document.querySelectorAll('.galleryTwoImage') 
const buttonRight = document.querySelector('.right') 
const buttonLeft = document.querySelector('.left') 

var i = 0
var activeSlide = 0;

buttonRight.addEventListener('click',()=> {
    activeSlide++
    
    if(activeSlide > images.length - 1) {
        activeSlide = images.length - 1 // Set to the last one
    } else {
        i = i - 200
        images.forEach(item=>{
            item.style.transform = `translateX(${i}px)`
        })
    }
    console.log(activeSlide, images.length)
})

buttonLeft.addEventListener('click',()=> {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = 0
    } else {
        i = i + 200
        images.forEach(item=>{
            item.style.transform = `translateX(${i}px)`
        })
    }
    console.log(activeSlide, images.length)

})