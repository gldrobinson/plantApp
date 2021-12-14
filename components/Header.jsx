import React from "react";
import { Image } from "react-native-elements";
const logoUrl = "https://i.postimg.cc/rpB4dCn6/logo-rooting.png";
export const Header = () => {
	return (
		<Image
			source={{
				uri: logoUrl,
			}}
			style={{ width: 300, height: 100, resizeMode: "contain" }}
		/>
	);
};
