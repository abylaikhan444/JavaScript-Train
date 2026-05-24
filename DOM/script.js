// TASK 1

const btn = document.querySelector('.btn');
const title = document.querySelector('#title');

btn.addEventListener('click', () => {
    title.textContent = 'New Tilte';
    btn.disabled = true;
});

// TASK 2

const input = document.querySelector('#nameInput');
const btnAdd = document.querySelector('#addBtn');
const ul = document.querySelector('#list');
let valueInput = '';

input.addEventListener('input', (event) => {
    valueInput = input.value;
})

btnAdd.addEventListener('click', () => {
    ul.append(valueInput);
})


// TASK 3
// Каждый <li> должен содержать:
// текст задачи
// кнопку "Удалить" — по клику удаляет именно этот элемент
// по клику на текст задачи — добавляет класс done (зачёркнутый текст через CSS)


const todoInput = document.querySelector('#todoInput');
const btnTodo = document.querySelector('#addTodo');
const ulTodo = document.querySelector('#todoList');
let taskText = '';

todoInput.addEventListener('input', (event) => {
    taskText = todoInput.value;
})

btnTodo.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    newItem.innerHTML = '<button id= deleteBtn>Удалить!</button>';
    newItem.innerHTML = '<button id= doneBtn>Вычеркнуть!</button>';
    newItem.append(taskText);
    ul.append(newItem);
    newItem.addEventListener('click', () => {
        newItem.classList.add('.text');
    })
})