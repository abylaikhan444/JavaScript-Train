// // ❌ ПЛОХО — var игнорирует блоки {}
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Выведет: 3, 3, 3 — не то, что ожидаешь

// // ✅ ХОРОШО — let создаёт новую переменную на каждую итерацию
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Выведет: 0, 1, 2


function makeGreeting(name) {
    return {
        name: () => {
            console.log(`Привет, ${name}!`);
        }
    }
}

makeGreeting('David');

function makeGreeting(name) {
  return function() {              // возвращаем именно функцию
    console.log(`Привет, ${name}!`);
  };
}

const greetDavid = makeGreeting("David");
greetDavid(); // "Привет, David!"


