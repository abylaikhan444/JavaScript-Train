//^ Вместо цепочки .then():
loadData(1)
    .then(data => {
        console.log(data);
        return loadData(2);
    })
    .then(data => console.log(data));

//^ Пишем как синхронный код:
async function main() {
    const data1 = await loadData(1);
    console.log(data1);

    const data2 = await loadData(2);
    console.log(data2);
}

//* await говорит JS: "подожди пока Promise выполнится, и дай мне результат".

//! Правило 1 — await можно использовать только внутри async функции:
//! Правило 2 — async функция всегда возвращает Promise:

//^ Вместо .catch() используем обычный try/catch:

//& Promises:
loadData(1)
    .then(data => console.log(data))
    .catch(err => console.log('Ошибка:', err));

//& Async/Await:
async function main() {
    try {
        const data = await loadData(1);
        console.log(data);
    } catch (err) {
        console.log('Ошибка:', err);
    }
}

//& Параллельная загрузка с async/await
// ❌ Так — последовательно (3 секунды):
async function loadAll() {
    const a = await loadData(1); // ждём 1 сек
    const b = await loadData(2); // ждём ещё 1 сек
    const c = await loadData(3); // ждём ещё 1 сек
}

// ✅ Так — параллельно (1 секунда):
async function loadAll() {
    const [a, b, c] = await Promise.all([
        loadData(1),
        loadData(2),
        loadData(3)
    ]);
    console.log(a.name, b.name, c.name);
}


//^ Что значит "async функция всегда возвращает Promise"
//^ Это означает что снаружи функция выглядит как Promise — к ней можно применить .then().

async function getNumber() {
    return 42; // ты возвращаешь просто число
}

// Но JS автоматически оборачивает в Promise:
const result = getNumber();
console.log(result); // Promise { 42 } — не число, а Promise!

// Чтобы получить 42 — нужно раскрыть Promise:
getNumber().then(n => console.log(n)); // 42
// или
const n = await getNumber(); // 42