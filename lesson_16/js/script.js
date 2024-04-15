"use strict"

// клас TDate
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
		return `${this.correctDate(this.Day) }.${this.correctDate(this.Month)}.${this.Year}`
	}
	correctDate(val){
		let res = ''
		res += val
		return res.length === 1 ? `0${res}`: res
	}
}