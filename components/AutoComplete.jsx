import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { getPlants } from "../Api/getApi";

export const AutoInput = ({ weekCount, setWeekCount }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    getPlants()
      .then((plantsArr) => {
        const plantNames = [];
        plantsArr.forEach((plant) => {
          plantNames.push(plant.name);
        });
        setAllPlants(plantNames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let data = [];
  if (selectedValue === "" || allPlants.includes(selectedValue)) {
    data = [];
  } else {
    data = allPlants.filter((str) => {
      return str.includes(selectedValue);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <AutocompleteInput
          data={data}
          value={selectedValue}
          onChangeText={(text) => {
            setSelectedValue(text.toLowerCase());
          }}
          flatListProps={{
            keyExtractor: (_, idx) => idx,
            renderItem: ({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedValue(item);
                }}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <View style={styles.seperator} />
        <Button
          style={styles.button}
          color="#01937C"
          title="submit"
          onPress={(weekCount) => {
            setWeekCount(weekCount + 1);
          }}
        ></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  autocompleteContainer: {
    flex: 1,
    backgroundColor: "white",
    width: 250,
  },
  button: {
    flex: 1,
    margin: 20,
    padding: 50,
  },
  itemText: {
    padding: 5,
    textTransform: "lowercase",
  },
  seperator: {
    padding: 5,
  },
});
