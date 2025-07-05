
//! selecting the carousel
const slide = new bootstrap.Carousel(document.querySelector("#carousel"), {
    interval: 8000, 
    ride: 'carousel' 
});

const yearSeason = document.createElement('h1');
yearSeason.classList.add('title', 'racing-season');
yearSeason.innerHTML = new Date().getFullYear();

const container = document.querySelector('#season');
container.appendChild(yearSeason);

document.querySelector("#carousel").addEventListener('slide.bs.carousel', event => {
    // console.log('Next slide index in #carousel: ', event.to);
    if(event.to === 0){
        yearSeason.innerHTML = new Date().getFullYear();
    }else{
        yearSeason.innerHTML = (new Date().getFullYear()) + 1;
    }
});

const hoto = document.querySelector(".hoto")
const h13 = document.createElement('h3');
h13.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p1 = document.createElement('p');
p1.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
hoto.appendChild(h13,p1)


const charles = document.querySelector(".charles")
const h23 = document.createElement('h3');
h23.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p2 = document.createElement('p');
p2.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
charles.appendChild(h23,p2)


const schuykill = document.querySelector(".schuykill")
const h33 = document.createElement('h3');
h33.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p3 = document.createElement('p');
p3.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
schuykill.appendChild(h13,p1)


const occoquan = document.querySelector(".occoquan")
const h43 = document.createElement('h3');
h43.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p4 = document.createElement('p');
p4.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
occoquan.appendChild(h13,p1)


const indoors = document.querySelector(".indoors")
const h53 = document.createElement('h3');
h53.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p5 = document.createElement('p');
p5.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
indoors.appendChild(h13,p1)


const knecht = document.querySelector(".knecht")
const h63 = document.createElement('h3');
h6.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p6 = document.createElement('p');
p6.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
knecht.appendChild(h63,p6)


const vails = document.querySelector(".dad-vails")
const h73 = document.createElement('h3');
h73.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p7 = document.createElement('p');
p7.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
hoto.appendChild(h73,p7)

const acras = document.querySelector(".acras")
const h83 = document.createElement('h3');
h83.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p8 = document.createElement('p');
p8.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
hoto.appendChild(h83,p8)




