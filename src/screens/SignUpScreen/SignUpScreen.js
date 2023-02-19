import { Alert, View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Auth } from "aws-amplify";

import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch("password");
    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    const onRegisterPressed = async (data) => {
        const { name, email, password, username } = data;
        try {
            await Auth.signUp({
                username,
                password,
                attributes: { email, name },
            });
            navigation.navigate("ConfirmEmail", { username });
        } catch (e) {
            Alert.alert("Oops..", e.message);
        }
    };

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}
                <CustomInput
                    name="name"
                    control={control}
                    placeholder="name"
                    rules={{
                        required: "name is required",
                        minLength: {
                            value: 3,
                            message: "name must be at least 3 characters",
                        },
                        maxLength: {
                            value: 24,
                            message: "name must be at most 24 characters",
                        },
                    }}
                />
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters",
                        },
                        maxLength: {
                            value: 24,
                            message: "Username must be at most 24 characters",
                        },
                    }}
                />
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{ pattern: { value: EMAIL_REGEX, message: "Email is invalid" } }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    }}
                    secureTextEntry={true}
                />
                <CustomInput
                    name="password-repeat"
                    control={control}
                    placeholder="Repeat Password"
                    secureTextEntry={true}
                    rules={{
                        validate: (value) => value === pwd || "Passwords do not match",
                    }}
                />

                <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
                <Text style={styles.text}>by registering.....</Text>
                <SocialSignInButtons />
                <CustomButton text="Have an account? sign in" onPress={onSignInPressed} type="TERTIARY" />
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

export default SignUpScreen;
