import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { plants } from "../test-data/plants";
import AutocompleteInput from "react-native-autocomplete-input";

export const AutoInput = ({ weekCount, setWeekCount }) => {
    const [queryText, setQueryText] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const plantArray = plants.map((plant) => {
        return plant.name;
    });
    let data = [];
    if (selectedValue === "") {
        data = [];
    } else {
        data = plantArray.filter((str) => {
            return str.includes(selectedValue);
        });
    }

    console.log(queryText, "query", selectedValue, "selected");
    return (
        <View>
            <AutocompleteInput
                width={100}
                data={data}
                value={selectedValue}
                onChangeText={(text) => setSelectedValue(text.toLowerCase())}
                flatListProps={{
                    keyExtractor: (_, idx) => idx,
                    renderItem: ({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedValue(item);
                            }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Button
                style={styles.button}
                title="submit"
                onPress={(weekCount) => {
                    setWeekCount(weekCount + 1);
                }}
            ></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        margin: 20,
        padding: 30,
    },
});
