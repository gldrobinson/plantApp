import React, { useContext, useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { userContext } from "../contexts/userContext";
import { getUser } from "../Api/getApi";
import { Logout } from "./Logout";
const logoUrl = "https://i.postimg.cc/90xWm2bc/logo.png";
export const Header = () => {
	const { user } = useContext(userContext);
	const [usersName, setUsersName] = useState("");

	useEffect(() => {
		if (!user) {
			setUsersName("");
		} else {
			getUser(user)
				.then((data) => {
					setUsersName(data.name);
				})
				.then((err) => {
					console.log(err);
				});
		}
	}, [user]);

	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Image
					source={{
						uri: logoUrl,
					}}
					style={{
						width: 180,
						height: 60,
						resizeMode: "contain",
					}}
				/>
			</View>
			<View style={styles.userInfo}>
				<Text style={styles.hi}>{!user ? "" : `Hi ${usersName}!`}</Text>
				{!user ? <View></View> : <Logout style={styles.logout} />}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FAF1E6",
		flexDirection: "column",
		height: 150,
		borderBottomWidth: 2,
		borderBottomColor: "#FFC074",
		paddingTop: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.55,
		shadowRadius: 20,
	},
	userInfo: {
		flexDirection: "row",
		flex: 1,
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#FAF1E6",
		paddingBottom: 10,
	},
	logo: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 5,
		paddingBottom: 5,
	},
	hi: {
		color: "black",
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
		paddingLeft: 20,
		textTransform: "capitalize",
	},
});
