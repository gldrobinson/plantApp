import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";
import { getUser } from "../Api/getApi";
import { addUser } from "../Api/postApi";
import { getDateForTimer } from "../utils/dateSetter";
import { Image } from "react-native-elements";
// import { updateUser } from "../contexts/userContext";

export const SignInOverlay = ({
    weekCount,
    setWeekCount,
    setCurrentStreak,
    signUpDate,
    setSignUpDate,
    surrentDate,
    setCurrentDate,
}) => {
    const [visible, setVisible] = useState(true);
    const [userLogin, setUserLogin] = useState("");
    const { user, updateUser } = useContext(userContext);
    const [newUsername, setNewUsername] = useState("");
    const [newName, setNewName] = useState("");
    const [usernameMessage, setUsernameMessage] = useState("");
    const [signUpMessage, setSignUpMessage] = useState("");
    const logoUrl = "https://i.postimg.cc/rpB4dCn6/logo-rooting.png";

    const toggleOverlay = () => {
        if (!user) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        toggleOverlay();
    }, [user]);

    const handleSignIn = () => {
        if (userLogin === "") {
            setUsernameMessage("Please add your username");
        } else {
            getUser(userLogin)
                .then((user) => {
                    updateUser(user.username);
                    setWeekCount(user.currentWeek.length);
                    setCurrentStreak(user.streak.currentStreak);
                    setCurrentDate(Date.now());
                })
                .catch((err) => {
                    setVisible(true);
                    setUsernameMessage("Username not found");
                });
        }
    };

    const handleSignUp = () => {
        if (newName === "" || newUsername === "") {
            setSignUpMessage("Please enter your name and username");
        } else {
            addUser({
                username: newUsername,
                name: newName,
            }).then((user) => {
                updateUser(user.username);
                setWeekCount(user.currentWeek.length);
                setCurrentStreak(user.streak.currentStreak);
                setSignUpDate(getDateForTimer());
            });
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <Overlay isVisible={visible}>
                <Image
                    source={{
                        uri: logoUrl,
                    }}
                    style={{
                        width: 300,
                        height: 100,
                        resizeMode: "contain",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    placeholderStyle={{ backgroundColor: "transparent" }}
                />
                <Text style={{ padding: 8 }}>Sign in:</Text>
                <TextInput
                    placeholder="Username"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setUserLogin(input);
                    }}
                    style={{
                        height: 30,
                        borderColor: "gray",
                        borderWidth: 1,
                        paddingLeft: 10,
                    }}
                ></TextInput>
                <Text>{usernameMessage}</Text>
                <View
                    style={{
                        width: 100,
                        marginLeft: "32.5%",
                        marginRight: "32.5%",
                    }}
                >
                    <Button
                        title="Sign In"
                        color="#01937C"
                        onPress={handleSignIn}
                    ></Button>
                </View>

                <Text style={{ padding: 8 }}>Sign up:</Text>
                <TextInput
                    placeholder="Username"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setNewUsername(input);
                    }}
                    style={{
                        height: 30,
                        borderColor: "gray",
                        borderWidth: 1,
                        paddingLeft: 10,
                    }}
                ></TextInput>
                <TextInput
                    placeholder="First name"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setNewName(input);
                    }}
                    style={{
                        height: 30,
                        borderColor: "gray",
                        borderWidth: 1,
                        paddingLeft: 10,
                    }}
                ></TextInput>
                <Text>{signUpMessage}</Text>
                <View
                    style={{
                        width: 100,
                        marginLeft: "32.5%",
                        marginRight: "32.5%",
                    }}
                >
                    <Button
                        title="Sign Up"
                        color="#01937C"
                        onPress={handleSignUp}
                    ></Button>
                </View>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        paddingTop: 1000,
        justifyContent: "space-between",
        marginBottom: 1000,
        // flexDirection: "column",
        // padding: 10,
    },
    signIn: {
        borderWidth: 2,
    },
});
