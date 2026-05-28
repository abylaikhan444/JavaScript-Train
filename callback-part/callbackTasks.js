// TASK 1 Напиши функцию repeat(n, callback) которая вызывает callback ровно n раз.
function repeat(n, callback) {
    for (let i = 0; i < n; i++) {
        callback();
    }
}

repeat(5, () => {
    console.log('Test!');
});


// TASK 2 Напиши функцию delay(ms, callback) которая вызывает callback через ms миллисекунд.

function delay(ms, callback) {
    setTimeout(() => {
        callback();
    }, ms);
}

delay(4000, () => {
    console.log(`Test2`);
});


// TASK 3 Напиши функцию transform(arr, callback) — применяет callback к каждому элементу и возвращает новый массив. Это твой собственный map без использования встроенного.

function transform(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
        // newArr.push(arr[i]);
        console.log(arr[i]);

    }
    // console.log(newArr);
}

newArr = [];
transform([11, 22, 33], (element) => element * 10)



