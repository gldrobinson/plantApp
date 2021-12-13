import { Button, Text, Image } from "react-native";
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
					<Image
						source={{ uri: badge.img_url }}
						style={{ width: 100, height: 100 }}
					/>
				</ScrollView>
			);
		});
	};
	return <ScrollView>{list()}</ScrollView>;
};
