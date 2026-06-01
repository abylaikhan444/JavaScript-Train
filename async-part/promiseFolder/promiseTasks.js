//& TASK 1 Напиши функцию wait(ms) которая возвращает Promise, который выполняется через ms миллисекунд.

// const wait = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (result) {
//             resolve('Данные Получены успешно!');
//         } else {
//             reject('Ошибка при получении данных!');
//         }
//     }, ms)
// });

// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms)
//     });
// }

// wait(2000)
//     .then(() => {
//         console.log('прошло 2 секунды');
//     })
//     .finally(() => {
//         console.log('Операция завершена!');
//     });


//& TASK 2 Напиши функцию divide(a, b) которая возвращает Promise. 
//& Если b === 0 — reject с ошибкой "На ноль делить нельзя". Иначе — resolve с результатом деления.

// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject("You dont divide number by zero!");
//         } else {
//             const result = a / b;
//             resolve(result);
//         }
//     });
// }

// divide(10, 2).then(result => console.log(result)); // 5
// divide(10, 0).catch(err => console.log(err));      // "На ноль делить нельзя"

//& TASK 3 Перепиши функцию loadData из колбэк-стиля на Promise. Затем загрузи товары с id 1, 2, 3 по цепочке через .then().

//^ function loadData(id, callback) {
//^     setTimeout(() => {
//^         callback({ id: id, name: 'Товар' + id, price: id * 100 });
//^     }, 1000)
//^ }

//^ const result = loadData(1, (obj) => console.log(obj));


// function loadData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ id: id, name: 'Товар' + id, price: id * 100 });
//         }, 2000)
//     });
// }

// loadData(1)
//     .then((obj) => {
//         console.log(obj);
//         return loadData(2)
//     })
//     .then((obj) => {
//         console.log(obj);
//         return loadData(3)
//     })
//     .then((obj) => {
//         console.log(obj);
//     })
//     .finally(() => {
//         console.log('Операции успешно завершились!');
//     });

//& TASK 4 Напиши функцию loadUserWithOrders(userId) которая:
//& Сначала загружает пользователя через loadUser(id) — возвращает { id, name }
//& Потом загружает его заказы через loadOrders(userId) — возвращает [{ id, product }]
//& Возвращает Promise с объектом { user, orders }
//& Обе функции уже написаны — тебе нужно их скомбинировать через цепочку .then():


// function loadUser(id) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id, name: "Давид" }), 1000);
//     });
// }

// function loadOrders(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve([
//             { id: 1, product: "Ноутбук" },
//             { id: 2, product: "Мышь" }
//         ]), 1000);
//     });
// }

// function loadUserWithOrders(userId) {
//     return new Promise((resolve, reject) => {
//         let savedUser;

//         loadUser(userId)
//             .then((user) => {
//                 savedUser = user;
//                 return loadOrders(userId);
//             })
//             .then((orders) => {
//                 resolve({ user: savedUser, orders: orders });
//             })
//     });
// }

//     loadUserWithOrders(1).then(result => {
//         console.log(result.user.name);    // "Давид"
//         console.log(result.orders.length); // 2
//     });



//& TASK 5 Используй Promise.all() чтобы загрузить товары с id 1, 2, 3 параллельно и вывести их названия.

// function loadData(id) {
//     return new Promise((resolve, reject) => {
//         if (id < 0) {
//             reject();
//         }
//         setTimeout(() => {
//             resolve({ id, name: 'Товар ' + id, price: id * 100 });
//         }, 1000);
//     });
// }

// Promise.all([
//     loadData(1),
//     loadData(2),
//     loadData(3)
// ]).then((results) => {
//     // results — массив из трёх результатов
//     results.map(item => console.log(item.name))
//     // console.log(results[0].name); // "Товар 1"
//     // console.log(results[1].name); // "Товар 2"
//     // console.log(results[2].name); // "Товар 3"
// })
//     .catch((error) => {
//         // если ХОТЯ БЫ ОДИН упадёт — попадём сюда
//         console.log("Ошибка:", error);
//     });

//& TASK 6 Напиши функцию retryLoad(id, attempts) — пытается загрузить данные, и если не получается — повторяет попытку. Максимум attempts попыток.
//& Используй эту функцию которая иногда падает:

function unreliableLoad(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({ id, name: "Товар " + id });
            } else {
                reject("Сервер недоступен");
            }
        }, 500);
    });
}


function retryLoad(id, attempts) {
    return new Promise((resolve, reject) => {
        unreliableLoad(id)
            .then((user) => {
                return resolve(user);
            })
            .catch(() => {
                if (attempts > 1) {
                    retryLoad(id, attempts - 1)
                        .then(resolve).catch(reject);
                }
            })
    });

}


retryLoad(1, 3)
    .then(data => console.log("Загружено:", data.name))
    .catch(err => console.log("Все попытки исчерпаны:", err));



//& TASK 7 Напиши функцию loadCart(userIds) которая принимает массив id пользователей,
//& загружает их параллельно, и возвращает только тех у кого age >= 18.

// function loadUser(id) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const users = {
//                 1: { id: 1, name: "Анна", age: 17 },
//                 2: { id: 2, name: "Борис", age: 23 },
//                 3: { id: 3, name: "Вера", age: 15 },
//                 4: { id: 4, name: "Григорий", age: 31 }
//             };
//             resolve(users[id]);
//         }, 500);
//     });
// }

// loadCart([1, 2, 3, 4]).then(adults => {
//     console.log(adults);
//     [{ id: 2, name: "Борис", age: 23 }, { id: 4, name: "Григорий", age: 31 }]
// });
