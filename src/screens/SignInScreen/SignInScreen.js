import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSigninPressed = () => {
        navigation.navigate("Home");
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
                <CustomInput placeholder="username" value={username} setValue={setUsername} />
                <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Sign In" onPress={onSigninPressed} />
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
