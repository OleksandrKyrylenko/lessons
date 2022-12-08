// 'use strict' - 
// директива яка змушує код оброблятися у строгому режимі. 
// Без цієї установки код обробляється у необмеженому режимі.
'use strict'
/*
let sum = '35' + - "22";
console.log(sum);
console.log(typeof sum);
*/

/*
let sum = '35' * "22";
console.log(sum);
console.log(typeof sum);
*/
// console.log('558' > 22++);

/*
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
*/

// console.log(!false && 11 || 18 && !'');
/*let name = 0;
console.log(name ?? "Без имени")
*/
// ==========================================================
/*
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
*/

/*
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
*/

/*
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);
*/
/* if((92 > '11' && 58 < 100)){
    console.log('Істина');
}else{
    console.log('Брехня');
}
*/

/*
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}
*/
// ============================================================
/*
//Варіант 1
let number = 1;
while(number < 6){
    console.log(number);
    number++;
}

//Варіант 2
for(let num = 1; num < 6; num++) console.log(num);

//Варіант 3
let numberTwo = 1;
do{
    console.log(numberTwo);
    numberTwo++;
}
while(numberTwo < 6);
*/

/*
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}
*/

/*
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}

let num = 0;
while(num < 3){
    console.log(`Число : ${num}`);
    num++;
}
*/

// firstFor: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
//         if(size == 1) {
//             break firstFor;
//         }
// 		console.log(size);
// 	}
// }

/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3];

for (let index = 0; index < arr1.length; index++){
	console.log(`index ${index}`);
	for (let num = 0; num < arr2.length; num++){
		console.log(`num ${num}`);
	}
}
*/
// ============================================================
/*
let numOne = 1.005 + Number.EPSILON;
console.log( Math.round(numOne * 100) / 100);

let numTwo = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numTwo);
*/

/*
let value = parseFloat("135.58px");
console.log(value);
console.log(typeof value);
*/

/*
let value = 58 + "Фрилансер";
if (isNaN(value)) {
	console.log('Результат выражения NaN');
}

let valueTwo = 58 + "Фрилансер";
if (isFinite(valueTwo)) {
	console.log('Результат выражения NaN');
}else{
	console.log('Результат выражения не NaN');
}
*/

/*
console.log(Math.max(10, 58, 39, -150, 0));
*/

/*
let numOne = 58.858;
console.log(Math.floor(numOne));
*/

// ============================================================
/*
let text = 'фрилансер';
let textSymbol = text[5]
console.log(textSymbol);
*/

/*
let text = 'фрилансер';
console.log(text.toUpperCase());
*/

/*
let text = 'фрилансер';
console.log(text.slice(3,6));
*/
/*
let text = 'фрилансер';
console.log(text.includes('лан',3));
*/