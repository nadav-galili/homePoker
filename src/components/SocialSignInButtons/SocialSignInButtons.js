import { View, Text } from "react-native";
import CustomButton from "../CustomButton";
import React, { useState, useEffect } from "react";
import { Auth, Amplify } from "aws-amplify";

const SocialSignInButtons = () => {
    const onSigninGoogle = async () => {
        try {
            const g = await Auth.federatedSignIn({ provider: "Google" });
            console.log("🚀 ~ file: SocialSignInButtons.js:11 ~ onSigninGoogle ~ g", g);

            // console.log("🚀 ~ file: SocialSignInButtons.js:10 ~ onSigninGoogle ~ g", g);
        } catch (error) {
            console.log("error signing in", error);
        }
    };

    return (
        <>
            <CustomButton text="Sign In with Google" onPress={onSigninGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        </>
    );
};

export default SocialSignInButtons;
