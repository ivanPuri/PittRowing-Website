//! Getting the json data
async function fetchData() {
    try {
        // getting the json file data
        const response = await fetch('json/AthleteData/VarsityMen.json'); 
        const jsonData = await response.json()  
        // console.log('ape');
        return jsonData
    } catch (error) {
        console.error('Error fetching JSON:', error)  
    }
}

//! Making it static for django
function getStaticPath(path) {
    return `/static/${path}`;
}

// !selecting and filling card container div
const cardDivContainer = document.getElementById('card-holder');

function loadpage(jsonData){
    // Making the for loop for every athlete
    jsonData.forEach((dict) => {
         // Creating a new card
        const newCard = document.createElement('div');
        newCard.classList.add('card', 'mb-2');
        newCard.onclick = () => {
            updatePage(dict.name, jsonData)
        };


        const athleteImg = document.createElement('img');
        athleteImg.classList.add('card-img-top','card-img');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body','p-0', 'mx-auto');

        const athleteName = document.createElement('h5');
        athleteName.classList.add('card-title', 'p-1', 'pt-2');

        newCard.appendChild(athleteImg);
        newCard.appendChild(cardBody);
        cardBody.appendChild(athleteName);
        
        cardDivContainer.appendChild(newCard);
        //! Now the template is laid and injected into the list

        // Injecting HeadShots 
        athleteImg.src = getStaticPath(dict.face);

        // Injecting Name
        athleteName.textContent = dict.name;

    })
}

function updatePage(name, jsonData){
    const athleteName = document.getElementById('athlete-name');
    const athleteHeight = document.getElementById("athlete-height")
    const athleteCollege = document.getElementById('athlete-college');
    const athleteYear = document.getElementById('athlete-year');
    const athleteMajor = document.getElementById('athlete-major');
    const athleteTown = document.getElementById('athlete-town');
    const athleteFace = document.getElementById('athlete-face');
    

    jsonData.forEach((dict) => {
        if(dict.name == name){
            athleteName.textContent = dict.name;
            athleteHeight.textContent = "Height : " + dict.height;
            athleteCollege.textContent = "College : " + dict.college;
            athleteYear.textContent = "Year : " + dict.year;
            athleteMajor.textContent = "Major : " + dict.major;
            athleteTown.textContent = "HomeTown : " + dict.town;
            athleteFace.src = (dict.face);
        }
    });
}
    

fetchData().then(jsonData => {
    console.log('Fetched and parsed data:', jsonData); 
    loadpage(jsonData); 
});






















