// Напиши функцию createCart(), которая возвращает объект с методами:

// addItem(name, price) — добавляет товар
// getTotal() — возвращает сумму всех товаров
// getItems() — возвращает список товаров


function createCart() {
    let items = [];
    return {
        addItem: (name, price) => {
            items.push({name, price});
            
        },
        getTotal: () => {
            let total = 0;
            for (let item of items) {
                total += item.price;
            }
            return total;
        },
        getItems: () => {
            return items;
        }
    }
}





const cart = createCart();
cart.addItem("Кофе", 500);
cart.addItem("Печенье", 200);
cart.getTotal();  // 700
cart.getItems();  // [{ name: "Кофе", price: 500 }, { name: "Печенье", price: 200 }]