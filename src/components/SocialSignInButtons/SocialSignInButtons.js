import { View, Text } from "react-native";
import CustomButton from "../CustomButton";
import React from "react";

const SocialSignInButtons = () => {
    const onSigninGoogle = () => {
        console.log("Sign in with Google");
    };
    return (
        <>
            <CustomButton text="Sign In with Google" onPress={onSigninGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        </>
    );
};

export default SocialSignInButtons;
