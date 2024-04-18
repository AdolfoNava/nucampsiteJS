console.log(`javascript connected!`);

const carousel = new bootstrap.Carousel('#homeCarousel',{
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', () =>{
    if(faIcon.classList.contains('fa-pause')){
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    }else{
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

/*carousel play pause function v1
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
})*/