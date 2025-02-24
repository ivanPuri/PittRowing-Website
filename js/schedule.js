
//! selecting the carousel
const slide = new bootstrap.Carousel(document.querySelector("#carousel"), {
    interval: 8000, 
    ride: 'carousel' 
});

const yearSeason = document.createElement('h1');
yearSeason.classList.add('title', 'racing-season');
yearSeason.innerHTML = '2024 Season'

const container = document.querySelector('#season');
container.appendChild(yearSeason);

document.querySelector("#carousel").addEventListener('slide.bs.carousel', event => {
    // console.log('Next slide index in #carousel: ', event.to);
    if(event.to === 0){
        yearSeason.innerHTML = '2024 Season'
    }else{
        yearSeason.innerHTML = '2025 Season'
    }
});

console.log('ape');

