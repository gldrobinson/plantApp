import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { getPlants } from "../Api/getApi";
import { updateCurrentWeek } from "../Api/patchApi";
import { userContext } from "../contexts/userContext";

import { badgeFunc } from "../badge-utils";
export const AutoInput = ({ weekCount, setWeekCount, setBadgeMessage }) => {
	const { user } = useContext(userContext);
	const [selectedValue, setSelectedValue] = useState("");
	const [plantData, setPlantData] = useState([]);
	const [allPlants, setAllPlants] = useState([]);
	const [placeholderText, setPlaceholderText] = useState("");

	useEffect(() => {
		getPlants()
			.then((plantsArr) => {
				setPlantData(plantsArr);
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
		let message;
		// if no value is inputted, return a message for the user.
		if (selectedValue === "") {
			setPlaceholderText(
				"Don't forget to add your food before clicking submit!"
			);
		} else {
			setPlaceholderText("");
			let selectedPlant = plantData.filter(
				(plant) => plant.name === selectedValue
			);
			// if plant selected is not in the db, return a message for the user.
			if (selectedPlant.length === 0) {
				setPlaceholderText(
					"Sorry that food does not currently exist in our database... Why not try something else!"
				);
			} else {
				setSelectedValue("");
				updateCurrentWeek(user, selectedPlant)
					.then((userData) => {
						// increment weekly count
						setWeekCount((currentCount) => {
							return currentCount + 1;
						});
						return userData;
					})
					.then((userData) => {
						return badgeFunc(userData);
					})
					.then((res) => {
						setBadgeMessage(res);
					})
					.catch((err) => {
						// if food selected already exists in week, return a message for the user.
						if (
							err.response.data.message ===
							"Plant already added to current week"
						) {
							setPlaceholderText(
								"It looks like you've already added that food this week! Why not try something new!"
							);
						} else {
							setPlaceholderText(
								"Oops something went wrong! Please try again :)"
							);
						}
					});
			}
		}
	};

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
				<View style={styles.seperator} />
				<Text style={styles.placeholderText}>{placeholderText}</Text>
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
		backgroundColor: "#FAF1E6",
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
	placeholderText: {
		fontStyle: "italic",
		fontWeight: "bold",
		textAlign: "center",
	},
});
