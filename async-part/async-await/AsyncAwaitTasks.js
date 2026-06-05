// // & TASK 1 Перепиши через async/await:

// function loadData(id) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id, name: 'Товар ' + id }), 1000);
//     });
// }

//! Было — через .then():
// loadData(1).then(data => console.log(data.name));

//! Сделай — через async/await:
// async function main() {
//     const data = await loadData(1);
//     console.log(data.name); // Для отладки просто
//     return data;
// }

// main();

//& TASK 2 Напиши async функцию getUserName(id) которая загружает пользователя и возвращает его имя. Если не найден — выбрасывает ошибку:

function loadUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = { 1: "Давид", 2: "Анна", 3: "Абылай" };
            if (users[id]) {
                resolve(users[id]);
            } else {
                reject("Error!");
            }
        }, 2000)
    });
}

async function getUserName(id) {
    try {
        const userName = await loadUser(id);
        console.log(userName);
        return userName;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

getUserName(5)
    .then(name => console.log(name))
    .catch(err => console.log('Ошибка:', err)); // "Ошибка: Error!"




//& TASK 3 Перепиши loadUserWithOrders через async/await:

// function loadUser(id) {
//     return new Promise(resolve =>
//         setTimeout(() => resolve({ id, name: "Давид" }), 1000)
//     );
// }

// function loadOrders(userId) {
//     return new Promise(resolve =>
//         setTimeout(() => resolve([
//             { id: 1, product: "Ноутбук" },
//             { id: 2, product: "Мышь" }
//         ]), 1000)
//     );
// }

// Напиши async функцию loadUserWithOrders(userId)
// результат: { user, orders }


//& TASK 4 loadWithRetry через async/await и цикл вместо рекурсии:

// function unreliableLoad(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) resolve({ id, name: "Товар " + id });
//             else reject("Сервер недоступен");
//         }, 300);
//     });
// }

// Используй for или while — без рекурсии
// retryLoad(1, 3)
//     .then(data => console.log("Загружено:", data.name))
//     .catch(err => console.log("Все попытки исчерпаны:", err));



//& TASK 5 fetchUserStats — загрузи пользователя, потом параллельно заказы и сообщения:

// function loadUser(id) {
//     return new Promise(r => setTimeout(() => r({ id, name: "Давид" }), 500));
// }
// function loadOrders(id) {
//     return new Promise(r => setTimeout(() => r([1, 2, 3]), 700));
// }
// function loadMessages(id) {
//     return new Promise(r => setTimeout(() => r(["привет", "как дела"]), 600));
// }

// fetchUserStats(1) должна вернуть:
// {
//   user: { id: 1, name: "Давид" },
//   ordersCount: 3,
//   messagesCount: 2
// }



//& TASK 6 Пагинация — загружай страницы пока не получишь пустой массив:

// function fetchPage(page) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const data = {
//                 1: [{ name: "Товар 1" }, { name: "Товар 2" }],
//                 2: [{ name: "Товар 3" }, { name: "Товар 4" }],
//                 3: [] // конец
//             };
//             resolve(data[page] || []);
//         }, 300);
//     });
// }

// loadPage() должна вернуть все товары:
// [{ name: "Товар 1" }, { name: "Товар 2" }, { name: "Товар 3" }, { name: "Товар 4" }]