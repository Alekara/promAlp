var fromTop = 0;

document.querySelector(".slider__btn--right").addEventListener("click", function () {
  fromTop = fromTop - 480;
  if (fromTop < -960) {
    fromTop = 0;
  }
  checkTop();
})

document.querySelector(".slider__btn--left").addEventListener("click", function () {
  if (fromTop == 0) {
    fromTop = fromTop - 960;
  } else {
    fromTop = fromTop + 480;
  }
  checkTop();
})

function checkTop () {
  var slider = document.querySelector(".slider__stripe");
  slider.style.top = fromTop + "px";
  var textPlace = document.querySelector(".slider__text p");
  if (fromTop == 0) {
    textPlace.textContent = "Национальный аэропорт Минск-2";
  } else if (fromTop == -480) {
    textPlace.textContent = "Гостиница \"Виктория\"";
  } else if (fromTop == -960) {
    textPlace.textContent = "Стадион \"Динамо\"";
  }
};
