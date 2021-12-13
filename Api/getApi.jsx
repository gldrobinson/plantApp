import axios from "axios";

const plantAppApi = axios.create({
	baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

export const getUser = (userLogin) => {
	return plantAppApi
		.get(`users/${userLogin}`)
		.then((res) => {
			return res.data.user;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getWeeklyPlants = () => {
	return plantAppApi.get("").then((res) => {
		return res.data.topics;
	});
};

export const getAllBadges = async () => {
	return plantAppApi.get("/badges").then((res) => {
		return res.data.badges;
	});
};

export const getPlants = () => {
	return plantAppApi
		.get("/plants")
		.then((res) => {
			return res.data.plants;
		})
		.catch((err) => {
			console.log(err);
		});
};
