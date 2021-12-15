import { addBadge } from "./Api/patchApi";
import {
	oneWeek,
	twoWeeks,
	oneMonth,
	thirtyPlants,
	sixtyPlants,
	fiveSeeds,
	fiveVeg,
	tenVeg,
	fiveNuts,
	fiveFruits,
	tenFruits,
	fiveHerbs,
} from "./badges";

export const badgeFunc = (userData) => {
	console.log("in function");
	let message;
	if (userData.streak.highestStreak === 0) {
		addBadge(user, oneWeek);
		message =
			"You have earned the 1 week badge!\nCheck the badges page to see your new badge!";
	}
	if (userData.streak.highestStreak === 2) {
		addBadge(user, twoWeeks);
		message =
			"You have earned the 2 weeks badge!\n Check the badges page to see your new badge!";
	}
	if (userData.streak.highestStreak === 4) {
		addBadge(user, oneMonth);
		message =
			"You have earned the 1 month badge!\nCheck the badges page to see your new badge!";
	}
	if (userData.userPlants.length === 30) {
		addBadge(user, thirtyPlants);
		message =
			"You have earned the 30 different plants badge!\nCheck the badges page to see your new badge!";
	}
	if (userData.userPlants.length === 60) {
		addBadge(user, sixtyPlants);
		message =
			"You have earned the 60 different plants badge!\nCheck the badges page to see your new badge!";
	}
	const seeds = userData.userPlants.filter((plant) => {
		if (plant.category === "seeds") return plant;
	});
	const vegetables = userData.userPlants.filter((plant) => {
		if (plant.category === "vegetables") return plant;
	});
	const fruits = userData.userPlants.filter((plant) => {
		if (plant.category === "fruits") return plant;
	});
	const nuts = userData.userPlants.filter((plant) => {
		if (plant.category === "nuts") return plant;
	});
	const grains = userData.userPlants.filter((plant) => {
		if (plant.category === "grains") return plant;
	});
	const herbsAndSpices = userData.userPlants.filter((plant) => {
		if (plant.category === "herbs-and-spices") return plant;
	});
	if (seeds.length === 5) {
		addBadge(user, fiveSeeds);
		message =
			"You have earned the 5 different seeds badge!\nCheck the badges page to see your new badge!";
	}
	if (vegetables.length === 5) {
		addBadge(user, fiveVeg);
		message =
			"You have earned the 5 different vegetables badge!\nCheck the badges page to see your new badge!";
	}
	if (vegetables.length === 10) {
		addBadge(user, tenVeg);
		message =
			"You have earned the 10 different vegetables badge!\nCheck the badges page to see your new badge!";
	}
	if (nuts.length === 5) {
		addBadge(user, fiveNuts);
		message =
			"You have earned the 5 different nuts badge!\nCheck the badges page to see your new badge!";
	}
	if (grains.length === 5) {
		addBadge(user, fiveGrains);
		message =
			"You have earned the 5 different grains badge!\nCheck the badges page to see your new badge!";
	}
	if (fruits.length === 5) {
		addBadge(user, fiveFruits);
		message =
			"You have earned the 5 different fruits badge!\nCheck the badges page to see your new badge!";
	}
	if (fruits.length === 10) {
		addBadge(user, tenFruits);
		message =
			"You have earned the 10 different fruits badge!\nCheck the badges page to see your new badge!";
	}
	if (herbsAndSpices.length === 5) {
		addBadge(user, fiveHerbs);
		message =
			"You have earned the 5 different herbs and spices badge!\nCheck the badges page to see your new badge!";
	}
	return message;
};
