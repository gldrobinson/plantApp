import React, { useContext } from "react";
import { Text } from "react-native";
import { userContext } from "../contexts/userContext";

export const HomeScreen = () => {
    const { user } = useContext(userContext);
    return <Text>Homepage</Text>;
};
