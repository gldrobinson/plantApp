import React, { useEffect, useState, useContext } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { FoodCards } from "./FoodCards";
import { getCurrentWeeksPlants, getPlants } from "../Api/getApi";
import { userContext } from "../contexts/userContext";

export const WeekScreen = () => {
    const { user } = useContext(userContext);
    const [currentWeeksPlants, setCurrentWeeksPlants] = useState([]);
    const [allPlants, setAllPlants] = useState([]);

    useEffect(() => {
        console.log(user);
        getCurrentWeeksPlants(user)
            .then((plants) => {
                setCurrentWeeksPlants(plants);
            })
            .then((err) => {
                console.log(err);
            });
    }, [user]);

    useEffect(() => {
        getPlants()
            .then((plantsArr) => {
                const plantNames = [];
                plantsArr.forEach((plant) => {
                    plantNames.push(plant);
                });
                setAllPlants(plantNames);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    let namesToExclude = [];
    for (let i = 0; i < currentWeeksPlants.length; i++) {
        namesToExclude.push(currentWeeksPlants[i].name);
    }
    const filteredPlants = allPlants.filter((plant) => {
        return !namesToExclude.includes(plant.name);
    });

    let namesToInclude = [];
    for (let i = 0; i < currentWeeksPlants.length; i++) {
        namesToInclude.push(currentWeeksPlants[i].name);
    }
    const weekToDisplay = allPlants.filter((plant) => {
        return namesToInclude.includes(plant.name);
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.weekSubHeader}>Your week so far</Text>

                <FoodCards displayPlants={weekToDisplay} />

                <Text style={styles.weekSubHeader}>Suggestions</Text>
                <FoodCards displayPlants={filteredPlants} />
                {/* <Text>Recipes</Text>
                <ScrollView horizontal={true}>
                    <Text style={styles.scrollCard}>1</Text>
                    <Text style={styles.scrollCard}>2</Text>
                    <Text style={styles.scrollCard}>3</Text>
                    <Text style={styles.scrollCard}>4</Text>
                    <Text style={styles.scrollCard}>5</Text>
                    <Text style={styles.scrollCard}>6</Text>
                </ScrollView> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    weekSubHeader: {
        fontSize: 18,
        fontFamily: "System",
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
        paddingBottom: 5,
        paddingTop: 3,
        color: "#01937C",
    },
    container: {
        alignContent: "center",
        backgroundColor: "#FFC074",
    },
});
// fadde edge of scroll
