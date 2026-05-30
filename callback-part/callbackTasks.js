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



// TASK 4 Напиши функцию loadData(id, callback) которая имитирует загрузку с сервера через setTimeout 1 секунду,
//  и вызывает колбэк с объектом { id, name: "Товар " + id, price: id * 100 }.

function loadData(id, callback) {
    setTimeout()
}

const result = loadData(2, {name: "Товар " + id, price: id * 100});
