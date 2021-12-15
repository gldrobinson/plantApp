import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BadgesScreen } from "./components/BadgesScreen";
import { HomeScreen } from "./components/HomeScreen";
import { WeekScreen } from "./components/WeekScreen";
import { InfoScreen } from "./components/InfoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { userContext } from "./contexts/userContext";
import { SignInOverlay } from "./components/SignInOverlay";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const [user, updateUser] = useState("");
    const [weekCount, setWeekCount] = useState(0);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [signUpDate, setSignUpDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(null);

    return (
        <userContext.Provider value={{ user, updateUser }}>
            <NavigationContainer>
                <Header style={{ justifyContent: "center" }} />
                <SignInOverlay
                    weekCount={weekCount}
                    setWeekCount={setWeekCount}
                    currentStreak={currentStreak}
                    setCurrentStreak={setCurrentStreak}
                    signUpDate={signUpDate}
                    setSignUpDate={setSignUpDate}
                    currentDate={currentDate}
                    setCurrentDate={setCurrentDate}
                />
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: "#FFC074",
                            height: 70,
                            paddingTop: 10,
                        },
                        showIcon: true,
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: "#B6C867",
                        tabBarInactiveTintColor: "#01937C",
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        children={() => (
                            <HomeScreen
                                weekCount={weekCount}
                                setWeekCount={setWeekCount}
                                currentStreak={currentStreak}
                                setCurrentStreak={setCurrentStreak}
                                signUpDate={signUpDate}
                                setSignUpDate={setSignUpDate}
                                currentDate={currentDate}
                                setCurrentDate={setCurrentDate}
                            />
                        )}
                        options={{
                            tabBarIcon: ({ tintColor }) => (
                                <Icon
                                    name="home"
                                    size={30}
                                    style={{ color: tintColor }}
                                    focused="false"
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Your week"
                        children={() => (
							<WeekScreen
							weekCount={weekCount}
							 />)} 
                        options={{
                            tabBarIcon: (tabInfo) => (
                                <Icon
                                    name="today"
                                    size={30}
                                    color={tabInfo.tintColor}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Badges"
                        component={BadgesScreen}
                        options={{
                            tabBarIcon: (tabInfo) => (
                                <Icon
                                    name="star"
                                    size={30}
                                    color={tabInfo.tintColor}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Info"
                        component={InfoScreen}
                        options={{
                            tabBarIcon: (tabInfo) => (
                                <Icon
                                    name="info"
                                    size={30}
                                    color={tabInfo.tintColor}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>

                {/* <Stack.Navigator>
        { <View style={styles.container}> */}
                {/* <Stack.Screen name="Home" component={NavBar} /> */}
                {/* <Stack.Screen name="Account" component={ProfileScreen} /> */}
                {/* <Stack.Screen name="Badges" component={BadgesScreen} /> */}
                {/* </View> */}
                {/* </Stack.Navigator> */}
            </NavigationContainer>
        </userContext.Provider>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});
