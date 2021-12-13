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
import { Logout } from "./components/Logout";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [user, updateUser] = useState("bob");
  const [weekCount, setWeekCount] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  return (
    <userContext.Provider value={{ user, updateUser }}>
      <NavigationContainer>
        <Header style={{ justifyContent: "center" }} />
        <Logout />
        <SignInOverlay
          weekCount={weekCount}
          setWeekCount={setWeekCount}
          currentStreak={currentStreak}
          setCurrentStreak={setCurrentStreak}
        />
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            children={() => (
              <HomeScreen
                weekCount={weekCount}
                setWeekCount={setWeekCount}
                currentStreak={currentStreak}
                setCurrentStreak={setCurrentStreak}
              />
            )}
          />
          <Tab.Screen name="Your week" component={WeekScreen} />
          <Tab.Screen name="Badges" component={BadgesScreen} />
          <Tab.Screen name="Info" component={InfoScreen} />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
