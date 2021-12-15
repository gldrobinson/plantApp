import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { userContext } from "../contexts/userContext";
import { PlantsToGo } from "./PlantsToGo";
import { AutoInput } from "./AutoComplete";
import { getUser } from "../Api/getApi";
import { updateStreak } from "../Api/patchApi";
import badgeFunc from "../badge-utils";
import { resetWeek } from "../Api/patchApi";

export const HomeScreen = () => {
    const { user } = useContext(userContext);
    const [userInfo, setUserInfo] = useState({});
    const [weekCount, setWeekCount] = useState([]);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);
    const [newBadge, setNewBadge] = useState("");
    const date = new Date();
    const day = date.getDay();

    useEffect(() => {
        getUser(user)
            .then((userData) => {
                setUserInfo(userData);
                setNewBadge(badgeFunc(userData));
                setWeekCount(userData.currentWeek.length);
                setCurrentStreak(userData.streak.currentStreak);
            })
            .then((userData) => {
                if (day === 0) {
                    resetWeek(userData.username);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log("error with get request on Home");
            });
    }, [user]);
    useEffect(() => {
        if (weekCount === 30) {
            console.log("in week count use effect");
            setCurrentStreak(currentStreak + 1);
            updateStreak(user, true)
                .then((res) => {
                    console.log("made it!");
                })
                .catch((err) => {
                    setCurrentStreak(currentStreak - 1);
                    console.dir(err);
                });
        }
    }, [weekCount]);

    return (
        <View style={styles.container}>
            <Text style={styles.weekTitle}>My Week So Far</Text>
            <View style={styles.circleOverlay}>
                <Text style={styles.weeklyCount}>{weekCount}</Text>
            </View>
            <View style={styles.streakContainer}>
                <View style={styles.currentStreak}>{currentStreak}</View>
                <View style={styles.highestStreak}>{highestStreak}</View>
            </View>
            <Text style={styles.plantsToGo}>
                {" "}
                {30 - weekCount > 0
                    ? `Only ${30 - weekCount} to go!`
                    : `Congratulations! You made your 30 for the week!`}
            </Text>
            <Text>{newBadge ? newBadge : ""}</Text>
            <Text style={styles.streak}>
                Current streak {currentStreak} week(s)!
            </Text>
            <Text style={styles.addPlant}>Add a new plant</Text>
            <AutoInput weekCount={weekCount} setWeekCount={setWeekCount} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAF1E6",
    },
    weekTitle: {
        fontFamily: "chalkduster",
        fontSize: 26,
        fontWeight: "bold",
        padding: 15,
    },
    circleOverlay: {
        color: "#FFC074",
        width: 180,
        height: 180,
        backgroundColor: "#01937C",
        borderRadius: 180 / 2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
    },
    weeklyCount: {
        fontSize: 80,
        // textAlign: "center",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "centre",
    },
    streakContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 10,
        margin: 10,
    },
    currentStreak: {
        width: 120,
        height: 120,
        backgroundColor: "#FFC074",
        borderRadius: 120 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    highestStreak: {
        width: 120,
        height: 120,
        backgroundColor: "#FFC074",
        borderRadius: 120 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    plantsToGo: {
        paddingTop: 20,
        fontSize: 20,
    },
    streak: {
        paddingTop: 10,
        fontSize: 20,
    },
    addPlant: {
        fontFamily: "chalkduster",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 15,
    },
});
