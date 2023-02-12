import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const ConfirmEmailScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    const onConfirmPressed = (data) => {
        console.log("🚀 ~ file: ConfirmEmailScreen.js:18 ~ onConfirmPressed ~ data", data);
        navigation.navigate("Home");
    };

    const onResendPressed = () => {};

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}
                <CustomInput
                    placeholder="Enter your confirmation code"
                    name="code"
                    control={control}
                    rules={{
                        required: "Confirmation code is required",
                    }}
                />

                <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
                <CustomButton text="Resend code" onPress={onResendPressed} type="SECONDARY" />
                <CustomButton text="Back to sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: "70%",
        maxWidth: 300,
        height: 100,
        maxHeight: 200,
    },
    root: {
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        color: "#051C60",
    },
    text: {
        color: "black",
        marginVertical: 10,
    },
});

export default ConfirmEmailScreen;
