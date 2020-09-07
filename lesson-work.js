// let ilya = {
//     age: 21,
//     dad: "deputat",
// }

// if(ilya.age >= 18) {
//     alert(`Prohodi paren `);
// } else if (ilya.dad === "deputat" ) {  
//     alert(`You are welcome`) 
//   } else{
//       alert(`izvini brat`);
//   }
// const PASSWORD = `ilovejs`;

// let prompt1 = prompt(`Enter your name `);
// console.log(`Welcome`);

// if(prompt1) {

//     prompt1 === PASSWORD ? console.log (`You are in `) : console.log(`Wrong Password `);
// } else {
//     alert(`You have to enter the password`)
// };


// let a = 1;
// let b = 2;
// let c = 3; 

// if(true) {
//     c = 4;
// }

// let q;

// while (q !== null && q !=== '') {
//     q = prompt(` enter the number`);



//     console.log(q);
// }
// for(let i = 0; i< 10; i++) {
// console.log(i);
// }

// let myAge = 21; 
// let alionaAge =31;
// let sum = myAge + alionaAge
// console.log(sum);

// let radius = 10;
// const PI = 3.14;
// let result = PI * (Math.pow(radius, 2)) ;
// console.log (result);


// const name = ` Илья`;
// const age =   21 ;
// const bootcamp =  24; 

// console.log(` Меня зовут ${name}, мне ${age} год, я учусь на ${bootcamp} буткемпе `);
// if(prompt1=== PASSWORD) {
// console.log(` Zahodi Vasya`);
// } else {
//     console.log( ` Step off bitch`);
// }

// const arr = ['Mango', 'Poly', 'Ajax'];
// for(let i=0; i< arr.length; i++) {
//     console.log(`Element №${i+1}: ${arr[i]}` )
// }

// for(let el of arr) {
//     console.log(el);
// }

// const arr2 = [[ 1, 2, 3], [1, 2, 3], [1, 2, 3]]
// const arr3 = [];
// for(let el of arr2) {
//     for(let i = 0; i< el.length; i++){
//         console.log(el[i]);
//         arr3.push(el[i]);
//     }
// }
// console.log(arr3);

// Присвоение по ссылке и по значению 

// let a =1;
// let b = a;
// a=2;
// b=a;
// console.log(b);

// const obj = { name: 'juhn', surname: 'vick'}
// console.log(obj);
// const objCopy = obj;
// console.log(objCopy);

// obj.name = 'Vasya'
// console.log(objCopy);


// Методы массива 

// let str = "Hello World, i am Ilya";
// console.log(str.split(" "). join(" ")); 

// const arr = ['Mango', 'Poly', 'Ajax', 2, 3, 4, {a:1, b: 2}, false];

// console.log(arr.indexOf('Mango'));

// console.log({a:1, b: 2} === {a:1, b: 2});

// let a = {a:1, b: 2}
// let b = {a:1, b: 2}
// console.log(a===b);

// Изменение массива push pop shift unshirt

// let arr = [];

// arr.push('1');
// arr.push('2')
// console.log(arr);

// arr.pop()
// console.log(arr.pop());

// arr.unshift('p');
// console.log(arr);
// arr.shift();
// console.log(arr);


// Палиндром

// let str = 'AVA';
// let str2 = str.split('').reverse().join('');
// console.log(str ===str2);

// Метод Slice

// let arr = [1, 2, 3]
// let newArr = arr.slice(1, 2);
// arr.push(4);
// console.log( newArr);

// Метод Splice 
//  let arr = [1, 2, 3];
//  arr.splice(1, 0, 'hello');
//  console.log(arr);



// task
// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл


// Функции 

// const fn = function(a = 0,b = 0,c = 0,d = 0){
// console.log(a, b,c,d);
// }
//  fn(1);

// Псевдомассив arguments

// const showMeArguments = function(...args)
//  {
//      console.log(args);
//  }
//  showMeArguments(`thor`, `black widow`, `anti-man`)

//  let arr = [1,2,3,4,5];
//  let arr2 = [6,7,8];
//  console.log(...arr, ...arr2);

// Стрелочные функции

// const add = (...arg) => ;
// console.log(add);

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//   Сделайте два варианта функции checkAge:
//   Используя оператор ?
//   Используя оператор ||

const age = 18;
const checkAge = age>=18 ? confirm(`Родители разрешили?`) : `Родители не разрешили`;
console.log(checkAge);