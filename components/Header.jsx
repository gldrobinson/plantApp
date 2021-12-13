import React from "react";
import { Text, Image } from "react-native-elements";
const logoUrl = "https://i.postimg.cc/rpB4dCn6/logo-rooting.png";
export const Header = () => {
	return (
		<Image
			source={{
				uri: logoUrl,
			}}
			style={{ width: 100, height: 100 }}
		/>
	);
};
