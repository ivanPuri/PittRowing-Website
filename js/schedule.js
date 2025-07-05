
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

async function fetchData() {
    try {
        // getting the json file data
        const response = await fetch('json/raceInfo.json'); 
        const jsonData = await response.json()  
        // console.log('ape');
        return jsonData
    } catch (error) {
        console.error('Error fetching JSON:', error)  
    }
}

data = fetchData()
const raceInfo = data[0]; // since it's an array with one object
const fallRaces = raceInfo.fall;
const winterRace = raceInfo.winter;
const springRaces = raceInfo.spring;


const hoto = document.querySelector(".hoto")
const h13 = document.createElement('h3');
h13.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
h13.innerText(fallRaces[0].race)
const p1 = document.createElement('p');
p1.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p1.innerText.innerText(fallRaces[0].date)
hoto.appendChild(h13,p1)


const charles = document.querySelector(".charles")
const h23 = document.createElement('h3');
h23.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
h23.innerText(fallRaces[1].race)
const p2 = document.createElement('p');
p2.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p2.innerText.innerText(fallRaces[1].date)
charles.appendChild(h23,p2)


const schuykill = document.querySelector(".schuykill")
const h33 = document.createElement('h3');
h33.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
h33.innerText(fallRaces[2].race)
const p3 = document.createElement('p');
p3.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p3.innerText(fallRaces[2].date)
schuykill.appendChild(h33,p3)


const occoquan = document.querySelector(".occoquan")
const h43 = document.createElement('h3');
h43.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
h43.innerText(fallRaces[3].race)
const p4 = document.createElement('p');
p4.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p4.innerText(fallRaces[3].date)
occoquan.appendChild(h43,p4)


const indoors = document.querySelector(".indoors")
const h53 = document.createElement('h3');
h53.innerText(winterRace.race)
h53.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p5 = document.createElement('p');
p5.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p5.innerText(winterRace.date)
indoors.appendChild(h53,p5)


const knecht = document.querySelector(".knecht")
const h63 = document.createElement('h3');
h63.innerText(springRaces[0].race)
h63.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p6 = document.createElement('p');
p6.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p6.innerText(springRaces[0].date)
knecht.appendChild(h63,p6)


const vails = document.querySelector(".dad-vails")
const h73 = document.createElement('h3');
h73.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
h73.innerText(springRaces[1].race)
const p7 = document.createElement('p');
p7.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p7.innerText(springRaces[1].date)
hoto.appendChild(h73,p7)

const acras = document.querySelector(".acras")
const h83 = document.createElement('h3');
h83.innerText(springRaces[2].date)
h83.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0')
const p8 = document.createElement('p');
p8.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0')
p8.innerText(springRaces[2].date)
hoto.appendChild(h83,p8)




