const navbarToggleBtn = document.getElementById('navbarToggleBtn');
  const navbarList = document.getElementById('nav_menu');
  const mainHeader = document.getElementById('mainHeader');

  navbarToggleBtn.addEventListener('click', () => {
    navbarList.classList.toggle('show');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });


  function setActiveLink(link) {
    // Remove "active" class from all links
    var links = document.querySelectorAll('.nav_link');
    links.forEach(function (item) {
      item.classList.remove('active');
    });

    // Add "active" class to the clicked link
    link.classList.add('active');
  }




















let button = document.querySelector(".btn");
let item = document.querySelector(".btn .round");

button.addEventListener("mouseenter", function(event) {
  this.classList += " animate";

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;

  if (buttonY < 24) {
    item.style.top = 0 + "px";
  } else if (buttonY > 30) {
    item.style.top = 48 + "px";
  }

  item.style.left = buttonX + "px";
  item.style.width = "1px";
  item.style.height = "1px";
});

button.addEventListener("mouseleave", function() {
  this.classList.remove("animate");

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;

  if (buttonY < 24) {
    item.style.top = 0 + "px";
  } else if (buttonY > 30) {
    item.style.top = 48 + "px";
  }
  item.style.left = buttonX + "px";
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is <= 576px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 768px
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
    // you can add more breakpoints as needed
  }
});


var swiper = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

