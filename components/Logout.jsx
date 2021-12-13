import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { userContext } from "../contexts/userContext";

export const Logout = () => {
    const { user, updateUser } = useContext(userContext);
    const handlePress = () => {
        updateUser(null);
    };
    return (
        <View>
            <Text>Hi {user}!</Text>
            <Button title="Logout" onPress={handlePress}></Button>
        </View>
    );
};
