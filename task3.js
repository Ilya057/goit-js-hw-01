
// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.





const ADMIN_PASSWORD = 'qwerty';
let message;
let promptPassword = prompt(`Enter the password`)
if(promptPassword === null) {
    message = `Отменено пользователем`
}

else if(promptPassword ===`qwerty`) {
    message = `Добро пожаловать!`
} else {
    message = `Доступ запрещен, неверный пароль `
}


alert(message)
console.log(message);

