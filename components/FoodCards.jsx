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
                            source={
                                "https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI="
                            }
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
