import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    LogBox,
} from "react-native";
import { userContext } from "../contexts/userContext";
import { AutoInput } from "./AutoComplete";
import { getUser } from "../Api/getApi";
import { updateStreak } from "../Api/patchApi";
import { resetWeek } from "../Api/patchApi";
import { ScrollView } from "react-native-gesture-handler";

export const HomeScreen = ({
    weekCount,
    setWeekCount,
    badgeMessage,
    setBadgeMessage,
}) => {
    const { user } = useContext(userContext);
    const [userInfo, setUserInfo] = useState({});
    const [currentStreak, setCurrentStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);
    const date = new Date();
    const day = date.getDay();

    useEffect(() => {
        getUser(user)
            .then((userData) => {
                if (userData) {
                    setUserInfo(userData);
                    setWeekCount(userData.currentWeek.length);
                    setHighestStreak(userData.streak.highestStreak);
                    setCurrentStreak(userData.streak.currentStreak);
                }
            })
            .then((userData) => {
                if (day === 0) {
                    resetWeek(userData.username);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user, currentStreak]);
    useEffect(() => {
        if (weekCount === 30) {
            setCurrentStreak(currentStreak + 1);
            updateStreak(user, true).catch((err) => {
                setCurrentStreak(currentStreak - 1);
                console.dir(err);
            });
        }
    }, [weekCount]);
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);
    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                behavior="position"
                enabled
                keyboardVerticalOffset={150}
            >
                <View style={styles.container}>
                    <Text style={styles.weekTitle}>My Week So Far</Text>
                    <View style={styles.circleOverlay}>
                        <Text style={styles.weeklyCount}>{weekCount}</Text>
                    </View>
                    <View style={styles.streakContainer}>
                        <View style={styles.currentStreak}>
                            <Text>Streak : {currentStreak}</Text>
                        </View>
                        <View style={styles.space}></View>
                        <View style={styles.highestStreak}>
                            <Text>Highest Streak: {highestStreak}</Text>
                        </View>
                    </View>
                    <Text style={styles.plantsToGo}>
                        {" "}
                        {30 - weekCount > 0
                            ? `Only ${30 - weekCount} to go!`
                            : `Congratulations! You made your 30 for the week!`}
                        {`\n${badgeMessage}`}
                    </Text>
                    <Text style={styles.addPlant}>Add a new plant</Text>
                    <AutoInput
                        weekCount={weekCount}
                        setWeekCount={setWeekCount}
                        setBadgeMessage={setBadgeMessage}
                    />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
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
        fontFamily: "System",
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
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
    streakContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 70,
        paddingTop: 20,
    },
    currentStreak: {
        width: 150,
        height: 50,
        backgroundColor: "#FFC074",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    space: {
        padding: 10,
    },
    highestStreak: {
        width: 150,
        height: 50,
        backgroundColor: "#FFC074",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    plantsToGo: {
        paddingTop: 20,
        fontSize: 20,
        paddingBottom: 10,
    },
    badges: {
        borderWidth: 1,
        fontSize: 14,
        textAlign: "center",
        padding: 10,
    },
    addPlant: {
        fontFamily: "System",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 15,
    },
});
