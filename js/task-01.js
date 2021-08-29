const quantityСategoriesEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${quantityСategoriesEl.length} категории.`);

quantityСategoriesEl.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent} `);
  console.log(`Категория: ${element.lastElementChild.children.length}`);
});
