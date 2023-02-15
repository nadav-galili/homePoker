import { View, Text } from "react-native";
import CustomButton from "../CustomButton";
import React, { useState, useCallback } from "react";
import { Auth } from "aws-amplify";

const SocialSignInButtons = () => {
    const onSigninGoogle = useCallback(() => {
        Auth.federatedSignIn({ provider: "Google" });
    }, []);

    return (
        <>
            <CustomButton text="Sign In with Google" onPress={onSigninGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        </>
    );
};

export default SocialSignInButtons;
