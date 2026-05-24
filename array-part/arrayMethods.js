// map - Meththod.
// Идея: берёт массив, применяет функцию к каждому элементу, возвращает новый массив той же длины.

const users = [
  { id: 1, name: "Алексей", age: 25 },
  { id: 2, name: "Мария", age: 30 },
  { id: 3, name: "Давид", age: 22 },
];
// Нужно вытащить только имена.

const allNames = users.map(user => user.name);


// filter - Meththod.
// Идея: Берет массив, и оставляет только те элементы, где функция вернула True.

const users2 = [
  { name: "Алексей", age: 25 },
  { name: "Мария", age: 17 },
  { name: "Давид", age: 22 },
  { name: "Катя", age: 15 },
];

const adults = users2.filter(user => user.age >= 18);


// reduce - Meththod.
// Идея: Сведение к одному значению. 

const prices = [100, 200, 300, 400];

const total = prices.reduce((a, b) => {
    return a + b;
}, 0);




// Реальная задача на практике

const products = [
  { name: "Кофе",    price: 500,  inStock: true  },
  { name: "Чай",     price: 200,  inStock: false },
  { name: "Печенье", price: 150,  inStock: true  },
  { name: "Торт",    price: 1200, inStock: true  },
];

const total2 = products
    .filter(i => i.inStock)
    .map(i => i.price)
    .reduce((a, b) => {
        return a + b
    })

    


// TASK 1 Есть массив чисел. Верни новый массив, где каждое число возведено в квадрат.

const numbers = [1, 2, 3, 4, 5];

const powNumber = numbers.map(i => i * i);




// TASK 2 Есть массив пользователей. Верни массив имён только тех, кто старше 18 лет.

const users3 = [
    { name: "Анна",    age: 17 },
    { name: "Борис",   age: 23 },
    { name: "Вера",    age: 15 },
    { name: "Григорий",age: 31 },
];

const older = users3.filter(i => i.age > 18);



// TASK 3 Есть массив заказов интернет-магазина. Напиши функцию getOrdersSummary(orders), которая возвращает объект:
// {
//   totalDelivered: 195000,   // сумма доставленных
//   pendingCount: 1,          // количество ожидающих
//   productNames: ["Ноутбук", "Мышь", "Монитор", "Клавиатура"] // все названия
// }

const orders = [
  { id: 1, product: "Ноутбук",  price: 150000, status: "delivered" },
  { id: 2, product: "Мышь",     price: 3000,   status: "pending"   },
  { id: 3, product: "Монитор",  price: 45000,  status: "delivered" },
  { id: 4, product: "Клавиатура",price: 8000,  status: "cancel" },
];

function getOrdersSummary() {
    let allInfo = {
        
    };
    // сумма price 
    const totalDel = orders
        .filter(i => i.status === "delivered")
        .reduce((acc, order) => {
        return acc + order.price;
    }, 0);
    allInfo.totalDelivered = totalDel;
    
    // количество pending
    const totalPending = orders
        .filter(i => i.status === "pending")
        .length;
    allInfo.pendingCount = totalPending;

    // Все products 
    const allProducts = orders
        .map(i => i.product);
    allInfo.productNames = allProducts;

    return allInfo;
}



getOrdersSummary(orders);