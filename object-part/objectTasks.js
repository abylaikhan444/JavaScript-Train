// TASK 1 Есть объект. Используй деструктуризацию чтобы достать name и price, и выведи строку "Товар: Ноутбук, цена: 150000 тг".

// const product = { 
//     name: "Ноутбук", 
//     price: 150000, 
//     category: "Электроника" 
// };

// const {name, price} = product

// console.log(`Товар: ${name}, цена: ${price}тг`);

// TASK 2 Напиши функцию updateUser(user, changes) которая возвращает нового пользователя с применёнными изменениями, не мутируя оригинал.

// const user = { name: "Давид", age: 22, city: "Алматы" };

// function updateUser(user, newObj) {
//     const updatedUser = {...user, age: newObj.age, city: newObj.city};
//     return updatedUser;
// }

// updateUser(user, { age: 23, city: "Астана" });
// // { name: "Давид", age: 23, city: "Астана" }
// console.log(updatedUser);

// console.log(user); // { name: "Давид", age: 22, city: "Алматы" } — не изменился



// // ХОРОШОЕ РЕШЕНИЕ 

// function updateUser(user, changes) {
//   return { ...user, ...changes }; // одна строка — чисто и универсально
// }

// const result = updateUser(user, { age: 23, city: "Астана" });
// console.log(result); // { name: "Давид", age: 23, city: "Астана" }
// console.log(user);   // { name: "Давид", age: 22, city: "Алматы" } — не тронут


// TASK 3 Напиши объект userProfile с методами. this должен работать корректно:

const userProfile = {
  name: "Давид",
  scores: [85, 92, 78, 95],

  getAverage() {
    const sumScore = this.scores.reduce((a, b) => {
      return a + b;
    })
    const avgScore = sumScore / this.scores.length;
    userProfile.avgCopy = avgScore;
  },

  getSummary() {
    setTimeout(() => {
      console.log(`Пользователь ${this.name}, средний балл: ${this.avgCopy}`);
    }, 100)

    // вернуть строку:
    // "Пользователь Давид, средний балл: 87.5"
  }
}; 


userProfile.getAverage();
userProfile.getSummary();
console.log(userProfile);




const userProfile = {
  name: "Давид",
  scores: [85, 92, 78, 95],

  getAverage() {
    const sum = this.scores.reduce((acc, score) => acc + score, 0);
    return sum / this.scores.length; // просто возвращаем
  },

  getSummary() {
    const avg = this.getAverage(); // вызываем метод через this
    return `Пользователь ${this.name}, средний балл: ${avg}`;
  }
};

console.log(userProfile.getSummary());
// "Пользователь Давид, средний балл: 87.5"