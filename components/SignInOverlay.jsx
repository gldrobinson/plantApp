import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Overlay } from "react-native-elements";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";
// import { updateUser } from "../contexts/userContext";

export const SignInOverlay = () => {
    const [visible, setVisible] = useState(true);

    const [userLogin, setUserLogin] = useState("");
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

    const handlePress = () => {
        updateUser(userLogin);
    };

    return (
        <View>
            <Overlay isVisible={visible}>
                <Text>Please input your username:</Text>
                <TextInput
                    onChange={(e) => {
                        const input = e.nativeEvent.text;
                        setUserLogin(input);
                    }}
                    style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
                ></TextInput>
                <Button title="Submit" onPress={handlePress}></Button>
            </Overlay>
        </View>
    );
};

//onBackdropPress={toggleOverlay}
