import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/newIcon.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
    const [code, setCode] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const navigation = useNavigation();

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    const onSubmitPressed = () => {
        navigation.navigate("Home");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}
                <CustomInput placeholder="Code" value={code} setValue={setCode} />
                <CustomInput placeholder="Enter your new password" value={newpassword} setValue={setNewPassword} />
                <CustomButton text="Submit" onPress={onSubmitPressed} />
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
