const user = {
  name: "Давид",           // строка
  age: 22,                 // число
  skills: ["JS", "HTML"],  // массив
  address: {               // вложенный объект
    city: "Алматы",
    country: "Казахстан"
  },
  greet() {                // метод — функция внутри объекта
    console.log(`Привет, я ${this.name}`);
  }
};

user.name          // "Давид" — через точку
user["name"]       // "Давид" — через скобки (нужно когда ключ в переменной)
user.address.city  // "Алматы" — вложенный объект
user.greet()       // "Привет, я Давид"

// Когда нужны скобки:
const key = "name";
user[key]  // "Давид" — так можно, user.key — нельзя







// Деструктуризация — используется везде в React

const user = { name: "Давид", age: 22, city: "Алматы" };

// ❌ Старый способ:
const name = user.name;
const age = user.age;

// ✅ Деструктуризация:
const { name, age } = user;

// Можно сразу переименовать:
const { name: userName } = user;
console.log(userName); // "Давид"

// Можно задать значение по умолчанию:
const { name, role = "user" } = user;
console.log(role); // "user" — потому что в объекте нет role


// В функциях — встретишь в React постоянно:
// ❌ Без деструктуризации:
function greet(user) {
  console.log(`Привет, ${user.name}, тебе ${user.age} лет`);
}

// ✅ С деструктуризацией:
function greet({ name, age }) {
  console.log(`Привет, ${name}, тебе ${age} лет`);
}





// Spread и Rest для объектов

const user = { name: "Давид", age: 22 };

// Spread — скопировать и добавить:
const updatedUser = { ...user, city: "Алматы" };
// { name: "Давид", age: 22, city: "Алматы" }

// Обновить поле — не мутируя оригинал:
const olderUser = { ...user, age: 23 };
// { name: "Давид", age: 23 }

console.log(user); // { name: "Давид", age: 22 } — оригинал не тронут

//Это критически важно в React — там нельзя мутировать объекты напрямую.



