//СКРИПТЫ ДЛЯ СЛАЙДЕРОВ

var leftArrow = document.querySelector(".why-us__left-arrow");
var rightArrow = document.querySelector(".why-us__right-arrow");
var benefits = document.querySelectorAll(".why-us__item");

var upArrow = document.querySelector(".slider__btn--up");
var downArrow = document.querySelector(".slider__btn--down");
var namePlace = document.querySelector(".objects__name");
var taskPlace = document.querySelector(".slider__task");
var slides = document.querySelectorAll(".slider__photo");

var currentSlide = 0;
var currentBenefit = 0;

//СЛАЙДЕР ПРЕИМУЩЕСТВ

rightArrow.addEventListener("click", clickRightArrow);                         
leftArrow.addEventListener("click", clickLeftArrow);

function clickRightArrow() {
  benefits[currentBenefit].style.display = "none";
  if (currentBenefit == benefits.length - 1) {
    currentBenefit = 0;
  } else {
    ++currentBenefit;
  }
  benefits[currentBenefit].style.display = "block";  
};

function clickLeftArrow() {
  benefits[currentBenefit].style.display = "none";
  if (currentBenefit == 0) {
    currentBenefit = benefits.length - 1;
  } else {
    --currentBenefit;
  }
  benefits[currentBenefit].style.display = "block";
};


//СЛАЙДЕР ОБЪЕКТОВ

upArrow.addEventListener("click", clickUpArrow);                         
downArrow.addEventListener("click", clickDownArrow);

function clickDownArrow() {
  slides[currentSlide].style.display = "none";
  if (currentSlide == slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides[currentSlide].style.display = "block";
  checkSlide();  
};

function clickUpArrow() {
  slides[currentSlide].style.display = "none";
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  slides[currentSlide].style.display = "block";
  checkSlide();
};

namePlace.textContent = "Национальный аэропорт Минск-2";
taskPlace.textContent = "очистка терминалов от снега и наледи";


function checkSlide() {
  if (currentSlide == 0) {
    namePlace.textContent = "Национальный аэропорт Минск-2";
    taskPlace.textContent = "очистка терминалов от снега и наледи";
  } else if (currentSlide == 1) {
    namePlace.textContent = "Гостиница \"Виктория\"";
    taskPlace.textContent = "ремонт фасада, устранение течи, задувания и промерзания, замена лопнувших витражей";
  } else if (currentSlide == 2) {
    namePlace.textContent = "Стадион \"Динамо\"";
    taskPlace.textContent = "монтаж металлоконструкций, ремонт балок, панелей, кровли, ходовых мостиков";
  } else if (currentSlide == 3) {
    namePlace.textContent = "Кинотеатр \"Мир\"";
    taskPlace.textContent = "демонтаж вывески";
  } else if (slides[currentSlide] == slides[4]) {
    namePlace.textContent = "Музей ВОВ";
    taskPlace.textContent = "монтаж осветительных приборов";
  } else if (slides[currentSlide] == slides[5]) {
    namePlace.textContent = "Гостиница \"Ренессанс\"";
    taskPlace.textContent = "монтаж вентфасада, различные ремонтные работы";
  } else if (slides[currentSlide] == slides[6]) {
    namePlace.textContent = "Производственный логистический комплекс (Сморгонь)";
    taskPlace.textContent = "монтаж сэндвич-панелей";
  }
}

//СКРИПТ ДЛЯ КНОПОК "ПОКАЗАТЬ МЕНЮ/СКРЫТЬ МЕНЮ"

var menuToggle = document.querySelector(".main-nav__toggle");

menuToggle.addEventListener("click", function () {
  document.querySelector(".main-nav__list").classList.toggle("main-nav__list--hidden");
  document.querySelector(".main-nav").classList.toggle("main-nav--hidden");
  menuToggle.classList.toggle("main-nav__toggle--menu-opened");
  document.querySelector(".main-nav__icon").classList.toggle("main-nav__icon--cross");
});



