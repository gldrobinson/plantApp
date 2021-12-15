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
            <Button
                title="Logout"
                onPress={handlePress}
                style={styles.logout}
            ></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#01937C",
        paddingTop: 50,
    },
    logout: {
        width: 10,
        color: "#FFC074",
        alignItems: "flex-end",
    },
});
