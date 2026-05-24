// this — это объект, который вызвал функцию.

const user = {
  name: "Давид",
  greet() {
    console.log(this.name); // this = user, потому что user вызвал greet
  }
};

user.greet(); // "Давид"

const user = {
  name: "Давид",
  greet() {
    console.log(this.name);
  }
};

const fn = user.greet; // скопировали функцию
fn(); // undefined — this теперь не user, а window (или undefined в strict mode)

// Почему? Когда пишешь user.greet() — вызывает user, он и есть this. Когда пишешь fn() — никто не вызывает через точку, this теряется.
// Стрелочные функции и this
// Стрелочные функции не имеют своего this — они берут его из окружения где созданы:

const user = {      
  name: "Давид",
  
  // Обычная функция — this = user ✅
  greet() {
    console.log(this.name); // "Давид"
  },
  
  // Стрелочная — this НЕ равен user ❌
  greetArrow: () => {
    console.log(this.name); // undefined
  }
};


const timer = {
  name: "Таймер",
  
  // ❌ Проблема с обычной функцией внутри:
  start() {
    setTimeout(function() {
      console.log(this.name); // undefined — this потерялся
    }, 1000);
  },
  
  // ✅ Стрелочная берёт this из start():
  startFixed() {
    setTimeout(() => {
      console.log(this.name); // "Таймер" ✅
    }, 1000);
  }
};