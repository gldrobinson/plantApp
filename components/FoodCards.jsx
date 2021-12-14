import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

export const FoodCards = ({ displayPlants }) => {
    return (
        <ScrollView horizontal={true}>
            {displayPlants.map((plant) => {
                return (
                    <View key={plant._id}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={{
                                uri: plant.img_url,
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
