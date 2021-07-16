// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeInputRef = document.querySelector('#font-size-control');
const outputTextRef = document.querySelector('#text');

rangeInputRef.setAttribute('min', 6);
rangeInputRef.setAttribute('max', 72);
rangeInputRef.setAttribute('step', 2);
rangeInputRef.setAttribute('value', 16);


const onTextSizeChange = () => outputTextRef.style.fontSize = `${rangeInputRef.value}px`;

rangeInputRef.addEventListener('input', onTextSizeChange)