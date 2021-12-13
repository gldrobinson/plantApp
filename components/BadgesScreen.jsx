import { Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAllBadges } from "../Api/getApi";
import React, { useState, useEffect } from "react";

export const BadgesScreen = ({ navigation }) => {
	const [badges, setBadges] = useState([]);
	useEffect(() => {
		getAllBadges()
			.then((badgesFromApi) => {
				setBadges(badgesFromApi);
			})
			.then((err) => {
				console.log(err);
			});
	}, []);
	const list = () => {
		return badges.map((badge) => {
			return (
				<ScrollView key={badge.name}>
					<Text>{badge.name}</Text>
				</ScrollView>
			);
		});
	};
	return <ScrollView>{list()}</ScrollView>;
};
// return (
// 	<ScrollView>
// 		<Text></Text>
// 	</ScrollView>
// );
