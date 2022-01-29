// 1.Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let string = 'ddd@bbb@ccc';

newStr= string.replaceAll( '@', '!');

document.write(`<h2>${newStr}</h2>`);