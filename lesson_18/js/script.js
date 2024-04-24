"use strict"

// Задача 1. Калькулятор

class Calc{

	static Sum(firstNumber, secondNumber){
		return firstNumber + secondNumber
	}
	static Subtr(firstNumber, secondNumber){
		return firstNumber - secondNumber
	}
	static Mult(firstNumber, secondNumber){
		return firstNumber * secondNumber
	}
	static Div(firstNumber, secondNumber){
		if (firstNumber === 0) throw new Error('Ділення на нуль')
		return firstNumber / secondNumber
	}

}
