import axios from "axios";

const plantAppApi = axios.create({
    baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

export const updateCurrentWeek = (username, plant) => {
    // not working... 
    console.log("plant", plant[0].name, plant[0].category)
    return plantAppApi.patch(`/users/${username}/plants`, {
        name : "tangerine",
        cateogory : "fruits"
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}