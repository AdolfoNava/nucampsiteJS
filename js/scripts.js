console.log(`javascript connected!`);

const carousel = new bootstrap.Carousel('#homeCarousel',{
    interval: 2000,
    pause: false
})
//When user clicks on the pause button, pause the carousel
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click',() => {
    console.log('pausing the carousel');
    carousel.pause();
})
//When user clicks on the play button, begin to cycle through the images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', () =>{
    console.log('cycle the carousel');
    carousel.cycle();
})