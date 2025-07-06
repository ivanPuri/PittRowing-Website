
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

(async function() {
  try {
    const response = await fetch('json/raceInfo.json');
    const data = await response.json();

    const raceInfo = data[0];
    const fallRaces = raceInfo.fall;
    const winterRace = raceInfo.winter;
    const springRaces = raceInfo.spring;

    function createRaceElement(race, date) {
      const h = document.createElement('h3');
      h.classList.add("race-header", 'd-flex', 'justify-content-center', 'pt-4', 'pb-3', 'm-0');
      h.innerText = race;

      const p = document.createElement('p');
      p.classList.add("race-date", 'd-flex', 'justify-content-center', 'pt-4', 'm-0');
      p.innerText = date;

      return [h, p];
    }

    const hoto = document.querySelector(".hoto");
    const [h13, p1] = createRaceElement(fallRaces[0].race, fallRaces[0].date);
    hoto.appendChild(h13);
    hoto.appendChild(p1);

    const charles = document.querySelector(".charles");
    const [h23, p2] = createRaceElement(fallRaces[1].race, fallRaces[1].date);
    charles.appendChild(h23);
    charles.appendChild(p2);

    const schuykill = document.querySelector(".schuykill");
    const [h33, p3] = createRaceElement(fallRaces[2].race, fallRaces[2].date);
    schuykill.appendChild(h33);
    schuykill.appendChild(p3);

    const occoquan = document.querySelector(".occoquan");
    const [h43, p4] = createRaceElement(fallRaces[3].race, fallRaces[3].date);
    occoquan.appendChild(h43);
    occoquan.appendChild(p4);

    const indoors = document.querySelector(".indoors");
    const [h53, p5] = createRaceElement(winterRace.race, winterRace.date);
    indoors.appendChild(h53);
    indoors.appendChild(p5);

    const knecht = document.querySelector(".knecht");
    const [h63, p6] = createRaceElement(springRaces[0].race, springRaces[0].date);
    knecht.appendChild(h63);
    knecht.appendChild(p6);

    const vails = document.querySelector(".dad-vails");
    const [h73, p7] = createRaceElement(springRaces[1].race, springRaces[1].date);
    vails.appendChild(h73);
    vails.appendChild(p7);

    const acras = document.querySelector(".acras");
    const [h83, p8] = createRaceElement(springRaces[2].race, springRaces[2].date);
    acras.appendChild(h83);
    acras.appendChild(p8);

  } catch (error) {
    console.error("Failed to populate race data:", error);
  }
})();
