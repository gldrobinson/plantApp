import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { grains } from "../test-data/plants";

export const FoodCards = ({ displayPlants }) => {
    console.log(displayPlants);
    return (
        <ScrollView horizontal={true}>
            {displayPlants.map((plant) => {
                console.log(plant.uri);
                return (
                    <View key={plant.name}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={{
                                uri: plant.uri,
                            }}
                        />
                        <Text style={{ textAlign: "center" }}>
                            {plant.name}
                        </Text>
                        <Text style={{ textAlign: "center" }}>
                            {plant.category}
                        </Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};
