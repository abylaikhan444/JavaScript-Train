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

btnAdd.addEventListener('click', () => {
    if (input.value.trim() === '') return; // защита от пустого поля

    const li = document.createElement('li');
    li.textContent = input.value;
    ul.append(li);
    input.value = ''; // очищаем поле после добавления
});


// TASK 3
// Каждый <li> должен содержать:
// текст задачи
// кнопку "Удалить" — по клику удаляет именно этот элемент
// по клику на текст задачи — добавляет класс done (зачёркнутый текст через CSS)


const todoInput = document.querySelector('#todoInput');
const btnTodo = document.querySelector('#addTodo');
const ulTodo = document.querySelector('#todoList');

btnTodo.addEventListener('click', () => {
    if (todoInput.value.trim() === '') return;

    const li = document.createElement('li');

    // Span для текста — на него вешаем toggle done
    const span = document.createElement('span');
    span.textContent = todoInput.value;
    span.addEventListener('click', () => {
        span.classList.toggle('text');
    });

    // Кнопка удалить
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // не даём клику дойти до li
        li.remove();
    });

    li.append(span, delBtn); // добавляем оба элемента в li
    ulTodo.append(li);
    todoInput.value = ''; // очищаем поле
});