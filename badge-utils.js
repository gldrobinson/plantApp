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
	fiveGrains
} from "./badges";
export const badgeFunc = (userData) => {
	const filter = userData.badges.map((badge) => {
		return badge.name;
	});
	let message = "";
	if (
		userData["streak"].currentStreak === 1 &&
		!filter.includes(oneWeek.name)
	) {
		addBadge(userData.username, oneWeek);
		message =
			"You have earned the 1 week badge!\nCheck the badges page to see your new badge!";
	}
	if (
		userData["streak"].currentStreak === 2 &&
		!filter.includes(twoWeeks.name)
	) {
		addBadge(user, twoWeeks);
		message =
			"You have earned the 2 weeks badge!\n Check the badges page to see your new badge!";
	}
	if (
		userData["streak"].currentStreak === 4 &&
		!filter.includes(oneMonth.name)
	) {
		addBadge(user, oneMonth);
		message =
			"You have earned the 1 month badge!\nCheck the badges page to see your new badge!";
	}
	if (
		userData.userPlants.length === 30 &&
		!filter.includes(thirtyPlants.name)
	) {
		addBadge(user, thirtyPlants);
		message =
			"You have earned the 30 different plants badge!\nCheck the badges page to see your new badge!";
	}
	if (userData.userPlants.length === 60 && filter.includes(sixtyPlants.name)) {
		addBadge(user, sixtyPlants);
		message =
			"You have earned the 60 different plants badge!\nCheck the badges page to see your new badge!";
	}
	const seeds = userData["userPlants"].filter((plant) => {
		if (plant.cateogory === "seeds") return plant;
	});
	const vegetables = userData["userPlants"].filter((plant) => {
		if (plant.cateogory === "vegetables") return plant;
	});
	const fruits = userData["userPlants"].filter((plant) => {
		if (plant.cateogory === "fruits") return plant;
	});
	const nuts = userData["userPlants"].filter((plant) => {
		if (plant.cateogory === "nuts") return plant;
	});
	const grains = userData["userPlants"].filter((plant) => {
		if (plant.cateogory === "grains") return plant;
	});
	const herbsAndSpices = userData["userPlants"].filter((plant) => {
		if (plant.cateogory === "herbs-and-spices") return plant;
	});
	if (seeds.length === 5 && !filter.includes(fiveSeeds.name)) {
		addBadge(userData.username, fiveSeeds);
		message =
			"You have earned the 5 different seeds badge!\nCheck the badges page to see your new badge!";
	}
	if (vegetables.length === 5 && !filter.includes(fiveVeg.name)) {
		addBadge(userData.username, fiveVeg);
		message =
			"You have earned the 5 different vegetables badge!\nCheck the badges page to see your new badge!";
	}
	if (vegetables.length === 10 && !filter.includes(tenVeg.name)) {
		addBadge(userData.username, tenVeg);
		message =
			"You have earned the 10 different vegetables badge!\nCheck the badges page to see your new badge!";
	}
	if (nuts.length === 5 && !filter.includes(fiveNuts.name)) {
		addBadge(userData.username, fiveNuts);
		message =
			"You have earned the 5 different nuts badge!\nCheck the badges page to see your new badge!";
	}
	if (grains.length === 5 && !filter.includes(fiveGrains.name)) {
		addBadge(userData.username, fiveGrains);
		message =
			"You have earned the 5 different grains badge!\nCheck the badges page to see your new badge!";
	}
	if (fruits.length === 5 && !filter.includes(fiveFruits.name)) {
		addBadge(userData.username, fiveFruits);
		message =
			"You have earned the 5 different fruits badge!\nCheck the badges page to see your new badge!";
	}
	if (fruits.length === 10 && !filter.includes(tenFruits.name)) {
		addBadge(userData.username, tenFruits);
		message =
			"You have earned the 10 different fruits badge!\nCheck the badges page to see your new badge!";
	}
	if (herbsAndSpices.length === 5 && !filter.includes(fiveHerbs.name)) {
		addBadge(userData.username, fiveHerbs);
		message =
			"You have earned the 5 different herbs and spices badge!\nCheck the badges page to see your new badge!";
	}
	return message;
};
