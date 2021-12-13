import axios from "axios";

const plantAppApi = axios.create({
    baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

export const addUser = ({ username, name }) => {
    return plantAppApi
        .post("/users", {
            name: name,
            username: username,
            currentWeek: [],
            badges: [],
            streak: {
                currentStreak: 0,
                highestStreak: 0,
            },
            userPlants: [],
        })
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
