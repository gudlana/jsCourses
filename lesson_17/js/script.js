"use strict"

// Домашка 17. Задача 1

class ArrayOperations{
	static getCountPositiveNumbers(array){
		return array.reduce((prevCount, num) => num > 0 ? prevCount +1 : prevCount, 0)
	}
	static getCountNegativeNumbers(array){
		return array.reduce((prevCount, num) => num < 0 ? prevCount +1 : prevCount, 0)
	}
	static getCountIncludesNumber(array, reqNumber){
		return array.reduce((prevCount, number) => number === reqNumber ? prevCount + 1 : prevCount, 0)
	}
}

// Домашка 17. Задача 2 службове авто

class CarCompany{
	static carCompanyRef

	constructor(driver, brandCar, numberCar){
		if (CarCompany.carCompanyRef)	return CarCompany.carCompanyRef

			this.driver = driver
			this.brandCar = brandCar
			this.numberCar = numberCar

			CarCompany.carCompanyRef = this
	}	
	toString(){
			return `Водій ${this.driver} автомобіля ${this.brandCar} номер ${this.numberCar}`
	}
}

// Домашка 17. Задача 3

class Reminder{
	static remiderRef
	#message
	#intervalInSeconds
	constructor(message, intervalInSeconds){
		if (Reminder.remiderRef) return Reminder.remiderRef
		this.Message = message
		this.IntervalInSeconds = intervalInSeconds
		this.reminderCount = 0
		this.timer = null
		Reminder.remiderRef = this
	}
	get Message(){
		return this.#message
	}
	set Message(value){
		if (value.length === 0) throw new Error('Значення поля Message не може бути пустим!')
		this.#message = value
	}
	get IntervalInSeconds(){
		return this.#intervalInSeconds
	}
	set IntervalInSeconds(value){
		if (value === 0) throw new Error('Значення поля IntervalInSeconds не може бути пустим!')
		this.#intervalInSeconds = value
	}
	start(){
		if (!this.timer){
			this.timer = setInterval(()=>{
				this.reminderCount++
				alert(`Нагадування ${this.reminderCount}: ${this.Message}`)
			}, this.IntervalInSeconds * 1000)
		}
	}
	stop(){
		clearInterval(this.timer)
		this.timer = null
	}
	changeMessage(newMessage){
		this.Message = newMessage
	}
}

// Домашка 17. Задача 4 Склад

class Product{
	#titleProduct
	#unitProduct
	#amountProduct
	constructor(initData){
		this.TitleProduct = initData.titleProduct
		this.UnitProduct = initData.unitProduct
		this.AmountProduct = initData.amountProduct
		this.brandProduct = new BrandProduct(initData)
	}
	get TitleProduct(){
		return this.#titleProduct
	}
	set TitleProduct(value){
		if (value.length === 0) throw new Error('значення поля TitleProduct не може бути пустим')
		this.#titleProduct = value
	}
	get UnitProduct(){
		return this.#unitProduct
	}
	set UnitProduct(value){
		if (value.length === 0) throw new Error('значення поля UnitProduct не може бути пустим')
		this.#unitProduct = value
	}
	get AmountProduct(){
		return this.#amountProduct
	}
	set AmountProduct(value){
		if (value <= 0) throw new Error('значення поля AmountProduct не може бути від\'ємним або нульовим')
		this.#amountProduct = value
	}
	toString(){
		return `Товар: ${this.TitleProduct}, одиниця виміру: ${this.UnitProduct}, кількість: ${this.AmountProduct}, ${this.brandProduct.toString()}<br>`
	}
}

class BrandProduct{
	#titleBrand
	#numberIdBrand
	constructor({titleBrand,numberIdBrand}){
		this.TitleBrand = titleBrand
		this.NumberIdBrand = numberIdBrand
	}
	get TitleBrand(){
		return this.#titleBrand
	}
	set TitleBrand(value){
		if (value.length === 0) throw new Error('значення поля TitleBrand не може бути пустим!')
		this.#titleBrand = value
	}
	get NumberIdBrand(){
		return this.#numberIdBrand
	}
	set NumberIdBrand(value){
		if (value < 0) throw new Error('значення поля NumberIdBrand не може бути від\'ємним!')
		this.#numberIdBrand = value
	}
	toString(){
		return `Виробник: ${this.TitleBrand}, реєстраційний номер: ${this.NumberIdBrand}`
	}
}

class Storage{	
	constructor(initData){
		Object.assign(this, initData)
		this.productsList = []
	}	
	addProduct(product){
		this.productsList.push(product)
	}
	removeProduct(productToRemove){
		this.productsList = this.productsList.filter((product) => product !== productToRemove)
	}
	searchProductByTitle(productTitle){
		return this.productsList.filter((product) => product.TitleProduct === productTitle)
	}
	searchProductByBrandTitle(brandTitle){
		return this.productsList.filter((product) => product.brandProduct.TitleBrand === brandTitle)
	}
	toString(){
		return `${this.productsList.map((product) => product.toString())}`
	}
}
class StorageManager{
	constructor(productsList, storage){
		this.productsList = productsList
		this.storage = storage
	}
	addProductToStorage(){
		for (const product of this.productsList) {
			this.storage.addProduct(product)
		}
	}
	printData(){
		document.write('<strong>На складі:<br></strong>')
		for (const storageKey in this.storage) {
			document.write(this.storage[storageKey])
		}
	}
}

let productsList = [
	new Product({titleProduct:'Молоко',unitProduct:'літри',amountProduct:'100',titleBrand: 'Ферма',numberIdBrand:'1'}),
	new Product({titleProduct:'Кефір',unitProduct:'літри',amountProduct:'50',titleBrand: 'Наш молочник',numberIdBrand:'2'}),
	new Product({titleProduct:'Сир кисломолочний',unitProduct:'шт',amountProduct:'100',titleBrand: 'Простонаше',numberIdBrand:'3'}),
	new Product({titleProduct:'Сир твердий',unitProduct:'шт',amountProduct:'75',titleBrand: 'Ферма',numberIdBrand:'1'}),
	new Product({titleProduct:'Йогурт питний',unitProduct:'шт',amountProduct:'120',titleBrand: 'Ферма',numberIdBrand:'1'}),
	new Product({titleProduct:'Масло',unitProduct:'шт',amountProduct:'300',titleBrand: 'Ферма',numberIdBrand:'1'}),
]

// Домашка 17. Задача 5 Особиста бібліотека.

class Book{
	#title
	#genre
	constructor(initData){
		this.author = new Author(initData)
		this.Title = initData.title
		this.Genre = initData.genre
		this.publisher = new Publisher(initData)
	}
	get Title(){
		return this.#title
	}
	set Title(value){
		if (value.length < 0) throw new Error('значення поля Title не може бути пустим')
		this.#title = value
	}
	get Genre(){
		return this.#genre
	}
	set Genre(value){
		if (value.length < 0) throw new Error('значення поля Genre не може бути пустим')
		this.#genre = value
	}
	toString(){
		return `${this.author}, ${this.Title}, ${this.Genre}, ${this.publisher}`
	}
}
class Author{
	#firstName
	#surname
	#birth
	#description
	constructor({firstName, surname, birth, description}){
		this.FirstName = firstName
		this.Surname = surname
		this.Birth = birth
		this.Description = description
		this.available = true
	}
	get FullName(){
		return this.#firstName+ ' ' + this.#surname
	}
	set FirstName(value){
		if (value.length < 0) throw new Error('значення поля FirstName не може бути пустим')
		this.#firstName = value
	}
	set Surname(value){
		if (value.length < 0) throw new Error('значення поля Surname не може бути пустим')
		this.#surname = value
	}
	get Birth(){
		return this.#birth
	}
	set Birth(value){
		if (value < 0) throw new Error('значення поля Birth не може бути пустим')
		this.#birth = value
	}
	get Description(){
		return this.#description
	}
	set Description(value){
		if (value.length < 0) throw new Error('значення поля Description не може бути пустим')
		this.#description = value
	}
	toString(){
		return `Автор книги: ${this.FullName}, дата народження ${this.Birth}, опис ${this.Description}`
	}
}
class Publisher{
	#titlePublisher
	#number
	#foundationYear
	constructor({titlePublisher, number, foundationYear}){
		this.TitlePublisher = titlePublisher
		this.Number = number
		this.FoundationYear = foundationYear
	}
	get TitlePublisher(){
		return this.#titlePublisher
	}
	set TitlePublisher(value){
		if (value.length < 0) throw new Error('значення поля TitlePublisher не може бути пустим')
		this.#titlePublisher = value
	}
	get Number(){
		return this.#number
	}
	set Number(value){
		if (value === 0) throw new Error('значення поля Number не може бути пустим')
		this.#number = value
	}
	get FoundationYear(){
		return this.#foundationYear
	}
	set FoundationYear(value){
		if (value < 0) throw new Error('значення поля FoundationYear не може бути пустим')
		this.#foundationYear = value
	}
	toString(){
		return `Видавництво: ${this.TitlePublisher}, реєстраційний номер: ${this.Number},рік заснування: ${this.FoundationYear}`
	}
}

class Section{
	constructor(initData){
		Object.assign(this, initData)
		this.booksList = []

	}
	addBookToSection(newBook){
		this.booksList.push({
			id: new Date().getTime(),
			book: newBook,
		})
	}
	removeFromSection(bookToRemove){
		this.booksList = this.booksList.filter((book)=> book !== bookToRemove)
	}
	searchBookByTitle(searchBook){
		return this.booksList.filter((book)=> book.book.Title.toLowerCase().includes(searchBook.toLowerCase()))
	}
	searchBookByPublisher(searchBook){
		return this.booksList.filter((book)=> book.book.publisher.TitlePublisher.toLowerCase().includes(searchBook.toLowerCase()))
	}
	toString(){
		return `${this.title} : <br> ${this.booksList.map((book) => book.id +' ' + book.book + '<br>')}`
	}
}

class Library{
	constructor(sections){
		this.sections = sections
	}
	printData(){
		for (const sectionKey in this.sections) {
			document.write(sections[sectionKey])
		}
	}
}

// Домашка 17. Задача 6 перевірка таблиці множення та додавання

class TestData{
	constructor(firstNumber, secondNumber, operation, userAnswer, correctAnswer){
		this.firstNumber = firstNumber
		this.secondNumber = secondNumber
		this.operation = operation
		this.userAnswer = userAnswer
		this.correctAnswer = correctAnswer
	}
}

class History{
	static historyRef
	constructor(){
		if(History.historyRef) return History.historyRef
		this.testsList = []
		History.historyRef = this
	}
	saveTest(test){
		this.testsList.push(test)
	}
	getTests(){
		return this.testsList
	}
}

class TestManager{
	constructor(history){
		this.history = history
		this.timer = null
	}
	generateTest(){
		const firstNumber = Math.floor(Math.random()* 10) + 1
		const secondNumber = Math.floor(Math.random()* 10) + 1
		const operation = Math.random() < 0.5 ? '*' : '+'
		const correctAnswer = operation === '*' ? firstNumber * secondNumber : firstNumber + secondNumber
		const userAnswer = parseInt(prompt(`Скільки буде ${firstNumber} ${operation} ${secondNumber}?`))
		const test = new TestData(firstNumber, secondNumber,operation,userAnswer,correctAnswer)
		this.history.saveTest(test)
	}
	startTest(n){
		let counter = 0
		this.timer = setInterval(() => {
			this.generateTest()
			counter++
			if (counter === n){
				clearInterval(this.timer)
			   this.printHistory()
			}
		}, 3000);
	}
	printHistory(){
		console.log(this.history.getTests())
		for (const test of this.history.testsList) {
			document.write(`${test.firstNumber} ${test.operation} ${test.secondNumber} = ${test.correctAnswer}, відповідь користувача: ${test.userAnswer}<br>`)
		}
	}
}