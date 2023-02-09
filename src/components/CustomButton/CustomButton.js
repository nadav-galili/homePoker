import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles[`container_${type}`], bgColor ? { backgroundColor: bgColor } : {}]}
        >
            <Text style={[styles.text, styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "purple",
        width: "100%",
        padding: 10,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: "blue",
    },
    container_SECONDARY: {
        backgroundColor: "white",
        borderWidth: 2,
    },
    container_TERTIARY: {
        // backgroundColor: "lime",
    },
    text: {
        fontWeight: "bold",
        color: "white",
    },
    text_TERTIARY: {
        color: "black",
    },
    text_SECONDARY: {
        color: "black",
    },
});

export default CustomButton;
