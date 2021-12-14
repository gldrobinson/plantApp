import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { userContext } from "../contexts/userContext";
import { PlantsToGo } from "./PlantsToGo";
import { AutoInput } from "./AutoComplete";
import { getUser } from "../Api/getApi";
import { updateStreak } from "../Api/patchApi";

export const HomeScreen = () => {
  const { user } = useContext(userContext);
  const [userInfo, setUserInfo] = useState({})
  const [weekCount, setWeekCount] = useState([])
  const [currentStreak, setCurrentStreak] = useState(0)

  useEffect(() => {
    getUser(user).then((userData) => {
      setUserInfo(userData)
      setWeekCount(userData.currentWeek.length)
      setCurrentStreak(userData.streak.currentStreak)
    }).catch((err) => {
      console.log(err)
      console.log("error with get request on Home")
    })
  }, [user])

  useEffect(() => {
    if (weekCount === 30) {
      console.log("in week count use effect")
      setCurrentStreak(currentStreak + 1);
      updateStreak(user, true).then((res) => {
        console.log("made it!")
      }).catch((err) => {
        setCurrentStreak(currentStreak - 1);
        console.dir(err)
      })
    }
  }, [weekCount])

  console.log(weekCount)

  return (
    <View style={styles.container}>
      <Text>My Week So Far:</Text>
      <View style={styles.circleOverlay}>
        <Text style={styles.weeklyCount}>{weekCount}</Text>
      </View>
      <Text style={styles.plantsToGo}> {30 - weekCount > 0 ? `Only ${30 - weekCount} to go!`: `Congratulations! You made your 30 for the week!`}</Text>
      <Text>Current streak {currentStreak} week(s)!</Text>
      <Text>Add new plant:</Text>
      <AutoInput weekCount={weekCount} setWeekCount={setWeekCount} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor : "#FAF1E6",
  },
  
  circleOverlay : {
    color: "#FFC074",
    width : 180,
    height: 180,
    backgroundColor: "#01937C",
    borderRadius: 180 / 2,
    justifyContent: "center",
    alignItems : "center",
    borderWidth: 1,
    
  },
  
  weeklyCount: {
    fontSize: 80,
    // textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "centre",
  },
  
});
