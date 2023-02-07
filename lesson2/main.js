/*Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
Поле "автори" - являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами які описують сутніть "користувач".
Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
let arr;
arr =[`ok`, 2, 3, 4, 5, true, 7, 8, 9, 10];
console.log(arr);
console.log( arr[0]);
console.log( arr[1]);
console.log( arr[2]);
console.log( arr[3]);
console.log( arr[4]);
console.log( arr[5]);
console.log( arr[6]);
console.log( arr[7]);
console.log( arr[8]);
console.log( arr[9]);

let user1 = {
    title: 'Gram',
    pageCount: 300,
    genre: 'novel'
};
console.log(user1);
let user2 ={
    title: 'Oko',
    pageCount: 249,
    genre:'fantasy'
};
console.log(user2);
let user3 = {
    title:'Well',
    pageCount: 99,
    genre:'horror'
};
console.log(user3);

let user4 = {
    title: 'Tesla',
    pageCount: 249,
    genre:'scientific',
    authors : [name ='Nick', age = 33 ]
};
console.log(user4);
let user5 = {
    title: 'Ukraine',
    pageCount: 500,
    genre:'history',
    authors: [name = 'Chornovol', age = 45]
}
console.log(user5);
let user6 = {
    title: 'Chika',
    pageCount: 50,
    genre: 'fantasy',
    authors: [ name = 'Anna', age = 25]
}
console.log(user6);

let user8 = [
    { name: 'Petya', age: 33, gender: 'male', password: 124 },
    { name: 'Petya', age: 33, gender: 'male', password: 125 },
    { name: 'Petya', age: 33, gender: 'male', password: 126 },
    { name: 'Petya', age: 33, gender: 'male', password: 127 },
    { name: 'Petya', age: 33, gender: 'male', password: 128 },
    { name: 'Petya', age: 33, gender: 'male', password: 12365 },
    { name: 'Petya', age: 33, gender: 'male', password: 1239},
    { name: 'Petya', age: 33, gender: 'male', password: 12300},
    { name: 'Petya', age: 33, gender: 'male', password: 12312 },
    { name: 'Petya', age: 33, gender: 'male', password: 12321 }
]
console.log(user8[0].password);
console.log(user8[1].password);
console.log(user8[2].password);
console.log(user8[3].password);
console.log(user8[4].password);
console.log(user8[5].password);
console.log(user8[6].password);
console.log(user8[7].password);
console.log(user8[8].password);
console.log(user8[9].password);
/*Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
Також потрібно врахувати коли введені рівні числа.*/

let x = 9;
if (x !== 0) {
    console.log('Вірно');
} else{
    console.log('Невірно')
}

let a = 1;
if (a === 1){
    console.log('+');
} else{
    console.log('-');
}
if ( a !== 0){
    console.log('+');
} else {'-'}

/*Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
(у першу, другу чи третю).*/

let time = 47;
if ( time > 0 && time <= 15){
    console.log('first part');
} else if (time > 15 && time <= 30 ){
    console.log('first part');
} else if ( time > 30 && time <= 45){
    console.log('second part');
} else if (time >45 && time <= 60){
    console.log('fours part');
}else {
    console.log('not');
}


let day = 18;
if ( day > 0 && day <= 10){
    console.log('1');
} else if (day > 10 && day <= 20){
    console.log('2');
} else if ( day >20 && day <= 31){
    console.log('3');
} else {
console.log('not');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .

let part = 7;

switch (part) {
    case 1:
    console.log('1');
    break;
    case 2:
    console.log('2');
    break;
    case 3:
    console.log('3');
    break;
    case 4:
    console.log('4');
    break;
    case 5:
    console.log('5');
    break;
    case 6:
    console.log('6');
    break;
    case 7:
    console.log('7');
    break;
    default:
        console.log('not');

}

let v = 4;
let b = 9;

if ( b>v){
    console.log('b');
} else if (b<v){
    console.log('v');
}
    /*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"
     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/
let p = 90;
let res = x || 'default';
console.log(res);

/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
 За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
  вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if ( coursesAndDurationArray[0].monthDuration > 5){
    console.log('super');
}if ( coursesAndDurationArray[1].monthDuration > 5){
    console.log('super');
}if ( coursesAndDurationArray[2].monthDuration > 5){
    console.log('super');
}if ( coursesAndDurationArray[3].monthDuration > 5){
    console.log('super');
}if ( coursesAndDurationArray[4].monthDuration > 5){
    console.log('super');
}if ( coursesAndDurationArray[5].monthDuration > 5){
    console.log('super');
}