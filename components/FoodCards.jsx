import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { grains } from "../test-data/plants";

export const FoodCards = () => {
    return (
        <ScrollView horizontal={true}>
            {grains.map((grain) => {
                console.log(grain.uri);
                return (
                    <View key={grain.name}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={
                                "https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI="
                            }
                        />
                        <Text style={{ textAlign: "center" }}>
                            {grain.name}
                        </Text>
                        <Text style={{ textAlign: "center" }}>
                            {grain.category}
                        </Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};
