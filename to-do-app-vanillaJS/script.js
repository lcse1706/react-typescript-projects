// must be indentified by id becouse when name is the same, program delete every value with the same name from local Storage
// checked 



// const input = document.querySelector('input');
// const button = document.querySelector('.add');
// const remove = document.querySelectorAll('.delete');
const list = document.querySelector('.list');

let tasksList = [];

function addTask(e) {
  const name = e.target.input.value;

  //Add to array
  tasksList.push(name);
  console.info('Task Added');

  list.dispatchEvent(new CustomEvent('itemsUpdate'));
}

function removeTask(e) {
  if (e.target.matches('.delete')) {
    const item = e.target.parentNode;
    item.remove();
    tasksList = tasksList.filter((task) => task !== item.id);
    console.info('Task Removed.');

    list.dispatchEvent(new CustomEvent('itemsUpdate'));
  }
}

function updateLocalStorage() {
  localStorage.setItem('items', tasksList.join());
}

function restoreListFromStorage() {
  if (localStorage.items.length > 0) {
    tasksList = localStorage.getItem('items').split(',');
    console.info('List Loaded');

    list.dispatchEvent(new CustomEvent('restoreList'));
  }
}

function displayList() {
  if (tasksList.length > 0) {
    const html = tasksList
      .map(
        (item) => `
      <li id='${item}'><span class="item">
      ${item}
      </span>
      <button type='button' class='delete'>x</button>
      </li>
    `
      )
      .join('');
    list.innerHTML = html;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (e.target.input.value) {
    addTask(e);
    e.target.input.value = '';
    return;
  }
  alert('type task');
}

window.addEventListener('submit', handleSubmit);
list.addEventListener('click', removeTask);
list.addEventListener('itemsUpdate', displayList);
list.addEventListener('itemsUpdate', updateLocalStorage);
list.addEventListener('restoreList', displayList);

restoreListFromStorage();
