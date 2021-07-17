// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
  numberOfBoxes: document.querySelector("input[type=number]"),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  controlsBlock: document.querySelector("#controls"),
  boxesBlock: document.querySelector("#boxes"),
};

const randomColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

function createBoxes(event, amount) {
  refs.boxesBlock.innerHTML = "";
  if (amount > 0) {
    let boxSideSize = 30;
    for (let i = 1; i <= amount; i++) {
      const boxColor = randomColor();
      const box = document.createElement("div");
      box.style.backgroundColor = boxColor;
      box.style.width = `${boxSideSize}px`;
      box.style.height = `${boxSideSize}px`;
      box.style.borderColor = randomColor();
      box.style.margin = "5px";
      box.style.borderStyle = "solid";
      box.style.borderWidth = "1px";
      refs.boxesBlock.append(box);
      boxSideSize += 10;
    }
  } else {
    refs.boxesBlock.style.color = "red";
    refs.boxesBlock.textContent = "no boxes to create, enter number > 0";
  }
}

const destroyBoxes = () => refs.boxesBlock.innerHTML = "";

refs.renderBtn.addEventListener("click", function (event) {
  createBoxes(event, refs.numberOfBoxes.value);
});

refs.destroyBtn.addEventListener("click", destroyBoxes);

