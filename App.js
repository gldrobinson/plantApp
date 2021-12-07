import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen";

// export function HomeScreen() {
//     return (
//         <View
//             style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//         >
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Header style={{ justifyContent: "center" }} />
            <Stack.Navigator>
                {/* <View style={styles.container}> */}

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Welcome" }}
                />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
                {/* </View> */}
            </Stack.Navigator>
        </NavigationContainer>
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
