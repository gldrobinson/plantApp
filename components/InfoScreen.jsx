import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export const InfoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headers}>Why 30 different plants?</Text>
            <Text style={styles.body}>
                Studies show that having 30 different plants can improve the
                health of your gut microbiome.
            </Text>
            <Text style={styles.body}>
                Having a healthy gut helps your immunity, gut and colon health,
                as well as your body’s inflammatory response.
            </Text>
            <Text style={styles.headers}>What plants are included?</Text>
            <Text style={styles.body}>
                It’s not only fruit and vegetables that are good for your gut!
                Nuts, seeds, grains and beans also count towards your thirty a
                week.
            </Text>
            <Text style={styles.body}>
                If you’re struggling to meet your thirty, use our suggestions
                page to see which plants you haven’t had this week.
            </Text>

            <Text style={styles.headers}>
                What more can I do to help my gut?
            </Text>
            <Text style={styles.body} s>
                Make sure you eat as little processed food as possible, as these
                are not as beneficial for your microbiome.
            </Text>
            <Text style={styles.body}>
                Stop any midnight snacking to give your gut microbiome a break
                at night, as well as limiting the amount of snacks you have
                during the day.
            </Text>
            <Text style={styles.body}>
                Adding fermented foods such as kombucha, kefir and live yoghurt
                to your regular diet can also help your gut health.
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF1E6",
        height: "100%",
    },
    headers: {
        fontWeight: "bold",
        fontSize: 22,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 10,
    },
    body: { paddingLeft: 20, paddingRight: 20, paddingBottom: 8, fontSize: 15 },
});
