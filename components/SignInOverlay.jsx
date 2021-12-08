import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Overlay } from "react-native-elements";
import { useForm } from "react-hook-form";
import { userContext } from "../contexts/userContext";

export const SignInOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useContext(userContext);
  const [userLogin, setUserLogin] = useState("");

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  //   useEffect(() => {
  //     toggleOverlay;
  //   }, [user]);

  const handlePress = () => {
    setUser(userLogin);
    console.log(user);
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
        <Button onPress={handlePress}>Submit</Button>
      </Overlay>
    </View>
  );
};

//onBackdropPress={toggleOverlay}
