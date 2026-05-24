// Напиши функцию makeMultiplier(factor), которая возвращает функцию. Возвращённая функция принимает число и возвращает его, 
// умноженное на factor.

function makeMultiplier(factor) {
    return (num) => {
        console.log(factor * num);
    }
}


const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(5);  // 10
triple(5);  // 15