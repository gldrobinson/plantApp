import React, { useContext, useEffect, useState } from "react";
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
import { updateCurrentWeek } from "../Api/patchApi";
import { userContext } from "../contexts/userContext";

export const AutoInput = ({ weekCount, setWeekCount }) => {
  const {user} = useContext(userContext)
  const [selectedValue, setSelectedValue] = useState("");
  const [plantData, setPlantData] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [placeholderText, setPlaceholderText] = useState("");

  useEffect(() => {
    getPlants()
      .then((plantsArr) => {
        setPlantData(plantsArr)
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

  const handleOnSubmit = () => {
    if (selectedValue === "") {
      setPlaceholderText("Don't forget to add your food before clicking submit!")
    } else {
      setPlaceholderText("")
      let selectedPlant = plantData.filter((plant) => plant.name === selectedValue);
      setWeekCount((currentCount) => {
        console.log(currentCount, " in handleSubmit")
        return currentCount + 1;
      })
      setSelectedValue("");
      console.log(user, selectedPlant)
      // update users week here... not currently working.
      // updateCurrentWeek(user,selectedPlant).then((res) => {
      //   console.log(res)
      // if error, update placeholder text to "looks like you've already added that food for this week. Why not try something new!"
      // })

    }
  }

  console.log("weekCount = ",weekCount)

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
          onPress={handleOnSubmit}
        ></Button>
        <Text>{placeholderText}</Text>
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
    backgroundColor: "'FAF1E6'",
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
