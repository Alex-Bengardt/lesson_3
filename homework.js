let minutes = 35, quaterAnHour;
if (minutes >= 0 && minutes <= 15) {
	quaterAnHour = "Первая четверть";
} else if (minutes >= 15 && minutes <= 30) {
	quaterAnHour = "Вторая четверть";
} else if (minutes >= 30 && minutes <= 45) {
	quaterAnHour = "Третья четверть";
} else if (minutes >= 45 && minutes <= 60) {
	quaterAnHour = "Четвертая четверть";
} else {
	quaterAnHour = "Некорректное значение! Введите от 0 до 60."
}
console.log(quaterAnHour);


let month = 3;
let season = "";
if (!(Number.isInteger(month))) {
	console.log("Введите число от 1 до 12!");
} else if (month <= 0 || month > 12) {
	console.log("Введите число от 1 до 12!");
} else {
	if (month < 3 || month == 12) {
		season = "Зима";
	} else if (month < 6) {
		season = "Весна";
	} else if (month < 9) {
		season = "Лето";
	} else if (month < 12) {
		season = "Осень";
	}
	console.log(season);
}

let count = 5;
let result = (count % 2 === 0) ? `Возвожу в квадрат: ${count ** 2}` : `Возвожу в третью степень: ${Math.pow(count, 3)}`;
console.log(result);