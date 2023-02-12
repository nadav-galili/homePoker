import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const NewPasswordScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    const onSubmitPressed = (data) => {
        console.log("🚀 ~ file: NewPasswordScreen.js:17 ~ onSignInPressed ~ data", data);
        navigation.navigate("Home");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}
                <CustomInput
                    placeholder="Code"
                    name="code"
                    control={control}
                    rules={{ required: "Code is required" }}
                />
                <CustomInput
                    placeholder="Enter your new password"
                    name="password"
                    control={control}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    }}
                    secureTextEntry
                />
                <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
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

export default NewPasswordScreen;
