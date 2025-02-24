document.addEventListener("DOMContentLoaded", () => {

  // !Add an event listener to each list item
  const listItems = document.querySelectorAll("#news-list li");
  listItems.forEach(item => {
    item.addEventListener('click', function() {
      // getting the specifier
      const itemId = item.getAttribute('data-id');
      slide.to(itemId);
    });
  });

  //!initialising both carousels
  // ride:carousel == autoplay and interval == 8 seconds
  const slide = new bootstrap.Carousel(document.querySelector("#carousel"), {
      interval: 8000, 
      ride: 'carousel' 
  });

  const box = new bootstrap.Carousel(document.querySelector('#desc-carousel'), {
      ride: false
  });

  // !synchronising the description carousel to the image carousel
  document.querySelector("#carousel").addEventListener('slide.bs.carousel', event => {
      // console.log('Next slide index in #carousel: ', event.to);
      box.to(event.to);
  });
  
});







