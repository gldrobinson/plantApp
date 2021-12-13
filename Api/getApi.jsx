import axios from "axios";

const plantAppApi = axios.create({
    baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

export const addUser = () => {
    return plantAppApi
        .post("/users", {
            username,
            name,
            badges,
            currentWeek,
            streak,
            userplants,
        })
        .then((res) => {
            console.log(res);
        });
};
