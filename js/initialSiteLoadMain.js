

//! Getting the json data
async function fetchData() {
    try {
        // getting the json file data
        const response = await fetch('json/siteImages.json'); 
        const jsonData = await response.json()  
        // console.log(typeof jsonData);
        return jsonData
    } catch (error) {
        console.error('Error fetching JSON:', error)  
    }
}

//! Making it static for django
function getStaticPath(path) {
    return `/static/${path}`;
}

//! Function to fill the carousel with the loaded in json data
function fillPage(jsonData) {
    const carouselInner = document.querySelector('#carousel-inner');
    const descriptionBox = document.querySelector('#desc-carousel-inner');
    const newsBox = document.querySelector('.news-list');

    jsonData.forEach((dict, index) => {
        // creating all of the new elements
        const slide = document.createElement('div');
        const box = document.createElement('div');
        const listItem = document.createElement('li');
        const listDateDiv = document.createElement('div');
        const listNewsDiv = document.createElement('div');
        const descDateDiv = document.createElement('div');
        const descContentDiv = document.createElement('div');


        // dealing with news box first since it makes sense to do the carousels together
        listDateDiv.textContent = dict.date;
        listDateDiv.classList.add("listDate-item");
        listNewsDiv.classList.add("listNews-item");
        listNewsDiv.textContent = dict.news;
        listItem.classList.add("news-item");
        listItem.appendChild(listDateDiv);
        listItem.appendChild(listNewsDiv);
        listItem.setAttribute("data-id",index);
        listNewsDiv.style.fontSize = "1.25 rem";
        


        // adding classes to both new slide and box carousel items
        slide.classList.add('carousel-item');
        box.classList.add('carousel-item');
        descDateDiv.textContent = dict.date;
        descDateDiv.style.fontSize = "1.25rem";
        descContentDiv.style.fontSize = "1.75rem";
        descContentDiv.textContent = dict.description;
        descDateDiv.classList.add("desc-date");
        descContentDiv.classList.add("desc-content");        


        // accounting for the first item in the carousel
        if (index === 0) {
            slide.classList.add('active');
            box.classList.add('active');
        }

        // creating container elements to hold the json data
        const img = document.createElement('img');
        const desc = document.createElement('span');
        
        
        // Static wrapping for django 
        img.src = (dict.carousel); 

        // image carousel formatting
        img.classList.add('d-block', 'w-100', 'img-fluid');
        img.style.height = '100%';
        img.style.objectFit = 'cover'; // Scale image without distortion


        // putting everything together
        box.appendChild(descDateDiv);
        box.appendChild(descContentDiv);
        descriptionBox.appendChild(box);

        slide.appendChild(img);
        carouselInner.appendChild(slide);

        newsBox.appendChild(listItem);
    });
}




// .then is for the promise completion needed for ASYNC functions
// this essentially the main function
fetchData().then(jsonData => {
    console.log('Fetched and parsed data:', jsonData); 
    fillPage(jsonData); 
    fillDescription(jsonData);
});




