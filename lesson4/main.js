// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function cool(a,b){
    return a*b;
}
console.log(cool(5,6));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function rts(r){
return 2*3.14*(r*r)
}
console.log( rts(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function win(h,r){
    return 2*3.14*r*(h+r);
}
console.log(win(30,20));
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayWithdraw(arr, i){
    console.log(arr[i]);
i++;
if ( i < arr.length){
    arrayWithdraw(arr,i)
}
}
arrayWithdraw( [67, 12, 13],0);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(p){
    console.log(arguments[0]);
}
paragraph(`<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>`)

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function text(c) {
    document.write(`<ul>
<li>${arguments[0]}</li>
<li>${arguments[0]}</li>
<li>${arguments[0]}</li>
</ul>`)
}
text('coo1l')
    // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function nambr(f,r) {
    document.write(`<ul>`);
for (let i = 0; i < arguments[1]; i++){
    document.write(`<li>${arguments[0]}</li>`);
    }
document.write(`</ul>`);
}
nambr('nice',3)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listCreator(arr) {
    document.write('<ul>')
    for (const item of arr) {

        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')

}
listCreator([90, 22, true,'what'])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function objBlockCreator(objects){
    for (const item of objects) {
        document.write(`<div>${item.id} ${item.age} ${item.name}</div>`)
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minNum(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (min > number) {
            min = number;
        }

    }
    return min;
}

console.log(minNum([3, -999, -19, -10]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum( numbers){
    let bag = 22;
    for (const number of numbers) {
        bag=bag + number;
    }
    return bag;
}

console.log(sum([1,2,10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let foo1 = arr[index1],
    foo2  = arr[index2];
    arr[index1] = foo2;
    arr[index2] = foo1;
    return arr;

}

console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange( uah, currencies, exitCurrency){
    for ( const item of currencies) {
        if (item.currency === exitCurrency ){
        return uah / item.value;
        }
    }
}

console.log(
exchange(

    5000,
    [
        {currency:'usd', value:30},
        {currency:'eur', value:40},
        {currency:'gbp', value:36}
    ],
    'usd'
)
);