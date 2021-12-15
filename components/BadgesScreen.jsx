import { Text, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAllBadges, getUser } from "../Api/getApi";
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../contexts/userContext";
export const BadgesScreen = ({ navigation }) => {
	const { user } = useContext(userContext);
	const [badges, setBadges] = useState([]);
	const [data, setData] = useState([]);
	let error = "";
	useEffect(() => {
		getAllBadges()
			.then((badgesFromApi) => {
				setBadges(badgesFromApi);
			})
			.catch((err) => {
				error = "Something has gone wrong!";
			});
	}, []);
	useEffect(() => {
		getUser(user)
			.then((dataFromApi) => {
				setData(dataFromApi.badges);
			})
			.then((err) => {
				error = "Something has gone wrong!";
			});
	}, []);
	console.log();
	const badgeArr = [];
	let greyBadgeArr = [];
	if (data.length === 0) greyBadgeArr = badges;
	badges.forEach((badge) => {
		return data.forEach((userBadge) => {
			if (badge.name === userBadge.name) {
				badgeArr.push(badge);
			}
			if (!greyBadgeArr.includes(badge) && !badgeArr.includes(badge)) {
				greyBadgeArr.push(badge);
			}
		});
	});

	const normalList = () => {
		if (badgeArr.length === 0) return "";
		return badgeArr.map((badge) => {
			return (
				<View key={`${badge.name}`}>
					<Text>{error}</Text>
					<Text>{badge.name}</Text>
					<Image
						source={{ uri: badge.img_url }}
						style={{ width: 100, height: 100 }}
					/>
				</View>
			);
		});
	};
	const greyList = () => {
		return greyBadgeArr.map((badge) => {
			return (
				<View key={badge.name}>
					<Text>{badge.name}</Text>
					<Image
						source={{ uri: badge.grey_url }}
						style={{ width: 100, height: 100 }}
					/>
				</View>
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
