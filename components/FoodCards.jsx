import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

export const FoodCards = ({ displayPlants }) => {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            {displayPlants.map((plant) => {
                return (
                    <View key={plant._id}>
                        <View style={styles.imageBackground}>
                            <Image
                                style={styles.foodPic}
                                source={{
                                    uri: plant.img_url,
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontFamily: "System",
                                fontSize: 18,
                                fontWeight: "bold",
                                textTransform: "capitalize",
                            }}
                        >
                            {plant.name}
                        </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontFamily: "System",
                                fontSize: 14,
                                fontStyle: "italic",
                                textTransform: "capitalize",
                            }}
                        >
                            Category: {plant.category}
                        </Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    foodPic: {
        borderWidth: 4,
        borderColor: "#01937C",
        borderRadius: 100,
        width: "90%",
        height: "90%",
        marginTop: "auto",
        marginBottom: "auto",
    },
    imageBackground: {
        // borderWidth: 4,
        // borderColor: "#20232a",
        // borderRadius: 6,
        backgroundColor: "#FAF1E6",
        width: 200,
        height: 200,
        alignItems: "center",
        alignContent: "center",
    },
    container: {
        alignContent: "center",
        backgroundColor: "#FAF1E6",
    },
});
