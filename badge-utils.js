const badgeFunc = (userData) => {
	if (
		userData.streak.highestStreak === 1 &&
		!userData.badges.includes({
			name: "1 week",
			img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
			grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
			description: "you have eaten 30 different plants in a week",
		})
	) {
		userData.badges.push({
			name: "1 week",
			img_url: "https://i.postimg.cc/gkBBf7bN/aubergine-badge.png",
			grey_url: "https://i.postimg.cc/RVRy0rn5/grey-aubergine-badge.png",
			description: "you have eaten 30 different plants in a week",
		});
	} else if (
		userData.streak.highestStreak === 2 &&
		!userData.badges.includes({
			name: "2 weeks",
			img_url: "https://i.postimg.cc/HsQ9tPsr/banana-badge.png",
			grey_url: "https://i.postimg.cc/YSJyPMTg/grey-banana-badge.png",
			description: "you have eaten 30 different plants for two straight weeks",
		})
	) {
		userData.badges.push({
			name: "2 weeks",
			img_url: "https://i.postimg.cc/HsQ9tPsr/banana-badge.png",
			grey_url: "https://i.postimg.cc/YSJyPMTg/grey-banana-badge.png",
			description: "you have eaten 30 different plants for two straight weeks",
		});
	} else if (
		userData.streak.highestStreak === 4 &&
		!userData.badges.includes({
			name: "1 month",
			img_url: "https://i.postimg.cc/5tpZKhbS/lettuce-badge.png",
			grey_url: "https://i.postimg.cc/ZK4YgSh1/grey-lettuce-badge.png",
			description: "you have eaten 30 different plants every week for a month",
		})
	) {
		userData.badges.push({
			name: "1 month",
			img_url: "https://i.postimg.cc/5tpZKhbS/lettuce-badge.png",
			grey_url: "https://i.postimg.cc/ZK4YgSh1/grey-lettuce-badge.png",
			description: "you have eaten 30 different plants every week for a month",
		});
	}
	if (userData.userPlants.length === 30) {
		userData.badges.push({
			name: "30 different plants",
			img_url: "https://i.postimg.cc/XJGwBsz7/broccoli-badge.png",
			grey_url: "https://i.postimg.cc/DwNCW7vD/grey-broccoli-badge.png",
			description: "you have eaten 30 different types of plant",
		});
	}
	if (userData.userPlants.length === 60) {
		userData.badges.push({
			name: "60 different plants",
			img_url: "https://i.postimg.cc/m2GQhNNB/carrot-badge.png",
			grey_url: "https://i.postimg.cc/B69MgN1B/grey-carrot-badge.png",
			description: "you have eaten 60 different types of plant",
		});
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
		userData.badges.push({
			name: "5 seeds",
			img_url: "https://i.postimg.cc/Wp0ZRqRK/corn-badge.png",
			grey_url: "https://i.postimg.cc/3RqrV4Y1/grey-corn-badge.png",
			description: "you have eaten five different types of seeds",
		});
	}
	if (vegetables.length === 5) {
		userData.badges.push({
			name: "5 vegetables",
			img_url: "https://i.postimg.cc/50mmxQBy/mushroom-badge.png",
			grey_url: "https://i.postimg.cc/JngzHPc2/grey-mushroom-badge.png",
			description: "you have eaten five different types of vegetable",
		});
	}
	if (vegetables.length === 10) {
		userData.badges.push({
			name: "10 vegetables",
			img_url: "https://i.postimg.cc/P55v86Ls/garlic-badge.png",
			grey_url: "https://i.postimg.cc/Ls61MPFF/grey-garlic-badge.png",
			description: "you have eaten 10 different types of vegetable",
		});
	}
	if (nuts.length === 5) {
		userData.badges.push({
			name: "5 nuts",
			img_url: "https://i.postimg.cc/pXGX3Pd4/grape-badge.png",
			grey_url: "https://i.postimg.cc/43SmkF1p/grey-grape-badge.png",
			description: "you have eaten 5 different types of nut",
		});
	}
	if (grains.length === 5) {
		userData.badges.push({
			name: "5 grains",
			img_url: "https://i.postimg.cc/267CGDJH/ice-gem-badge.png",
			grey_url: "https://i.postimg.cc/fy4yktpL/grey-ice-gem-badge.png",
			description: "you have eaten five different types of grains",
		});
	}
	if (fruits.length === 5) {
		userData.badges.push({
			name: "5 fruits",
			img_url: "https://i.postimg.cc/RFnzy9Kg/lettuce-badge.png",
			grey_url: "https://i.postimg.cc/bwCcvdR6/grey-lettuce-badge.png",
			description: "you have eaten five different types of fruit",
		});
	}
	if (fruits.length === 10) {
		userData.badges.push({
			name: "10 fruits",
			img_url: "https://i.postimg.cc/XYBqbgp5/kiwi-badge.png",
			grey_url: "https://i.postimg.cc/XNFXmLBy/grey-kiwi-badge.png",
			description: "you have eaten ten different types of fruit",
		});
	}
	if (herbsAndSpices.length === 5) {
		userData.badges.push({
			name: "5 herbs and spices",
			img_url: "https://i.postimg.cc/QMs3yg5h/lemon-badge.png",
			grey_url: "https://i.postimg.cc/rwhpxY37/grey-lemon-badge.png",
			description: "you have eaten five different herbs and spices",
		});
	}
	return userData;
};

module.exports = badgeFunc;
