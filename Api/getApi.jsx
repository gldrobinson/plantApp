import axios from "axios";

const plantAppApi = axios.create({
  baseURL: "https://plant-app-b-end.herokuapp.com/api",
});

// export const getWeeklyPlants = () => {
//   return plantAppApi.get("").then((res) => {
//     return res.data.topics;
//   });
// };
