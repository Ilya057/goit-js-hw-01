// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.






  






















const credits = 23580;
const pricePerDroid = 3000;
let userAnswer = prompt(`Сколько роботов вы хотите купить?`);
let totalPrice = userAnswer * pricePerDroid;

if(userAnswer===null){
    console.log('Отменено пользователем!')
} else if (credits<totalPrice) {
    console.log(`Недостаточно средств на счету!`);
} else  {
    console.log(`Вы купили ${userAnswer} дроидов, на счету осталось ${totalPrice - credits} кредитов.`);
}

























let credits = 23580;
let pricePerHolder = 3000;
let userPrompt = prompt(`Сколько роботов вы хотите купить?`);
let totalPrice = userPrompt * pricePerHolder;
let totalCredits = credits - userPrompt * pricePerHolder;
// console.log(userPrompt);
if(userPrompt===null){
    console.log('Отменено пользователем!');
    
 } 
 else {
     if(totalCredits> credits ) {
         console.log('Недостаточно средств на счету!');
     }
     else {
    
        console.log(`Вы купили ${userPrompt} дроидов, на счету осталось ${totalCredits} кредитов ` );
     }
 }
console.log(totalPrice);


