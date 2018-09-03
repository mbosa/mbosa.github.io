// ---navbar---
const navLinks = document.querySelectorAll('nav a');
const toggleMenu = document.querySelector('.toggleMenu');
const menuList = document.querySelector('nav > ul');
const menuItems = document.querySelectorAll('nav > ul > li');


// show/hide the menu
toggleMenu.addEventListener('click', function() {
  if (menuList.classList[1] === 'show') {
    menuList.classList.remove('show');
    if (window.pageYOffset < 63) {
      document.querySelector('nav').style.backgroundColor = 'transparent';
    }
  } else {
    menuList.classList.add('show');
    if (window.pageYOffset < 63) {
      document.querySelector('nav').style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
  };
})

// hide the menu after clicking on a link in it
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    menuList.classList.remove('show');
  });
}

//hide the menu in the small screen if the screen is resized to a bigger width
window.onresize = function() {
  if (document.body.clientWidth >= 768) {
    menuList.classList.remove('show');
  };
}

//change the backgroound-color on scroll
window.onscroll = function() {
  if (window.pageYOffset >= 63) {
    document.querySelector('nav').style.backgroundColor = 'rgba(0,0,0,0.8)';
  } else {
    if (menuList.classList[1] !== 'show') {
      document.querySelector('nav').style.backgroundColor = 'transparent';
    }
  }
}



//scroll the page
const scrollLinks = document.querySelectorAll('.scroll');

  // get the vertical position of an element
function getPosition(element) {
  let yPosition = 0;
  while(element) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }
  return yPosition;
}

  // scroll function
function scrollF(e) {
  e.preventDefault();
  (!e.target.hash) ? window.scroll({top: 0, left: 0, behavior: 'smooth'}) : window.scroll({top: getPosition(document.querySelector(e.target.hash)), left: 0, behavior: 'smooth'});
}

for (let i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', scrollF);
};

// ---end navbar---

// ---slideshow---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const controlBtn = document.querySelectorAll('.prev-next-btn');
const controlDot = document.querySelectorAll('.slide-dot');

//event listeners
controlBtn[0].addEventListener('click', function() {
  slideIndex -= 1;
  showSlide(slideIndex);
})

controlBtn[1].addEventListener('click', function() {
  slideIndex += 1;
  showSlide(slideIndex);
})

for (let i = 0; i < controlDot.length; i++) {
  let dotIndex = parseInt(controlDot[i].id.slice(4), 10);
  controlDot[i].addEventListener('click', function() {
    slideIndex = dotIndex;
    showSlide(slideIndex);
  })
}



showSlide(slideIndex);

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  if (index > slides.length - 1) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < controlDot.length; i++) {
    controlDot[i].style.backgroundColor = '#bbb';
  }

  slides[slideIndex].style.display = 'block';
  controlDot[slideIndex].style.backgroundColor = '#717171';
};
