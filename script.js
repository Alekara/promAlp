var fromTop = 0;
var namePlace = document.querySelector(".objects__name");
var taskPlace = document.querySelector(".objects__task");

namePlace.textContent = "Национальный аэропорт Минск-2";
taskPlace.textContent = "очистка терминалов от снега и наледи";

document.querySelector(".slider__btn--down").addEventListener("click", function () {
  fromTop = fromTop - 400;
  if (fromTop < -2400) {
    fromTop = 0;
  }
  checkTop();
})

document.querySelector(".slider__btn--up").addEventListener("click", function () {
  if (fromTop == 0) {
    fromTop = fromTop - 2400;
  } else {
    fromTop = fromTop + 400;
  }
  checkTop();
})

function checkTop () {
  var slider = document.querySelector(".slider__stripe");
  slider.style.top = fromTop + "px";
  if (fromTop == 0) {
    namePlace.textContent = "Национальный аэропорт Минск-2";
    taskPlace.textContent = "очистка терминалов от снега и наледи";
  } else if (fromTop == -400) {
    namePlace.textContent = "Гостиница \"Виктория\"";
    taskPlace.textContent = "ремонт фасада, устранение течи, задувания и промерзания, замена лопнувших витражей";
  } else if (fromTop == -800) {
    namePlace.textContent = "Стадион \"Динамо\"";
    taskPlace.textContent = "монтаж металлоконструкций, ремонт балок, панелей, кровли, ходовых мостиков";
  } else if (fromTop == -1200) {
    namePlace.textContent = "Кинотеатр \"Мир\"";
    taskPlace.textContent = "демонтаж вывески";
  } else if (fromTop == -1600) {
    namePlace.textContent = "Музей ВОВ";
    taskPlace.textContent = "монтаж осветительных приборов";
  } else if (fromTop == -2000) {
    namePlace.textContent = "Гостиница \"Ренессанс\"";
    taskPlace.textContent = "монтаж вентфасада, различные ремонтные работы";
  } else if (fromTop == -2400) {
    namePlace.textContent = "Производственный логистический комплекс (Сморгонь)";
    taskPlace.textContent = "монтаж сэндвич-панелей";
  }
};
