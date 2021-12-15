import React, { useContext } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { userContext } from "../contexts/userContext";

export const Logout = () => {
    const { user, updateUser } = useContext(userContext);
    const handlePress = () => {
        updateUser(null);
    };
    return (
        <View style={styles.container}>
            <Button title="LOGOUT" onPress={handlePress} color="black"></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF1E6",
        paddingRight: 20,
    },
    // logout: {
    //     width: 10,
    //     color: "black",
    //     alignItems: "flex-end",

    // },
});
