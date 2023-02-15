import { Auth } from "aws-amplify";
import { View, Alert, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    const onSigninPressed = async (data) => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await Auth.signIn(data.username, data.password);
            // navigation.navigate("Home");
        } catch (e) {
            Alert.alert("Oops..", e.message);
        }
        setLoading(false);
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    const onSignUpPressed = () => {
        navigation.navigate("SignUp");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

                <CustomInput
                    placeholder="username"
                    name="username"
                    control={control}
                    rules={{ required: "Username is required" }}
                />
                <CustomInput
                    placeholder="password"
                    name="password"
                    control={control}
                    secureTextEntry={true}
                    rules={{
                        required: "password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                    }}
                />
                <CustomButton text={loading ? "Loading..." : "Sign In"} onPress={handleSubmit(onSigninPressed)} />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
                <SocialSignInButtons />
                <CustomButton text="Dont have an account? create one" onPress={onSignUpPressed} type="TERTIARY" />
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
});

export default SignInScreen;
