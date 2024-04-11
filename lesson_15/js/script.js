"use strict"

// задача 0
let objOne = {
	arrNumbers: [2,65,9,45,63,2,7],
	getSum: function () {
		return this.arrNumbers.reduce(
			(prevSum, el)=> prevSum + el
		)
	}
}
let objTwo = {
	arrNumbers: [12,65,4,5,63,25,7],
	getMultiplay: function (min, max) {
		return this.arrNumbers.reduce((prevSum, el) => 
			(el > min && el < max) ? prevSum * el: prevSum,	1
		)
	}
}
// задача 1
let shotPlace = {
	field: [0,1,1,0,0,0,1,0,0,1,0,1,0,0],
	takeShot: function (fieldIndex) {
		if (this.field[fieldIndex] = 1) 
		alert('Попав у зайця!') 
		else alert('Мимо!')
		return this.field
	}
}
// задача 2. Створити об’єкт «Авто». 
let car = {
	brand: 'BMW',
	sizeTank: 70,
	sizeTankAvailable: 40,
	seatsNumber: 4,
	passengersNumber: 1,
	// Заправка на вказану кількість літрів
	fillTankOfLiters: function(gazLiters) {
		let res 
		if (this.sizeTankAvailable + gazLiters <= this.sizeTank) {
			this.sizeTankAvailable += gazLiters
			res = `Заправлено ${gazLiters} літрів, всього в баку ${this.sizeTankAvailable} літрів палива`
		} else 
		{ 
			gazLiters -= this.sizeTankAvailable + gazLiters - this.sizeTank
			this.sizeTankAvailable += gazLiters
			res = `Заправлено лише ${gazLiters} літрів, всього в баку ${this.sizeTankAvailable} літрів палива `
		}
		return res
	},
	// Виведення кількості пасажирів
	getPassengersNumber: function () {
		return `Кількість пасажирів в машині: ${this.passengersNumber} `
	},
	// Додавання пасажирів
	addPassengers: function (passengersNumber) {
		let res
		if (this.passengersNumber + passengersNumber > this.seatsNumber)			
			res = `${passengersNumber} пасажира не влізе в машину `
		else
		{
			this.passengersNumber += passengersNumber
			res = `${passengersNumber} пасажира сіло в машину, тепер всього в машині ${this.passengersNumber} пасажира`
		}
		return res
	},
	// Висадка пасажирів
	outPassengers: function (passengersNumber) {
		let res
		if (this.passengersNumber < passengersNumber) res = `${passengersNumber} пасажира не має в машині`
		else {
			this.passengersNumber -= passengersNumber
			res = `${passengersNumber} пасажира висадилися з машини, тепер всього в машині ${this.passengersNumber} пасажира`
		}
		return res
	}
}
// клас MultChecker для перевірки таблиці множення
class MultChecker{
	constructor(checkerNumber,answerCorrectNumbers,answerWrongNumbers){
		this.checkerNumber = checkerNumber
		this.answerCorrectNumbers = answerCorrectNumbers
		this.answerWrongNumbers = answerWrongNumbers
	}
	generateMultExamlpe(numMult){
		let randomNumber = Math.floor(Math.random()* 10)
		this.checkerNumber = numMult * randomNumber
		return `Скільки буде ${numMult} * ${randomNumber} `
	}

	checkingForCorrectAnswer(answer){
		answer === this.checkerNumber ? this.answerCorrectNumbers++ : this.answerWrongNumbers++
	}
	getRender(){
		return `У Вас ${this.answerCorrectNumbers} правильних відповідей та ${this.answerWrongNumbers} неправильних відповідей`
	}
}
// клас Baner
class Baner{
	constructor(arrBaners){
		this.arrBaners = arrBaners
	}
	getRandomObject(){
		return Math.floor(Math.random()*this.arrBaners.length)
	}
	getRandomBaner(){
		let index = this.getRandomObject()
		return document.write(`<div style="border: 1px solid red; display:inline-block; padding: 10px">
		<img src="${this.arrBaners[index].image}" alt="Image">
		<a href="${this.arrBaners[index].link}" target="blank">Посилання</a>
		</div>`)
	}
}

class Dance{
	constructor(arrNamesBoys, arrNamesGirls){
		this.arrNamesBoys = arrNamesBoys
		this.arrNamesGirls = arrNamesGirls
	}
	getRandomNameBoy(){
		return this.arrNamesBoys[getRandomNumber(0,this.arrNamesBoys.length-1)]
	}
	getRandomNameGirl(){
		return this.arrNamesGirls[getRandomNumber(0,this.arrNamesGirls.length-1)]
	}
	getCoupleOfDencers(){
		alert(`На танцполі пара танцюристів: ${this.getRandomNameBoy()} та ${this.getRandomNameGirl()}`)
	}
	run(){
	   setInterval(() => {
			this.getCoupleOfDencers()
		}, 5000)
	}
}

function getRandomNumber(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1))
}