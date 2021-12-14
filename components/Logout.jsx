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
            <Text>Hi {user}!</Text>
            <Button title="Logout" onPress={handlePress}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignSelf: "flex-end",
        marginTop: -5,
        position: "absolute",
    },
});
