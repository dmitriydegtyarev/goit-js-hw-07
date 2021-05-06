const listRef = document.querySelectorAll('.item');
console.log(`В списке ${listRef.length} категории.`);

const itemsList = listRef.forEach((itemsList) => {
  const titleList = itemsList.children[0].textContent;
  const quantity = itemsList.children[1].querySelectorAll("li").length;

  console.log(`Категория: ${titleList}`, ('\n'), `Количество элементов: ${quantity}`);
});