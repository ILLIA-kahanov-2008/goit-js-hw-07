const categoryItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryItemsEl.length} категории`);


categoryItemsEl.forEach(element => {
  const categoryNameEl = element.firstElementChild.textContent;
  const categoryItemsEl = element.querySelectorAll('li')
  console.log(`Категория: ${categoryNameEl}, элементов: ${categoryItemsEl.length}`);
});