document.addEventListener("DOMContentLoaded", () => {
  //!initialising both carousels
  // ride:carousel == autoplay and interval == 8 seconds
  const slide = new bootstrap.Carousel(document.querySelector("#carousel"), {
      interval: 8000, 
      ride: 'carousel',
      
  });
  const box = new bootstrap.Carousel(document.querySelector('#desc-carousel'), {
      ride: false
  });
  
  // !Add an event listener to each list item
  const listItems = document.querySelectorAll("#news-list li");
  listItems.forEach(item => {
    item.addEventListener('click', function() {
      // getting the specifier
      const itemId = item.getAttribute('data-id');
      slide.to(itemId);
    });
  });


  // !synchronising the description carousel to the image carousel
  document.querySelector("#carousel").addEventListener('slide.bs.carousel', event => {
      box.to(event.to);
  });



  // Mobile Syncronisation from here on forth
  //!Mobile Syncronisation
  const Mslide = new bootstrap.Carousel(document.querySelector("#carousel-mobile"), {
    interval: 8000, 
    ride: 'carousel'
  });
  const Mbox = new bootstrap.Carousel(document.querySelector('#desc-carousel-mobile'), {
    ride: false,
  });

  document.querySelector("#desc-carousel-mobile").addEventListener('slide.bs.carousel', event => {
    Mslide.to(event.to);
  });

  document.querySelector("#carousel-mobile").addEventListener('slide.bs.carousel', event => {
    Mbox.to(event.to);
  });


  
});







