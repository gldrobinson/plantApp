import axios from "axios";

const plantAppApi = axios.create({
	baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

export const updateCurrentWeek = (username, plant) => {
	return plantAppApi
		.patch(`/users/${username}/plants`, {
			name: plant[0].name,
			cateogory: plant[0].category,
			img_url: plant[0].img_url,
		})
		.then((res) => {
			return res.data;
		});
};

export const resetWeek = (username) => {
	return plantAppApi.patch(`/users/${username}/currentweek`).then((res) => {
		return res.data;
	});
};
export const updateStreak = (username, streakBool) => {
	return plantAppApi
		.patch(`/users/${username}/streak`, {
			incStreak: streakBool,
		})
		.then((res) => {
			return res;
		});
};
