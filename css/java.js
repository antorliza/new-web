var typed = new Typed('#element', {
    strings: ['Homayun azad', 'Medical Assistant', 'Frontend web developer'],
    typeSpeed: 50,
    backSpeed:50,
    backDelay:1000,
    loop:true
  });


  let currentSlide = 0;

  function showSlide(index) {
      const slides = document.querySelectorAll('.slide');
      if (index >= slides.length) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = slides.length - 1;
      } else {
          currentSlide = index;
      }
  
      const slidesContainer = document.querySelector('.slides');
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  
      slides.forEach(slide => slide.classList.remove('active'));
      slides[currentSlide].classList.add('active');
  }
  
  function changeSlide(direction) {
      showSlide(currentSlide + direction);
  }
  
  // Initialize the first slide
  showSlide(currentSlide);

  
  var menuBar =document.getElementById('menu-bar');

  function openMenu(){
    menuBar.style.right=0;
  }
  function closeMenu(){
    menuBar.style.right = '-200px';
  }
  