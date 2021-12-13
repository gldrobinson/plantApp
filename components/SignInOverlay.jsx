import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Overlay } from "react-native-elements";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";
import { addUser } from "../Api/postApi";
// import { updateUser } from "../contexts/userContext";

export const SignInOverlay = () => {
    const [visible, setVisible] = useState(true);

    const [userLogin, setUserLogin] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newName, setNewName] = useState("");

    const { user, updateUser } = useContext(userContext);
    const toggleOverlay = () => {
        if (user === null) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        console.log(user);
        toggleOverlay();
    }, [user]);

    const handlePress1 = () => {
        updateUser(userLogin);
    };

    const handlePress2 = () => {
        addUser({
            username: newUsername,
            name: newName,
        }).then((data) => {
            updateUser(data.username);
        });
    };

    return (
        <View>
            <Overlay isVisible={visible}>
                <Text>Sign in:</Text>
                <TextInput
                    placeholder="Username"
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setUserLogin(input);
                    }}
                    style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
                ></TextInput>
                <Button title="Submit" onPress={handlePress1}></Button>

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
                <Button title="Submit" onPress={handlePress2}></Button>
            </Overlay>
        </View>
    );
};

//onBackdropPress={toggleOverlay}
