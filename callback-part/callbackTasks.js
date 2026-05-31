// // TASK 1 Напиши функцию repeat(n, callback) которая вызывает callback ровно n раз.
// function repeat(n, callback) {
//     for (let i = 0; i < n; i++) {
//         callback();
//     }
// }

// repeat(5, () => {
//     console.log('Test!');
// });


// // TASK 2 Напиши функцию delay(ms, callback) которая вызывает callback через ms миллисекунд.

// function delay(ms, callback) {
//     setTimeout(() => {
//         callback();
//     }, ms);
// }

// delay(4000, () => {
//     console.log(`Test2`);
// });


// TASK 3 Напиши функцию transform(arr, callback) — применяет callback к каждому элементу и возвращает новый массив. 
// Это твой собственный map без использования встроенного.

// function transform(arr, callback) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = callback(arr[i]);
//         newArr.push(newValue);
//         // console.log(newArr);
//     }
//     setTimeout(() => {
//         console.log(newArr); // Через setTimeout я сделл просто для интереса, можно было просто вернуть результат.
//     }, 5000);
// return newArr;
// }


// transform([11, 22, 33], (element) => element * 10)



// // TASK 4 Напиши функцию loadData(id, callback) которая имитирует загрузку с сервера через setTimeout 1 секунду,
// //  и вызывает колбэк с объектом { id, name: "Товар " + id, price: id * 100 }.

// function loadData(id, callback) {
//     setTimeout(() => {
//         callback({ id: id, name: 'Товар' + id, price: id * 100 });
//     }, 1000)
// }

// const result = loadData(1, (obj) => console.log(obj));



// TASK 5 Используя функцию из Задачи 4 — загрузи товар с id=1, 
// и после того как он загрузится — загрузи товар с id=2, и после — с id=3. Каждый раз выводи имя товара.

// function loadData(n, callback) {
//     setTimeout(() => {
//         callback({ id: n, name: 'Товар ' + n, price: n * 100 });
//     }, 3000);
// }

// loadData(1, (obj) => {
//     console.log(obj.name);
//     loadData(2, (obj) => {
//         console.log(obj.name);
//         loadData(3, (obj) => {
//             console.log(obj.name);
//         })
//     })
// });


// TASK 6 Напиши функцию filterAsync(arr, callback) — возвращает новый массив только с теми элементами,
// для которых callback вернул true. Это твой собственный filter.


// function filterAsync(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i]) === true) {
//             result.push(arr[i]);
//         }
//     }
//     console.log(result);
//     return result;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filterAsync(arr, (element) => element % 2 === 0);

// let result = [2, 4, 6, 8];
// console.log(result.map(el => el * 100));



// TASK 7 Напиши функцию pipe(...fns) которая принимает любое количество функций и возвращает новую функцию.
// Новая функция принимает значение и прогоняет его через все функции по очереди.

// function pipe(...fns) {
//     return function (value) {
//         let lastValue = value;
//         for (let i = 0; i < fns.length; i++) {
//             const result = fns[i](lastValue);
//             lastValue = result;
//         }
//         return lastValue;
//     }
// }

// const process = pipe(
//     x => x * 2,
//     x => x + 10,
//     x => x / 2
// );

// console.log(process.length);


// process(5); // ((5 * 2) + 10) / 2 = 10
// process(10); // ((10 * 2) + 10) / 2 = 15

// TASK 8 Напиши систему событий EventEmitter — объект с методами:
// on(event, callback) — подписаться на событие
// emit(event, data) — вызвать все колбэки этого события с данными
// off(event, callback) — отписаться от события





const emitter = {
    "store": {

    },
    on(event, callback) {
        if (!this.store[event]) {
            this.store[event] = [];
        }
        this.store[event].push(callback);
    },
    emit(event, data) {
        if (!this.store[event]) {
            return false;
        }
        for (let i = 0; i < this.store[event].length; i++) {
            this.store[event][i](data);
        }
    },
    off(event, callback) {
        this.store[event] = this.store[event].filter(el => el !== callback);
    }

};

const handler = (data) => console.log('Получено:', data);

emitter.on('message', handler);
emitter.emit('message', 'Привет!');  // "Получено: Привет!"
emitter.emit('message', 'Как дела?'); // "Получено: Как дела?"
emitter.off('message', handler);
emitter.emit('message', 'Уже не придёт'); // ничего не выведет