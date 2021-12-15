import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
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
        <View>
            <Overlay isVisible={visible}>
                <Image
                    source={{
                        uri: logoUrl,
                    }}
                    style={{ width: 300, height: 100, resizeMode: "contain" }}
                    placeholderStyle={{ backgroundColor: "transparent" }}
                />
                <Text>Sign in:</Text>
                <TextInput
                    placeholder="username"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setUserLogin(input);
                    }}
                    style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
                ></TextInput>
                <Text>{usernameMessage}</Text>
                <Button title="Submit" onPress={handleSignIn}></Button>

                <Text>Sign up:</Text>
                <TextInput
                    placeholder="Username"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setNewUsername(input);
                    }}
                    style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
                ></TextInput>
                <TextInput
                    placeholder="First name"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setNewName(input);
                    }}
                    style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
                ></TextInput>
                <Text>{signUpMessage}</Text>
                <Button title="Submit" onPress={handleSignUp}></Button>
            </Overlay>
        </View>
    );
};
