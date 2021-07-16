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
  numberOfBoxes: document.querySelector('input[type=number]'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  controlsBlock: document.querySelector('#controls'),
  boxesBlock: document.querySelector('#boxes'),
}

function createBoxes (event, amount) {
  console.log(amount);
  if (amount > 0) {
    // const boxSideSize = 30;
    // let i = 1;
    // while (i === amount) {
      
    // }
    console.log(refs.numberOfBoxes.value);
  } else { refs.boxesBlock.textContent = 'no boxes to create' }
}

refs.numberOfBoxes.addListenerEvents('input', createBoxes(refs.numberOfBoxes.value))



console.log(refs.numberOfBoxes);