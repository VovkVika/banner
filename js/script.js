const swiper = new Swiper(".banner-slider", {
  // Optional parameters
  direction: "vertical",
  effect: "fade",
  fadeEffect: { crossFade: true },
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // If we need pagination
    renderBullet: function (index, className) {
      if (index < 4) {
        return `<span class="${className}"></span>`;
      }
      return "";
    },
  },

  on: {
    init: function () {
      updatePagination(this);
    },
    slideChange: function () {
      updatePagination(this);
    },
  },




  // Navigation arrows
  navigation: {
    nextEl: ".banner-slider__next",
    prevEl: ".banner-slider__prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // Упаравління клавіатурою
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  //колесо мишки
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper",
  },


});



// Функція для оновлення пагінації з урахуванням display: block/none
function updatePagination(swiper) {
  let bullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
  let slides = document.querySelectorAll(".banner-slider .swiper-slide");
  
  // Фільтруємо видимі слайди
  let visibleSlides = [...slides].filter(slide => getComputedStyle(slide).display !== "none");
  let totalSlides = visibleSlides.length;
  let activeIndex = swiper.realIndex;

  // Якщо кнопок менше 4 — не виконуємо код
  if (bullets.length < 4) return;

  // Скидаємо активні стани кнопок
  bullets.forEach((bullet) => bullet.classList.remove("swiper-pagination-bullet-active"));

  // Призначаємо правильну кнопку відповідно до індексу слайду
  if (activeIndex === 0) {
    bullets[0].classList.add("swiper-pagination-bullet-active"); // Перша кнопка
  } else if (activeIndex === 1) {
    bullets[1].classList.add("swiper-pagination-bullet-active"); // Друга кнопка
  } else if (activeIndex === 2 || activeIndex < totalSlides - 1) {
    bullets[2].classList.add("swiper-pagination-bullet-active"); // Третя кнопка
  } else {
    bullets[3].classList.add("swiper-pagination-bullet-active"); // Четверта кнопка (останній слайд)
  }
}



function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();