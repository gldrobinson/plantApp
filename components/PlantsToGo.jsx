import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export const PlantsToGo = ({ weekCount }) => {
    return <Text>Only {30 - weekCount} to go!</Text>;
};
