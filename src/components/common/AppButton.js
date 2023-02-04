import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Button = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: props.color,
                        width: props.width,
                        height: props.height,
                    },
                ]}
                onPress={props.onPress}
            >
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
});

export default Button;
