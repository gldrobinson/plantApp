const fakeData = {
	username: "georgia123",
	name: "georgia",
	currentWeek: [
		{ name: "banana", category: "fruit" },
		{ name: "peas", category: "vegetable" },
	],
	badges: [{ name: "1 week", img_url: "aighdfjagdha.jpg" }],
	streak: { currentStreak: 4, highestStreak: 4 },
	userPlants: [
		{ name: "brussels sprouts", category: "vegetables" },
		{ name: "pumpkin seeds", category: "seeds" },
		{ name: "peas", category: "vegetables" },
		{ name: "squash", category: "vegetables" },
		{ name: "quinoa", category: "grains" },
		{ name: "kale", category: "vegetables" },
		{ name: "green beans", category: "vegetables" },
		{ name: "chia seeds", category: "seeds" },
		{ name: "orange", category: "fruits" },
		{ name: "tangerine", category: "fruits" },
		{ name: "carrot", category: "vegetables" },
		{ name: "brussels sprouts", category: "vegetables" },
		{ name: "peas", category: "vegetables" },
		{ name: "squash", category: "vegetables" },
		{ name: "quinoa", category: "grains" },
		{ name: "kale", category: "vegetables" },
		{ name: "green beans", category: "vegetables" },
		{ name: "chia seeds", category: "seeds" },
		{ name: "orange", category: "fruits" },
		{ name: "tangerine", category: "fruits" },
		{ name: "brussels sprouts", category: "vegetables" },
		{ name: "pumpkin seeds", category: "seeds" },
		{ name: "peas", category: "vegetables" },
		{ name: "squash", category: "vegetables" },
		{ name: "quinoa", category: "grains" },
		{ name: "kale", category: "vegetables" },
		{ name: "green beans", category: "vegetables" },
		{ name: "orange", category: "fruits" },
		{ name: "brussels sprouts", category: "vegetables" },
		{ name: "pumpkin seeds", category: "seeds" },
		{ name: "peas", category: "vegetables" },
		{ name: "squash", category: "vegetables" },
		{ name: "quinoa", category: "grains" },
		{ name: "kale", category: "vegetables" },
		{ name: "green beans", category: "vegetables" },
		{ name: "orange", category: "fruits" },
		{ name: "tangerine", category: "fruits" },
		{ name: "carrot", category: "vegetables" },
		{ name: "brussels sprouts", category: "vegetables" },
		{ name: "peas", category: "vegetables" },
		{ name: "squash", category: "vegetables" },
		{ name: "quinoa", category: "grains" },
		{ name: "kale", category: "vegetables" },
		{ name: "green beans", category: "vegetables" },
		{ name: "orange", category: "fruits" },
		{ name: "tangerine", category: "fruits" },
		{ name: "brussels sprouts", category: "vegetables" },
		{ name: "peas", category: "vegetables" },
		{
			name: "allspice",
			category: "herbs-and-spices",
			img_url:
				"https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg",
		},
		{
			name: "anise",
			category: "herbs-and-spices",
			img_url:
				"https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg",
		},
		{
			name: "basil",
			category: "herbs-and-spices",
			img_url:
				"https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg",
		},
		{
			name: "borage",
			category: "herbs-and-spices",
			img_url:
				"https://www.edamam.com/food-img/dca/dca77bc65f676ca1700a8051e09e7e88.jpeg",
		},
		{
			name: "caraway",
			category: "herbs-and-spices",
			img_url:
				"https://www.edamam.com/food-img/0fe/0fe42839f38dd9755609410f05d93c5d.jpg",
		},
	],
};

const badgeFunc = (fakeData) => {
	if (
		fakeData.streak.highestStreak === 1 &&
		!fakeData.badges.includes({
			name: "1 week",
			img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
			grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
			description: "you have eaten 30 different plants in a week",
		})
	) {
		fakeData.badges.push({
			name: "1 week",
			img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
			grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
			description: "you have eaten 30 different plants in a week",
		});
	} else if (
		fakeData.streak.highestStreak === 2 &&
		!fakeData.badges.includes({
			name: "2 weeks",
			img_url: "https://i.postimg.cc/HsQ9tPsr/banana-badge.png",
			grey_url: "https://i.postimg.cc/YSJyPMTg/grey-banana-badge.png",
			description: "you have eaten 30 different plants for two straight weeks",
		})
	) {
		fakeData.badges.push({
			name: "2 weeks",
			img_url: "https://i.postimg.cc/HsQ9tPsr/banana-badge.png",
			grey_url: "https://i.postimg.cc/YSJyPMTg/grey-banana-badge.png",
			description: "you have eaten 30 different plants for two straight weeks",
		});
	} else if (
		fakeData.streak.highestStreak === 4 &&
		!fakeData.badges.includes({
			name: "1 month",
			img_url: "https://i.postimg.cc/5tpZKhbS/lettuce-badge.png",
			grey_url: "https://i.postimg.cc/ZK4YgSh1/grey-lettuce-badge.png",
			description: "you have eaten 30 different plants every week for a month",
		})
	) {
		fakeData.badges.push({
			name: "1 month",
			img_url: "https://i.postimg.cc/5tpZKhbS/lettuce-badge.png",
			grey_url: "https://i.postimg.cc/ZK4YgSh1/grey-lettuce-badge.png",
			description: "you have eaten 30 different plants every week for a month",
		});
	}
	if (fakeData.userPlants.length === 30) {
		fakeData.badges.push({
			name: "30 different plants",
			img_url: "https://i.postimg.cc/XJGwBsz7/broccoli-badge.png",
			grey_url: "https://i.postimg.cc/DwNCW7vD/grey-broccoli-badge.png",
			description: "you have eaten 30 different types of plant",
		});
	}
	if (fakeData.userPlants.length === 60) {
		fakeData.badges.push({
			name: "60 different plants",
			img_url: "https://i.postimg.cc/m2GQhNNB/carrot-badge.png",
			grey_url: "https://i.postimg.cc/B69MgN1B/grey-carrot-badge.png",
			description: "you have eaten 60 different types of plant",
		});
	}
	const seeds = fakeData.userPlants.filter((plant) => {
		if (plant.category === "seeds") return plant;
	});
	const vegetables = fakeData.userPlants.filter((plant) => {
		if (plant.category === "vegetables") return plant;
	});
	const fruits = fakeData.userPlants.filter((plant) => {
		if (plant.category === "fruits") return plant;
	});
	const nuts = fakeData.userPlants.filter((plant) => {
		if (plant.category === "nuts") return plant;
	});
	const grains = fakeData.userPlants.filter((plant) => {
		if (plant.category === "grains") return plant;
	});
	const herbsAndSpices = fakeData.userPlants.filter((plant) => {
		if (plant.category === "herbs-and-spices") return plant;
	});
	console.log(seeds);
	if (seeds.length === 5) {
		fakeData.badges.push({
			name: "5 seeds",
			img_url: "https://i.postimg.cc/Wp0ZRqRK/corn-badge.png",
			grey_url: "https://i.postimg.cc/3RqrV4Y1/grey-corn-badge.png",
			description: "you have eaten five different types of seeds",
		});
	}
	if (vegetables.length === 5) {
		fakeData.badges.push({
			name: "5 vegetables",
			img_url: "https://i.postimg.cc/50mmxQBy/mushroom-badge.png",
			grey_url: "https://i.postimg.cc/JngzHPc2/grey-mushroom-badge.png",
			description: "you have eaten five different types of vegetable",
		});
	}
	if (vegetables.length === 10) {
		fakeData.badges.push({
			name: "10 vegetables",
			img_url: "https://i.postimg.cc/P55v86Ls/garlic-badge.png",
			grey_url: "https://i.postimg.cc/Ls61MPFF/grey-garlic-badge.png",
			description: "you have eaten 10 different types of vegetable",
		});
	}
	if (nuts.length === 5) {
		fakeData.badges.push({
			name: "5 nuts",
			img_url: "https://i.postimg.cc/pXGX3Pd4/grape-badge.png",
			grey_url: "https://i.postimg.cc/43SmkF1p/grey-grape-badge.png",
			description: "you have eaten 5 different types of nut",
		});
	}
	if (grains.length === 5) {
		fakeData.badges.push({
			name: "5 grains",
			img_url: "https://i.postimg.cc/267CGDJH/ice-gem-badge.png",
			grey_url: "https://i.postimg.cc/fy4yktpL/grey-ice-gem-badge.png",
			description: "you have eaten five different types of grains",
		});
	}
	if (fruits.length === 5) {
		fakeData.badges.push({
			name: "5 fruits",
			img_url: "https://i.postimg.cc/RFnzy9Kg/lettuce-badge.png",
			grey_url: "https://i.postimg.cc/bwCcvdR6/grey-lettuce-badge.png",
			description: "you have eaten five different types of fruit",
		});
	}
	if (fruits.length === 10) {
		fakeData.badges.push({
			name: "10 fruits",
			img_url: "https://i.postimg.cc/XYBqbgp5/kiwi-badge.png",
			grey_url: "https://i.postimg.cc/XNFXmLBy/grey-kiwi-badge.png",
			description: "you have eaten ten different types of fruit",
		});
	}
	if (herbsAndSpices.length === 5) {
		fakeData.badges.push({
			name: "5 herbs and spices",
			img_url: "https://i.postimg.cc/QMs3yg5h/lemon-badge.png",
			grey_url: "https://i.postimg.cc/rwhpxY37/grey-lemon-badge.png",
			description: "you have eaten five different herbs and spices",
		});
	}
	return fakeData;
};

badgeFunc(fakeData);
console.log(fakeData);
