import axios from "axios";

const plantAppApi = axios.create({
  baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

export const getUser = (userLogin) => {
  return plantAppApi
    .get(`users/${userLogin}`)
    .then((res) => {
      console.log(res.data.user);
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
