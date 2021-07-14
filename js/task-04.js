// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValueRef = document.querySelector('#value');
let counterValue = Number(counterValueRef.textContent);
const decrementBtnRef = document.querySelector('[data-action = decrement]');
const incrementBtnRef = document.querySelector('[data-action = increment]')

incrementBtnRef.addEventListener('click', Increment);
decrementBtnRef.addEventListener('click', Decrement);

function Increment() {
counterValue += 1
  counterValueRef.textContent = counterValue;
}

function Decrement() {
counterValue -= 1
  counterValueRef.textContent = counterValue;
}
