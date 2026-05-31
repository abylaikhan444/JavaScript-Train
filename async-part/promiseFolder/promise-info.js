//& Создание промисов

const promise = new Promise((resolve, reject) => {
    //^ resolve(данные) — вызываем если всё хорошо
    //^ reject(ошибка)  — вызываем если что-то пошло не так

    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Данные загружены!"); //^ переходим в fulfilled
        } else {
            reject("Что-то пошло не так"); //^ переходим в rejected
        }
    }, 1000);
});

//& Получение результатов .than() и .catch()

promise
    .then((result) => {
        //^ сюда попадаем если resolve()
        console.log(result); //^ "Данные загружены!"
    })
    .catch((error) => {
        //^ сюда попадаем если reject()
        console.log(error); //^ "Что-то пошло не так"
    })
    .finally(() => {
        //^ выполняется ВСЕГДА — и при успехе и при ошибке
        console.log("Операция завершена");
    });


//! ❌ Старый способ — колбэк:
function loadData(id, callback) {
    setTimeout(() => {
        callback({ id, name: 'Товар ' + id, price: id * 100 });
    }, 1000);
}

loadData(1, (data) => console.log(data));

//! ✅ Новый способ — Promise:
function loadData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: 'Товар ' + id, price: id * 100 });
        }, 1000);
    });
}

loadData(1).then((data) => console.log(data));




//& Решение проблемы Callback Hell

//!  ❌ Callback Hell:
loadData(1, (data) => {
    console.log(data.name);
    loadData(2, (data) => {
        console.log(data.name);
        loadData(3, (data) => {
            console.log(data.name);
        });
    });
});

//! ✅ Promise цепочка — плоская, читаемая:
loadData(1)
    .then((data) => {
        console.log(data.name); //~ "Товар 1"
        return loadData(2);     //~ возвращаем следующий Promise
    })
    .then((data) => {
        console.log(data.name); //~ "Товар 2"
        return loadData(3);     //~ возвращаем следующий Promise
    })
    .then((data) => {
        console.log(data.name); //~ "Товар 3"
    });

//& Ключевое правило: если в.then() вернуть Promise — следующий.then() получит его результат.


//^ Обработка ошибок в Promise
function loadUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject("ID должен быть положительным"); // ошибка
            } else {
                resolve({ id, name: "Давид" }); // успех
            }
        }, 1000);
    });
}

//^ Одного .catch() достаточно на всю цепочку:
loadUser(1)
    .then((user) => {
        console.log(user.name); // "Давид"
        return loadUser(-1);    // вызовет ошибку
    })
    .then((user) => {
        console.log(user.name); // ← сюда НЕ попадём
    })
    .catch((error) => {
        console.log("Ошибка:", error); // "Ошибка: ID должен быть положительным"
    });


//^ Promise.all() — параллельная загрузка, для загрузки одномвременно нескольких вещей и дождаться всех

// Загружаем три товара ПАРАЛЛЕЛЬНО — не по очереди:
Promise.all([
    loadData(1),
    loadData(2),
    loadData(3)
])
    .then((results) => {
        // results — массив из трёх результатов
        console.log(results[0].name); // "Товар 1"
        console.log(results[1].name); // "Товар 2"
        console.log(results[2].name); // "Товар 3"
    })
    .catch((error) => {
        // если ХОТЯ БЫ ОДИН упадёт — попадём сюда
        console.log("Ошибка:", error);
    });

// С колбэками это заняло бы 3 секунды (по очереди)
// С Promise.all — занимает 1 секунду (параллельно)





