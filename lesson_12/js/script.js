"use strict"

// функція генерування числа в діапазоні від minValue до maxValue
function getRandomNumber(minValue,maxValue) {
	return minValue + Math.floor(Math.random()*(maxValue - minValue +1))
}
//    функція генерування одного одновимірного масиву (одного рядка)
function generateRandomArray(arrayLength, minValue, maxValue) {
	const arr = []
	for (let i = 0; i < arrayLength; i++) {
		 const randomNumber = getRandomNumber(minValue,maxValue)
		 arr.push(randomNumber)
	}
	return arr
}
//    функція генерування двовимірного масиву
function generateRandomTable(rowsCount, colCount,minValue, maxValue) {
	const table = []
	for (let i = 0; i < rowsCount; i++) {
		 const randomRow = generateRandomArray(colCount,minValue,maxValue)
		 table.push(randomRow)
	}
	return table
  }
  //    функція html розмітки таблиці
  function getHtmlTable(arr) {
	let table = '<table border="1px">'
	for (let row = 0; row < arr.length; row++) {
		 table += '<tr>'
		 for (let col = 0; col < arr[row].length; col++) {
			  table += `<td>${arr[row][col]}</td>` 
		 }
		 table += '</tr>'
	}
  return table += '</table>'
}
// функція сортування масиву методом Бульбашка та підрухунку кількості порівнянь та обмінів
function getCountExchangeForSortBubl(arr) {
	let changed
	let countExchange = 0 
	let countCompar = 0
	do{
		changed = false
		for (let i = 1; i < arr.length; i++){
			if (arr[i-1]> arr[i]){
				let tmp = arr[i-1]
				arr[i-1] = arr[i]
				arr[i] = tmp
				changed = true
				countExchange++
			}
			countCompar++
		}
	}
	while(changed)
	return `Порівнянь ${countCompar}, обмінів ${countExchange}`
}  
//  функція сортування масиву методом змішування та підрухунку кількості порівнянь та обмінів
function getCountExchangeForSortBublCocktail(arr) {
	let changed
	let countExchange = 0 
	let countCompar = 0
	let leftIndex = 0
	let rightIndex = arr.length -1
	while(leftIndex< rightIndex){
		changed = false
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			if(arr[i-1] > arr[i]){
				let temp = arr[i-1]
				arr[i -1] = arr[i]
				arr[i] = temp
				changed = true
				countExchange++
			}
			countCompar++
		}
		rightIndex--
		if (changed === false) break
		changed = false
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr[i-1] > arr[i]){
				let temp = arr[i-1]
				arr[i-1] = arr[i]
				arr[i] =temp
				changed = true
				countExchange++
			}
			countCompar++
		}
		leftIndex++
		if (changed === false) break
	}
	return `Порівнянь ${countCompar}, обмінів ${countExchange}`
}
//  функція сортування масиву методом включенням та підрухунку кількості порівнянь та обмінів
function getCountExchangeForInsertSort(arr) {
	let countExchange = 0 
	let countCompar = 0
	for (let k = 1; k < arr.length; k++) {
		const currentElement = arr[k]
		let i = k-1
		while(i >=0 && arr[i] > currentElement){
			arr[i + 1] = arr[i]
			i = i - 1
			countExchange++
		}
		arr[i+1] = currentElement
		countCompar++
	}
	return `Порівнянь ${countCompar}, обмінів ${countExchange}`
}
// функція сортування масиву методом Бульбашка та виведення таблиці етапів сортування
function getTableForSortBubl(arr) {
	let changed
	let table = []
	let array = []
	do{
		changed = false
		for (let i = 1; i < arr.length; i++){
			if (arr[i-1]> arr[i]){
				let tmp = arr[i-1]
				arr[i-1] = arr[i]
				arr[i] = tmp
				changed = true
				array = arr.flat()
				table.push(array)
			}
		}
	}
	while(changed)
	return table
} 
//  функція сортування масиву методом змішування та виведення таблиці етапів сортування
function getTableForSortBublCocktail(arr) {
	let changed
	let leftIndex = 0
	let rightIndex = arr.length -1
	let table = []
	let array = []
	while(leftIndex < rightIndex){
		changed = false
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			if(arr[i-1] > arr[i]){
				let temp = arr[i-1]
				arr[i -1] = arr[i]
				arr[i] = temp
				changed = true
				array = arr.flat()
				table.push(array)
			}
		}
		rightIndex--
		if (changed === false) break
		changed = false
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr[i-1] > arr[i]){
				let temp = arr[i-1]
				arr[i-1] = arr[i]
				arr[i] =temp
				changed = true
				array = arr.flat()
				table.push(array)
			}
		}
		leftIndex++
		if (changed === false) break
	}
	return table
}
//  функція сортування масиву методом включенням та виведення таблиці етапів сортування
function getTableForInsertSort(arr) {
	let table = []
	let array = []
	for (let k = 1; k < arr.length; k++) {
		const currentElement = arr[k]
		let i = k-1
		while(i >=0 && arr[i] > currentElement){
			arr[i + 1] = arr[i]
			i = i - 1
		}
		arr[i+1] = currentElement
		array = arr.flat()
		table.push(array)
	}
	return table
}
// Бінарний пошук індекса елемента в масиві
function findIndexBinarySearch(arr, searchElement) {
	let start = 0
	let end = arr.length -1
	while (start <= end) {
		const middle = Math.floor((start+end)/2)
		if (arr[middle] === searchElement) return middle
		if (arr[middle] < searchElement) start = middle + 1
		if (arr[middle] > searchElement) end = middle -1
	}
	return -1
}
// Бінарний пошук індекса елемента заданою довжиною символів в масиві
function findIndexByLenghtBinarySearch(arr, searchLenght) {
	let start = 0
	let end = arr.length -1
	while (start <= end) {
		const middle = Math.floor((start+end)/2)
		if (arr[middle].length === searchLenght) return middle
		if (arr[middle].length < searchLenght) start = middle + 1
		if (arr[middle].length > searchLenght) end = middle -1
	}
	return -1
}