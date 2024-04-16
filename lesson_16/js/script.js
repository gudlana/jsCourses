"use strict"

//Задача 1. клас TDate
class TDate {
	#year
	#month
	#day
	constructor( day = 12,month = 4,year = 2024){
		this.Day = day
		this.Month = month
		this.Year = year
	}
	// геттер року
	get Year(){
		return this.#year
	}
	// сеттер року
	set Year(year){
		if (year < 0 || isNaN(year)) throw new Error('Некоректні дані')
		this.#year = year
	}
	// геттер місяця
	get Month(){
		return this.#month
	}
	// сеттер місяця
	set Month(month){
		if (month < 0 || isNaN(month)) throw new Error('Некоректні дані')
		this.#month = month
	}
	// геттер дня
	get Day(){
		return this.#day
	}
	// сеттер дня
	set Day(day){
		if (day < 0 || isNaN(day)) throw new Error('Некоректні дані')
		this.#day = day
	}
	// ======================
	increaseDate(days = 0, months = 0, years = 0){
		this.Day += days
		this.Month += months
		this.Year += years

		while(this.Month > 12){
			this.Month -=12
			this.Year++
		}
		while (this.Day > this.daysInMonth(this.Month, this.Year)) {
			this.Day -=this.daysInMonth(this.Month, this.Year)
			this.Month++
			if (this.Month > 12){
				this.Month = 1
				this.Year++
			}
		}
	}
	decreaseDate(days = 0, months = 0, years = 0){
		let newDay = this.Day - days
		let newMonth = this.Month - months
		let newYear = this.Year - years

		while (newMonth <= 0 || newDay <= 0) {
			if (newMonth <= 0){
				newMonth += 12
				newYear--
			}
			const dayInMonth = this.daysInMonth(newMonth, newYear)
			if (newDay <= 0){
				newDay += dayInMonth
				newMonth--
			}
		}
		this.Day = newDay
		this.Month = newMonth
		this.Year = newYear
	}
	daysInMonth(month, year){
		let arrDaysInMonth = [31,this.isLeapYear(year) ? 29 : 28,31,30,31,30,31,31,30,31,30,31]
		return arrDaysInMonth[month - 1]
	}
	isLeapYear(year){
		return (year % 4 === 0 && year % 100 !==0) || year % 400 === 0
	}
	toString(){
		return `${this.correctDateFormat(this.Day) }.${this.correctDateFormat(this.Month)}.${this.Year}`
	}
	correctDateFormat(val){
		let res = ''
		res += val
		return res.length === 1 ? `0${res}`: res
	}
}

//Задача 2. клас TMoney
class TMoney{
	#amountUSD
	#courseUSD
	constructor(amountUSD = 0, courseUSD = 100){
		this.AmountUSD = amountUSD 
		this.CourseUSD = courseUSD
	}
	get AmountUSD(){
		return this.#amountUSD
	}
	set AmountUSD(amountUSD){
		if (amountUSD < 0 || isNaN(amountUSD)) throw new Error('Некоректні дані')
		this.#amountUSD = amountUSD
	}
	get CourseUSD(){
		return this.#courseUSD
	}
	set CourseUSD(courseUSD){
		if (courseUSD < 0 || isNaN(courseUSD)) throw new Error('Некоректні дані')
		this.#courseUSD = courseUSD
	}
	addToAmount(amountUAH){
		this.AmountUSD += this.exchangeUahToUsd(amountUAH)
	}
	dropFromAmount(amountUAH){
		if (this.amountUSD >= this.exchangeUahToUsd(amountUAH)){
			this.amountUSD -= amountInUSD
			return true
		} else return false
	}
	exchangeUahToUsd(amountUAH){
		let amountInUSD = amountUAH / this.CourseUSD
		return amountInUSD 
	}
	toString(){
		return `На рахунку: ${this.AmountUSD} $ `
	}
}
//Задача 3. дата заснування (рік, місяць);
class YearOld{
	#month
	#year
	constructor(initialMonth, initialYear){
		 this.Month = initialMonth
		 this.Year = initialYear
	}
	get Month(){
		return this.#month
	}
	set Month(value){
		 if (value < 0 || value > 12) throw new Error('не коректне значення поля month')
		 this.#month = value
	}
	get Year(){
		return this.#year
	}
	set Year(value){
		 if (value < 0 || value > 2024) throw new Error('не коректне значення поля year')
		 this.#year = value
	}
}
//Задача 3. послуги (назва послуги, вартість, термін виконання);
class Services{
	#title
	#price
	#deadline
	constructor(initialTitle,  initialPrice, initialDeadline){
		 this.Title = initialTitle
		 this.Price = initialPrice
		 this.Deadline = initialDeadline
	}
	get Title(){
		 return this.#title
	}
	set Title(value){
		 if (value.length === 0) throw new Error('значення поля Title не може бути пустим')
		 this.#title = value
	}
	get Price(){
		 return this.#price
	}
	set Price(value){
		 if (value < 0) throw new Error('значення поля Price не може бути від\'ємним')
		 this.#price = value
	}
	get Deadline(){
		 return this.#deadline
	}
	set Deadline(value){
		 if (value < 0) throw new Error('значення поля Deadline не може бути від\'ємним')
		 this.#deadline = value
	}
	toString(){
		 return `послуга - ${this.Title}, ціна ${this.Price}грн, тривалість ${this.Deadline}год.`
	}
}
//Задача 3. адреси філіалів (країна, місто, вулиця, номер будинку);
class AddresOfBranches{
	#country
	#city
	#street
	#house
	constructor(initialCountry, initialCity, initialStreet, initialHouse){
		this.Country = initialCountry
		this.City = initialCity
		this.Street = initialStreet
		this.House = initialHouse
	}
	get Country(){
		return this.#country
	}
	set Country(value){
		if (value.length === 0) throw new Error('значення поля Country не може бути пустим')
		this.#country = value
	}
	get City(){
		return this.#city
	}
	set City(value){
		if (value.length === 0) throw new Error('значення поля City не може бути пустим')
		this.#city = value
	}
	get Street(){
		return this.#street
	}
	set Street(value){
		if (value.length === 0) throw new Error('значення поля Street не може бути пустим')
		this.#street = value
	}
	get House(){
		return this.#house
	}
	set House(value){
		if (value < 0) throw new Error('значення поля House не може бути пустим')
		this.#house = value
	}
	toString(){
		return `${this.Country} ${this.City} ${this.Street} ${this.House}`
	}
}
// Задача 3. Об’єкт “Фірма”
class Firm{
	#title
	#yearOld
	#services
	#adress
	constructor(initialTitle, initialYearOld, initialServices, initialAdress){
		 this.Title = initialTitle
		 this.#yearOld = initialYearOld
		 this.#services = initialServices
		 this.#adress = initialAdress
	}
	get Title(){
		 return this.#title
	}
	set Title(value){
		 if (value.length === 0) throw new Error('значення поля Title не може бути пустим')
		 this.#title = value
	}
	get YearOld(){
		this.#yearOld
	}
	getYearOld(){
		return 2024 - this.#yearOld.Year
	}
	get Services(){
		this.#services
	}
	getServices(reqPrice, reqDeadline){
		return this.#services.filter(el => (el.Price <= reqPrice && el.Deadline <= reqDeadline))
	}
	get Adress(){
		this.#adress
	}
	getAddressPerCity(reqCity){
		return this.#adress.filter(el => (el.City === reqCity))
	}
	toString(){
		 return `Фірма ${this.Title}, заснована ${this.getYearOld()} роки тому`
	}
}
// Задача 4. клас TBankomat
class TBankomat{
   #billsOfFive
   #billsOfTen
   #billsOfTwenty
   #billsOfFifty
   #billsOfHundred
   #billsOfTwohundred
	constructor(billsOfFive,billsOfTen,billsOfTwenty,billsOfFifty,billsOfHundred,billsOfTwohundred){
		this.bills = {
			5: (this.BillsOfFive = billsOfFive),
			10: (this.BillsOfTen = billsOfTen),
			20: (this.BillsOfTwenty = billsOfTwenty),
			50: (this.BillsOfFifty = billsOfFifty),
			100: (this.BillsOfHundred = billsOfHundred),
			200: (this.BillsOfTwohundred = billsOfTwohundred)
		}
	}
	set BillsOfFive(value){
		if (isNaN(value)) throw new Error('значення поля BillsOfFive має бути числовим')
		this.#billsOfFive = value
	}
	set BillsOfTen(value){
		if (isNaN(value)) throw new Error('значення поля BillsOfTen має бути числовим')
		this.#billsOfTen = value
	}
	set BillsOfTwenty(value){
		if (isNaN(value)) throw new Error('значення поля BillsOfTwenty має бути числовим')
		this.#billsOfTwenty = value
	}
	set BillsOfFifty(value){
		if (isNaN(value)) throw new Error('значення поля BillsOfFifty має бути числовим')
		this.#billsOfFifty = value
	}
	set BillsOfHundred(value){
		if (isNaN(value)) throw new Error('значення поля BillsOfHundred має бути числовим')
		this.#billsOfHundred = value
	}
	set BillsOfTwohundred(value){
		if (isNaN(value)) throw new Error('значення поля BillsOfTwohundred має бути числовим')
		this.#billsOfTwohundred = value
	}
	get Bills(){
		return this.bills
	}
	getMinSum(){
		for (let bill in this.bills){
			if (this.bills[bill] > 0){
				return bill
			}
		}
		return 0
	}
	getMaxSum(){
		let maxSum = 0
		for(let bill in this.bills){
			maxSum += this.bills[bill]*bill
		}
		return maxSum
	}
	getCash(value){
		let result
		if (value < this.getMaxSum()){
			const sortedBills = Object.keys(this.bills).sort((a,b) => b-a)
			let remainingAmount = value
			const withdrawnBills = {}
			for (const bill of sortedBills) {
				const billValue = parseInt(bill)
				const billCount = Math.min(Math.floor(remainingAmount/billValue), this.bills[bill])
				if (remainingAmount > 0){
					withdrawnBills[bill] = billCount
					remainingAmount-= billCount*billValue
					this.bills[bill] -= billCount
				}
			if (remainingAmount === 0) break
		}
		result = `Операція зняння готівки успішта. Заберіть ${value} грн.`
	}else result = 'В банкоматі немає такої суми'
	return result
	}
}