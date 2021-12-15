import React, { useContext, useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { userContext } from "../contexts/userContext";
import { getUser } from "../Api/getApi";

const logoUrl = "https://i.postimg.cc/rpB4dCn6/logo-rooting.png";
export const Header = () => {
    const { user } = useContext(userContext);
    const [usersName, setUsersName] = useState("");

    useEffect(() => {
        getUser(user)
            .then((data) => {
                setUsersName(data.name);
            })
            .then((err) => {
                console.log(err);
            });
    }, []);

    if (!user) {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: logoUrl,
                    }}
                    style={{ width: 300, height: 100, resizeMode: "contain" }}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: logoUrl,
                    }}
                    style={{
                        width: 300,
                        height: 100,
                        resizeMode: "contain",
                    }}
                />
                <Text style={styles.hi}>Hi {usersName}!</Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#01937C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    hi: {
        color: "#FFC074",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});
