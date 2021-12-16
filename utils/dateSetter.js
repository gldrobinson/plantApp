export const getDateForTimer = () => {
	var date = new Date();
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];
	var month = months[date.getMonth()];
	var year = date.getFullYear();
	var todayDate = date.getDate();
	var hours = date.getHours();
	var minutes =
		date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds =
		date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

	return (
		month +
		" " +
		todayDate +
		", " +
		year +
		" " +
		hours +
		":" +
		minutes +
		":" +
		seconds +
		" GMT+00:00"
	);
};

let time = getDateForTimer();
let timeObj = new Date(time).getTime();
