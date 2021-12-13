import { Button, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAllBadges, getUser } from "../Api/getApi";
import React, { useState, useEffect } from "react";

export const BadgesScreen = ({ navigation }) => {
	const [badges, setBadges] = useState([]);
	const [data, setData] = useState([]);
	useEffect(() => {
		getAllBadges()
			.then((badgesFromApi) => {
				setBadges(badgesFromApi);
			})
			.then((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		getUser("georgia123")
			.then((dataFromApi) => {
				setData(dataFromApi.badges);
			})
			.then((err) => {
				console.log(err);
			});
	}, []);
	const greyBadgeArr = [];
	const badgeArr = [];
	badges.forEach((badge) => {
		return data.forEach((userBadge) => {
			if (badge.name !== userBadge.name) {
				greyBadgeArr.push(badge);
			} else badgeArr.push(badge);
		});
	});
	const normalList = () => {
		return badgeArr.map((badge) => {
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
	const greyList = () => {
		return greyBadgeArr.map((badge) => {
			return (
				<ScrollView key={badge.name}>
					<Text>{badge.name}</Text>
					<Image
						source={{ uri: badge.grey_url }}
						style={{ width: 100, height: 100 }}
					/>
				</ScrollView>
			);
		});
	};
	return (
		<ScrollView>
			{normalList()}
			{greyList()}
		</ScrollView>
	);
};
