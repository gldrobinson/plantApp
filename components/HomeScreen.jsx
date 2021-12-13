import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { userContext } from "../contexts/userContext";
import { PlantsToGo } from "./PlantsToGo";
import { AutoInput } from "./AutoComplete";
import { getUser } from "../Api/getApi";

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
    })
  }, [user])

  console.log(userInfo)

  return (
    <View style={styles.container}>
      <Text>My Week So Far:</Text>
      <View style={styles.circleOverlay}>
        <Text style={styles.weeklyCount}>{weekCount}</Text>
      </View>
      <Text style={styles.plantsToGo}>Only {30 - weekCount} to go!</Text>
      <Text>Current streak {currentStreak} week(s)!</Text>
      <Text>Add new plant:</Text>
      <AutoInput weekCount={weekCount} setWeekCount={setWeekCount} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex : 1,
    backgroundColor : "#FAF1E6",
    justifyContent: "center",
    alignItems: "center",
  },
  circleOverlay : {
    color: "#FFC074",
    width: 100,
    height: 100,
    backgroundColor: "#01937C",
    // borderRadius: 180 / 2,
    justifyContent: "center",
    borderWidth: 1,
    padding: 30
    
  },
  weeklyCount: {
    fontSize: 80,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
  },
  
});
