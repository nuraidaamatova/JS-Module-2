// 4.Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let souvenir = +prompt(`How many souviners do you have?`);
let trinkets = +prompt(`How many trinkets do you have?`);

let weightSouv = souvenir * 72;
let weightTrin = trinkets * 112;
let totalWeight = (weightSouv + weightTrin) / 1000;


document.write(`<h2> <br> Total weight of your purchases is ${totalWeight} kg!</h2>`);