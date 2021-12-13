import React, { useEffect } from "react";
import { getWeeklyPlants } from "../Api/getApi";
import {
    Button,
    ScrollView,
    Text,
    View,
    Image,
    StyleSheet,
} from "react-native";

export const WeeklyCount = ({ weekCount, setWeekCount }) => {
    // useEffect(() => {
    // getWeeklyPlants().then((weeklyPlants) => {
    // setWeekCount(weeklyPlants.length);
    // });
    // });
    console.log(weekCount, "new");
    setWeekCount(5);

    return <Text style={styles.weeklyCount}>{weekCount}</Text>;
};
const styles = StyleSheet.create({
    weeklyCount: {
        fontSize: 100,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "red",
    },
    container: {
        alignItems: "center",
    },
});
