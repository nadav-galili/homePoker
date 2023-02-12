import { Auth } from "aws-amplify";
import { View, Alert, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const SignInScreen = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    const onSigninPressed = async (data) => {
        console.log("🚀 ~ file: SignInScreen.js:20 ~ onSigninPressed ~ data", data);
        console.log("ee", errors);
        try {
            //ADD the data to to the sign in
            const response = await Auth.signIn(username, password);
            // navigation.navigate("Home");
        } catch (e) {
            Alert.alert("Oops..", e.message);
        }
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

                <TextInput placeholder={"password"} />
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
                <CustomButton text="Sign In" onPress={handleSubmit(onSigninPressed)} />
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
