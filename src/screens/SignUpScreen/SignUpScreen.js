import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordrepeat, setPasswordRepeat] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmail");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordrepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />

                <CustomButton text="Register" onPress={onRegisterPressed} />
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
