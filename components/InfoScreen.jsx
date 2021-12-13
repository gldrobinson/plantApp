import React from "react";
import { Button, Text } from "react-native";

export const InfoScreen = ({ navigation }) => {
	return (
		<Text>
			Why 30 different plants?{"\n"}
			Studies show that having 30 different plants can improve the health of
			your gut microbiome. Having a healthy gut helps your immunity, gut and
			colon health, as well as your body’s inflammatory response.{"\n"}
			{"\n"}
			What plants are included?{"\n"}
			It’s not only fruit and vegetables that are good for your gut! Nuts,
			seeds, grains and beans also count towards your thirty a week. If you’re
			struggling to meet your thirty, use our suggestions page to see which
			plants you haven’t had this week.
			{"\n"}
			{"\n"}
			What more can I do to help my gut?{"\n"}
			Make sure you eat as little processed food as possible, as these are not
			as beneficial for your microbiome. Stop any midnight snacking to give your
			gut microbiome a break at night, as well as limiting the amount of snacks
			you have during the day. Adding fermented foods such as kombucha, kefir
			and live yoghurt to your regular diet can also help your gut health.
		</Text>
	);
};
