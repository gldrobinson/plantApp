import React from "react";
import {
    Button,
    ScrollView,
    Text,
    View,
    Image,
    StyleSheet,
} from "react-native";
import { FoodCards } from "./FoodCards";
import { plants } from "../test-data/plants";
import { thisWeeksPlants } from "../test-data/thisWeeksPlants";
// import banana from "../test-images";
// import apple from "../test-images";
// import orange from "../test-images";

// import{apple}from
// import{orange}from

export const WeekScreen = () => {
    let namesToExclude = [];
    for (let i = 0; i < thisWeeksPlants.length; i++) {
        namesToExclude.push(thisWeeksPlants[i].name);
    }
    const filteredPlants = plants.filter((plant) => {
        return !namesToExclude.includes(plant.name);
    });
    return (
        <View>
            <ScrollView>
                <Text>Your week so far</Text>

                <FoodCards displayPlants={thisWeeksPlants} />

                <Text>Suggestions</Text>
                <FoodCards displayPlants={filteredPlants} />
                <Text>Recipes</Text>
                <ScrollView horizontal={true}>
                    <Text style={styles.scrollCard}>1</Text>
                    <Text style={styles.scrollCard}>2</Text>
                    <Text style={styles.scrollCard}>3</Text>
                    <Text style={styles.scrollCard}>4</Text>
                    <Text style={styles.scrollCard}>5</Text>
                    <Text style={styles.scrollCard}>6</Text>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollCard: {
        fontSize: 500,
    },
});
