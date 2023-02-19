// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square= (a,b) => a*b;
console.log(square(20, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const area = (r) => 3.14 * r ** 2;
console.log(area(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sq = (r,h) => (r*h) *r * 3.14;
console.log(sq(20,10));
// - створити функцію яка приймає масив та виводить кожен його елемент
const foo = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
foo([true,200,1,9]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraphCreator = (text) => {
document.write(`<p>${text}</p>`)
}
paragraphCreator('text ras dwa');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const textCreator = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
textCreator('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const liCr = (text, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
liCr('hello', 30);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrayCreator = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
arrayCreator(['hello', 30, false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayObj = [
    {id:1 ,name: 'Nata',age:25},
    {id:2,name:'Tata',age:44},
    {id:3,name: 'Oksi',age:33},
    {id:4,name: 'Olya',age:22}
]
const blockCr = (arr) => {
    for (const item of arr) {
        document.write(`<div> id:${item.id}, ${item.name}, ${item.age} </div>`)
    }
}
blockCr(arrayObj);

// - створити функцію яка повертає найменьше число з масиву
const min = (arr) => {
  let result = arr[0];
    for (let i = 0; i < result.length; i++) {
if (result > arr[i]) {
    result = arr[i];
}
    }
    return result;
}
console.log(min([-100, 20,20,-1]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sum = (arr) => {
let result = 0;
    for (const numbers of arr) {
        result += numbers;
    }
    return result;
}
console.log(sum([100, 23, 32]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2) =>{
    const number1 = arr[index1];
    arr[index1]=arr[index2]
    arr[index2]= number1;
    return arr;
}
console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const  exchange = (sumUAH,currencyValues,exchangeCurrency)=> {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value;
        }

    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));