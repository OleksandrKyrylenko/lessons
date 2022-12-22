'use strict'
// директива яка змушує код оброблятися у строгому режимі. 
// Без цієї установки код обробляється у необмеженому режимі.


// ДОМАШКА
// =========================ЗАДАЧА 1===============================
/*
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');
*/
let showMessage;
if (2 > 1) {
	showMessage = function () {
		console.log('Сообщение');
	}
}
showMessage();

// ==========================ЗАДАЧА 2===============================
// Створюємо масив users з елементами "Ваня" і "Іштван"
let users = ['Ваня','Іштван'];
console.log(users);
// Додаємо "Оля" в кінець масиву.
users.push('Оля');
console.log(users);
// Змінюємо значення Іштван на Петя так, щоб код 
// пошуку працював з будь-якою довжиною масиву
const findUsers = users.indexOf('Іштван');
if(findUsers >= 0) users.splice(findUsers,1, 'Петя');
console.log(users);
// Видаляємо перший елемент масиву і показуємо його
let remove = users.shift(0, 1);
console.log(remove);
// Додаємо "Маша" і "Паша" на початок масиву
users.unshift('Маша', 'Паша');
console.log(users);
// ==========================ЗАДАЧА 3===============================
// Видаляємо елемент 'Іштван' і повертаємо його в змінну.
let arr = ['Ваня', 'Іштван', 'Оля',];
let arrRemove = arr.splice(1, 1);
console.log(arrRemove);
// ==========================ЗАДАЧА 4===============================
//Створити з рядка масив
let str = 'Ваня,Иштван,Оля';
let array = str.split(',');
console.log(array);


// ==========================ЗАДАЧА 5===============================
// Чему равен previousValue в начале работы метода?
let arrTwo = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});

// ==========================ЗАДАЧА 6===============================
// Отримати в змінну елемент з атрибутом data-say-hi
// і прочитати значення цього атрибута. 
let elem = document.querySelector('[data-say-hi]');
console.log(elem.getAttribute('data-say-hi'));

// ==========================ЗАДАЧА 7===============================
// Отримати в змінну елемент з тексом Йончи
const textElements = document.querySelectorAll('.list__block li');
for(let i = 0; i < textElements.length; i++){
	if(textElements[i].textContent == 'Йончи') {
		console.log(textElements[i]);
	}	
}
// ==========================ЗАДАЧА 8===============================
// Отримати в змінну колекцію елементів з класом like
const collections = document.querySelectorAll('.like')
console.log(collections);

for(let i = 0; i < collections.length; ++i){
	console.log(collections[i]);
}

// ==========================ЗАДАЧА 9===============================
/*
const listText = document.querySelector('.list__wrap');
listText.insertAdjacentHTML(
	"beforeend",
	'<li>Текст</li>'
);
*/
// ==========================ЗАДАЧА 10===============================
// Дізнатись ширину полоси прокрутки
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const windowWidth = window.innerWidth;
const mainElementWidthResult = windowWidth - mainElementWidth;

console.log(mainElementWidth);
console.log(windowWidth);
console.log(mainElementWidthResult);

// ==========================ЗАДАЧА 11===============================
// Заставити браузер прокрутиться на 100px зверху
// через 1 секунду після відкриття сторінки.

function setScrollTo(){
	window.scrollTo(0,100);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop)
}

setTimeout(setScrollTo, 1000);

// ==========================ЗАДАЧА 11===============================
// Отримати координати будь-яких трьох елементів на сторінці.

// Отримання об'єктів
const block1 = document.querySelector('.answers__item--1');
const block2 = document.querySelector('.answers__item--2');
const block3 = document.querySelector('.answers__item--3');

// Отримання батьківського елемента.
const elementOffsetParent = 
[	
	block1.offsetParent, 
	block2.offsetParent, 
	block3.offsetParent
];
for(let i = 0; i < elementOffsetParent.length; ++i){
	console.log(elementOffsetParent[i])
}
// Отримання позицій об'єктів відносно батьківського елемента.
const elementBounding =
[
	block1.getBoundingClientRect(), 
	block2.getBoundingClientRect(), 
	block3.getBoundingClientRect()
];

console.log(elementBounding);














// ======================================================================
/*
console.log(navigator.userAgent);

if (navigator.userAgent.includes('Chrome')){
	console.log('Браузер Хром');
} else if(navigator.userAgent.includes('Firefox')) {
	console.log('Браузер Firefox')
}

const platform = console.log(navigator.platform);

console.log(location.href)
*/
// =====================================

// alert('Привіт');

const confirmResults = confirm("Переглянути відповіді?");

if(confirmResults){
	console.log(true);
}else{
	location.href = "https://google.com";
}
/*
const promptResults = prompt("Як довго ви в web-розробці?");
console.log(promptResults);
*/
// =====================================
/*
const htmlElement = document.documentElement;
console.log(htmlElement);

const headElement = document.head;
console.log(headElement);

const bodyElement = document.body;
console.log(bodyElement);
*/
// =====================================
/*
const firstChildNode = bodyElement.firstElementChild;
console.log(firstChildNode);

const lastChildNode = bodyElement.lastElementChild;
console.log(lastChildNode);
*/
// =====================================
/*
const childNode = bodyElement.childNodes;
console.log(childNode);

console.log(bodyElement.hasChildNodes());
*/
// =====================================
/*
for(let node of childNode){
	console.log(node);
}

for(let i = 0; i < childNode.length; ++i){
	console.log(childNode[i]);
}
*/
// =====================================
/*
const previousSiblingNode = bodyElement.previousSibling;
console.log(previousSiblingNode);

const nextSiblingNode = bodyElement.nextSiblingNode;
console.log(nextSiblingNode);

const parentNode = bodyElement.parentNode;
console.log(parentNode);
*/
// =====================================
/*
const childNodes = bodyElement.children;
console.log(childNodes);
*/
// =====================================
/*
const elems = document.querySelectorAll('li');
console.log(elems[2]);
*/
/*
for (const item of elems){
	console.log(item);
}

elems.forEach(item =>{
	console.log(item);
})
*/
// =====================================
/*
const subList = document.querySelectorAll('.block__list');
const subItem = subList[0].querySelectorAll('li');
console.log(subItem);

// =====================================
const elemsTwo = document.getElementById('listItem');
const elemsThree = document.getElementsByTagName('li');
const elemsFour = document.getElementsByClassName('list__item');
// =====================================
const elemsFive = document.querySelector('.block__list');
elemsFive.insertAdjacentHTML(
	"beforeend", 
	'<li class="block__item list__item-red">Пункт 4</li>'
);
console.log(elemsFive);
// =====================================
const elemSix = document.querySelector('.block__item');
const parentList = elemSix.closest('.block__list')
console.log(parentList);
// =====================================
*/
/*
const elemSeven = document.querySelectorAll('.block__item');
for(let elem of elemSeven){
	if(elem.matches('[class$="block__item-red"]')){
		console.log('Червоний');
	}else if(elem.matches('[class$="block__item-blue"]')){
		console.log('Синій');
	}
}
*/
// =====================================
/*
const elemsItem = document.querySelector('.block');
const list = elemsItem.nextElementSibling;
console.log(list);
*/
// =====================================
/*
const elemsItems = document.querySelectorAll('.block__item');
elemsItems.forEach((elemsItem, index) => {
	console.log(elemsItem.innerHTML = `Індекс :${index}`)
});
*/
// const textElement = document.querySelector('.item__text');
// const showTextElement = textElement.innerHTML;
/*
textElement.innerHTML = `Живи, а работай в свободное время!`;
console.log(textElement);
*/
/*
textElement.innerHTML =
`<p>${showTextElement}</p><p>Живи, а работай в
<span class="yellow">свободное</span> время!</p>`
*/

/*
const showTextElement = textElement.outerHTML;
console.log(showTextElement);
textElement.outerHTML = 
`<p>Живи, а работай в
<span class="yellow">свободное</span> время!</p>`

console.log(showTextElement);


const newElement = document.createElement('div');
console.log(newElement);

newElement.innerHTML = `<p>Живи, а работай в
<span class="yellow">свободное</span> время!</p>`

const page = document.querySelector('.like');
page.before(newElement);

const element = document.querySelector('.list__block');
// const elementClassName = element.className;
// console.log(elementClassName);

// element.className = "red";

element.classList.add('active');
// element.classList.remove('active');
// element.classList.toggle('active');
// element.classList.contains('active');
if(element.classList.contains('active')){
	console.log('В елемента є клас active')
}else{
	console.log('В елемента немає класу active')
}
*/

/*
function getSumm (){
	let numOne;
	let numTwo;
	
	function getNumOne (){
		numOne = 1;
	}
	function getNumTwo (){
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getSumm();
*/
/*
function getSumm (){
	let numOne = 1;
	let numTwo = 2;
	function showSum(){
		let numSumm = numOne + numTwo; 
		console.log(numSumm);
	}
	showSum();
}
getSumm();
*/
/*
let showResults;
function getSumm(){
	let numOne, numTwo;
	function getNumOne (){
		numOne = 5;
	}
	function getNumTwo (){
		numTwo = 450;
	}
	getNumOne();
	getNumTwo();
	function sumNumber(a, b){
		return a + b;
	}
	showResults = sumNumber(numOne, numTwo);
	console.log(showResults);
}
getSumm();

if (showResults == 455){
	console.log('Вірно');
}else{
	console.log('Не вірно');
}
*/
/*
function calcSum(numOne, numTwo){
	let showSumm = numOne + numTwo;
	console.log(`Змінна numOne: ${numOne}`);
	console.log(`Змінна numTwo: ${numTwo}`);
	console.log(`Сума змінних: ${showSumm}`);
}
calcSum(50, 60);
*/
/*
function calcSum(numOne, numTwo){
	let result = 1;
	for (let i = 0; i < numTwo; i++){
		result *= numOne;
	}
	return result;
}
console.log(calcSum(2, 3));
*/
/*
function createMassage (text, name){
	return `${text}, ${name}`;
}

function showMassage(message){
	console.log(message);
}

function initMassage(text, name){
	showMassage(createMassage(text, name));
}
initMassage('Привіт', 'Фрілансер');
*/

/*
let arrOne = ['Ваня','Петя', 'Вася'];
//Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne)

let arrTwo = ['Ваня','Петя', 'Вася'];
// Удаляем элемент и возвращаем его в переменную
let removed = arrOne.splice(1, 1);
console.log(removed);
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 2, 'Коля','Валера')
console.log(arrThree);
// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля','Валера')
console.log(arrFour);
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1)
console.log(arrFive);
*/
/*
let arrOne = ['Ваня','Петя', 'Вася'];
let arrTwo = arrOne.concat('Саша');
console.log(arrOne);
console.log(arrTwo);
*/